export interface Certification {
	id: string;
	title: string;
	url: string;
	authority: 'Google' | 'Cisco' | 'Microsoft' | 'LinkedIn' | 'HackerRank' | 'freeCodeCamp' | 'Canva';
	issuerDisplay: string;
	startedOn?: string;
	date: string;
	licenseNumber?: string;
	category: 'Cloud & Generative AI' | 'Core Engineering & Languages' | 'Project Management' | 'Design & UX Foundations' | 'Frontend & Web Development';
	icon: string;
	iconType: 'bot' | 'sparkles' | 'terminal' | 'code' | 'globe' | 'award' | 'layers' | 'palette';
	summary: string;
	isFeaturedOnAbout?: boolean;
}

export interface IssuerSummary {
	name: string;
	authorityKey: string;
	count: number;
	badge: string;
}

export const certifications: Certification[] = [
	// --- Google Cloud AI & Machine Learning ---
	{
		id: 'gcp-responsible-ai-applying-principles',
		title: 'Responsible AI: Applying AI Principles with Google Cloud',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17581956?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
		authority: 'Google',
		issuerDisplay: 'Google Cloud',
		startedOn: 'Aug-25',
		date: 'Aug 2025',
		licenseNumber: '17581956',
		category: 'Cloud & Generative AI',
		icon: '🤖',
		iconType: 'bot',
		summary: 'Practical implementation of ethical AI frameworks, bias mitigation techniques, interpretability, and responsible model governance on Google Cloud.',
		isFeaturedOnAbout: true
	},
	{
		id: 'gcp-prompt-design-vertex-ai',
		title: 'Prompt Design in Vertex AI',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17581523?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
		authority: 'Google',
		issuerDisplay: 'Google Cloud',
		startedOn: 'Aug-25',
		date: 'Aug 2025',
		licenseNumber: '17581523',
		category: 'Cloud & Generative AI',
		icon: '⚡',
		iconType: 'sparkles',
		summary: 'Advanced prompt engineering, zero-shot/few-shot design, model parameter tuning (temperature, top-k, top-p), and Vertex AI Gemini integration pipelines.',
		isFeaturedOnAbout: true
	},
	{
		id: 'gcp-intro-responsible-ai',
		title: 'Introduction to Responsible AI',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17472223?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
		authority: 'Google',
		issuerDisplay: 'Google Cloud',
		startedOn: 'Aug-25',
		date: 'Aug 2025',
		licenseNumber: '17472223',
		category: 'Cloud & Generative AI',
		icon: '🛡️',
		iconType: 'award',
		summary: 'Foundations of responsible enterprise AI systems, transparency metrics, data privacy boundaries, and model accountability on cloud infrastructure.'
	},
	{
		id: 'gcp-intro-llm',
		title: 'Introduction to Large Language Models',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17320196?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
		authority: 'Google',
		issuerDisplay: 'Google Cloud',
		startedOn: 'Aug-25',
		date: 'Aug 2025',
		licenseNumber: '17320196',
		category: 'Cloud & Generative AI',
		icon: '🧠',
		iconType: 'sparkles',
		summary: 'Architecture of transformer-based LLMs, pre-training methodologies, prompt fine-tuning mechanisms, and enterprise LLM deployment.'
	},
	{
		id: 'gcp-intro-generative-ai',
		title: 'Introduction to Generative AI',
		url: 'https://www.cloudskillsboost.google/public_profiles/2c7e1de9-096d-4df9-8fc6-c832b77bdc77/badges/17216550?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
		authority: 'Google',
		issuerDisplay: 'Google Cloud',
		startedOn: 'Jul-25',
		date: 'Jul 2025',
		licenseNumber: '17216550',
		category: 'Cloud & Generative AI',
		icon: '✨',
		iconType: 'sparkles',
		summary: 'Core concepts of generative modeling, multimodal architectures, and real-world enterprise generative AI application pipelines.'
	},

	// --- Cisco Networking Academy ---
	{
		id: 'cisco-python-essentials-2',
		title: 'Python Essentials 2',
		url: 'https://www.credly.com/badges/4523a28b-20c5-4c97-99b8-df6187b7171f/linked_in_profile',
		authority: 'Cisco',
		issuerDisplay: 'Cisco Networking Academy',
		startedOn: 'May-25',
		date: 'May 2025',
		category: 'Core Engineering & Languages',
		icon: '🐍',
		iconType: 'terminal',
		summary: 'Advanced Python: OOP class design, exception architectures, generators, closures, file I/O operations, and standard library module packaging.',
		isFeaturedOnAbout: true
	},
	{
		id: 'cisco-python-essentials-1',
		title: 'Python Essentials 1',
		url: 'https://www.credly.com/badges/78cd71f1-f819-47ef-99db-96a975904797/linked_in_profile',
		authority: 'Cisco',
		issuerDisplay: 'Cisco Networking Academy',
		startedOn: 'Mar-25',
		date: 'Mar 2025',
		category: 'Core Engineering & Languages',
		icon: '🐍',
		iconType: 'terminal',
		summary: 'Core Python syntax, dynamic data structures (lists, tuples, dictionaries), control logic, functions, and error handling algorithms.'
	},
	{
		id: 'cisco-javascript-essentials-2',
		title: 'JavaScript Essentials 2',
		url: 'https://www.credly.com/badges/61d5e8b3-adc0-4980-9c39-660f137d9173/linked_in_profile',
		authority: 'Cisco',
		issuerDisplay: 'Cisco Networking Academy',
		startedOn: 'Oct-24',
		date: 'Oct 2024',
		category: 'Core Engineering & Languages',
		icon: '⚡',
		iconType: 'code',
		summary: 'Modern ECMAScript (ES6+), closures, asynchronous event loops, Promises, OOP class inheritance, and DOM manipulation patterns.',
		isFeaturedOnAbout: true
	},
	{
		id: 'cisco-networking-basics',
		title: 'Networking Basics',
		url: 'https://www.credly.com/badges/897a6fa8-820a-44f6-ad42-3cd17e77c52e/linked_in_profile',
		authority: 'Cisco',
		issuerDisplay: 'Cisco Networking Academy',
		startedOn: 'Oct-24',
		date: 'Oct 2024',
		category: 'Core Engineering & Languages',
		icon: '🌐',
		iconType: 'globe',
		summary: 'TCP/IP network protocol stack, OSI reference layers, IP addressing (IPv4/IPv6), subnetting, routing architectures, and packet switching.'
	},
	{
		id: 'cisco-javascript-essentials-1',
		title: 'JavaScript Essentials 1',
		url: 'https://www.credly.com/badges/7b371816-a8b1-4b8c-82ce-eebfa4b7cb7d/linked_in_profile',
		authority: 'Cisco',
		issuerDisplay: 'Cisco Networking Academy',
		startedOn: 'Sep-24',
		date: 'Sep 2024',
		category: 'Core Engineering & Languages',
		icon: '📜',
		iconType: 'code',
		summary: 'Foundational ECMAScript concepts, variable scoping, conditional control flows, functions, arrays, and standard algorithm execution.'
	},

	// --- Microsoft & Generative AI ---
	{
		id: 'msft-career-essentials-genai',
		title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
		url: 'https://www.linkedin.com/learning/certificates/5b375a66aa4203fa0bcfa8cb5761d62f1053cf9fdd182f663b6be8b228f6406f',
		authority: 'Microsoft',
		issuerDisplay: 'Microsoft & LinkedIn',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '🚀',
		iconType: 'award',
		summary: 'Comprehensive professional certification covering generative modeling, ethical guardrails, and Copilot tooling across engineering workflows.',
		isFeaturedOnAbout: true
	},

	// --- HackerRank Verified Skills ---
	{
		id: 'hackerrank-python-basic',
		title: 'Python (Basic)',
		url: 'https://www.hackerrank.com/certificates/3c3664bfc3ec',
		authority: 'HackerRank',
		issuerDisplay: 'HackerRank Verified',
		date: 'Verified',
		category: 'Core Engineering & Languages',
		icon: '🏆',
		iconType: 'code',
		summary: 'Verified competency in Python programmatic problem solving, data structures, list comprehensions, and algorithmic optimization.'
	},
	{
		id: 'hackerrank-react-basic',
		title: 'React (Basic)',
		url: 'https://www.hackerrank.com/certificates/69ce5e31fabf',
		authority: 'HackerRank',
		issuerDisplay: 'HackerRank Verified',
		date: 'Verified',
		category: 'Frontend & Web Development',
		icon: '⚛️',
		iconType: 'code',
		summary: 'Verified evaluation in React component architecture, state management hooks, JSX rendering lifecycles, and unidirectional data binding.'
	},
	{
		id: 'hackerrank-javascript-basic',
		title: 'JavaScript (Basic)',
		url: 'https://www.hackerrank.com/certificates/7b04e20c4806',
		authority: 'HackerRank',
		issuerDisplay: 'HackerRank Verified',
		date: 'Verified',
		category: 'Core Engineering & Languages',
		icon: '📜',
		iconType: 'code',
		summary: 'Verified assessment in fundamental JavaScript logic, array transformations, prototype chaining, and algorithmic puzzle solving.'
	},

	// --- freeCodeCamp ---
	{
		id: 'freecodecamp-responsive-web-design',
		title: 'Responsive Web Design',
		url: 'https://freecodecamp.org/certification/marceldavid/responsive-web-design',
		authority: 'freeCodeCamp',
		issuerDisplay: 'freeCodeCamp',
		startedOn: 'Mar-25',
		date: 'Mar 2025',
		licenseNumber: 'marceldavid-rwd',
		category: 'Frontend & Web Development',
		icon: '📱',
		iconType: 'globe',
		summary: '300-hour comprehensive curriculum in semantic HTML5, CSS Flexbox and Grid layouts, responsive viewports, and WCAG accessibility standards.',
		isFeaturedOnAbout: true
	},

	// --- Canva Design School ---
	{
		id: 'canva-essentials',
		title: 'Canva Essentials',
		url: 'https://canva.com/designschool/certification-award/523938f5-3b3e-4bc2-8476-36b77e5afd6b',
		authority: 'Canva',
		issuerDisplay: 'Canva Design School',
		startedOn: 'Mar-25',
		date: 'Mar 2025',
		licenseNumber: '523938',
		category: 'Design & UX Foundations',
		icon: '✨',
		iconType: 'palette',
		summary: 'Visual design composition, typography systems, vector layout balancing, and multi-format digital asset production.'
	},

	// --- LinkedIn Learning: Project Management Suite ---
	{
		id: 'linkedin-pm-foundations',
		title: 'Project Management Foundations',
		url: 'https://www.linkedin.com/learning/certificates/ee6ae630b16a5866ab673fb063f5dc8e22774c03f38e741bf71b147c1a6ffd94',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'May-25',
		date: 'May 2025',
		category: 'Project Management',
		icon: '📊',
		iconType: 'layers',
		summary: 'End-to-end software project lifecycle: initiating, planning, risk mitigation, deliverables management, and formal project closure.'
	},
	{
		id: 'linkedin-pm-ethics',
		title: 'Project Management Foundations: Ethics',
		url: 'https://www.linkedin.com/learning/certificates/337cb36fa6724c987afa6761c9968c1f04dd4dee0b3a7e6c6fdcfd62dd36e27a?trk=share_certificate',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		date: 'May 2025',
		category: 'Project Management',
		icon: '🧭',
		iconType: 'award',
		summary: 'Professional responsibility, ethical decision frameworks, conflict-of-interest resolution, and transparent stakeholder accountability.'
	},
	{
		id: 'linkedin-pm-requirements',
		title: 'Project Management Foundations: Requirements',
		url: 'https://www.linkedin.com/learning/certificates/3a13a83255b2519ef3e46cfb1154e0d2fecb0f794e3468e77af2751b1c9fad26',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'May-25',
		date: 'May 2025',
		category: 'Project Management',
		icon: '📋',
		iconType: 'layers',
		summary: 'Requirements elicitation, functional specification breakdown, scope baseline management, and traceability matrix verification.'
	},
	{
		id: 'linkedin-pm-schedules',
		title: 'Project Management Foundations: Schedules',
		url: 'https://www.linkedin.com/learning/certificates/f24eeda5bb3c4b5adb30568448d1ea362707a2d17d338fc74093c21d39d21de0',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'May-25',
		date: 'May 2025',
		category: 'Project Management',
		icon: '📅',
		iconType: 'layers',
		summary: 'Work breakdown structures (WBS), critical path method (CPM), milestone scheduling, and schedule variance analysis.'
	},
	{
		id: 'linkedin-pm-budgets',
		title: 'Project Management Foundations: Budgets',
		url: 'https://www.linkedin.com/learning/certificates/737f42453116790c3b512494affbb7bbb7e861b2986fd046a7d740d780b24f3c',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'May-25',
		date: 'May 2025',
		category: 'Project Management',
		icon: '💰',
		iconType: 'layers',
		summary: 'Cost estimation methodologies, budget baseline tracking, earned value management (EVM), and financial contingency allocation.'
	},
	{
		id: 'linkedin-pm-teams',
		title: 'Project Management Foundations: Teams',
		url: 'https://www.linkedin.com/learning/certificates/6702ebfcc4e01b911a9d822380822a50c3b8a51228cb696d03a2bbbb58547ca5',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'May-25',
		date: 'May 2025',
		category: 'Project Management',
		icon: '👥',
		iconType: 'layers',
		summary: 'Cross-functional team leadership, motivation dynamics, psychological safety, and collaborative velocity in sprint cycles.'
	},

	// --- LinkedIn Learning: AI & Productivity ---
	{
		id: 'linkedin-what-is-genai',
		title: 'What Is Generative AI?',
		url: 'https://www.linkedin.com/learning/certificates/946635e4f74a9f1197b49db8ebef3843505bd1d5112dd62f0acdf3f5db2ffb46',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '🧠',
		iconType: 'sparkles',
		summary: 'Foundations of generative artificial intelligence, neural networks, foundation models, and business deployment workflows.'
	},
	{
		id: 'linkedin-genai-evolution-search',
		title: 'Generative AI: The Evolution of Thoughtful Online Search',
		url: 'https://www.linkedin.com/learning/certificates/3ece2d0083c5277e8de519a9f77fdf379252c1ac06535bdfdf35f3148ae8db70',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '🔍',
		iconType: 'sparkles',
		summary: 'AI-augmented information retrieval, semantic web indexing, conversational query formulation, and synthesized answers.'
	},
	{
		id: 'linkedin-streamlining-copilot',
		title: 'Streamlining Your Work with Microsoft Copilot',
		url: 'https://www.linkedin.com/learning/certificates/6a0c47ef76f6b395f47e017cbe21aaa94d0dbb62ada6f52452b7fe58eaef113b',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '⚡',
		iconType: 'bot',
		summary: 'Workflow automation, conversational prompt refinement, and document synthesis with Microsoft Copilot assistant.'
	},
	{
		id: 'linkedin-learning-m365-copilot',
		title: 'Learning Microsoft 365 Copilot',
		url: 'https://www.linkedin.com/learning/certificates/3dae3cbad9c09c5a5267eaa335295536af7b8fd3d7d060e93f9c8b5bfab54459',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '💻',
		iconType: 'bot',
		summary: 'Integration of LLM assistants across office productivity suites, collaboration tools, and enterprise cloud data.'
	},
	{
		id: 'linkedin-ethics-genai',
		title: 'Ethics in the Age of Generative AI',
		url: 'https://www.linkedin.com/learning/certificates/fa26723effbae150aaeab49bd165db42ab253d485d731f6da16ffc512a240f58',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '⚖️',
		iconType: 'award',
		summary: 'Ethical governance, data provenance, intellectual property rights, hallucination mitigation, and algorithmic transparency.'
	},
	{
		id: 'linkedin-intro-ai',
		title: 'Introduction to Artificial Intelligence',
		url: 'https://www.linkedin.com/learning/certificates/4ece76524a7565134b2948fceb904a022607d3923bd3dfde6fbf4ba83e0add79',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Mar-24',
		date: 'Mar 2024',
		category: 'Cloud & Generative AI',
		icon: '🤖',
		iconType: 'bot',
		summary: 'Foundational principles of modern artificial intelligence, expert systems, supervised learning paradigms, and machine cognition.'
	},

	// --- LinkedIn Learning: Graphic Design Foundations ---
	{
		id: 'linkedin-color-design-art',
		title: 'Color for Design and Art',
		url: 'https://www.linkedin.com/learning/certificates/0acc23eba9f8efef1f73c8567eadc422c3e649fffabcf5a8549b3eeb5b4e61fd',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Jul-22',
		date: 'Jul 2022',
		category: 'Design & UX Foundations',
		icon: '🌈',
		iconType: 'palette',
		summary: 'Color theory, chromatic harmonies, psychological resonance, palette balancing, and accessible contrast ratios.'
	},
	{
		id: 'linkedin-gd-typography',
		title: 'Graphic Design Foundations: Typography',
		url: 'https://www.linkedin.com/learning/certificates/700f16104eab7b9b855a15d1bd9cbdaca811ad3e7a171d184786ccfff0942aa6',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Jul-22',
		date: 'Jul 2022',
		category: 'Design & UX Foundations',
		icon: '🔤',
		iconType: 'palette',
		summary: 'Type anatomy, kerning, leading, typographic hierarchy, and responsive font selection for digital user interfaces.'
	},
	{
		id: 'linkedin-gd-layout-composition',
		title: 'Graphic Design Foundations: Layout and Composition',
		url: 'https://www.linkedin.com/learning/certificates/5a7993e54cdcac596d1a2fbec92afc1e0e22191366a531091d5c7e473da64977',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Jul-22',
		date: 'Jul 2022',
		category: 'Design & UX Foundations',
		icon: '📏',
		iconType: 'palette',
		summary: 'Grid structures, golden ratio proportions, focal point arrangement, and editorial visual balance in digital products.'
	},
	{
		id: 'linkedin-intro-gd-concepts',
		title: 'Introduction to Graphic Design: Concepts',
		url: 'https://www.linkedin.com/learning/certificates/b944d60d192c1d304a0577200e913efd1e2dc9f9d856a4c35c77c923e454ed04',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Jul-22',
		date: 'Jul 2022',
		category: 'Design & UX Foundations',
		icon: '🎨',
		iconType: 'palette',
		summary: 'Core concepts of graphic communication, visual hierarchy, balance, and spatial contrast in creative engineering.'
	},
	{
		id: 'linkedin-gd-careers-first-steps',
		title: 'Graphic Design Careers: First Steps',
		url: 'https://www.linkedin.com/learning/certificates/dfcbf3bf7c578c85c7168b140e266ced8290fffde572910369cf740c11377cc5',
		authority: 'LinkedIn',
		issuerDisplay: 'LinkedIn Learning',
		startedOn: 'Jun-22',
		date: 'Jun 2022',
		category: 'Design & UX Foundations',
		icon: '📐',
		iconType: 'palette',
		summary: 'Fundamental trajectories in digital design, visual brand communication, and industry-standard creative workflows.'
	}
];

export const issuersSummary: IssuerSummary[] = [
	{ name: 'Google Cloud', authorityKey: 'Google', count: 5, badge: 'Vertex AI & Cloud' },
	{ name: 'Cisco Networking Academy', authorityKey: 'Cisco', count: 5, badge: 'Core Languages & Networks' },
	{ name: 'Microsoft', authorityKey: 'Microsoft', count: 1, badge: 'Copilot & GenAI' },
	{ name: 'LinkedIn Learning', authorityKey: 'LinkedIn', count: 16, badge: 'AI, Management & Design' },
	{ name: 'HackerRank', authorityKey: 'HackerRank', count: 3, badge: 'Verified Coding' },
	{ name: 'freeCodeCamp', authorityKey: 'freeCodeCamp', count: 1, badge: 'Responsive Web' },
	{ name: 'Canva Design School', authorityKey: 'Canva', count: 1, badge: 'Visual Systems' }
];

export const featuredCompactCerts = certifications.filter(c => c.isFeaturedOnAbout);
