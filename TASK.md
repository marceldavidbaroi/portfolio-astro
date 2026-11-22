# Portfolio Data Audit & Remediation Tasks

Audit date: 2026-11-22  
Scope: `src/content/projects/`, `src/content/experience/`, `src/pages/index.astro`, `src/pages/work.astro`, `public/images/projects/`

> **Note for the engineer picking this up:**  
> Every item below explains **what the fault is**, **why it hurts the portfolio**, and **how to fix it**. After any edit to `src/content/`, always run `pnpm export:cv` and `pnpm build` before finishing.

---

## 3. Incomplete Schema & Case Study Gaps

### 3.2 Missing `caseStory` Spine
- **The Fault:** Only `01-tradeflowbd` defines `caseStory` (`platforms`, `modules`, `stackRationale`, `diagrams`). Without `caseStory`, the structured recruiter story spine on `/work/<slug>` does not render (and `toCaseStudyView` in `src/lib/projectView.ts` only enables it for `owner` / `lead` modes).
- **How to Fix:** Add `caseStory` to the top owned/lead projects so recruiters can scan architecture, modules, and stack choices in under 30 seconds.
  - [ ] `02-service-desk`
  - [ ] `03-thrift-inventory`
  - [ ] `15-canteen-app`
  - [ ] `07-pennyperfect`
  - [ ] `16-nidhara`
  - [ ] `04-mindvault`
  - [ ] `06-uniflow`

### 3.3 Missing `myImpact` & Thin Content
- **The Fault:**
  - `02-service-desk` and `04-mindvault` have `myImpact: []`. While `02-service-desk` can fall back to `deriveMyImpact()` from `benefitMatrix`/`improvements`, `04-mindvault` has no `measured` metrics to derive from—so it shows no impact KPIs.
  - `17-private-oms-platform` has `futureRoadmap: []`, no `benefitMatrix`, and only 7 blocks in `body.json`.
  - `09-store-management` has only 8 blocks in `body.json`.
- **How to Fix:**
  - [ ] Add concrete `myImpact` metrics to `04-mindvault/project.json` (and optionally explicit `myImpact` to `02-service-desk/project.json`).
  - [ ] Expand `17-private-oms-platform/body.json` and add `futureRoadmap` once NDA-safe details are ready.
  - [ ] Expand `09-store-management/body.json` with architecture/implementation blocks per `.agents/rules/project-standards.md`.

---

## 4. Portfolio-Level Credibility & Discoverability Gaps

### 4.1 Live Demos & Public Proof
- **The Fault:** **0 of 17 projects** have `links.liveDemo` populated. Recruiters have nothing live to click and test.
- **How to Fix:**
  - [ ] Deploy public/personal projects (`04-mindvault`, `06-uniflow`, `16-nidhara`, `13-kbeauty-dropship`) and add their URLs to `links.liveDemo`.

---

## 5. Post-Edit Verification (Required After Any Content Change)

- [ ] Run `pnpm sync:media` if gallery/media files changed.
- [ ] Run `pnpm export:cv` after any `src/content/` or `scripts/cv-profile.json` edit so `public/master-cv.txt` stays in sync.
- [ ] Run `pnpm build` to verify all Zod schemas and static routes build without errors.
