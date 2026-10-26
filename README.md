# Project Case Study Data Standards & Authoring Guide

This guide explains how project data is structured and loaded in this portfolio, the exact schemas and files needed for a project to be displayed, and step-by-step instructions for extracting or authoring the required data.

---

## 1. Directory Structure

Each project lives inside its own folder in `src/content/projects/<order>-<slug>/` (for example: `src/content/projects/01-tradeflowbd/`).

A complete project directory contains three JSON files and optional local documentation:

```text
src/content/projects/01-tradeflowbd/
├── project.json    # Core metadata, recruiter story, stack, impact, decisions (Validated by Astro schema)
├── vpc.json        # Value Proposition Canvas data (Strategyzer model: jobs, pains, gains, relievers)
└── body.json       # Deep-dive appendix blocks (headings, tables, mermaid diagrams, code snippets)
```

> **Note on images**: Project screenshots are referenced from `/public/images/projects/<slug>/...` (e.g. `/images/projects/tradeflowbd/dashboard.webp`).

---

## 2. File Specifications & Required Fields

### A. `project.json` (Required)
Validated by `src/content.config.ts`. Defines how the project card appears on the homepage (`/work`) and drives the top chapters of the case study page (`/work/<slug>`).

#### 1. Core Card Identifiers
* `id` *(string)*: Two-digit index string matching order (e.g., `"01"`).
* `title` *(string)*: Project name (e.g., `"TradeFlow BD – Multi-Tenant Wholesale ERP"`).
* `subtitle` *(string)*: Short one-line summary.
* `description` *(string)*: **Google XYZ CV bullet format**:
  > *"Accomplished [X] as measured by [Y], by doing [Z]"*
  > Focus on system capability and business value (e.g. 100% RLS isolation, zero duplicate stock checkouts).
* `chip` *(string)*: Category tag (e.g., `"Enterprise ERP & SaaS"`, `"Mobile & Hardware"`, `"FinTech"`).
* `order` *(number)*: Numerical sort position on index/work pages.
* `featured` *(boolean)*: Whether to feature prominently.
* `platformType` *(string)*: `"desktop"` or `"mobile"`.

#### 2. Role & Contribution (Recruiter Triage)
* `role` *(string)*: Exact title (e.g., `"Lead Framework & Migration Engineer"`).
* `timeline` *(string)*: Period (e.g., `"2025 — Present"`).
* `status` *(string)*: `"Active Production"`, `"Completed"`, or `"Archived"`.
* `classification` *(string)*: e.g. `"🔒 Proprietary Enterprise IP"`, `"Public Open Source"`.
* `contribution`:
  * `mode` *(enum)*: `'owner'` | `'co-owner'` | `'contributor'` | `'maintainer'`.
  * `startedFrom` *(enum)*: `'scratch'` | `'existing'`.
  * `myShare` *(enum)*: `'lead'` | `'major'` | `'minor'`.
  * `label` *(string)*: e.g., `"Product owner & lead engineer"`.
  * `headline` *(string)*: 1–2 punchy sentences summarizing personal ownership.
  * `scope` *(array of strings)*: Specific subsystems owned.
  * `teamSize` *(number, optional)*: Team member count.

> **Validation Rule**: If `mode != 'owner'` OR `startedFrom == 'existing'`, you **must** supply at least one item in `improvements` (see below).

#### 3. Real User Problem & Benefit Matrix
* `problem`:
  * `statement` *(string)*: Root user problem before this system was built.
  * `evidence` *(enum)*: `'interviews'` | `'observed'` | `'internal-use'` | `'assumption'`.
  * `whoHurts` *(array of strings)*: Affected user roles/personas.
* `benefitMatrix` *(array of objects)*:
  * `persona` *(string)*: Who benefits.
  * `pain` *(string)*: The specific friction.
  * `before` *(string)*: Workflow before.
  * `after` *(string)*: Workflow after.
  * `measure` *(object)*:
    * `metric` *(string)*
    * `from` *(string)*
    * `to` *(string)*
    * `proof` *(enum)*: `'measured'` | `'estimated'` | `'designed'` | `'qualitative'`.
  * `attribution` *(enum)*: `'personal'` | `'team'` | `'product'`.
  * `feature` *(array of strings)*: Submodules involved.

#### 4. Improvements (Required if not solo scratch owner)
* `improvements` *(array of objects)*:
  * `area` *(string)*: e.g., `"Frontend shell bundle size"`.
  * `before` *(string)*: State prior to improvement.
  * `after` *(string)*: Result achieved.
  * `how` *(string)*: Architectural intervention or technique.
  * `measure` *(object)*: `metric`, `from`, `to`, `proof`.
  * `userBenefit` *(string)*: Impact on end user.
  * `attribution` *(enum)*: `'personal'` | `'team'`.

#### 5. Impact Metrics (`myImpact`)
Array of 3–5 numerical KPI pills:
```json
[
  {
    "label": "Tenant isolation",
    "value": "100% RLS",
    "attribution": "personal",
    "detail": "Cross-tenant boundary enforced in PostgreSQL engine"
  }
]
```

#### 6. Tech Stack & Links
* `stack` *(array of strings)*: Flat tag list for cards (e.g. `["Vue 3.5", "Supabase", "TypeScript"]`).
* `techStack` *(object)*: Categorized arrays:
  * `frontend`: string[]
  * `mobile_hardware`: string[]
  * `backend`: string[]
  * `database`: string[]
  * `devops`: string[]
* `links` *(object)*: `liveDemo`, `parentPlatform`, `github`, `docs`. (Leave empty string `""` if proprietary).
* `images` / `visualAssets`: Paths to webp screenshots in `/images/projects/...`.

#### 7. Architecture Decisions & Reliability
* `keyDecisions` *(array)*: 3–5 technical trade-offs:
  * `challenge` *(string)*: Architectural obstacle.
  * `decision` *(string)*: Chosen pattern and trade-off rationale.
  * `outcome` *(string)*: Measured impact.
* `securityReliability` *(array of strings)*: Security postures (e.g., RLS, JWT, audit log).
* `futureRoadmap` *(array of strings)*: Planned technical phases.

---

### B. `vpc.json` (Value Proposition Canvas)
Defines the interactive Strategyzer 6-box canvas rendered under the **Product Context** section:

```json
{
  "labels": {
    "title": "The Value Proposition Canvas",
    "valueProposition": "Platform / Solution Name",
    "customerSegment": "Target Customer Persona"
  },
  "customerJobs": [
    { "title": "Job Title", "note": "What user is trying to accomplish." }
  ],
  "pains": [
    { "title": "Pain Title", "note": "Bottlenecks, risks, or frustrations." }
  ],
  "gains": [
    { "title": "Gain Title", "note": "Positive outcomes and efficiencies." }
  ],
  "productsAndServices": [
    { "title": "Module / Feature", "note": "What system or tool is delivered." }
  ],
  "painRelievers": [
    { "title": "Reliever Title", "note": "How architecture eliminates specific pains." }
  ],
  "gainCreators": [
    { "title": "Creator Title", "note": "How architecture creates outsized gains." }
  ]
}
```

---

### C. `body.json` (Technical Appendix / Deep-Dive)
Contains typed content blocks rendered inside the expandable **Technical Appendix** section:

Supported block types:
1. **`heading`**: `{"type": "heading", "level": 2 | 3, "text": "..."}`
2. **`paragraph`**: `{"type": "paragraph", "text": "Supports **bold**, `code`, and [links](url)"}`
3. **`list`**: `{"type": "list", "ordered": true | false, "items": [{"text": "..."}]}`
4. **`table`**: `{"type": "table", "header": ["Col 1", "Col 2"], "rows": [["A", "B"]]}`
5. **`mermaid`**: `{"type": "mermaid", "code": "flowchart TD\\n..."}`
6. **`code`**: `{"type": "code", "lang": "ts", "code": "..."}`
7. **`quote`**: `{"type": "quote", "text": "..."}`
8. **`divider`**: `{"type": "divider"}`
9. **`comment`**: `{"type": "comment", "text": "Author notes not displayed in UI"}`

---

## 3. How to Extract All Data from Existing Codebases / PRDs

When preparing a project for this portfolio:

1. **Extract Numbers & Metrics**:
   * Inspect git history: number of commits, versioned migrations (`ls supabase/migrations | wc -l`), component count.
   * Quantify performance: initial bundle sizes, test coverage %, database queries or latency reduction.
2. **Determine Ownership (`contribution`)**:
   * Did you build it from `scratch` or inherit an `existing` system?
   * Was your role `owner`, `co-owner`, `contributor`, or `maintainer`?
   * If not `owner` from `scratch`, document at least 1 `improvements` item showing what was broken before and how you improved it.
3. **Identify Architectural Trade-Offs (`keyDecisions`)**:
   * Document 3–4 non-trivial engineering decisions (e.g. SQLite vs PostgreSQL RLS, Client state vs Server RPCs, Polling vs WebSockets).
4. **Draft VPC Sticky Notes (`vpc.json`)**:
   * Define 4–6 jobs, pains, gains, products/services, pain-relievers, and gain-creators using the Strategyzer model.
5. **Prepare Screenshots**:
   * Capture 1920×1080 or responsive mobile frames.
   * Convert to `.webp` and place into `/public/images/projects/<slug>/`.
6. **Validate Schema**:
   * Run `npx astro check` to verify all Zod schemas pass before committing.
