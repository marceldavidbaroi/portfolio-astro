/**
 * Academic transcript helpers & grading types (programs live in content collections).
 */
/**
 * ----------------------------------------------------------------------
 * ACADEMIC EDUCATION DATA MODEL & COMPREHENSIVE CURRICULUM TRANSCRIPT
 * ----------------------------------------------------------------------
 * Structured data model capturing complete university transcripts, grading scales,
 * semester metrics, course classifications, and cumulative academic statistics.
 */

export type LetterGrade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'D' | 'F';

export type CourseType = 'theory' | 'lab' | 'project';

export type CourseCategory =
	| 'core_cs'
	| 'software_engineering'
	| 'ai_ml_data'
	| 'systems_hardware'
	| 'math_sciences'
	| 'general_ethics_mgmt';

export interface GradingScaleEntry {
	marksRange: string;
	grade: LetterGrade;
	gradePoint: number;
	remarks: string;
}

export interface Course {
	sl: number;
	code: string;
	title: string;
	credit: number;
	grade: LetterGrade;
	gradePoint: number;
	qualityPoints: number; // credit * gradePoint
	type: CourseType;
	category: CourseCategory;
	categoryLabel: string;
}

export interface Semester {
	semesterNumber: number;
	semesterTitle: string;
	courses: Course[];
	totalCredit: number;
	sgpa: number;
	totalQualityPoints: number;
	highlights?: string[];
}

export interface CategorySummary {
	category: CourseCategory;
	label: string;
	totalCourses: number;
	totalCredits: number;
	averageGradePoint: number;
	description: string;
}

export interface DegreeProgram {
	id: string;
	degree: string;
	shortDegree: string;
	major: string;
	institution: string;
	institutionShort: string;
	institutionUrl?: string;
	logo?: string;
	/** Homepage stacked preview photos (up to 3). */
	cardImages?: string[];
	/** Click-through gallery for the photo stack. */
	galleryHref?: string;
	/** @deprecated Prefer cardImages */
	cardImage?: string;
	location: string;
	duration: string;
	period: string;
	badge: string;
	status: 'Completed' | 'In Progress';
	cgpa: number;
	maxGpa: number;
	totalCredits: number;
	totalCourses: number;
	summary: string;
	keyFocusAreas: string[];
	semesters: Semester[];
}

export interface FormativeMilestone {
	title: string;
	tag: string;
	period: string;
	description: string;
	impact: string;
	url?: string;
}

export interface PreUniversityEducation {
	id: string;
	degree: string;
	shortDegree: string;
	field: string;
	institution: string;
	institutionShort: string;
	institutionUrl?: string;
	logo?: string;
	/** Homepage stacked preview photos (up to 3). */
	cardImages?: string[];
	/** Click-through gallery for the photo stack. */
	galleryHref?: string;
	/** @deprecated Prefer cardImages */
	cardImage?: string;
	location: string;
	period: string;
	badge: string;
	gpa: number;
	maxGpa: number;
	summary: string;
	keyCourses: string[];
	coCurricular?: string[];
	formativeMilestones?: FormativeMilestone[];
}




/**
 * UGC Uniform Grading System Mapping
 */
export const ugcGradingSystem: GradingScaleEntry[] = [
	{ marksRange: '80–100', grade: 'A+', gradePoint: 4.0, remarks: 'Outstanding' },
	{ marksRange: '75–79', grade: 'A', gradePoint: 3.75, remarks: 'Excellent' },
	{ marksRange: '70–74', grade: 'A-', gradePoint: 3.5, remarks: 'Very Good' },
	{ marksRange: '65–69', grade: 'B+', gradePoint: 3.25, remarks: 'Good' },
	{ marksRange: '60–64', grade: 'B', gradePoint: 3.0, remarks: 'Satisfactory' },
	{ marksRange: '55–59', grade: 'B-', gradePoint: 2.75, remarks: 'Above Average' },
	{ marksRange: '50–54', grade: 'C+', gradePoint: 2.5, remarks: 'Average' },
	{ marksRange: '45–49', grade: 'C', gradePoint: 2.25, remarks: 'Below Average' },
	{ marksRange: '40–44', grade: 'D', gradePoint: 2.0, remarks: 'Pass' },
	{ marksRange: '00–39', grade: 'F', gradePoint: 0.0, remarks: 'Fail' }
];

export const courseCategoryLabels: Record<CourseCategory, { label: string; desc: string }> = {
	core_cs: {
		label: 'Core Computer Science',
		desc: 'Algorithms, Data Structures, OOP, OS, DBMS, Compilers, Architecture & Discrete Math'
	},
	software_engineering: {
		label: 'Software Engineering & Projects',
		desc: 'Software Projects I–VI, Web Engineering, SAD, Enterprise Software Architecture'
	},
	ai_ml_data: {
		label: 'AI, Machine Learning & Data',
		desc: 'Artificial Intelligence, Data Mining, Big Data & IoT, Computer Vision, Robotics'
	},
	systems_hardware: {
		label: 'Systems, Networks & Hardware',
		desc: 'Computer Networks, Data Communication, IoT & Microprocessors, Pervasive Computing, Electronics'
	},
	math_sciences: {
		label: 'Mathematics & Natural Sciences',
		desc: 'Calculus, Linear Algebra, Engineering Math, Statistics & Probability, Numerical Methods, Physics'
	},
	general_ethics_mgmt: {
		label: 'General, Ethics & Management',
		desc: 'Managerial Accounting, Economics, Research & Innovation, Computing Ethics, Professional Communication'
	}
};

export interface CumulativeAcademicStats {
	totalCredits: number;
	totalCourses: number;
	totalQualityPoints: number;
	cgpa: number;
	semestersCount: number;
	gradeCounts: Record<LetterGrade, number>;
	typeCounts: Record<CourseType, { count: number; credits: number }>;
	categoryBreakdown: CategorySummary[];
	topGradeRatio: number; // percentage of A+ and A grades
	softwareProjectsCount: number;
	softwareProjectsAllAplus: boolean;
}

export function getAcademicStatistics(semesters: Semester[]): CumulativeAcademicStats {
	let totalCredits = 0;
	let totalQualityPoints = 0;
	let totalCourses = 0;

	const gradeCounts: Record<LetterGrade, number> = {
		'A+': 0,
		A: 0,
		'A-': 0,
		'B+': 0,
		B: 0,
		'B-': 0,
		'C+': 0,
		C: 0,
		D: 0,
		F: 0
	};

	const typeCounts: Record<CourseType, { count: number; credits: number }> = {
		theory: { count: 0, credits: 0 },
		lab: { count: 0, credits: 0 },
		project: { count: 0, credits: 0 }
	};

	const categoryMap: Record<CourseCategory, { count: number; credits: number; points: number }> = {
		core_cs: { count: 0, credits: 0, points: 0 },
		software_engineering: { count: 0, credits: 0, points: 0 },
		ai_ml_data: { count: 0, credits: 0, points: 0 },
		systems_hardware: { count: 0, credits: 0, points: 0 },
		math_sciences: { count: 0, credits: 0, points: 0 },
		general_ethics_mgmt: { count: 0, credits: 0, points: 0 }
	};

	let softwareProjectsCount = 0;
	let softwareProjectsAllAplus = true;

	for (const sem of semesters) {
		for (const course of sem.courses) {
			totalCourses++;
			totalCredits += course.credit;
			totalQualityPoints += course.qualityPoints;
			gradeCounts[course.grade] = (gradeCounts[course.grade] || 0) + 1;

			typeCounts[course.type].count++;
			typeCounts[course.type].credits += course.credit;

			categoryMap[course.category].count++;
			categoryMap[course.category].credits += course.credit;
			categoryMap[course.category].points += course.qualityPoints;

			if (course.type === 'project') {
				softwareProjectsCount++;
				if (course.grade !== 'A+') {
					softwareProjectsAllAplus = false;
				}
			}
		}
	}

	const cgpa = Number((totalQualityPoints / totalCredits).toFixed(2));
	const topGrades = gradeCounts['A+'] + gradeCounts['A'];
	const topGradeRatio = Number(((topGrades / totalCourses) * 100).toFixed(1));

	const categoryBreakdown: CategorySummary[] = Object.entries(categoryMap).map(([key, data]) => {
		const catKey = key as CourseCategory;
		return {
			category: catKey,
			label: courseCategoryLabels[catKey].label,
			description: courseCategoryLabels[catKey].desc,
			totalCourses: data.count,
			totalCredits: data.credits,
			averageGradePoint: data.credits > 0 ? Number((data.points / data.credits).toFixed(2)) : 0
		};
	});

	return {
		totalCredits: Number(totalCredits.toFixed(2)),
		totalCourses,
		totalQualityPoints: Number(totalQualityPoints.toFixed(2)),
		cgpa,
		semestersCount: semesters.length,
		gradeCounts,
		typeCounts,
		categoryBreakdown,
		topGradeRatio,
		softwareProjectsCount,
		softwareProjectsAllAplus
	};
}

/**
 * Filter courses across all semesters by category or course type
 */
export function getAllCourses(semesters: Semester[]): (Course & { semesterNumber: number })[] {
	return semesters.flatMap((sem) =>
		sem.courses.map((c) => ({
			...c,
			semesterNumber: sem.semesterNumber
		}))
	);
}

export function getCoursesByCategory(
	category: CourseCategory,
	semesters: Semester[]
): (Course & { semesterNumber: number })[] {
	return getAllCourses(semesters).filter((c) => c.category === category);
}


