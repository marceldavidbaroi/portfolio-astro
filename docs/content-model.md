# Project content model

Every case study is plain JSON. There are no markdown files for projects.

```
src/content/projects/<slug>/
  project.json   core metadata + structured sections   (validated by content.config.ts)
  vpc.json       Value Proposition Canvas              (validated by projectSchema.ts)
  body.json      appendix prose as typed blocks        (validated by projectSchema.ts)
```

`<slug>` is the folder name (e.g. `01-tradeflowbd`) and is the URL: `/work/<slug>`.
The numeric `id` in `project.json` (e.g. `"01"`) is the alias URL: `/work/01`.

## Reading project data

Always go through [`src/lib/getProject.ts`](../src/lib/getProject.ts):

```ts
import { getAllProjects, getProject } from '../lib/getProject';

const all = await getAllProjects();   // Project[]
const one = await getProject('01-tradeflowbd');
```

A `Project` is the collection entry (`entry.data` = validated `project.json`)
plus `blocks` (from `body.json`), with `data.product.valueProposition.canvas`
filled from `vpc.json`. Pages and components never read the files directly.

The build fails when:

- a `.json` file does not match its Zod schema;
- `product.valueProposition.showCanvas` is `true` but there is no `vpc.json`;
- a canvas is defined in both `project.json` and `vpc.json`.

## Files

### `project.json`

Same fields as the former frontmatter (see `projects` in
[`content.config.ts`](../src/content.config.ts)): `id`, `title`, `subtitle`,
`description`, `chip`, `order`, `contribution`, `problem`, `benefitMatrix`,
`improvements`, `myImpact`, `product`, `stack`, `techStack`, `links`, `images`,
`visualAssets`, `keyDecisions`, `securityReliability`, `futureRoadmap`, `caseStory`.

Do **not** put the canvas here; keep `product.valueProposition.showCanvas` and
`items`, and put the canvas in `vpc.json`.

### `vpc.json`

```json
{
  "labels": { "title": "...", "valueProposition": "...", "customerSegment": "..." },
  "customerJobs": [{ "title": "...", "note": "..." }],
  "pains": [], "gains": [],
  "productsAndServices": [], "painRelievers": [], "gainCreators": []
}
```

Authoring rules: `.agents/rules/vpc-authoring-guide.md`.

### `body.json`

```json
{ "blocks": [ { "type": "heading", "level": 2, "text": "..." }, ... ] }
```

| `type` | fields |
|---|---|
| `heading` | `level` (1–6), `text` |
| `paragraph` | `text` |
| `list` | `ordered`, `loose?`, `items[]` (`text`, `children?`, `childrenLoose?`) |
| `table` | `header[]`, `rows[][]` |
| `mermaid` | `code` |
| `code` | `lang`, `code` |
| `quote` | `text` |
| `divider` | none |
| `comment` | `text` (author note, stored but never rendered) |

Text fields accept light inline markup: `**bold**`, `*italic*`, `` `code` ``,
`[label](url)`, `![alt](src)` and `<br>`. It is rendered by
[`renderInline.ts`](../src/lib/renderInline.ts) (typographic quotes included)
through [`CaseBodyBlocks.astro`](../src/components/work/CaseBodyBlocks.astro).

## Adding a project

1. Create `src/content/projects/<NN>-<slug>/project.json`.
2. Add `vpc.json` if `showCanvas` is `true`; add `body.json` for an appendix.
3. Run `astro build`. Schema errors name the offending file.

## Other UIs

All of the above is JSON, so another client can read the same files (or a
generated endpoint built from `getAllProjects()`) without a markdown parser.
