import type { CompactCertItem, CompactPursuitItem } from './aboutData';

/** Layout-only placeholders. Bind `real ?? dummy` in components; replace when real data exists. */

export interface HeroExtras {
	statusLine: string;
	bioLines: string[];
}

export interface PrincipleProofLink {
	principleNum: string;
	href: string;
	label: string;
}

export interface SchoolRowExtra {
	thirdLine: string;
	actionLabel: string;
	actionHref: string;
}

export interface SchoolExtras {
	bsc: SchoolRowExtra;
	thesis: SchoolRowExtra;
	hsc: SchoolRowExtra;
	archiveLine: string;
	archiveHref: string;
}

export interface SkillsTab {
	id: 'all' | 'primary' | 'prior';
	label: string;
	countLabel: string;
}

export interface CredsDummyGroup {
	issuer: string;
	tabId: string;
	rows: Array<{
		title: string;
		date: string;
		href: string;
	}>;
}

export interface PhilosophyBandExtra {
	principleNum: string;
	mermaid: string;
	proofHref: string;
	proofLabel: string;
	subtitle: string;
}

export interface EducationFact {
	label: string;
	value: string;
}

export interface ResearchMetaExtra {
	supervisor: string;
	submissionDate: string;
	accuracy: string;
	actionHref: string;
	actionLabel: string;
}

export interface ArchiveRailExtra {
	date: string;
	tag: string;
	title: string;
	subtitle: string;
	href: string;
}

export const heroExtras: HeroExtras = {
	statusLine: '[draft] AVAILABLE · REMOTE / RELOCATION · DHAKA',
	bioLines: [
		'[draft] Architecture-first full-stack engineer building multi-tenant SaaS on Vue, Quasar, and PostgreSQL.',
		'[draft] Extra bio line reserved for longer About masthead copy.',
	],
};

export const principleProofLinks: PrincipleProofLink[] = [
	{
		principleNum: '01',
		href: '/work/01-tradeflowbd',
		label: '[draft] TradeflowBD ERP →',
	},
	{
		principleNum: '02',
		href: '/work/01-tradeflowbd',
		label: '[draft] RLS case study →',
	},
	{
		principleNum: '03',
		href: '/work/05-modular-packaging',
		label: '[draft] Modular packaging →',
	},
	{
		principleNum: '04',
		href: '/work/02-service-desk',
		label: '[draft] Service desk →',
	},
];

export const stackLegend =
	'[draft] Primary = ink · Prior = muted secondary exposure · Descriptions on /skills';

export const schoolExtras: SchoolExtras = {
	bsc: {
		thirdLine: '[draft] 142 credit hours · Batch 55',
		actionLabel: '[draft] Transcript →',
		actionHref: '/education/bsc-cse',
	},
	thesis: {
		thirdLine: '[draft] DenseNet · 97.93% accuracy',
		actionLabel: '[draft] Paper →',
		actionHref: '/research/01-bangla-hwcr-ekush',
	},
	hsc: {
		thirdLine: '[draft] Science group · Notre Dame College',
		actionLabel: '[draft] Details →',
		actionHref: '/education/hsc-science',
	},
	archiveLine: '[draft] Civic years → Archive',
	archiveHref: '/archive',
};

/** Pad featured cert rows when the About layout needs six and real data is shorter. */
export const certRowPadding: CompactCertItem[] = [
	{
		title: '[draft] Placeholder certification title',
		issuer: '[draft] Issuer',
		date: '[draft] Jan 2026',
		iconType: 'award',
		url: '#',
	},
];

export const beyondExtras: CompactPursuitItem[] = [
	{
		title: '[draft] Extra pursuit slot',
		iconType: 'music',
		tag: '[draft] DATE · TAG',
		desc: '[draft] One-line description for Beyond layout padding.',
	},
];

export const skillsTabs: SkillsTab[] = [
	{ id: 'all', label: 'All', countLabel: '[draft]' },
	{ id: 'primary', label: 'Primary', countLabel: '[draft]' },
	{ id: 'prior', label: 'Prior', countLabel: '[draft]' },
];

export const credsDummyGroups: CredsDummyGroup[] = [
	{
		issuer: '[draft] Placeholder Issuer',
		tabId: 'placeholder',
		rows: [
			{
				title: '[draft] Placeholder credential',
				date: '[draft] 2026',
				href: '#',
			},
		],
	},
];

export const philosophyBandExtras: PhilosophyBandExtra[] = [
	{
		principleNum: '01',
		mermaid: 'flowchart LR\n  A["[draft]"] --> B["[draft]"]',
		proofHref: '/work/01-tradeflowbd',
		proofLabel: '[draft] Case study →',
		subtitle: '[draft] Band subtitle for layout',
	},
	{
		principleNum: '02',
		mermaid: 'flowchart LR\n  C["[draft]"] --> D["[draft]"]',
		proofHref: '#',
		proofLabel: '[draft] Proof link →',
		subtitle: '[draft] Zero-trust data layer context',
	},
	{
		principleNum: '03',
		mermaid: 'flowchart LR\n  E["[draft]"] --> F["[draft]"]',
		proofHref: '/work/05-modular-packaging',
		proofLabel: '[draft] Packaging case →',
		subtitle: '[draft] Reusability band context',
	},
	{
		principleNum: '04',
		mermaid: 'flowchart LR\n  G["[draft]"] --> H["[draft]"]',
		proofHref: '#',
		proofLabel: '[draft] Velocity proof →',
		subtitle: '[draft] Measurable velocity context',
	},
];

export const educationFactsRail: EducationFact[] = [
	{ label: '[draft] Program', value: '[draft] B.Sc. Computer Science & Engineering' },
	{ label: '[draft] Institution', value: '[draft] Daffodil International University' },
	{ label: '[draft] CGPA', value: '[draft] 3.91 / 4.00' },
	{ label: '[draft] Credits', value: '[draft] 142' },
	{ label: '[draft] Batch', value: '[draft] 55' },
];

export const researchMetaExtras: ResearchMetaExtra = {
	supervisor: '[draft] Supervisor name',
	submissionDate: '[draft] May 2024',
	accuracy: '[draft] 97.93%',
	actionHref: '#',
	actionLabel: '[draft] View repository ↗',
};

export const archiveRailExtras: ArchiveRailExtra[] = [
	{
		date: '[draft] 2017',
		tag: '[draft] CIVIC',
		title: '[draft] Placeholder archive entry',
		subtitle: '[draft] One-line civic milestone for rail layout',
		href: '/archive',
	},
];

/** Featured cert count fallback when real import is unavailable in a wrapper. */
export const credsTotalCountLabel = '[draft] 33';

/** Career highlight one-liner when an experience entry lacks highlights. */
export const careerHighlightFallback = '[draft] One-line role highlight for experience rail.';

export interface HscClubRow {
	title: string;
	role: string;
	desc: string;
}

export const hscClubRows: HscClubRow[] = [
	{
		title: '[draft] Club name',
		role: '[draft] Role · tag',
		desc: '[draft] One-line club activity description.',
	},
];

export const galleryCaptionFallback = '[draft] Gallery caption';

export const experienceGalleryKicker = '[draft] Workplace';
