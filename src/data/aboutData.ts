export interface MetricItem {
	value: string;
	label: string;
	sub: string;
}

export interface PrincipleItem {
	num: string;
	tag: string;
	title: string;
	iconType: 'layers' | 'shield' | 'package' | 'trending';
	desc: string;
}

export interface SkillCategoryGroup {
	category: string;
	tag: string;
	iconType: 'zap' | 'database' | 'layout' | 'shield';
	items: string[];
}

export interface CompactCertItem {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	iconType: 'bot' | 'sparkles' | 'terminal' | 'code' | 'globe' | 'award';
	url: string;
}

export interface CompactPursuitItem {
	title: string;
	iconType: 'music' | 'pen' | 'theater' | 'film';
	tag: string;
	desc: string;
	url?: string;
}

export const metrics: MetricItem[] = [
	{ value: '3.91', label: 'B.Sc. in CSE CGPA', sub: 'Daffodil Int. University (Batch 55)' },
	{ value: '+60%', label: 'Code Reusability', sub: 'Via Private Package Architectures' },
	{ value: '100%', label: 'RLS Data Isolation', sub: 'Multi-Tenant SaaS Security' },
	{ value: '10+', label: 'Platforms Shipped', sub: 'Enterprise, SaaS & Mobile' }
];

export const principles: PrincipleItem[] = [
	{
		num: '01',
		tag: 'SPECIFICATION & MODELING',
		title: 'Architecture-First AI Synthesis',
		iconType: 'layers',
		desc: 'I do not use AI tools to blindly guess implementation code. Instead, I design relational data schemas, map dependency graphs, and define strict API contracts beforehand. AI serves as a high-speed synthesizer executing a pre-architected blueprint, eliminating hallucinated abstractions and architectural debt.'
	},
	{
		num: '02',
		tag: 'DEFENSIVE DATA LAYERS',
		title: 'Zero-Trust Relational Data',
		iconType: 'shield',
		desc: 'Data corruption is catastrophic. I enforce data integrity at the database engine level using PostgreSQL row-level security (RLS), foreign key cascades, strict triggers, and automated schema migrations, ensuring security rules cannot be bypassed at the application layer.'
	},
	{
		num: '03',
		tag: 'MODULAR COMPONENT SYSTEMS',
		title: 'Atomic Enterprise Reusability',
		iconType: 'package',
		desc: 'Code that isn’t reusable becomes technical debt. I construct internal package architectures, shared design systems, and headless core libraries published via private npm registries, enabling multi-app synchronization and reducing redundant codebases by over 60%.'
	},
	{
		num: '04',
		tag: 'SCALABLE RESILIENCE',
		title: 'Measurable Velocity & Longevity',
		iconType: 'trending',
		desc: 'Software must outlive team rotations and scale spikes. I write predictable TypeScript contracts, keep state management centralized, and structure clean repository hierarchies that new engineers can comprehend on day one.'
	}
];

export const skillCategories: SkillCategoryGroup[] = [
	{
		category: 'Architecture, Synthesis & AI Workflows',
		tag: 'CORE ENGINE',
		iconType: 'zap',
		items: [
			'Autonomous Agent Architecture & Synthesis Workflows',
			'Enterprise System Architecture & Microservices',
			'Relational Data Modeling & Multi-Tenant Database Design',
			'State Management & Event-Driven Reactive Flows',
			'High-Fidelity UI/UX & Responsive Spatial Systems'
		]
	},
	{
		category: 'Backend & Cloud Services',
		tag: 'DATA & APIS',
		iconType: 'database',
		items: [
			'PHP (Core & MVC Architecture)',
			'PostgreSQL & Complex Query Optimization',
			'Supabase (Row-Level Security & Realtime)',
			'NestJS & Node.js Microservices',
			'Express & RESTful API Gateways',
			'TypeORM, Prisma & Relational Migrations',
			'MongoDB Document Stores'
		]
	},
	{
		category: 'Frontend & Mobile Ecosystem',
		tag: 'USER INTERFACES',
		iconType: 'layout',
		items: [
			'Vue.js (v2 / v3 Composition API)',
			'Quasar Framework (SPA / PWA Suites)',
			'TypeScript & Strict Compile-Time Contracts',
			'React & Next.js (App Router & SSR)',
			'React Native Cross-Platform Mobile',
			'Pinia & Vuex Centralized Reactive Stores'
		]
	},
	{
		category: 'Architecture, Versioning & DevOps',
		tag: 'INFRASTRUCTURE',
		iconType: 'shield',
		items: [
			'Multi-Tenant SaaS Data Segregation (RLS)',
			'Private Git Registries & Semantic Versioning (SemVer)',
			'Git Submodules & Multi-Repo Orchestration',
			'Tailwind CSS & Modern Utility UI Primitives',
			'Figma-to-Code Accessible Component Translation',
			'Docker Containerization & Dev Environments'
		]
	}
];

export const compactCerts: CompactCertItem[] = [
	{
		title: 'Responsible AI: Applying AI Principles with Google Cloud',
		issuer: 'Google Cloud',
		date: 'Aug 2025',
		id: '17581956',
		iconType: 'bot',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17581956?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
	},
	{
		title: 'Prompt Design in Vertex AI',
		issuer: 'Google Cloud',
		date: 'Aug 2025',
		id: '17581523',
		iconType: 'sparkles',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17581523?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
	},
	{
		title: 'Python Essentials 2',
		issuer: 'Cisco Networking Academy',
		date: 'May 2025',
		iconType: 'terminal',
		url: 'https://www.credly.com/badges/4523a28b-20c5-4c97-99b8-df6187b7171f/linked_in_profile'
	},
	{
		title: 'JavaScript Essentials 2',
		issuer: 'Cisco Networking Academy',
		date: 'Oct 2024',
		iconType: 'code',
		url: 'https://www.credly.com/badges/61d5e8b3-adc0-4980-9c39-660f137d9173/linked_in_profile'
	},
	{
		title: 'Responsive Web Design',
		issuer: 'freeCodeCamp',
		date: 'Mar 2025',
		id: 'marceldavid-rwd',
		iconType: 'globe',
		url: 'https://freecodecamp.org/certification/marceldavid/responsive-web-design'
	},
	{
		title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
		issuer: 'Microsoft & LinkedIn',
		date: 'Mar 2024',
		iconType: 'award',
		url: 'https://www.linkedin.com/learning/certificates/5b375a66aa4203fa0bcfa8cb5761d62f1053cf9fdd182f663b6be8b228f6406f'
	}
];

export const compactPursuits: CompactPursuitItem[] = [
	{
		title: 'Classical Percussion (Tabla)',
		iconType: 'music',
		tag: '2015 — 2017 • 3 YRS TRAINING',
		desc: '3 years of classical Tabla training (2015–2017). Practicing classical Indian rhythm cycles (Taal), mathematical subdivisions, and tempo cadence cultivated deep focus and systematic discipline.'
	},
	{
		title: 'Drawing & Fine Arts (Competition Winner)',
		iconType: 'pen',
		tag: '2014 — 2015 • MULTI-AWARD WINNER',
		desc: 'Formal fine arts training (2014–2015) with multiple drawing competition awards. Freehand illustration and spatial proportion geometry directly inform frontend component hierarchy.'
	},
	{
		title: 'Role-Play Acting & Community Theatre',
		iconType: 'theater',
		tag: 'COMMUNITY & CHURCH DRAMA',
		desc: 'Active actor in numerous role-play acting performances and church drama programs, developing empathetic perspective-taking, vocal presence, and collaborative stage confidence.'
	},
	{
		title: 'Cinema & Screenplay Architecture',
		iconType: 'film',
		tag: 'CINEPHILE & NARRATIVE DESIGN',
		desc: 'Avid cinephile analyzing world cinema, cinematography, and narrative pacing—drawing parallels between screenwriting structural coherence and enterprise domain invariant stability.',
		url: 'https://www.imdb.com/user/p.bk6ud655mqlvdqktibh2swwdzm?ref_=ext_shr_lnk'
	}
];
