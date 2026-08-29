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

/**
 * 11 Semesters of B.Sc. in Computer Science & Engineering
 */
export const universitySemesters: Semester[] = [
	{
		semesterNumber: 1,
		semesterTitle: 'Semester 1',
		totalCredit: 16.0,
		sgpa: 3.97,
		totalQualityPoints: 63.5,
		courses: [
			{
				sl: 1,
				code: 'ENG113',
				title: 'Basic Functional English and English Spoken',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 2,
				code: 'CSE112',
				title: 'Computer Fundamentals',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 3,
				code: 'PHY114',
				title: 'Basic Physics Lab',
				credit: 1.0,
				grade: 'A-',
				gradePoint: 3.5,
				qualityPoints: 3.5,
				type: 'lab',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			},
			{
				sl: 4,
				code: 'GED111',
				title: 'History of Bangladesh and Bangla Language',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 5,
				code: 'PHY113',
				title: 'Basic Physics',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			},
			{
				sl: 6,
				code: 'MAT111',
				title: 'Basic Mathematics',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			}
		]
	},
	{
		semesterNumber: 2,
		semesterTitle: 'Semester 2',
		totalCredit: 14.0,
		sgpa: 4.0,
		totalQualityPoints: 56.0,
		courses: [
			{
				sl: 1,
				code: 'GED121',
				title: 'Bangladesh Studies',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 2,
				code: 'CSE123',
				title: 'Problem Solving Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 3,
				code: 'ENG123',
				title: 'Writing and Comprehension',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 4,
				code: 'CSE122',
				title: 'Programming and Problem Solving',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 5,
				code: 'CSE124',
				title: 'Business Application Design',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'lab',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 6,
				code: 'MAT121',
				title: 'Mathematics-II: Calculus, Complex Variables and Linear Algebra',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			}
		]
	},
	{
		semesterNumber: 3,
		semesterTitle: 'Semester 3',
		totalCredit: 14.0,
		sgpa: 3.95,
		totalQualityPoints: 55.25,
		courses: [
			{
				sl: 1,
				code: 'CSE132',
				title: 'Electrical Circuits',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 2,
				code: 'CSE134',
				title: 'Data Structure',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 3,
				code: 'CSE135',
				title: 'Data Structure Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 4,
				code: 'CSE133',
				title: 'Electrical Circuits Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 5,
				code: 'GED131',
				title: 'Art of Living',
				credit: 3.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 11.25,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 6,
				code: 'CSE131',
				title: 'Discrete Mathematics',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 7,
				code: 'CSE136',
				title: 'Software Project I',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'project',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			}
		]
	},
	{
		semesterNumber: 4,
		semesterTitle: 'Semester 4',
		totalCredit: 13.0,
		sgpa: 3.96,
		totalQualityPoints: 51.5,
		courses: [
			{
				sl: 1,
				code: 'ACT211',
				title: 'Financial and Managerial Accounting',
				credit: 2.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 7.5,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 2,
				code: 'MAT211',
				title: 'Engineering Mathematics',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			},
			{
				sl: 3,
				code: 'CSE213',
				title: 'Basic Electronics Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 4,
				code: 'CSE221',
				title: 'Object Oriented Programming',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 5,
				code: 'CSE222',
				title: 'Object Oriented Programming Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 6,
				code: 'CSE212',
				title: 'Basic Electronics',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 7,
				code: 'CSE216',
				title: 'Software Project II',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'project',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			}
		]
	},
	{
		semesterNumber: 5,
		semesterTitle: 'Semester 5',
		totalCredit: 14.0,
		sgpa: 4.0,
		totalQualityPoints: 56.0,
		courses: [
			{
				sl: 1,
				code: 'CSE214',
				title: 'Algorithm',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 2,
				code: 'CSE225',
				title: 'Data Communication',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 3,
				code: 'CSE224',
				title: 'Digital Electronics Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 4,
				code: 'STA221',
				title: 'Statistics and Probability',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			},
			{
				sl: 5,
				code: 'CSE223',
				title: 'Digital Electronics',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 6,
				code: 'CSE226',
				title: 'Software Project III',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'project',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 7,
				code: 'CSE215',
				title: 'Algorithm Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			}
		]
	},
	{
		semesterNumber: 6,
		semesterTitle: 'Semester 6',
		totalCredit: 12.0,
		sgpa: 3.77,
		totalQualityPoints: 45.25,
		courses: [
			{
				sl: 1,
				code: 'CSE237',
				title: 'Software Project IV',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'project',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 2,
				code: 'CSE231',
				title: 'Microprocessor, Embedded Systems and IoT',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 3,
				code: 'CSE232',
				title: 'Microprocessor, Embedded Systems and IoT Lab',
				credit: 2.0,
				grade: 'B-',
				gradePoint: 2.75,
				qualityPoints: 5.5,
				type: 'lab',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 4,
				code: 'CSE236',
				title: 'Math for Computer Science',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			},
			{
				sl: 5,
				code: 'CSE235',
				title: 'Numerical Methods',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'math_sciences',
				categoryLabel: 'Mathematics & Natural Sciences'
			},
			{
				sl: 6,
				code: 'CSE234',
				title: 'Object Oriented Programming II Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 7,
				code: 'CSE233',
				title: 'Object Oriented Programming II',
				credit: 1.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 3.75,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			}
		]
	},
	{
		semesterNumber: 7,
		semesterTitle: 'Semester 7',
		totalCredit: 11.0,
		sgpa: 3.86,
		totalQualityPoints: 42.5,
		courses: [
			{
				sl: 1,
				code: 'CSE315',
				title: 'Artificial Intelligence',
				credit: 1.0,
				grade: 'A-',
				gradePoint: 3.5,
				qualityPoints: 3.5,
				type: 'theory',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			},
			{
				sl: 2,
				code: 'CSE313',
				title: 'Computer Networks',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 3,
				code: 'CSE312',
				title: 'Database Management System Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 4,
				code: 'CSE314',
				title: 'Computer Networks Lab',
				credit: 2.0,
				grade: 'A-',
				gradePoint: 3.5,
				qualityPoints: 7.0,
				type: 'lab',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 5,
				code: 'CSE316',
				title: 'Artificial Intelligence Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			},
			{
				sl: 6,
				code: 'CSE311',
				title: 'Database Management System',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 7,
				code: 'CSE317',
				title: 'Software Project V',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'project',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			}
		]
	},
	{
		semesterNumber: 8,
		semesterTitle: 'Semester 8',
		totalCredit: 7.0,
		sgpa: 3.89,
		totalQualityPoints: 27.25,
		courses: [
			{
				sl: 1,
				code: 'CSE321',
				title: 'Data Mining and Machine Learning',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			},
			{
				sl: 2,
				code: 'CSE325',
				title: 'System Analysis and Design',
				credit: 3.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 11.25,
				type: 'theory',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 3,
				code: 'CSE322',
				title: 'Data Mining and Machine Learning Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			}
		]
	},
	{
		semesterNumber: 9,
		semesterTitle: 'Semester 9',
		totalCredit: 17.0,
		sgpa: 3.94,
		totalQualityPoints: 67.0,
		courses: [
			{
				sl: 1,
				code: 'CSE334',
				title: 'Pervasive Computing',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 2,
				code: 'CSE326',
				title: 'Research and Innovation',
				credit: 1.0,
				grade: 'A-',
				gradePoint: 3.5,
				qualityPoints: 3.5,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 3,
				code: 'CSE335',
				title: 'Pervasive Computing and Mobile App Development Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'systems_hardware',
				categoryLabel: 'Systems, Networks & Hardware'
			},
			{
				sl: 4,
				code: 'CSE324',
				title: 'Operating Systems Lab.',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 5,
				code: 'CSE336',
				title: 'Software Project VI',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'project',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 6,
				code: 'CSE333',
				title: 'Software Engineering',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 7,
				code: 'CSE323',
				title: 'Operating Systems.',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 8,
				code: 'CSE332',
				title: 'Compiler Design Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 9,
				code: 'ECO321',
				title: 'Economics',
				credit: 2.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 7.5,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 10,
				code: 'CSE331',
				title: 'Compiler Design',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			}
		]
	},
	{
		semesterNumber: 10,
		semesterTitle: 'Semester 10',
		totalCredit: 12.0,
		sgpa: 3.94,
		totalQualityPoints: 47.25,
		courses: [
			{
				sl: 1,
				code: 'CSE415',
				title: 'Web Engineering Lab',
				credit: 2.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 7.5,
				type: 'lab',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 2,
				code: 'CSE421',
				title: 'Computer Graphics',
				credit: 1.0,
				grade: 'A',
				gradePoint: 3.75,
				qualityPoints: 3.75,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 3,
				code: 'CSE422',
				title: 'Computer Graphics Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 4,
				code: 'CSE414',
				title: 'Web Engineering',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'software_engineering',
				categoryLabel: 'Software Engineering & Projects'
			},
			{
				sl: 5,
				code: 'CSE423',
				title: 'Information Security',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			},
			{
				sl: 6,
				code: 'CSE411',
				title: 'Computer Architecture and Organization',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'core_cs',
				categoryLabel: 'Core Computer Science'
			}
		]
	},
	{
		semesterNumber: 11,
		semesterTitle: 'Semester 11',
		totalCredit: 12.0,
		sgpa: 3.63,
		totalQualityPoints: 43.5,
		courses: [
			{
				sl: 1,
				code: 'CSE426',
				title: 'Principles Of Robotics',
				credit: 3.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 12.0,
				type: 'theory',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			},
			{
				sl: 2,
				code: 'CSE412',
				title: 'Big Data and IoT',
				credit: 1.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 4.0,
				type: 'theory',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			},
			{
				sl: 3,
				code: 'CSE413',
				title: 'Big Data and IoT Lab',
				credit: 2.0,
				grade: 'A+',
				gradePoint: 4.0,
				qualityPoints: 8.0,
				type: 'lab',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			},
			{
				sl: 4,
				code: 'CSE498',
				title: 'Social and Professional Issues in Computing',
				credit: 3.0,
				grade: 'B+',
				gradePoint: 3.25,
				qualityPoints: 9.75,
				type: 'theory',
				category: 'general_ethics_mgmt',
				categoryLabel: 'General, Ethics & Management'
			},
			{
				sl: 5,
				code: 'CSE427',
				title: 'Digital Image Processing',
				credit: 3.0,
				grade: 'B+',
				gradePoint: 3.25,
				qualityPoints: 9.75,
				type: 'theory',
				category: 'ai_ml_data',
				categoryLabel: 'AI, Machine Learning & Data'
			}
		]
	}
];

/**
 * Bachelor of Science in Computer Science & Engineering Program Definition
 */
export const bscCseProgram: DegreeProgram = {
	id: 'bsc-cse',
	degree: 'Bachelor of Science in Computer Science & Engineering',
	shortDegree: 'B.Sc. in CSE (Batch 55)',
	major: 'Computer Science & Engineering',
	institution: 'Daffodil International University (DIU)',
	institutionShort: 'DIU',
	institutionUrl: 'https://daffodilvarsity.edu.bd/',
	logo: '/images/education/daffodil-logo.png',
	location: 'Dhaka, Bangladesh',
	duration: '4 Years (11 Semesters)',
	period: '2020 — 2024',
	badge: 'CSE Batch 55',
	status: 'Completed',
	cgpa: 3.91,
	maxGpa: 4.0,
	totalCredits: 142.0,
	totalCourses: 70,

	summary:
		'Rigorous 142-credit undergraduate curriculum (**CSE Batch 55**) encompassing core computer science algorithms, systems architecture, distributed computing, database management, software engineering, artificial intelligence, and applied robotics under the UGC Uniform Grading System.',
	keyFocusAreas: [
		'Software Engineering & Full-Lifecycle Projects (Software Projects I–VI)',
		'Distributed Systems, Operating Systems & Relational Databases',
		'Data Structures, Advanced Algorithms & Discrete Mathematics',
		'Artificial Intelligence, Data Mining, Big Data & IoT',
		'Computer Networks, Data Communication & Embedded Systems',
		'Compiler Design, Computer Architecture & Information Security'
	],
	semesters: universitySemesters
};

/**
 * Pre-University Higher Secondary Certificate (HSC)
 */
export const hscScienceProgram: PreUniversityEducation = {
	id: 'hsc-science',
	degree: 'Higher Secondary Certificate (HSC) — Science',
	shortDegree: 'HSC Science (Batch \'19, Group 13)',
	field: 'Science Group (Batch \'19, Group 13)',
	institution: 'Notre Dame College, Dhaka',
	institutionShort: 'Notre Dame College',
	institutionUrl: 'https://ndc.edu.bd/',
	logo: '/images/education/ndc-logo.png',
	location: 'Dhaka, Bangladesh',
	period: '2017 — 2019',
	badge: 'Batch \'19 // Group 13',
	gpa: 4.67,
	maxGpa: 5.0,
	summary:
		'Completed Higher Secondary Certificate in Science from Notre Dame College, Dhaka (**Batch \'19, Group 13**) with GPA 4.67 / 5.00 under the Dhaka Education Board, covering the standard science curriculum and actively participating in club activities.',
	keyCourses: [
		'Physics',
		'Chemistry',
		'Higher Mathematics',
		'Biology',
		'Information & Communication Technology (ICT)',
		'English',
		'Bangla'
	],
	coCurricular: [
		'Notre Dame Math Club (NDMC)',
		'Notre Dame Cultural Club (NDCC)'
	],
	formativeMilestones: [
		{
			title: 'Pope Francis Apostolic Visit & Protocol Volunteer Force',
			tag: 'CAMPUS MILESTONE // 2017',
			period: 'December 2, 2017',
			description:
				'Handpicked by Father Susanto among a 20-member student volunteer team and subsequently selected into the elite 6-member core protocol force for Pope Francis’s 100,000-attendee Papal Mass at Ramna and 10,000-youth NDC campus gathering. Underwent multi-week training in international VIP and event security protocols.',
			impact: 'Cross-cultural leadership, international security protocol & institutional pride',
			url: '/archive/pope-francis-visit-2017'
		},
		{
			title: 'Student-Led Road Safety & Civic Governance Movement',
			tag: 'CIVIC LEADERSHIP // 2018',
			period: 'July — August 2018',
			description:
				'Participated in the historic, student-organized nationwide road safety movement across Dhaka, actively advocating for vehicle licensing compliance, emergency lane discipline, and civic accountability.',
			impact: 'Systemic discipline, civic duty & collective leadership',
			url: '/archive/road-safety-movement-2018'
		},
		{
			title: 'Noterdamian Traditions of Rigor & Punctuality',
			tag: 'CAMPUS CULTURE & HERITAGE',
			period: '2017 — 2019',
			description:
				'Immersed in Notre Dame College’s legendary institutional ethos—strict 8:10 AM gate punctuality, academic camaraderie across Ganguly and Harrington halls, and holistic character formation.',
			impact: 'Uncompromising punctuality, integrity & resilience',
			url: '/archive#rag-day'
		}
	]
};


/**
 * All Education Programs in Chronological / Priority Order
 */
export const allEducationPrograms = [bscCseProgram, hscScienceProgram];

/**
 * Dynamic Academic Calculations & Analytics Helpers
 */

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

export function getAcademicStatistics(semesters: Semester[] = universitySemesters): CumulativeAcademicStats {
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
export function getAllCourses(semesters: Semester[] = universitySemesters): (Course & { semesterNumber: number })[] {
	return semesters.flatMap((sem) =>
		sem.courses.map((c) => ({
			...c,
			semesterNumber: sem.semesterNumber
		}))
	);
}

export function getCoursesByCategory(
	category: CourseCategory,
	semesters: Semester[] = universitySemesters
): (Course & { semesterNumber: number })[] {
	return getAllCourses(semesters).filter((c) => c.category === category);
}

export const academicStats = getAcademicStatistics();
