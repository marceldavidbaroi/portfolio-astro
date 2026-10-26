import { z } from 'astro/zod';

/**
 * Reusable Zod sub-schemas for project case studies.
 * Shared by `content.config.ts` (frontmatter) and `getProject.ts` (JSON sidecar files).
 */

export const canvasNoteSchema = z.object({
	title: z.string(),
	note: z.string(),
});

export const vpcCanvasSchema = z.object({
	labels: z
		.object({
			title: z.string().optional(),
			valueProposition: z.string().optional(),
			customerSegment: z.string().optional(),
		})
		.optional(),
	customerJobs: z.array(canvasNoteSchema).default([]),
	pains: z.array(canvasNoteSchema).default([]),
	gains: z.array(canvasNoteSchema).default([]),
	productsAndServices: z.array(canvasNoteSchema).default([]),
	painRelievers: z.array(canvasNoteSchema).default([]),
	gainCreators: z.array(canvasNoteSchema).default([]),
});

export type VpcCanvasData = z.infer<typeof vpcCanvasSchema>;

/**
 * Appendix body blocks (`body.json`). Inline text fields may contain light
 * markdown (**bold**, `code`, *italic*, [links](url)); see `renderInline.ts`.
 */
export type ListItem = { text: string; children?: ListItem[]; childrenLoose?: boolean };

const listItemSchema: z.ZodType<ListItem> = z.lazy(() =>
	z.object({
		text: z.string(),
		children: z.array(listItemSchema).optional(),
		/** Nested list has blank lines between items (renders items as paragraphs). */
		childrenLoose: z.boolean().optional(),
	})
);

export const bodyBlockSchema = z.discriminatedUnion('type', [
	z.object({ type: z.literal('heading'), level: z.number().int().min(1).max(6), text: z.string() }),
	z.object({ type: z.literal('paragraph'), text: z.string() }),
	z.object({ type: z.literal('list'), ordered: z.boolean(), loose: z.boolean().optional(), items: z.array(listItemSchema) }),
	z.object({ type: z.literal('table'), header: z.array(z.string()), rows: z.array(z.array(z.string())) }),
	z.object({ type: z.literal('mermaid'), code: z.string() }),
	z.object({ type: z.literal('code'), lang: z.string(), code: z.string() }),
	z.object({ type: z.literal('quote'), text: z.string() }),
	z.object({ type: z.literal('divider') }),
	/** Author notes (e.g. TODOs). Kept in the data, never rendered. */
	z.object({ type: z.literal('comment'), text: z.string() }),
]);

export const bodySchema = z.object({ blocks: z.array(bodyBlockSchema).default([]) });

export type BodyBlock = z.infer<typeof bodyBlockSchema>;
