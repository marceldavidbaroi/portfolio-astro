import { getCollection, type CollectionEntry } from 'astro:content';
import { bodySchema, vpcCanvasSchema, type BodyBlock, type VpcCanvasData } from './projectSchema';

/**
 * Single entry point for project case-study data.
 *
 * Each project lives in `src/content/projects/<slug>/`:
 *   project.json  core metadata + structured sections (validated by the collection schema)
 *   vpc.json      Value Proposition Canvas (validated here)
 *   body.json     appendix prose as typed blocks (validated here)
 */

export type Project = CollectionEntry<'projects'> & { blocks: BodyBlock[] };

const vpcFiles = import.meta.glob<unknown>('/src/content/projects/*/vpc.json', {
	eager: true,
	import: 'default',
});
const bodyFiles = import.meta.glob<unknown>('/src/content/projects/*/body.json', {
	eager: true,
	import: 'default',
});

function loadVpc(slug: string): VpcCanvasData | undefined {
	const raw = vpcFiles[`/src/content/projects/${slug}/vpc.json`];
	if (raw === undefined) return undefined;
	const parsed = vpcCanvasSchema.safeParse(raw);
	if (!parsed.success) {
		throw new Error(`Invalid vpc.json for project "${slug}": ${parsed.error.message}`);
	}
	return parsed.data;
}

function loadBlocks(slug: string): BodyBlock[] {
	const raw = bodyFiles[`/src/content/projects/${slug}/body.json`];
	if (raw === undefined) return [];
	const parsed = bodySchema.safeParse(raw);
	if (!parsed.success) {
		throw new Error(`Invalid body.json for project "${slug}": ${parsed.error.message}`);
	}
	return parsed.data.blocks;
}

function merge(entry: CollectionEntry<'projects'>): Project {
	const vp = entry.data.product.valueProposition;
	const canvas = loadVpc(entry.id);
	const blocks = loadBlocks(entry.id);

	if (canvas && vp?.canvas) {
		throw new Error(`Project "${entry.id}" defines a VPC both in project.json and vpc.json.`);
	}
	if (vp?.showCanvas && !canvas && !vp.canvas) {
		throw new Error(`Project "${entry.id}" has showCanvas: true but no vpc.json.`);
	}
	if (!vp || !canvas) return { ...entry, blocks };

	return {
		...entry,
		blocks,
		data: {
			...entry.data,
			product: { ...entry.data.product, valueProposition: { ...vp, canvas } },
		},
	};
}

export async function getAllProjects(): Promise<Project[]> {
	const entries = await getCollection('projects');
	return entries.map(merge);
}

export async function getProject(slug: string): Promise<Project | undefined> {
	const all = await getAllProjects();
	return all.find((p) => p.id === slug);
}
