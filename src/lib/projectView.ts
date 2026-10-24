import { getProjectCategory, shots, stackNames } from './work';
import type { ImpactMetric, ProductContext } from '../types/project';
import type { CollectionEntry } from 'astro:content';

type ProjectData = CollectionEntry<'projects'>['data'];

export type ProjectListItem = {
	slug: string;
	categories: ReturnType<typeof getProjectCategory>;
	searchString: string;
	allStack: string[];
	thumbs: string[];
	chip: string;
	title: string;
	subtitle?: string;
	description: string;
	stack: string[];
	platformType: 'desktop' | 'mobile';
	role?: string;
	timeline?: string;
	status?: string;
	contributionBadge: string;
	listMetric: ImpactMetric | null;
	listMetrics: ImpactMetric[];
};

function sortMetricsForList(metrics: ImpactMetric[]): ImpactMetric[] {
	const personal = metrics.filter((m) => m.attribution === 'personal');
	const rest = metrics.filter((m) => m.attribution !== 'personal');
	return [...personal, ...rest];
}

export function pickListMetric(metrics: ImpactMetric[]): ImpactMetric | null {
	if (!metrics.length) return null;
	const sorted = sortMetricsForList(metrics);
	return sorted[0] ?? null;
}

export function pickListMetrics(metrics: ImpactMetric[], max = 3): ImpactMetric[] {
	return sortMetricsForList(metrics).slice(0, max);
}

function buildSearchString(
	entry: CollectionEntry<'projects'>,
	allStack: string[]
): string {
	const d = entry.data;
	const c = d.contribution;
	return [
		d.title,
		d.subtitle,
		d.description,
		d.chip,
		d.role,
		d.timeline,
		d.status,
		c?.label,
		c?.headline,
		d.product?.summary,
		...(d.stack || []),
		...allStack,
		...(c?.scope || []),
	]
		.filter(Boolean)
		.join(' ')
		.toLowerCase();
}

export type CaseChapterNav = { id: string; label: string };

export type CaseStudyView = {
	chapters: CaseChapterNav[];
	showCaseStory: boolean;
	showVpc: boolean;
	hasContributionChapter: boolean;
	hasProductChapter: boolean;
	hasProofChapter: boolean;
	hasBuildChapter: boolean;
	hasTrustChapter: boolean;
	hasAppendixChapter: boolean;
};

function isOwnerOrLead(mode: string): boolean {
	return mode === 'owner' || mode === 'lead';
}

export function toCaseStudyView(
	entry: CollectionEntry<'projects'>,
	opts: {
		imageCount: number;
		hasMarkdownBody: boolean;
		hasStackRows: boolean;
		hasKeyDecisions: boolean;
		hasStackRationale: boolean;
		hasSecurity: boolean;
		hasRoadmap: boolean;
	}
): CaseStudyView {
	const { data } = entry;
	const contribution = data.contribution;
	const product = data.product;
	const caseStory = data.caseStory;
	const mode = contribution?.mode ?? 'core';

	const showCaseStory = Boolean(caseStory) && isOwnerOrLead(mode);
	const showVpc = Boolean(product?.valueProposition?.showCanvas) && isOwnerOrLead(mode);

	const hasContributionChapter =
		(contribution?.scope?.length ?? 0) > 0 ||
		(contribution?.outOfScope?.length ?? 0) > 0 ||
		Boolean(contribution?.team?.trim()) ||
		Boolean(contribution?.headline?.trim());

	const hasProductChapter =
		Boolean(product?.summary?.trim()) ||
		Boolean(product?.problem?.trim()) ||
		Boolean(product?.tagline?.trim()) ||
		(product?.valueProposition?.items?.length ?? 0) > 0 ||
		showVpc ||
		showCaseStory;

	const hasProofChapter = (data.myImpact?.length ?? 0) > 0 || opts.imageCount > 0;

	const hasBuildChapter =
		opts.hasStackRationale || opts.hasStackRows || opts.hasKeyDecisions;

	const hasTrustChapter = opts.hasSecurity || opts.hasRoadmap;
	const hasAppendixChapter = opts.hasMarkdownBody;

	const chapters: CaseChapterNav[] = [{ id: 'case-top', label: 'Overview' }];
	if (hasContributionChapter) chapters.push({ id: 'case-you', label: 'My contribution' });
	if (hasProductChapter) chapters.push({ id: 'case-context', label: 'Product context' });
	if (hasProofChapter) chapters.push({ id: 'case-proof', label: 'Proof' });
	if (hasBuildChapter) chapters.push({ id: 'case-build', label: 'Build' });
	if (hasTrustChapter) chapters.push({ id: 'case-trust', label: 'Trust' });
	if (hasAppendixChapter) chapters.push({ id: 'deep-dive', label: 'Appendix' });

	return {
		chapters,
		showCaseStory,
		showVpc,
		hasContributionChapter,
		hasProductChapter,
		hasProofChapter,
		hasBuildChapter,
		hasTrustChapter,
		hasAppendixChapter,
	};
}

/** Product chapter data (post-migration: `product` frontmatter only). */
export function resolveProductForDetail(data: ProjectData): ProductContext {
	return data.product;
}

export function toProjectListItem(entry: CollectionEntry<'projects'>): ProjectListItem {
	const { data } = entry;
	const categories = getProjectCategory(entry);
	const allStack = stackNames(data.techStack, data.stack);
	const myImpact = data.myImpact ?? [];

	return {
		slug: entry.id,
		categories,
		searchString: buildSearchString(entry, allStack),
		allStack,
		thumbs: shots(data.images),
		chip: data.chip,
		title: data.title,
		subtitle: data.subtitle,
		description: data.description,
		stack: data.stack ?? [],
		platformType: data.platformType,
		role: data.role,
		timeline: data.timeline,
		status: data.status,
		contributionBadge: (data.contribution?.label ?? '').trim(),
		listMetric: pickListMetric(myImpact),
		listMetrics: pickListMetrics(myImpact, 3),
	};
}
