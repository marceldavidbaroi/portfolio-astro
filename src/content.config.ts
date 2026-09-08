import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ----------------------------------------------------------------------
 * 1. PROJECT / CASE STUDY METADATA SCHEMA
 * ----------------------------------------------------------------------
 * Structured for production-ready technical case studies incorporating:
 * - Visual hierarchy & preview card assets
 * - Technical stack categorization
 * - Google XYZ impact overview & quantitative metrics
 * - System architecture & engineering challenges
 */
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		// Core Identifiers & Card Info
		id: z.string(),
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		chip: z.string().default('Case Study'),
		order: z.number().default(0),
		featured: z.boolean().default(true),

		// Project Lifecycle & Role Metadata
		role: z.string().optional(),
		timeline: z.string().optional(),
		status: z.string().optional().default('Completed'),
		classification: z.string().optional().default('🔒 Proprietary Enterprise IP'),
		platformType: z.enum(['desktop', 'mobile']).default('desktop'),

		// Categorized Tech Stack
		techStack: z
			.object({
				frontend: z.array(z.string()).default([]),
				mobile_hardware: z.array(z.string()).default([]),
				backend: z.array(z.string()).default([]),
				database: z.array(z.string()).default([]),
				devops: z.array(z.string()).default([])
			})
			.optional(),

		// Project Links & Resources
		links: z
			.object({
				liveDemo: z.string().optional(),
				parentPlatform: z.string().optional(),
				github: z.string().optional(),
				githubFrontend: z.string().optional(),
				githubBackend: z.string().optional(),
				docs: z.string().optional(),
				apiDocs: z.string().optional()
			})
			.optional(),
		link: z.string().optional().default('#'),

		// Visual Assets & Mockups
		images: z.array(z.string()).default([]),
		visualAssets: z
			.object({
				heroMockup: z.string().optional(),
				architectureDiagram: z.string().optional(),
				databaseErd: z.string().optional(),
				screenshots: z.array(z.string()).default([]),
				benchmarkGraphic: z.string().optional()
			})
			.optional(),

		// Executive Overview (Google XYZ Formula) & Key Metrics
		executiveOverview: z.string().optional(),
		impactMetrics: z
			.array(
				z.object({
					label: z.string(),
					value: z.string(),
					detail: z.string().optional()
				})
			)
			.default([]),

		// Deep-Dive Technical Engineering Sections (Optional Frontmatter Fields)
		problemStatement: z.string().optional(),
		architectureSummary: z.string().optional(),
		valueProposition: z
			.object({
				targetCustomer: z.string(),
				items: z.array(
					z.object({
						painTitle: z.string(),
						painDescription: z.string(),
						gainTitle: z.string(),
						gainDescription: z.string()
					})
				)
			})
			.optional(),
		keyDecisions: z
			.array(
				z.object({
					challenge: z.string(),
					decision: z.string(),
					outcome: z.string().optional()
				})
			)
			.default([]),
		securityReliability: z.array(z.string()).default([]),
		futureRoadmap: z.array(z.string()).default([])
	})
});

/**
 * ----------------------------------------------------------------------
 * 2. WORK EXPERIENCE METADATA SCHEMA
 * ----------------------------------------------------------------------
 * Structured for senior engineering roles & career milestones with:
 * - Clear role tenure, company, and location metadata
 * - High-impact Google XYZ executive scope
 * - Concrete quantitative achievements & technical highlights
 * - Categorized core technology stack
 */
const experience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		// Core Role & Organization Metadata
		role: z.string(),
		company: z.string(),
		companyUrl: z.string().optional(),
		location: z.string().optional(),
		employmentType: z.string().optional().default('Full-time'),
		period: z.string(),
		badge: z.string().default('Milestone'),
		order: z.number().default(0),

		// Executive Scope & Impact (Google XYZ Pattern)
		summary: z.string(),
		executiveImpact: z.string().optional(),
		metrics: z
			.array(
				z.object({
					label: z.string(),
					value: z.string()
				})
			)
			.default([]),

		// Quantifiable Accomplishments & Technical Highlights
		highlights: z.array(z.string()).default([]),
		responsibilities: z.array(z.string()).default([]),

		// Core Stack for Terminal Preview & Categorized Skills
		stack: z.array(z.string()).default([]),
		skillsByCategory: z
			.object({
				languages: z.array(z.string()).default([]),
				frameworks: z.array(z.string()).default([]),
				cloudInfra: z.array(z.string()).default([]),
				practices: z.array(z.string()).default([])
			})
			.optional()
	})
});

/**
 * ----------------------------------------------------------------------
 * 3. ACADEMIC EDUCATION METADATA SCHEMA
 * ----------------------------------------------------------------------
 * Structured for undergraduate degree transcripts and academic milestones:
 * - Degree, institution, period, and honors
 * - GPA / CGPA and max scale
 * - Semester breakdown with course codes, grades, quality points, and SGPA
 * - Focus areas and summaries
 */
const education = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/education' }),
	schema: z.object({
		id: z.string(),
		degree: z.string(),
		shortDegree: z.string().optional(),
		major: z.string().optional(),
		field: z.string().optional(),
		institution: z.string(),
		institutionShort: z.string().optional(),
		institutionUrl: z.string().optional(),
		logo: z.string().optional(),
		location: z.string().optional(),
		duration: z.string().optional(),
		period: z.string(),
		badge: z.string(),
		status: z.string().optional().default('Completed'),
		cgpa: z.number().optional(),
		gpa: z.number().optional(),
		maxGpa: z.number().default(4.0),
		totalCredits: z.number().optional(),
		totalCourses: z.number().optional(),
		summary: z.string(),
		keyFocusAreas: z.array(z.string()).default([]),
		keyCourses: z.array(z.string()).default([]),
		coCurricular: z.array(z.string()).default([]),
		formativeMilestones: z
			.array(
				z.object({
					title: z.string(),
					tag: z.string(),
					period: z.string(),
					description: z.string(),
					impact: z.string().optional(),
					url: z.string().optional()
				})
			)
			.default([]),
		semesters: z
			.array(
				z.object({
					semesterNumber: z.number(),
					semesterTitle: z.string(),
					totalCredit: z.number(),
					sgpa: z.number(),
					totalQualityPoints: z.number(),
					highlights: z.array(z.string()).optional(),
					courses: z.array(
						z.object({
							sl: z.number(),
							code: z.string(),
							title: z.string(),
							credit: z.number(),
							grade: z.string(),
							gradePoint: z.number(),
							qualityPoints: z.number(),
							type: z.enum(['theory', 'lab', 'project']).default('theory'),
							category: z.string(),
							categoryLabel: z.string().optional()
						})
					)
				})
			)
			.optional()
	})
});

/**
 * ----------------------------------------------------------------------
 * 4. RESEARCH & PUBLICATIONS METADATA SCHEMA
 * ----------------------------------------------------------------------
 * Structured for academic research papers and final year undergraduate thesis:
 * - Publication title, abstract, problem statement
 * - Dataset metadata (Ekush dataset, image volume, classes)
 * - 16-model benchmark comparative results
 * - Official university repository and PDF documents
 */
const research = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/research' }),
	schema: z.object({
		id: z.string(),
		slug: z.string(),
		title: z.string(),
		shortTitle: z.string().optional(),
		subtitle: z.string().optional(),
		type: z.string().default('Undergraduate Final Year Thesis'),
		author: z.string(),
		authorRole: z.string().optional(),
		authorNote: z.string().optional(),
		institution: z.string(),
		institutionUrl: z.string().optional(),
		department: z.string().optional(),
		degree: z.string().optional(),
		period: z.string().optional(),
		completionDate: z.string().optional(),
		projectNumber: z.string().optional(),
		officialRepositoryUrl: z.string().optional(),
		pdfDownloadUrl: z.string().optional(),
		localPdfUrl: z.string().optional(),
		featured: z.boolean().default(true),
		badge: z.string().default('Research'),
		abstract: z.string(),
		problemStatement: z.string(),
		datasetName: z.string(),
		totalImages: z.number(),
		trainingImages: z.number(),
		testingImages: z.number(),
		totalClasses: z.number(),
		vowelClasses: z.number(),
		consonantClasses: z.number(),
		keyMetrics: z
			.array(
				z.object({
					label: z.string(),
					value: z.string(),
					sub: z.string(),
					highlight: z.boolean().optional()
				})
			)
			.default([]),
		methodologySummary: z.string().optional(),
		dataProcessing: z.array(z.string()).default([]),
		modelsEvaluated: z
			.array(
				z.object({
					category: z.string(),
					models: z.array(z.string())
				})
			)
			.default([]),
		trainingStrategy: z.array(z.string()).default([]),
		benchmarks: z
			.array(
				z.object({
					category: z.string(),
					modelName: z.string(),
					vowelAccuracy: z.number(),
					consonantAccuracy: z.number(),
					vowelF1: z.number(),
					consonantF1: z.number(),
					isBestOverall: z.boolean().optional(),
					isBestBaseline: z.boolean().optional(),
					notes: z.string().optional()
				})
			)
			.default([]),
		keyTakeaways: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([])
	})
});

export const collections = {
	projects,
	experience,
	education,
	research
};


