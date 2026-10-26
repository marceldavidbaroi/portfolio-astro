import type { BodyBlock, ListItem } from './projectSchema';

const listLines = (items: ListItem[], ordered: boolean, depth = 0): string[] =>
	items.flatMap((it, i) => [
		`${'  '.repeat(depth)}${ordered ? `${i + 1}.` : '-'} ${it.text}`,
		...(it.children ? listLines(it.children, false, depth + 1) : []),
	]);

/** Flatten body blocks to markdown-like text (used for reading-time estimates). */
export function blocksToText(blocks: BodyBlock[]): string {
	return blocks
		.map((b) => {
			switch (b.type) {
				case 'heading':
					return `${'#'.repeat(b.level)} ${b.text}`;
				case 'paragraph':
				case 'quote':
					return b.text;
				case 'list':
					return listLines(b.items, b.ordered).join('\n');
				case 'table':
					return [
						`| ${b.header.join(' | ')} |`,
						`|${b.header.map(() => '---').join('|')}|`,
						...b.rows.map((r) => `| ${r.join(' | ')} |`),
					].join('\n');
				case 'mermaid':
					return '```mermaid\n' + b.code + '\n```';
				case 'code':
					return '```' + b.lang + '\n' + b.code + '\n```';
				case 'divider':
					return '---';
				case 'comment':
					return `<!-- ${b.text} -->`;
			}
		})
		.join('\n\n');
}
