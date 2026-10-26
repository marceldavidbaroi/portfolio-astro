// One-off migration: src/content/projects/*.md  ->  src/content/projects/<slug>/{project,body}.json
// Frontmatter -> project.json (verbatim). Markdown body -> typed blocks in body.json.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(process.cwd() + '/package.json');
const yaml = require('/Users/daviditc/Documents/personal_projects/portfolio-astro/node_modules/.pnpm/yaml@2.9.1/node_modules/yaml');

const dir = 'src/content/projects';
import { execSync } from 'node:child_process';
// Sources are read from git HEAD because the .md files are removed from the working tree after migration.
const files = execSync(`git ls-tree --name-only HEAD ${dir}/`, { encoding: 'utf8' })
	.split('\n')
	.map((f) => path.basename(f))
	.filter((f) => f.endsWith('.md'))
	.sort();

function splitRow(line) {
	let t = line.trim();
	if (t.startsWith('|')) t = t.slice(1);
	if (t.endsWith('|')) t = t.slice(0, -1);
	return t.split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'));
}

const LIST_RE = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;

function parseBody(text) {
	const lines = text.split('\n');
	const blocks = [];
	let i = 0;
	while (i < lines.length) {
		const line = lines[i];
		const t = line.trim();
		if (!t) { i++; continue; }

		const fence = t.match(/^```(\w*)\s*$/);
		if (fence) {
			const code = [];
			i++;
			while (i < lines.length && !lines[i].trim().startsWith('```')) code.push(lines[i++]);
			i++;
			const lang = fence[1];
			blocks.push(lang === 'mermaid' ? { type: 'mermaid', code: code.join('\n') } : { type: 'code', lang: lang || 'text', code: code.join('\n') });
			continue;
		}
		if (t.startsWith('<!--')) {
			let c = t;
			while (!c.includes('-->') && i + 1 < lines.length) c += '\n' + lines[++i].trim();
			blocks.push({ type: 'comment', text: c.replace(/^<!--\s*/, '').replace(/\s*-->$/, '') });
			i++; continue;
		}
		const h = t.match(/^(#{1,6})\s+(.*?)\s*#*$/);
		if (h) { blocks.push({ type: 'heading', level: h[1].length, text: h[2] }); i++; continue; }
		if (/^(-{3,}|\*{3,}|_{3,})$/.test(t)) { blocks.push({ type: 'divider' }); i++; continue; }
		if (t.startsWith('|')) {
			const rows = [];
			while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(lines[i++]);
			const header = splitRow(rows[0]);
			const body = rows.slice(2).map(splitRow);
			blocks.push({ type: 'table', header, rows: body });
			continue;
		}
		if (t.startsWith('>')) {
			const q = [];
			while (i < lines.length && lines[i].trim().startsWith('>')) q.push(lines[i++].trim().replace(/^>\s?/, ''));
			blocks.push({ type: 'quote', text: q.join('\n') });
			continue;
		}
		if (LIST_RE.test(line)) {
			const root = { items: [] };
			const stack = [{ indent: -1, node: root }];
			let ordered = /^\s*\d/.test(line);
			let pendingBlank = false;
			while (i < lines.length) {
				const l = lines[i];
				if (!l.trim()) {
					let k = i;
					while (k < lines.length && !lines[k].trim()) k++;
					if (k < lines.length && (LIST_RE.test(lines[k]) || /^\s{2,}\S/.test(lines[k]))) { pendingBlank = true; i = k; continue; }
					break;
				}
				const m = l.match(LIST_RE);
				if (m) {
					const indent = m[1].replace(/\t/g, '    ').length;
					while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
					const parent = stack[stack.length - 1].node;
					const arr = parent === root ? root.items : (parent.children ??= []);
					if (pendingBlank && arr.length > 0) {
						if (parent === root) root.loose = true; else parent.childrenLoose = true;
					}
					pendingBlank = false;
					const item = { text: m[3] };
					arr.push(item);
					stack.push({ indent, node: item });
					i++;
				} else if (/^\s{2,}\S/.test(l)) {
					const top = stack[stack.length - 1].node;
					top.text += (pendingBlank ? '\n\n' : '\n') + l.trim();
					pendingBlank = false;
					i++;
				} else break;
			}
			const clean = (items) =>
				items.map((it) => {
					const o = { text: it.text };
					if (it.children) { o.children = clean(it.children); if (it.childrenLoose) o.childrenLoose = true; }
					return o;
				});
			const block = { type: 'list', ordered, items: clean(root.items) };
			if (root.loose) block.loose = true;
			blocks.push(block);
			continue;
		}
		const para = [];
		while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|\||>|<!--)/.test(lines[i].trim()) && !LIST_RE.test(lines[i]) && !/^(-{3,}|\*{3,})$/.test(lines[i].trim())) {
			const raw = lines[i++];
			para.push(/( {2,}|\\)$/.test(raw) ? raw.trim().replace(/\\$/, '') + '<br>' : raw.trim());
		}
		if (!para.length) { para.push(lines[i++].trim()); }
		blocks.push({ type: 'paragraph', text: para.join('\n') });
	}
	return blocks;
}

for (const f of files) {
	const slug = f.replace(/\.md$/, '');
	const raw = execSync(`git show HEAD:${dir}/${f}`, { encoding: 'utf8', maxBuffer: 1 << 26 }).replace(/\r\n/g, '\n');
	const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!m) throw new Error('no frontmatter: ' + f);
	const fm = yaml.parse(m[1]);
	fm.id = String(fm.id).padStart(2, '0');
	// The canvas lives in vpc.json (see getProject.ts)
	if (fm.product?.valueProposition) delete fm.product.valueProposition.canvas;
	const outDir = path.join(dir, slug);
	fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(path.join(outDir, 'project.json'), JSON.stringify(fm, null, '\t') + '\n');
	const blocks = parseBody(m[2]);
	fs.writeFileSync(path.join(outDir, 'body.json'), JSON.stringify({ blocks }, null, '\t') + '\n');
	console.log(slug, 'blocks:', blocks.length);
}
