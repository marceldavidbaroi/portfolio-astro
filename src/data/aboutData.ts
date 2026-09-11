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
	proofHref?: string;
	proofLabel?: string;
}

export interface SkillItem {
	name: string;
	desc: string;
	tier: 'primary' | 'secondary'; // 'primary' = Primary Production Stack ("Hire me for this today"), 'secondary' = Secondary Exposure ("Prior tools & migration")
	badge?: string;
}

export interface SkillCategoryGroup {
	id: string;
	category: string;
	tag: string;
	iconType: 'zap' | 'database' | 'layout' | 'shield';
	icon?: string;
	description: string;
	items: SkillItem[];
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

export interface CareerHighlightItem {
	tag: string;
	title: string;
	description: string;
	metrics: string[];
	caseStudyHref?: string;
	caseStudyLabel?: string;
}

export const metrics: MetricItem[] = [
	{ value: '3.91', label: 'B.Sc. in CSE CGPA', sub: 'Daffodil Int. University (Batch 55)' },
	{ value: '+60%', label: 'Code Reusability', sub: 'Via Private Package Architectures' },
	{ value: '100%', label: 'RLS Data Isolation', sub: 'Multi-Tenant SaaS Security' },
	{ value: '10+', label: 'Platforms Shipped', sub: 'Enterprise, SaaS & Mobile' }
];

export const careerHighlights: CareerHighlightItem[] = [
	{
		tag: 'ENTERPRISE SaaS & ERP',
		title: 'Multi-Tenant Wholesale ERP Systems',
		description:
			'Architected parent-pooled stock allocation and landed cost engines with 100% RLS tenant isolation across 17+ domain modules and atomic PostgreSQL RPC transactions.',
		metrics: ['100% RLS Isolation', '17+ Domain Modules', '980+ Migrations'],
		caseStudyHref: '/work/01-tradeflowbd',
		caseStudyLabel: 'TradeflowBD ERP Case Study →'
	},
	{
		tag: 'CROSS-PLATFORM MOBILE & WEB',
		title: 'Unified Quasar / Vue 3 Application Suites',
		description:
			'Engineered unified Quasar/Vue 3 applications backed by private SemVer package registries, cutting cross-project code duplication by 60% while accelerating MVP delivery cycles.',
		metrics: ['+60% Reusability', '−50% MVP Turnaround', 'Private npm Registries'],
		caseStudyHref: '/work/05-modular-packaging',
		caseStudyLabel: 'Modular Packaging Case Study →'
	}
];

export const principles: PrincipleItem[] = [
	{
		num: '01',
		tag: 'SPECIFICATION & MODELING',
		title: 'Architecture-First AI Synthesis',
		iconType: 'layers',
		desc: 'I do not use AI tools to blindly guess implementation code. Instead, I design relational data schemas, map dependency graphs, and define strict API contracts beforehand. AI serves as a high-speed synthesizer executing a pre-architected blueprint, eliminating hallucinated abstractions and architectural debt.',
		proofHref: '/work/01-tradeflowbd',
		proofLabel: 'TradeflowBD ERP →',
	},
	{
		num: '02',
		tag: 'DEFENSIVE DATA LAYERS',
		title: 'Zero-Trust Relational Data',
		iconType: 'shield',
		desc: 'Data corruption is catastrophic. I enforce data integrity at the database engine level using PostgreSQL row-level security (RLS), foreign key cascades, strict triggers, and automated schema migrations, ensuring security rules cannot be bypassed at the application layer.',
		proofHref: '/work/01-tradeflowbd',
		proofLabel: 'RLS case study →',
	},
	{
		num: '03',
		tag: 'MODULAR COMPONENT SYSTEMS',
		title: 'Atomic Enterprise Reusability',
		iconType: 'package',
		desc: 'Code that isn’t reusable becomes technical debt. I construct internal package architectures, shared design systems, and headless core libraries published via private npm registries, enabling multi-app synchronization and reducing redundant codebases by over 60%.',
		proofHref: '/work/05-modular-packaging',
		proofLabel: 'Modular packaging →',
	},
	{
		num: '04',
		tag: 'SCALABLE RESILIENCE',
		title: 'Measurable Velocity & Longevity',
		iconType: 'trending',
		desc: 'Software must outlive team rotations and scale spikes. I write predictable TypeScript contracts, keep state management centralized, and structure clean repository hierarchies that new engineers can comprehend on day one.',
		proofHref: '/work/02-service-desk',
		proofLabel: 'Service desk →',
	}
];

export const skillCategories: SkillCategoryGroup[] = [
	{
		id: 'engineering-workflow',
		category: 'Architecture, Synthesis & AI Workflows',
		tag: 'CORE ENGINE',
		iconType: 'zap',
		icon: '⚡',
		description: 'Core architectural methodologies and engineering processes applied across production ecosystems.',
		items: [
			{
				name: 'Architecture-First AI Synthesis',
				desc: 'Pre-planning schemas, dependency trees, and API contracts before code generation (Cursor Agentic, Copilot Blueprints).',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Relational Data Modeling & 3NF',
				desc: 'Third Normal Form (3NF) relational design, explicit constraints, foreign key cascades, and complex indexing.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Multi-Tenant SaaS Security & RLS',
				desc: 'Strict organizational data segregation, tenant context injection, and role-based access control (RBAC).',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Modular Enterprise Package Architecture',
				desc: 'Extracting reusable enterprise domain logic into versioned private npm packages governed by SemVer.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Systematic Code Validation & Testing',
				desc: 'Rigorous regression testing, compile-time type verification, edge-case validation, and clean code hygiene.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Rapid MVP Scaffolding & Prototyping',
				desc: 'Accelerated delivery of production-ready SaaS foundations and end-to-end interactive prototypes.',
				tier: 'primary',
				badge: 'Core Driver'
			}
		]
	},
	{
		id: 'backend-cloud',
		category: 'Backend, Database & Cloud Services',
		tag: 'DATA & APIS',
		iconType: 'database',
		icon: '⚙️',
		description: 'Server architectures, secure data access layers, relational database engines, and cloud persistence.',
		items: [
			{
				name: 'PostgreSQL & Database Optimization',
				desc: 'Relational schema design, complex JOINs, query indexing, execution plans, and composite indexes.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Supabase (Realtime & Row-Level Security)',
				desc: 'Multi-tenant data isolation, strict PostgreSQL RLS policies, Auth workflows, and Realtime event streaming.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'NestJS & Node.js Microservices',
				desc: 'Enterprise modular backend architectures, dependency injection, middleware filters, and REST gateways.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Express & RESTful API Gateways',
				desc: 'Lightweight API endpoints, JWT token authentication, route guard middleware, and CORS governance.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'PHP (Core & MVC Architecture)',
				desc: 'Enterprise business logic, custom MVC engines, ERP costing routines, and legacy codebase migration.',
				tier: 'secondary',
				badge: 'Prior / Migration'
			},
			{
				name: 'TypeORM & Prisma ORM',
				desc: 'Type-safe database migrations, entity relationships, query builders, and database seeding routines.',
				tier: 'secondary',
				badge: 'Prior Tooling'
			},
			{
				name: 'MongoDB Document Stores',
				desc: 'Document data modeling, schema indexing, aggregation pipelines, and flexible JSON datastores.',
				tier: 'secondary',
				badge: 'Prior Tooling'
			}
		]
	},
	{
		id: 'frontend-mobile',
		category: 'Frontend & Mobile Ecosystem',
		tag: 'USER INTERFACES',
		iconType: 'layout',
		icon: '💻',
		description: 'Modern reactive component frameworks, strict type-safe interfaces, state stores, and cross-platform apps.',
		items: [
			{
				name: 'TypeScript & JavaScript (ES6+)',
				desc: 'Strict compile-time type safety, generic interfaces, utility types, and asynchronous concurrency.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Vue 3 (Composition API & Script Setup)',
				desc: 'Reactive component architectures, custom composables, reusable directives, and high-performance render trees.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Quasar Framework (SPA / PWA Suites)',
				desc: 'Enterprise SPA/PWA application suites, table data virtualization, tree shaking, and responsive layouts.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'React & Next.js (App Router & SSR)',
				desc: 'Server-side rendering, React Server Components (RSC), dynamic routing, and performant state orchestration.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Tailwind CSS & Modern Design Systems',
				desc: 'Utility-first modern design systems, accessible UI primitives, design tokens, and glassmorphism styling.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Pinia Reactive State Management',
				desc: 'Centralized reactive store design, persistent state plugins, action dispatchers, and modular state trees.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Vue.js 2 & Vuex (Legacy Maintenance)',
				desc: 'Legacy codebase maintenance, legacy ERP UI support, and modernization paths to Vue 3 Composition API.',
				tier: 'secondary',
				badge: 'Prior / Migration'
			},
			{
				name: 'React Native & Mobile Development',
				desc: 'Cross-platform mobile applications, native bridges, offline persistence, and touch ergonomics.',
				tier: 'secondary',
				badge: 'Secondary Exposure'
			}
		]
	},
	{
		id: 'devops-infra',
		category: 'Architecture, Versioning & DevOps',
		tag: 'INFRASTRUCTURE',
		iconType: 'shield',
		icon: '🛡️',
		description: 'Enterprise repository governance, versioned packaging, containerization, and multi-tenant security.',
		items: [
			{
				name: 'Private Git Registries & SemVer Governance',
				desc: 'Deploying versioned enterprise packages across private GitLab/GitHub registries with strict SemVer.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Docker & Containerization',
				desc: 'Consistent local development environments, containerized multi-tier services, and CI/CD pipelines.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Git Submodules & Multi-Repo Orchestration',
				desc: 'Coordinated multi-repository synchronization, mono-repo architectures, and shared core library infrastructure.',
				tier: 'primary',
				badge: 'Core Driver'
			},
			{
				name: 'Figma-to-Code Accessible Translation',
				desc: 'Translating high-fidelity Figma visual designs into pixel-perfect, accessible HTML/CSS components.',
				tier: 'primary',
				badge: 'Core Driver'
			}
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
