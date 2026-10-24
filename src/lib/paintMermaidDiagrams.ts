type MermaidApi = {
	initialize: (config: Record<string, unknown>) => void;
	render: (id: string, code: string) => Promise<{ svg: string }>;
};

let mermaidBoot: Promise<MermaidApi> | null = null;
let idCounter = 0;

function isDarkTheme() {
	return document.documentElement.dataset.theme !== 'light';
}

async function getMermaid(): Promise<MermaidApi> {
	if (!mermaidBoot) {
		mermaidBoot = import(
			/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'
		).then((mod) => {
			const mermaid = mod.default as MermaidApi;
			const dark = isDarkTheme();
			mermaid.initialize({
				startOnLoad: false,
				theme: 'base',
				themeVariables: {
					darkMode: dark,
					background: 'transparent',
					primaryColor: dark ? '#1e1c19' : '#f5f2eb',
					primaryTextColor: dark ? '#f4f1ea' : '#1a1816',
					primaryBorderColor: dark ? '#4a4740' : '#c9c2b8',
					lineColor: dark ? '#a8a29a' : '#5c564e',
					fontFamily: 'Inter, system-ui, sans-serif',
					fontSize: '13px',
				},
				flowchart: {
					htmlLabels: true,
					curve: 'basis',
					padding: 12,
					nodeSpacing: 40,
					rankSpacing: 44,
				},
				sequence: {
					actorMargin: 40,
					messageMargin: 28,
				},
				securityLevel: 'loose',
			});
			return mermaid;
		});
	}
	return mermaidBoot;
}

/** Build the same DOM shape as MermaidDiagram.astro for markdown upgrades. */
export function createMermaidFigure(code: string, caption?: string): HTMLElement {
	const figure = document.createElement('figure');
	figure.className = 'mermaid-diagram';

	if (caption) {
		const cap = document.createElement('figcaption');
		cap.className = 'mermaid-diagram__caption';
		cap.textContent = caption;
		figure.appendChild(cap);
	}

	const viewport = document.createElement('div');
	viewport.className = 'mermaid-diagram__viewport';

	const canvas = document.createElement('div');
	canvas.className = 'mermaid-diagram__canvas';
	canvas.dataset.mermaid = 'pending';
	canvas.textContent = code;

	viewport.appendChild(canvas);
	figure.appendChild(viewport);
	return figure;
}

export async function paintMermaidDiagrams(root: ParentNode = document): Promise<void> {
	const canvases = Array.from(
		root.querySelectorAll<HTMLElement>('.mermaid-diagram__canvas[data-mermaid]:not([data-mermaid-rendered])')
	);
	if (canvases.length === 0) return;

	const mermaid = await getMermaid();

	for (const canvas of canvases) {
		const code = canvas.textContent?.trim() || '';
		if (!code) continue;

		canvas.dataset.mermaidRendered = 'true';
		const uniqueId = `mmd-${Date.now()}-${++idCounter}`;

		try {
			const { svg } = await mermaid.render(uniqueId, code);
			canvas.innerHTML = svg;
			canvas.removeAttribute('data-mermaid');
		} catch (err) {
			console.warn('Mermaid render failed:', err);
			canvas.innerHTML = `<p class="mermaid-diagram__error">Could not render diagram.</p>`;
		}
	}
}
