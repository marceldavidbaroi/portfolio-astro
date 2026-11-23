# Developer Tab — Analysis & UX/Content Suggestions

This document analyzes the current **Developer** mode (`?mode=developer`, default on `src/pages/index.astro`) and outlines concrete recommendations for each section based on the existing codebase (`src/components/home/`, `src/content/`, and `src/data/aboutData.ts`).

---

## 1. Quick Actions Bar (`HomeActionsBar.astro`)
**Current state:** Displays `Email me`, `Resume`, `LinkedIn`, and `GitHub`.

**Suggestion:**
- Keep the 4 primary actions (`Email me`, `Resume`, `LinkedIn`, `GitHub`) visible at all times for instant recruiter access.
- Add a **5th toggle button** (e.g., `Coding Profiles` or `More Profiles ▾`) at the end of `.quick-actions-wrap`.
- Clicking it smoothly expands a compact, inline drawer/tray directly below the bar containing:
  - **Competitive & Coding Profiles** (from `src/data/aboutData.ts`: LeetCode, HackerRank, Google Cloud Skills Boost).
  - **Optional Extras:** Quick-copy email button (with `"Copied!"` feedback) or a direct link to `/about` for full bio/awards.
- **Why:** Keeps the above-the-fold bar clean while giving technical interviewers 1-click access to problem-solving and cloud profiles without leaving the homepage.

---

## 2. How I Work (`HomeHowIWork.astro`)
**Current state:** Engineering philosophy & workflow section.

**Suggestion:**
- Keep it concise (3–4 scannable pillars: e.g., *Architecture & Clarity*, *Full-Stack Ownership*, *Performance & DX*).
- Ensure it stays visual/scannable rather than text-heavy so visitors reach **Works** quickly.

---

## 3. Works (`HomeFeaturedWork.astro`)
**Current state:** Showcases top featured software case studies from `src/content/projects/` with a link to `/work`.

**Suggestion:**
- Keep 3–4 strongest software engineering / full-stack projects featured here.
- Each item should highlight the **problem, stack, and measurable outcome**, with a clear `View all works →` link to `/work`.

---

## 4. Experience (`HomeExperienceRail.astro`)
**Your question:** *"not sure all or just the develop"*

**Recommendation: Show only development/engineering roles in the Developer tab (keeping the 3 concurrent entities clearly scoped).**
- **Primary engineering roles (shown on rail):**
  - `01-proficient.md` *(Main Job — Software Engineer, Nov 2024 – Present, Full-time Hybrid)*
  - `02-engineering-labs.md` *(Separate Contract Projects — Software Developer, Q3 2025 – Present, Independent Contractor)*
- **Separate Data Analyst entity (`03-brandwala.md`):** Updated to `role: "Data Analyst"` and `employmentType: "Part-time / Separate Entity"` so it does not conflict with Proficient as a second full-time job. Keep it off the primary software engineering rail (or show as a compact domain-context note) so the Developer timeline stays 100% engineering-focused.
- **Exclude from the main rail:** `04-private-tutoring.md` (this is already the centerpiece of the **Educator** tab).
- **Optional bridge:** Add a subtle, single-line footer note under the rail: *"Also 5+ years of STEM mentoring — switch to the Educator tab →"* (which switches `?mode=educator`).
- **Why:** Tech recruiters and hiring managers scan experience for software engineering signal. Keeping the rail 100% dev-focused—with clean, non-conflicting roles—makes the timeline sharper while still letting curious visitors discover your teaching background.

---

## 5. Certifications *(New / Dedicated Strip)*
**Your goal:** *"certification that are relevant and notable to show. that means featured few and see all."*

**Suggestion:**
- Pull from `src/data/aboutData.ts` (Google Cloud Skills Boost, Credly, freeCodeCamp, LinkedIn Learning).
- **Default view (Featured 4, tagged `featured: true` in `src/data/aboutData.ts`):**
  1. *Prompt Design in Vertex AI* (Google Cloud)
  2. *Responsible AI: Applying AI Principles with Google Cloud* (Google Cloud)
  3. *JavaScript Essentials 2* (Cisco Networking Academy)
  4. *Responsive Web Design* (freeCodeCamp)
- **Expandable "See all":** Include a `See all certifications (6)` button that expands the remaining 2 (*Python Essentials 2*, *Career Essentials in Generative AI*) inline in-place or links to `/about#certifications`.

---

## 6. Education (`HomeEducationStrip.astro`)
**Your goal:** *"education, but don't use card for the education."*

**Suggestion:**
- Remove any card container styling (`background`, `border`, `box-shadow`, `border-radius`, card padding).
- Render Education as a **clean, borderless typographic strip** separated by subtle horizontal hairlines (`1px solid var(--card-border)`) or a simple 2-column editorial row:
  - **B.Sc. in Computer Science & Engineering** — Daffodil International University · `3.91 / 4.00 CGPA` · *2020–2024* (from `src/content/education/bsc-cse.json`)
  - **HSC (Science)** — Notre Dame College · *GPA / Year* (from `src/content/education/hsc-science.json`)
- **Why:** Differentiates Education visually from Projects and Experience, reduces "card fatigue" on the page, and reads like a crisp CV header.

---

## 7. Skills (`HomeSkillsStrip.astro`)
**Current state:** Categorized technical stack.

**Suggestion:**
- Group skills into 3–4 scannable rows/categories (e.g., *Languages*, *Frontend & UI*, *Backend & Databases*, *Cloud & DevOps*) rather than a giant flat tag cloud.
- Keep it compact at the bottom of the Developer tab right before `HomeContactClose`.

---

## Recommended Section Order (Developer Tab)
*Recruiter-optimized order: proof (Works + Experience) before philosophy (How I Work), and core technical signal (Skills) grouped before Certs & Education.*
1. **Hero + Mode Tabs** (`HomeHero` + `HomeModeTabs`)
2. **Quick Actions Bar** (`HomeActionsBar` + expandable *Coding Profiles* drawer)
3. **Works** (`HomeFeaturedWork` — 3–4 strongest engineering case studies)
4. **Experience** (`HomeExperienceRail` — dev roles only, non-conflicting timelines)
5. **How I Work** (`HomeHowIWork` — compact 3–4 pillar strip)
6. **Skills** (`HomeSkillsStrip` — categorized rows)
7. **Certifications** (Featured 3–4 + *See all* toggle)
8. **Education** (`HomeEducationStrip` — borderless typographic strip, no cards)
9. **Contact Close** (`HomeContactClose`)
