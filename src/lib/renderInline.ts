import GithubSlugger from 'github-slugger';

const escapeHtml = (s: string): string =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Typographic quotes, matching the markdown pipeline's smart punctuation. Operates on escaped text only. */
function smartQuotes(text: string): string {
	return text
		.replace(/(^|[\s(\[{\u0001])&quot;/g, '$1\u201C')
		.replace(/&quot;/g, '\u201D')
		.replace(/(^|[\s(\[{\u0001*])'/g, '$1\u2018')
		.replace(/'/g, '\u2019');
}

/** Minimal inline-markdown renderer for body.json text fields. */
export function renderInline(text: string): string {
	const codes: string[] = [];
	let out = text.replace(/`([^`]+)`/g, (_m, c: string) => {
		codes.push(`<code>${escapeHtml(c).replace(/&quot;/g, '"')}</code>`);
		return `\u0000${codes.length - 1}\u0000`;
	});
	out = out.replace(/<br\s*\/?>/gi, '\u0001');
	out = smartQuotes(escapeHtml(out));
	out = out.replace(/!\[((?:[^[\]]|\[[^\]]*\])*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1">');
	out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
	out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	out = out.replace(/(^|[^*\w])\*([^*\s][^*]*)\*(?!\*)/g, '$1<em>$2</em>');
	out = out.replace(/\u0001/g, '<br>');
	return out.replace(/\u0000(\d+)\u0000/g, (_m, i: string) => codes[Number(i)] ?? '');
}

/** Plain text of an inline string (for ids and word counts). */
export function plainInline(text: string): string {
	return text
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/[*`]/g, '');
}

export function createHeadingSlugger(): (text: string) => string {
	const slugger = new GithubSlugger();
	return (text) => slugger.slug(plainInline(text));
}
