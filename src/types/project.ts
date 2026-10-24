import type { CollectionEntry } from 'astro:content';

/** Inferred from projects collection after content.config.ts update. */
export type ProjectEntry = CollectionEntry<'projects'>;
export type ProjectData = ProjectEntry['data'];

export type ContributionMode = 'owner' | 'lead' | 'core' | 'specialist';

export type Contribution = {
	mode: ContributionMode;
	label: string;
	headline: string;
	scope: string[];
	outOfScope?: string[];
	team?: string;
};

export type ImpactMetric = {
	label: string;
	value: string;
	detail?: string;
	attribution: 'personal' | 'product' | 'team';
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
	};
};
