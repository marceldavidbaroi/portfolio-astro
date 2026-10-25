import type { CollectionEntry } from 'astro:content';

/** Inferred from projects collection after content.config.ts update. */
export type ProjectEntry = CollectionEntry<'projects'>;
export type ProjectData = ProjectEntry['data'];

export type ContributionMode = 'owner' | 'co-owner' | 'contributor' | 'maintainer' | 'lead' | 'core' | 'specialist';
export type ContributionShare = 'lead' | 'major' | 'minor';
export type ContributionStartedFrom = 'scratch' | 'existing';

export type Contribution = {
	mode: ContributionMode;
	label: string;
	headline: string;
	teamSize?: number;
	myShare?: ContributionShare;
	scope: string[];
	startedFrom?: ContributionStartedFrom;
	outOfScope?: string[];
	team?: string;
};

export type ProblemEvidence = 'interviews' | 'observed' | 'internal-use' | 'assumption';

export type Problem = {
	statement: string;
	evidence?: ProblemEvidence;
	whoHurts?: string[];
};

export type ProofLevel = 'measured' | 'estimated' | 'designed' | 'qualitative';

export type Measure = {
	metric: string;
	from: string;
	to: string;
	proof: ProofLevel;
};

export type Attribution = 'personal' | 'team' | 'product';

export type BenefitMatrixItem = {
	persona: string;
	pain: string;
	before?: string;
	after: string;
	measure?: Measure;
	attribution: Attribution;
	feature?: string[];
};

export type ImprovementItem = {
	area: string;
	before: string;
	after: string;
	how: string;
	measure?: Measure;
	userBenefit?: string;
	attribution: 'personal' | 'team';
	ref?: string;
};

export type ImpactMetric = {
	label: string;
	value: string;
	detail?: string;
	attribution: 'personal' | 'product' | 'team';
};

export type CanvasNote = {
	title: string;
	note: string;
};

export type VpcCanvas = {
	labels?: {
		title?: string;
		valueProposition?: string;
		customerSegment?: string;
	};
	customerJobs: CanvasNote[];
	pains: CanvasNote[];
	gains: CanvasNote[];
	productsAndServices: CanvasNote[];
	painRelievers: CanvasNote[];
	gainCreators: CanvasNote[];
};

export type ProductContext = {
	summary: string;
	tagline?: string;
	problem?: string;
	valueProposition?: {
		targetCustomer: string;
		showCanvas?: boolean;
		items: Array<{
			painTitle: string;
			painDescription: string;
			gainTitle: string;
			gainDescription: string;
		}>;
		canvas?: VpcCanvas;
	};
};
