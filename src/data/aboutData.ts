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
	logo?: string; // Image/SVG path in /public or URL if available
	icon?: string; // Fallback icon or glyph/emoji if logo image is not present
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

export interface OnlineProfileItem {
	platform: string;
	handle: string;
	url: string;
	highlight: string;
	description?: string;
	category: 'problem-solving' | 'code' | 'community' | 'writing' | 'credentials';
	badgeTag?: string;
	platformId: 'github' | 'linkedin' | 'leetcode' | 'codeforces' | 'hackerrank' | 'slideshare' | 'google-cloud' | 'credly' | 'medium';
	stat?: string;
	brandIcon?: string;
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
				badge: 'Core Driver',
				logo: '/images/tech/ai-synthesis.svg',
				icon: '⚡'
			},
			{
				name: 'Domain-Driven Design (DDD) & MVC',
				desc: 'Bounded contexts, domain models, rich business logic segregation, and structured MVC layered architectures.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/ddd.svg',
				icon: '🏛️'
			},
			{
				name: 'Relational Data Modeling & 3NF',
				desc: 'Third Normal Form (3NF) relational design, explicit constraints, foreign key cascades, and complex indexing.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/data-modeling.svg',
				icon: '📊'
			},
			{
				name: 'Multi-Tenant SaaS Security & RLS',
				desc: 'Strict organizational data segregation, tenant context injection, and role-based access control (RBAC).',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/saas-security.svg',
				icon: '🔒'
			},
			{
				name: 'Modular Monorepo Architecture',
				desc: 'Shared domain packages, multi-project synchronization, and scalable code organization across monorepos.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/monorepo.svg',
				icon: '🌳'
			},
			{
				name: 'npm Package Build & Packaging',
				desc: 'Building, bundling, and publishing reusable enterprise UI and headless logic packages governed by SemVer.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/npm.svg',
				icon: '📦'
			},
			{
				name: 'Systematic Code Validation & Testing',
				desc: 'Rigorous regression testing, compile-time type verification, edge-case validation, and clean code hygiene.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/testing-validation.svg',
				icon: '🧪'
			},
			{
				name: 'Rapid MVP Scaffolding & Prototyping',
				desc: 'Accelerated delivery of production-ready SaaS foundations and end-to-end interactive prototypes.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/rapid-prototyping.svg',
				icon: '🚀'
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
				badge: 'Core Driver',
				logo: '/images/tech/postgresql.svg',
				icon: '🐘'
			},
			{
				name: 'PostgreSQL RPC & PL/pgSQL',
				desc: 'Transactional stored procedures, atomic RPC functions, custom database triggers, and server-side SQL logic.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/postgresql-rpc.svg',
				icon: '⚙️'
			},
			{
				name: 'Database Migrations & Schema Versioning',
				desc: 'Version-controlled repeatable migrations, database seeding, schema rollbacks, and Docker schema replays.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/migrations.svg',
				icon: '🔄'
			},
			{
				name: 'MySQL',
				desc: 'Relational schema architecture, InnoDB transactions, SQL optimization, and structured relational queries.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/mysql.svg',
				icon: '🐬'
			},
			{
				name: 'SQLite',
				desc: 'Embedded lightweight relational storage, zero-configuration database engines, and local offline persistence.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/sqlite.svg',
				icon: '🪶'
			},
			{
				name: 'Supabase (Realtime & Row-Level Security)',
				desc: 'Multi-tenant data isolation, strict PostgreSQL RLS policies, Auth workflows, and Realtime event streaming.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/supabase.svg',
				icon: '⚡'
			},
			{
				name: 'NestJS & Node.js Microservices',
				desc: 'Enterprise modular backend architectures, dependency injection, middleware filters, and REST gateways.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/nestjs.svg',
				icon: '🐈'
			},
			{
				name: 'Express & RESTful API Gateways',
				desc: 'Lightweight API endpoints, route guard middleware, CORS governance, and clean REST routing.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/express.svg',
				icon: '🚂'
			},
			{
				name: 'JWT & OAuth 2.0 Auth',
				desc: 'JSON Web Tokens, refresh token rotation, Google OAuth social identity integration, and RBAC auth guards.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/jwt.svg',
				icon: '🔐'
			},
			{
				name: 'Swagger & OpenAPI',
				desc: 'Interactive REST API contract documentation, request/response schema specifications, and SDK generation.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/swagger.svg',
				icon: '📜'
			},
			{
				name: 'Prisma ORM & TypeORM',
				desc: 'Type-safe database migrations, relational schema models, query builders, and database seeding routines.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/prisma.svg',
				icon: '🔺'
			},
			{
				name: 'Firebase & Cloud Messaging',
				desc: 'Authentication, Firestore realtime document storage, Cloud Functions, and Firebase Push Notifications (FCM).',
				tier: 'secondary',
				badge: 'Prior Tooling',
				logo: '/images/tech/firebase.svg',
				icon: '🔥'
			},
			{
				name: 'PHP & Blade Templating',
				desc: 'Enterprise business logic, custom MVC engines, ERP costing routines, and server-side Blade layouts.',
				tier: 'secondary',
				badge: 'Prior / Migration',
				logo: '/images/tech/blade.svg',
				icon: '🐘'
			},
			{
				name: 'MongoDB Document Stores',
				desc: 'Document data modeling, schema indexing, aggregation pipelines, and flexible JSON datastores.',
				tier: 'secondary',
				badge: 'Prior Tooling',
				logo: '/images/tech/mongodb.svg',
				icon: '🍃'
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
				badge: 'Core Driver',
				logo: '/images/tech/typescript.svg',
				icon: '🔷'
			},
			{
				name: 'Vue 3 (Composition API & Script Setup)',
				desc: 'Reactive component architectures, custom composables, reusable directives, and high-performance render trees.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/vue.svg',
				icon: '🟢'
			},
			{
				name: 'Quasar Framework (SPA / PWA Suites)',
				desc: 'Enterprise SPA/PWA application suites, table data virtualization, tree shaking, and responsive layouts.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/quasar.svg',
				icon: '💠'
			},
			{
				name: 'React',
				desc: 'Declarative component hierarchies, custom hooks, React Server Components (RSC), and concurrent rendering.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/react.svg',
				icon: '⚛️'
			},
			{
				name: 'Next.js (App Router & SSR)',
				desc: 'Server-side rendering, React Server Components (RSC), dynamic routing, and performant state orchestration.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/nextjs.svg',
				icon: '▲'
			},
			{
				name: 'React Native & Expo',
				desc: 'Cross-platform native iOS & Android applications built with React Native and modern Expo application toolchains.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/expo.svg',
				icon: '📱'
			},
			{
				name: 'Zustand State Management',
				desc: 'Lightweight, fast, and scalable client-state management for React applications without boilerplate.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/zustand.svg',
				icon: '🐻'
			},
			{
				name: 'TanStack Query & Table',
				desc: 'Declarative server-state caching, asynchronous data synchronization, pagination, and virtualized tables.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/tanstack.svg',
				icon: '⚡'
			},
			{
				name: 'Vite Build Tooling',
				desc: 'Next-generation lightning-fast frontend development server, ES modules bundling, and plugin ecosystems.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/vite.svg',
				icon: '⚡'
			},
			{
				name: 'shadcn/ui & Radix UI',
				desc: 'Accessible, unstyled, composable UI component primitives built on Tailwind CSS.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/shadcn.svg',
				icon: '🖤'
			},
			{
				name: 'Tailwind CSS & Modern Design Systems',
				desc: 'Utility-first modern design systems, accessible UI primitives, design tokens, and glassmorphism styling.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/tailwindcss.svg',
				icon: '🎨'
			},
			{
				name: 'Phosphor Icons & FontAwesome',
				desc: 'Cohesive vector icon systems, accessible icon wrappers, and lightweight web font icon packages.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/phosphor.svg',
				icon: '✨'
			},
			{
				name: 'Flutter & Dart (Cross-Platform Mobile)',
				desc: 'Cross-platform mobile applications for iOS & Android, reactive widget architectures, state management, and native device integration.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/flutter.svg',
				icon: '📱'
			},
			{
				name: 'Capacitor (Android Builds & Hardware)',
				desc: 'Native Android APK builds, hardware sensor integrations, ML Kit barcode/QR scanning, and offline caching.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/capacitor.svg',
				icon: '⚡'
			},
			{
				name: 'Pinia Reactive State Management',
				desc: 'Centralized reactive store design, persistent state plugins, action dispatchers, and modular state trees.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/pinia.svg',
				icon: '🍍'
			},
			{
				name: 'Astro',
				desc: 'Content-focused static and server-rendered web architecture, islands architecture, and high-performance delivery.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/astro.svg',
				icon: '🚀'
			},
			{
				name: 'SvelteKit & Svelte',
				desc: 'Compiler-driven reactive web applications, streamlined routing, server endpoints, and fine-grained reactivity.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/svelte.svg',
				icon: '🧡'
			},
			{
				name: 'Knockout.js',
				desc: 'Declarative data bindings, two-way MVVM observables, and legacy dynamic UI synchronization.',
				tier: 'secondary',
				badge: 'Prior Tooling',
				logo: '/images/tech/knockout.svg',
				icon: '🥊'
			},
			{
				name: 'Bootstrap',
				desc: 'Responsive grid layouts, utility classes, enterprise dashboard scaffolding, and legacy layout migration.',
				tier: 'secondary',
				badge: 'Prior Tooling',
				logo: '/images/tech/bootstrap.svg',
				icon: '🅱️'
			},
			{
				name: 'Vue.js 2 & Vuex (Legacy Maintenance)',
				desc: 'Legacy codebase maintenance, legacy ERP UI support, and modernization paths to Vue 3 Composition API.',
				tier: 'secondary',
				badge: 'Prior / Migration',
				logo: '/images/tech/vue.svg',
				icon: '🧩'
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
				name: 'pnpm & Package Management',
				desc: 'Fast, disk space efficient package management, hard-linked node_modules, and workspace monorepos.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/pnpm.svg',
				icon: '📦'
			},
			{
				name: 'Private Git Registries & SemVer',
				desc: 'Deploying versioned enterprise packages across private GitLab/GitHub registries with strict SemVer.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/gitlab.svg',
				icon: '🏷️'
			},
			{
				name: 'GitHub & GitHub Actions',
				desc: 'Version control, GitHub Actions CI/CD workflows, pull request reviews, and package registry governance.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/github.svg',
				icon: '🐙'
			},
			{
				name: 'Docker & Docker Compose',
				desc: 'Consistent local development environments, containerized multi-tier microservices, and Docker Compose orchestration.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/docker.svg',
				icon: '🐳'
			},
			{
				name: 'Cloudflare Pages & Workers',
				desc: 'Edge-rendered static asset distribution, serverless Workers integration, and automated Git CI/CD deployments.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/cloudflare.svg',
				icon: '☁️'
			},
			{
				name: 'Cloudinary CDN Storage',
				desc: 'High-performance media delivery, automated image format transformations, and CDN-backed asset storage.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/cloudinary.svg',
				icon: '☁️'
			},
			{
				name: 'Vercel Deployment',
				desc: 'Automated frontend previews, Next.js edge deployments, serverless function hosting, and domain routing.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/vercel.svg',
				icon: '▲'
			},
			{
				name: 'ESLint & Prettier Code Hygiene',
				desc: 'Automated syntax verification, strict linting rules, code formatting, and type-safe lint configurations.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/eslint.svg',
				icon: '✨'
			},
			{
				name: 'Android Studio & Gradle',
				desc: 'Native Android SDK compilation, Gradle build scripting, APK bundling, and device emulator debugging.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/androidstudio.svg',
				icon: '🤖'
			},
			{
				name: 'Ubuntu Linux & Linux Mint',
				desc: 'Unix command-line mastery, server administration, Bash shell scripts, package management, and system services.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/ubuntu.svg',
				icon: '🐧'
			},
			{
				name: 'Git Submodules & Multi-Repo',
				desc: 'Coordinated multi-repository synchronization, mono-repo architectures, and shared core library infrastructure.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/git.svg',
				icon: '🌿'
			},
			{
				name: 'Figma',
				desc: 'UI/UX design systems, component prototyping, and translating high-fidelity visual designs into accessible frontend code.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/figma.svg',
				icon: '🎯'
			}
		]
	},
	{
		id: 'data-science-python',
		category: 'Data Engineering & Machine Learning',
		tag: 'ANALYTICS & AI',
		iconType: 'zap',
		icon: '🐍',
		description: 'Data analysis, statistical modeling, ETL pipelines, and neural network research implementations.',
		items: [
			{
				name: 'Python',
				desc: 'Data engineering, statistical computing, ETL scripts, automated scrapers, and neural network model training.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/python.svg',
				icon: '🐍'
			},
			{
				name: 'Python Web Scraping & Automation',
				desc: 'Automated web crawlers, HTML parsing (BeautifulSoup, Requests), DOM extraction, and data collection pipelines.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/web-scraping.svg',
				icon: '🕷️'
			},
			{
				name: 'Pandas',
				desc: 'High-performance DataFrame manipulation, data cleaning, CSV/JSON transformations, and dataset aggregation.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/pandas.svg',
				icon: '🐼'
			},
			{
				name: 'NumPy',
				desc: 'Multidimensional array operations, matrix linear algebra calculations, and high-speed numerical processing.',
				tier: 'primary',
				badge: 'Core Driver',
				logo: '/images/tech/numpy.svg',
				icon: '🔢'
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
		title: 'Academic STEM Mentorship & Tutoring',
		iconType: 'pen',
		tag: '2020 — 2025 Q1 • 24 STUDENTS',
		desc: '5 years of specialized academic mentorship for SSC and HSC candidates from premier institutions across Dhaka. Tutored ~24 talented students in higher mathematics and physics, guiding them to peak GPA-5.00 board exam distinctions.'
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

export const onlineProfiles: OnlineProfileItem[] = [
	{
		platform: 'Github',
		platformId: 'github',
		handle: 'marceldavidbaroi',
		url: 'https://github.com/marceldavidbaroi',
		highlight: 'Open Source & Package Systems',
		description: 'github.com/marceldavidbaroi',
		category: 'code',
		badgeTag: 'Link',
		stat: 'Public Repositories & Packages',
		brandIcon: '/images/tech/github.svg'
	},
	{
		platform: 'LinkedIn',
		platformId: 'linkedin',
		handle: 'marcel-david-baroi',
		url: 'https://www.linkedin.com/in/marcel-david-baroi/',
		highlight: 'Software Engineer',
		description: 'linkedin.com/in/marcel-david-baroi',
		category: 'community',
		badgeTag: 'Link',
		stat: 'Professional Profile & Endorsements',
		brandIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
	},
	{
		platform: 'LeetCode',
		platformId: 'leetcode',
		handle: 'marceldavidbaroi',
		url: 'https://leetcode.com/u/marceldavidbaroi/',
		highlight: 'Algorithms & Data Structures',
		description: 'leetcode.com/u/marceldavidbaroi',
		category: 'problem-solving',
		badgeTag: 'Link',
		stat: 'Problem Solving & Contests',
		brandIcon: 'https://cdn.jsdelivr.net/gh/walkccc/LeetCode@master/images/LeetCode_Logo.png'
	},
	{
		platform: 'HackerRank',
		platformId: 'hackerrank',
		handle: 'marcel15_3421',
		url: 'https://www.hackerrank.com/profile/marcel15_3421',
		highlight: 'Problem Solving & SQL',
		description: 'hackerrank.com/profile/marcel15_3421',
		category: 'problem-solving',
		badgeTag: 'Link',
		stat: 'Domain Proficiency Badges',
		brandIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
	},
	{
		platform: 'SlideShare',
		platformId: 'slideshare',
		handle: 'marceldavidbaroi',
		url: 'https://www.slideshare.net/marceldavidbaroi',
		highlight: 'Tech Presentations & Decks',
		description: 'slideshare.net/marceldavidbaroi',
		category: 'writing',
		badgeTag: 'Link',
		stat: 'Slide Decks & Technical Talks',
		brandIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
	},
	{
		platform: 'Google Cloud Skills',
		platformId: 'google-cloud',
		handle: 'marcel-david-baroi',
		url: 'https://www.skills.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77',
		highlight: 'AI & Cloud Skill Badges',
		description: 'skills.google/public_profiles',
		category: 'credentials',
		badgeTag: 'Link',
		stat: 'Google Cloud Boost Badges',
		brandIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
	},
	{
		platform: 'Credly',
		platformId: 'credly',
		handle: 'marcel-david-baroi',
		url: 'https://www.credly.com/users/marcel-david-baroi/badges/credly',
		highlight: 'Verified Tech Credentials',
		description: 'credly.com/users/marcel-david-baroi',
		category: 'credentials',
		badgeTag: 'Link',
		stat: 'Cisco & Tech Certifications',
		brandIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg'
	},
	{
		platform: 'Medium',
		platformId: 'medium',
		handle: '@marceldavidbaroi',
		url: 'https://medium.com/@marceldavidbaroi',
		highlight: 'Engineering & Tech Articles',
		description: 'medium.com/@marceldavidbaroi',
		category: 'writing',
		badgeTag: 'Link',
		stat: 'Software Architecture Articles',
		brandIcon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg'
	}
];

