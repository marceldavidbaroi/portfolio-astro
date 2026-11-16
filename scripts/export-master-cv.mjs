#!/usr/bin/env node
/**
 * Generates public/master-cv.txt from:
 *   - scripts/cv-profile.json
 *   - src/content/experience/*.md
 *   - src/content/projects/<slug>/project.json
 *   - src/content/education/*.json
 *   - src/content/research/*.json
 *   - src/content/philosophy/*.json
 *
 * Run via: pnpm export:cv
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const PROFILE_PATH = path.join(ROOT, 'scripts', 'cv-profile.json');
const OUT_PATH = path.join(ROOT, 'public', 'master-cv.txt');

const SEP = '='.repeat(76);
const SUB_SEP = '-'.repeat(76);

/**
 * Strip quotes from a YAML scalar string.
 */
function unquote(val) {
  const s = val.trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
  }
  if (s === 'true') return true;
  if (s === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  return s;
}

/**
 * Minimal, zero-dependency YAML frontmatter parser covering the shapes
 * used in src/content/experience/*.md (scalars, arrays, object arrays, nested maps).
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const yamlText = match[1];
  const body = match[2].trim();
  const lines = yamlText.split(/\r?\n/);

  const root = {};
  // Stack tracks indentation levels: { indent, container, currentKey }
  const stack = [{ indent: -1, container: root }];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const indent = line.search(/\S/);
    const trimmed = line.trim();

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    const top = stack[stack.length - 1];

    if (trimmed.startsWith('- ')) {
      const itemText = trimmed.slice(2).trim();
      const targetArray = top.lastArray;
      if (!Array.isArray(targetArray)) continue;

      const kvMatch = itemText.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (kvMatch) {
        const obj = {};
        obj[kvMatch[1]] = kvMatch[2] ? unquote(kvMatch[2]) : '';
        targetArray.push(obj);
        stack.push({ indent: indent + 1, container: obj });
      } else {
        targetArray.push(unquote(itemText));
      }
      continue;
    }

    const kvMatch = trimmed.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kvMatch) continue;

    const key = kvMatch[1];
    const rest = kvMatch[2].trim();

    if (rest === '') {
      // Look ahead to see if next non-empty line is a list item or nested map
      let nextLine = '';
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim() && !lines[j].trim().startsWith('#')) {
          nextLine = lines[j];
          break;
        }
      }
      const nextTrimmed = nextLine.trim();
      if (nextTrimmed.startsWith('- ')) {
        const arr = [];
        top.container[key] = arr;
        top.lastArray = arr;
        stack.push({ indent, container: top.container, lastArray: arr });
      } else {
        const child = {};
        top.container[key] = child;
        stack.push({ indent, container: child });
      }
    } else {
      top.container[key] = unquote(rest);
    }
  }

  return { data: root, body };
}

/**
 * Clean markdown formatting for plain-text output.
 */
function cleanMarkdown(text) {
  if (!text) return '';
  return String(text)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1 ($2)')
    .replace(/\[([^\]]+)\]\(\/[^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim();
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function listFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(ext))
    .sort()
    .map((f) => path.join(dir, f));
}

function sectionHeader(title) {
  return `\n${SEP}\n${title}\n${SEP}\n`;
}

function formatProfile(profile) {
  const lines = [];
  lines.push(profile.name.toUpperCase());
  lines.push(profile.headline);
  lines.push(`${profile.location} · ${profile.availability}`);
  lines.push(
    [
      profile.phone,
      profile.email,
      profile.website,
      `LinkedIn: ${profile.linkedin}`,
      `GitHub: ${profile.github}`,
    ]
      .filter(Boolean)
      .join(' · ')
  );
  lines.push('');
  lines.push(
    `Note: Master context document auto-generated from portfolio-astro (src/content/ + scripts/cv-profile.json).`
  );

  lines.push(sectionHeader('SUMMARY'));
  lines.push(profile.summary);

  if (profile.technicalSkills) {
    lines.push(sectionHeader('TECHNICAL SKILLS'));
    for (const [category, items] of Object.entries(profile.technicalSkills)) {
      lines.push(`- ${category}: ${items.join(', ')}`);
    }
  }

  return lines.join('\n');
}

function formatExperience() {
  const files = listFiles(path.join(CONTENT_DIR, 'experience'), '.md');
  const entries = files
    .map((f) => parseFrontmatter(fs.readFileSync(f, 'utf8')))
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));

  const lines = [sectionHeader('EXPERIENCE (FULL DETAIL)')];

  for (const { data, body } of entries) {
    lines.push(
      `${data.role || 'Role'} · ${data.company || 'Company'} (${data.period || ''})`
    );
    const meta = [data.location, data.employmentType, data.companyUrl]
      .filter(Boolean)
      .join(' · ');
    if (meta) lines.push(meta);
    lines.push('');

    if (data.summary) {
      lines.push(`Summary: ${cleanMarkdown(data.summary)}`);
    }
    if (data.executiveImpact) {
      lines.push(`Executive Impact: ${cleanMarkdown(data.executiveImpact)}`);
    }
    if (Array.isArray(data.metrics) && data.metrics.length) {
      lines.push(
        `Key Metrics: ${data.metrics
          .map((m) => `${m.label}: ${m.value}`)
          .join(' | ')}`
      );
    }
    if (Array.isArray(data.highlights) && data.highlights.length) {
      lines.push('Highlights:');
      for (const h of data.highlights) {
        lines.push(`  - ${cleanMarkdown(h)}`);
      }
    }
    if (Array.isArray(data.responsibilities) && data.responsibilities.length) {
      lines.push('Responsibilities:');
      for (const r of data.responsibilities) {
        lines.push(`  - ${cleanMarkdown(r)}`);
      }
    }
    if (Array.isArray(data.stack) && data.stack.length) {
      lines.push(`Stack: ${data.stack.join(', ')}`);
    }
    if (data.skillsByCategory && typeof data.skillsByCategory === 'object') {
      const cats = Object.entries(data.skillsByCategory)
        .filter(([, v]) => Array.isArray(v) && v.length)
        .map(([k, v]) => `${k}: ${v.join(', ')}`);
      if (cats.length) {
        lines.push(`Skills Used: ${cats.join(' | ')}`);
      }
    }
    if (body) {
      lines.push('Narrative:');
      lines.push(cleanMarkdown(body));
    }
    lines.push('');
    lines.push(SUB_SEP);
    lines.push('');
  }

  return lines.join('\n');
}

function formatProjects() {
  const projectsDir = path.join(CONTENT_DIR, 'projects');
  if (!fs.existsSync(projectsDir)) return '';

  const dirs = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({
      slug: d.name,
      jsonPath: path.join(projectsDir, d.name, 'project.json'),
    }))
    .filter((p) => fs.existsSync(p.jsonPath));

  const projects = dirs
    .map((p) => ({ slug: p.slug, ...readJson(p.jsonPath) }))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const lines = [sectionHeader(`PROJECTS & CASE STUDIES (${projects.length} TOTAL)`)];

  for (const p of projects) {
    const headerParts = [
      `[${p.id ?? p.slug}] ${p.title}`,
      p.chip,
      p.timeline,
      p.status,
    ].filter(Boolean);
    lines.push(headerParts.join(' · '));

    if (p.role) lines.push(`Role: ${p.role}`);
    if (p.subtitle) lines.push(`Subtitle: ${cleanMarkdown(p.subtitle)}`);
    if (p.description) lines.push(`Overview: ${cleanMarkdown(p.description)}`);

    if (p.contribution) {
      const c = p.contribution;
      const contribLine = [c.label, c.mode, c.startedFrom, c.myShare]
        .filter(Boolean)
        .join(' | ');
      if (contribLine) lines.push(`Contribution: ${contribLine}`);
      if (c.headline) lines.push(`  ${cleanMarkdown(c.headline)}`);
      if (Array.isArray(c.scope) && c.scope.length) {
        for (const s of c.scope) lines.push(`  - Scope: ${cleanMarkdown(s)}`);
      }
    }

    if (p.problem?.statement) {
      lines.push(`Problem: ${cleanMarkdown(p.problem.statement)}`);
    }

    if (Array.isArray(p.benefitMatrix) && p.benefitMatrix.length) {
      lines.push('Key Outcomes / Benefit Matrix:');
      for (const b of p.benefitMatrix) {
        const measure = b.measure
          ? ` [${b.measure.metric}: ${b.measure.from} -> ${b.measure.to}${b.measure.proof ? ` (${b.measure.proof})` : ''}]`
          : '';
        lines.push(
          `  - ${b.persona} — ${b.pain}: ${cleanMarkdown(b.after)}${measure}`
        );
      }
    }

    if (Array.isArray(p.improvements) && p.improvements.length) {
      lines.push('Engineering Improvements:');
      for (const imp of p.improvements) {
        const m = imp.measure
          ? ` (${imp.measure.metric}: ${imp.measure.from} -> ${imp.measure.to})`
          : '';
        lines.push(
          `  - ${imp.area}: ${cleanMarkdown(imp.after)}${m}`
        );
      }
    }

    if (Array.isArray(p.myImpact) && p.myImpact.length) {
      lines.push('Impact:');
      for (const item of p.myImpact) {
        if (typeof item === 'string') {
          lines.push(`  - ${cleanMarkdown(item)}`);
        } else if (item && typeof item === 'object') {
          const head = [item.label, item.value].filter(Boolean).join(': ');
          const tail = item.detail ? ` — ${cleanMarkdown(item.detail)}` : '';
          lines.push(`  - ${head}${tail}`);
        }
      }
    }

    if (p.architectureSummary) {
      lines.push(`Architecture: ${cleanMarkdown(p.architectureSummary)}`);
    }

    if (Array.isArray(p.keyDecisions) && p.keyDecisions.length) {
      lines.push('Key Technical Decisions:');
      for (const kd of p.keyDecisions) {
        if (typeof kd === 'string') {
          lines.push(`  - ${cleanMarkdown(kd)}`);
        } else if (kd.decision || kd.title) {
          const title = kd.decision || kd.title;
          const rationale = cleanMarkdown(kd.rationale || kd.reason || kd.description || '');
          lines.push(rationale ? `  - ${title}: ${rationale}` : `  - ${title}`);
        }
      }
    }

    const stackList = Array.isArray(p.stack) && p.stack.length
      ? p.stack
      : Array.isArray(p.techStack)
        ? p.techStack
        : [];
    if (stackList.length) {
      lines.push(`Tech Stack: ${stackList.join(', ')}`);
    }

    if (p.links && typeof p.links === 'object') {
      const linkParts = Object.entries(p.links)
        .filter(([, v]) => typeof v === 'string' && v.trim())
        .map(([k, v]) => `${k}: ${v}`);
      if (linkParts.length) {
        lines.push(`Links: ${linkParts.join(' · ')}`);
      }
    }

    lines.push('');
    lines.push(SUB_SEP);
    lines.push('');
  }

  return lines.join('\n');
}

function formatEducation() {
  const files = listFiles(path.join(CONTENT_DIR, 'education'), '.json');
  if (!files.length) return '';

  const lines = [sectionHeader('EDUCATION')];

  for (const f of files) {
    const ed = readJson(f);
    lines.push(`${ed.degree} · ${ed.institution} (${ed.period || ''})`);
    const score =
      ed.cgpa !== undefined
        ? `CGPA: ${ed.cgpa} / ${ed.maxGpa ?? 4}`
        : ed.gpa !== undefined
          ? `GPA: ${ed.gpa} / ${ed.maxGpa ?? 5}`
          : '';
    const meta = [ed.location, ed.status, score, ed.totalCredits ? `${ed.totalCredits} credits` : '']
      .filter(Boolean)
      .join(' · ');
    if (meta) lines.push(meta);
    if (ed.summary) lines.push(`Summary: ${cleanMarkdown(ed.summary)}`);
    if (Array.isArray(ed.keyFocusAreas) && ed.keyFocusAreas.length) {
      lines.push(`Key Focus Areas: ${ed.keyFocusAreas.join(', ')}`);
    }
    if (Array.isArray(ed.keyCourses) && ed.keyCourses.length) {
      lines.push(`Key Courses: ${ed.keyCourses.join(', ')}`);
    }
    if (Array.isArray(ed.coCurricular) && ed.coCurricular.length) {
      lines.push(`Co-Curricular: ${ed.coCurricular.join(', ')}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function formatResearch() {
  const files = listFiles(path.join(CONTENT_DIR, 'research'), '.json');
  if (!files.length) return '';

  const lines = [sectionHeader('RESEARCH & PUBLICATIONS')];

  for (const f of files) {
    const r = readJson(f);
    lines.push(`${r.title} (${r.period || r.completionDate || ''})`);
    const meta = [r.type, r.degree, r.department, r.institution, r.authorRole]
      .filter(Boolean)
      .join(' · ');
    if (meta) lines.push(meta);
    if (r.subtitle) lines.push(`Subtitle: ${cleanMarkdown(r.subtitle)}`);
    if (r.abstract) lines.push(`Abstract: ${cleanMarkdown(r.abstract)}`);
    if (r.datasetName) {
      lines.push(
        `Dataset: ${r.datasetName} (${r.totalImages ?? ''} images, ${r.totalClasses ?? ''} classes)`
      );
    }
    if (Array.isArray(r.keyMetrics) && r.keyMetrics.length) {
      lines.push(
        `Key Metrics: ${r.keyMetrics
          .map((m) => `${m.label}: ${m.value}`)
          .join(' | ')}`
      );
    }
    if (Array.isArray(r.keyTakeaways) && r.keyTakeaways.length) {
      lines.push('Key Takeaways:');
      for (const t of r.keyTakeaways) {
        lines.push(`  - ${cleanMarkdown(t)}`);
      }
    }
    if (Array.isArray(r.tags) && r.tags.length) {
      lines.push(`Tags: ${r.tags.join(', ')}`);
    }
    if (r.officialRepositoryUrl) {
      lines.push(`Repository: ${r.officialRepositoryUrl}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function formatPhilosophy() {
  const files = listFiles(path.join(CONTENT_DIR, 'philosophy'), '.json');
  if (!files.length) return '';

  const items = files
    .map((f) => readJson(f))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const lines = [sectionHeader('ENGINEERING PHILOSOPHY')];
  for (const item of items) {
    lines.push(`- ${item.title}: ${cleanMarkdown(item.desc || item.subtitle || '')}`);
  }
  lines.push('');
  return lines.join('\n');
}

function main() {
  const profile = readJson(PROFILE_PATH);

  const output = [
    formatProfile(profile),
    formatExperience(),
    formatProjects(),
    formatEducation(),
    formatResearch(),
    formatPhilosophy(),
  ]
    .filter(Boolean)
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';

  fs.writeFileSync(OUT_PATH, output, 'utf8');
  const kb = (Buffer.byteLength(output, 'utf8') / 1024).toFixed(1);
  console.log(`Exported ${path.relative(ROOT, OUT_PATH)} (${kb} KB)`);
}

main();
