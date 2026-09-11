import { site } from '../data/site';

export const FOCUS_IDS = ['01-tradeflowbd', '02-service-desk'] as const;

export type WorkCategory = 'all' | 'enterprise-saas' | 'fintech' | 'mobile-iot' | 'devtools-arch';

export function shots(images?: string[]) {
	return (images || []).filter((img) => img && !img.includes('thumb-') && !img.includes('dummy')).slice(0, 3);
}

export function ipLabel(classification?: string) {
	const cls = (classification || '').toLowerCase();
	if (cls.includes('open source')) return 'Open source';
	if (cls.includes('independent')) return 'Independent';
	return 'Proprietary';
}

export function isRealUrl(url?: string) {
	if (!url) return false;
	const trimmed = url.trim().replace(/\/+$/, '');
	if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) return false;
	if (trimmed === site.github || trimmed === 'https://github.com') return false;
	if (trimmed.includes('example.com') || trimmed.includes('localhost')) return false;
	return true;
}

export function getProjectCategory(p: {
	id: string;
	data: { chip?: string; title?: string; platformType?: string };
}): WorkCategory[] {
	const cats: WorkCategory[] = ['all'];
	const chip = (p.data.chip || '').toLowerCase();
	const title = (p.data.title || '').toLowerCase();
	const id = p.id || '';
	const pType = p.data.platformType;

	if (
		chip.includes('saas') ||
		chip.includes('erp') ||
		chip.includes('retail') ||
		chip.includes('support') ||
		['01', '02', '09', '10'].includes(id) ||
		id.startsWith('01-') ||
		id.startsWith('02-') ||
		id.startsWith('09-') ||
		id.startsWith('10-')
	) {
		cats.push('enterprise-saas');
	}

	if (
		chip.includes('fintech') ||
		title.includes('accounting') ||
		title.includes('finance') ||
		title.includes('loan') ||
		id.startsWith('04-') ||
		id.startsWith('07-') ||
		id.startsWith('10-') ||
		id.startsWith('14-')
	) {
		cats.push('fintech');
	}

	if (pType === 'mobile' || chip.includes('mobile') || chip.includes('iot') || id.startsWith('03-') || id.startsWith('14-')) {
		cats.push('mobile-iot');
	}

	if (
		chip.includes('architecture') ||
		chip.includes('doc engine') ||
		chip.includes('packaging') ||
		chip.includes('learning') ||
		chip.includes('ui &') ||
		id.startsWith('05-') ||
		id.startsWith('06-') ||
		id.startsWith('08-') ||
		id.startsWith('11-') ||
		id.startsWith('12-') ||
		id.startsWith('13-')
	) {
		cats.push('devtools-arch');
	}

	return cats;
}

export function stackNames(
	techStack?: {
		frontend?: string[];
		mobile_hardware?: string[];
		backend?: string[];
		database?: string[];
		devops?: string[];
	},
	stack?: string[]
) {
	const direct = stack || [];
	if (!techStack) return direct;
	const set = new Set([
		...direct,
		...(techStack.frontend || []),
		...(techStack.mobile_hardware || []),
		...(techStack.backend || []),
		...(techStack.database || []),
		...(techStack.devops || [])
	]);
	return Array.from(set);
}
