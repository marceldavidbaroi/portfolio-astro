# Portfolio Data Audit & Remediation Tasks

Audit date: 2026-11-22  
Scope: `src/content/projects/`, `src/content/experience/`, `src/pages/index.astro`, `src/pages/work.astro`, `public/images/projects/`

---

## 1. Ordering, Featured & Narrative Consistency

### 1.1 Folder Prefix vs. `order` Drift
- [x] Reconcile folder numbering and `order` values in `src/content/projects/`:
  - `17-private-oms-platform/project.json` had `order: 4`, shifting `04-mindvault` through `16-nidhara` to `order: 5`–`17`.
  - Aligned `order` in `04-mindvault` through `17-private-oms-platform` to match each folder's prefix (`4`–`17`) without renaming folders or breaking `/work/<slug>` links.

### 1.2 Timeline & Priority Ordering
- [ ] Review `order` on active 2026 projects currently buried near the bottom of `/work`:
  - `15-canteen-app` (`2026 — Present`, `featured: true`) is `order: 16`.
  - `10-supercards` (`2024 — Present`, `featured: true`) is `order: 11`.
  - `09-store-management` (`Feb 2026 — Apr 2026`) is `order: 10`.
- [ ] Re-evaluate `17-private-oms-platform` (`Nov 2026 — Present`, `contributor/existing/minor`, 0 images, 7 body blocks) sitting at `order: 4` ahead of solo-owned flagship builds (`04-mindvault`, `06-uniflow`, `16-nidhara`).

### 1.3 `featured` Flag vs. Homepage `focused` List
- [x] Aligned `featured` flags in `project.json` with `src/pages/index.astro`:
  - `src/pages/index.astro` now derives `focused` dynamically from `featured: true` sorted by `order` (`.slice(0, 3)`).
  - Set `featured: true` exclusively on the top 3 projects (`01-tradeflowbd`, `02-service-desk`, `03-thrift-inventory`) and `featured: false` on the rest.

### 1.4 Experience vs. Project Narrative Mismatch (BrandWala)
- [ ] Reconcile the BrandWala story across experience and project files:
  - `src/content/experience/03-brandwala.md` describes the role as `"Operations & Data Specialist"` managing Excel spreadsheets with `relatedProjects: []`.
  - `src/content/projects/13-kbeauty-dropship/project.json` is titled `"BrandWala Retail – Market-Aware Cross-Border Commerce Platform"` with `role: "Lead Full-Stack & Systems Engineer"`, `featured: true`, and `links.github: "https://github.com/david-git-2/brand-wala-retail"` (different GitHub handle from `marceldavidbaroi` in `scripts/cv-profile.json`), and is linked from `src/content/experience/02-engineering-labs.md`.

---

## 2. Missing & Broken Visual Assets

### 2.1 Broken Image Paths (Referenced in `project.json` but Missing in `public/`)
- [ ] `06-uniflow`: `/images/projects/uniflow/dashboard.webp` does not exist on disk.
- [ ] `15-canteen-app`: `/images/projects/canteen/canteen-pos-hero.webp`, `shift-cashbook.webp`, and `customer-ledger.webp` do not exist (`public/images/projects/canteen/` is missing).
- [ ] `16-nidhara`: `/images/projects/nidhara/swagger.webp` does not exist (`public/images/projects/nidhara/` is empty).

### 2.2 Projects with No Images
- [ ] `04-mindvault`: `images: []`, `visualAssets.heroMockup` not set.
- [ ] `17-private-oms-platform`: `images: []`, `visualAssets.heroMockup` not set.

### 2.3 Placeholder `/images/dummy-project.png` Still in Use
Note: `src/pages/work/[slug].astro` filters out paths containing `dummy`, so these projects render with zero screenshots on their detail pages.
- [ ] `05-modular-packaging`
- [ ] `09-store-management`
- [ ] `10-supercards` (`featured: true`)
- [ ] `12-brac-social`
- [ ] `13-kbeauty-dropship` (`featured: true`)

---

## 3. Incomplete Schema & Case Study Gaps

### 3.1 Legacy `contribution` & Missing `problem` / `benefitMatrix` / `vpc.json`
11 of 17 projects still use legacy `contribution.mode` values (`specialist`, `core`, `lead`) and lack `startedFrom`, `myShare`, `problem`, `benefitMatrix`, and `vpc.json`:
- [ ] `03-thrift-inventory` (`featured: true`)
- [ ] `05-modular-packaging`
- [ ] `07-pennyperfect` (featured on homepage)
- [ ] `08-docstach`
- [ ] `09-store-management`
- [ ] `10-supercards` (`featured: true`)
- [ ] `11-quizzes-streaming` (`featured: true`)
- [ ] `12-brac-social`
- [ ] `13-kbeauty-dropship` (`featured: true`)
- [ ] `14-microfinance-loan-app`
- [ ] `15-canteen-app` (`featured: true`)

### 3.2 Missing `caseStory` Spine
- [ ] Only `01-tradeflowbd` currently defines `caseStory` (`platforms`, `modules`, `stackRationale`, `diagrams`). Add `caseStory` to at least the top featured / owner projects (`02-service-desk`, `03-thrift-inventory`, `04-mindvault`, `06-uniflow`, `07-pennyperfect`, `15-canteen-app`, `16-nidhara`).

### 3.3 Missing `myImpact` & Thin Sections
- [ ] `02-service-desk`: `myImpact: []` (relies on derived metrics from `benefitMatrix`/`improvements`).
- [ ] `04-mindvault`: `myImpact: []` and no `measured` metrics to derive from.
- [ ] `17-private-oms-platform`: `futureRoadmap: []`, no `benefitMatrix`, no `vpc.json`, and only 7 blocks in `body.json`.
- [ ] `09-store-management`: thin `body.json` (8 blocks).

---

## 4. Portfolio-Level Credibility & Discoverability Gaps

### 4.1 Live Demos & Public Proof
- [ ] **0 of 17 projects** have `links.liveDemo` populated. Deploy or link live demos/sandboxes for public/personal builds (`04-mindvault`, `06-uniflow`, `16-nidhara`, `13-kbeauty-dropship`).
- [ ] `03-thrift-inventory` sets `links.github` to the profile root (`https://github.com/marceldavidbaroi`) instead of a specific repo or omitting it per `.agents/rules/project-standards.md`.

### 4.2 Stack Filter Bar Coverage
- [ ] Update `stackLinks` in `src/pages/work.astro` to include `Flutter` and `PHP` / `Laravel`, which are core skills in `scripts/cv-profile.json` and used in flagship projects (`15-canteen-app`, `02-service-desk`, etc.) but missing from the quick-filter chips.

---

## 5. Post-Edit Verification

- [ ] Run `pnpm sync:media` if gallery/media files changed.
- [ ] Run `pnpm export:cv` after any `src/content/` or `scripts/cv-profile.json` changes to keep `public/master-cv.txt` in sync.
- [ ] Run `pnpm build` (or `astro check`) to verify all Zod schemas and routes pass cleanly.
