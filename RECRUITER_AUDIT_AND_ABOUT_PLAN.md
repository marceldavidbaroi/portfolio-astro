# Recruiter Portfolio Audit & About Page Reorganization Plan

**Document Purpose**: Comprehensive technical recruiter evaluation of all portfolio pages and a step-by-step reorganization blueprint for `src/pages/about.astro` to optimize for the **30-Second Recruiter Triage Standard**.

---

## Part 1: Page-by-Page Recruiter Evaluation

Below is the complete audit of every route in the portfolio from the perspective of a **Senior Technical Recruiter / Engineering Hiring Manager**.

| Page & Route | Primary Role & Audience | What is Good (High Signal) | What Needs to be Changed (Friction & Gaps) | Recruiter Priority |
| :--- | :--- | :--- | :--- | :---: |
| **Home Page**<br>`/`<br>`src/pages/index.astro` | **First Impression & Triage Hook**<br>• Technical Recruiters<br>• Talent Acquisition<br>• Engineering Managers | • Green status beacon with **`AVAILABLE FOR OPPORTUNITIES • DHAKA (UTC+6) • US/EU OVERLAP`** removes remote hiring friction.<br>• Specialized title: **"Full-Stack & Enterprise Systems Engineer"** captures both full-stack breadth and enterprise depth.<br>• Featured project cards strictly adhere to the **Google XYZ format** (`Accomplished [X], measured by [Y], by doing [Z]`).<br>• **Hero 1-Click CTAs**: Prominent primary **"Download Resume (PDF)"** accent button + compact social/contact icon strip (`Email`, `LinkedIn`, `GitHub`, `WhatsApp`) centered below it.<br>• Responsive platform mocks (desktop browser & mobile phone frames) provide instant visual proof of work.<br>• Experience timeline cleanly previews career stages. | • None *(Fully optimized for 30s recruiter triage)* | **COMPLETED** |
| **Work Directory**<br>`/work`<br>`src/pages/work.astro` | **Platform Catalog & Proof of Work**<br>• Engineering Leads<br>• Hiring Managers | • Comprehensive catalog of 14 production platforms and architectural builds.<br>• CV-card layout gives each project the rigor of an executive resume bullet.<br>• Categorized tech pills (`Vue 3.5`, `Quasar`, `PostgreSQL`) allow fast ATS keyword matching.<br>• **Interactive Category Tabs**: `All Work (14)`, `Enterprise SaaS & ERP (4)`, `FinTech & Accounting (4)`, `Mobile & IoT (2)`, `Tools & Architecture (6)` for instant domain filtering.<br>• **Real-Time ATS Keyword Search**: Instant client-side search across titles, descriptions, roles, and full multi-tier tech stack.<br>• **Quick Stack Filter Badges**: 1-click preset pills for Vue 3, PostgreSQL, Next.js, NestJS, Capacitor, Docker, and Firebase. | • None *(Fully optimized for instant ATS keyword triage & domain filtering)* | **COMPLETED** |
| **Case Study Deep Dive**<br>`/work/[slug]`<br>`src/pages/work/[slug].astro` | **Technical Competency & System Design**<br>• VP of Engineering<br>• Lead Architects | • **World-class engineering case study structure.**<br>• Executive Overview with quantified KPI pills.<br>• Architectural Decisions Matrix (`Challenge` → `Decision` with trade-offs → `Outcome`).<br>• Value Proposition Canvas (Severe Pains Before vs. Architectural Gains After).<br>• Clean interactive Table of Contents with quick **"Discuss System →"** action.<br>• **Dynamic Read Time Budget Badges**: Automated word-count based `⏱️ X min read` pills in the top breadcrumb bar, hero badge row, and metadata review box.<br>• **Sticky Recruiter Discussion & Conversion CTA**: High-contrast card at the bottom with 1-click tailored `mailto:` (with pre-filled subject/body for that specific system), LinkedIn, and Resume PDF links.<br>• **Explicit IP & Classification Badges**: Frontmatter-driven `🔒 Proprietary Enterprise IP` vs `🌐 Open Source Architecture` tags on every case study header and review box. | • None *(Fully optimized for executive technical triage & NDA compliance)* | **COMPLETED**<br>*(Gold Standard)* |
| **Master Profile**<br>`/about`<br>`src/pages/about.astro` | **Candidate Identity & Holistic Fit**<br>• Recruiters<br>• Hiring Managers<br>• Culture Screeners | • Metrics ribbon (`3.91 CGPA`, `100% RLS Isolation`, `10+ Shipped Apps`).<br>• High-depth principles (Architecture-first AI synthesis, Zero-trust relational data).<br>• Comprehensive coverage of skills, credentials, and personal pursuits.<br>• **Optimized Recruiter Hierarchy**: Capabilities & Tech Stack appears immediately after Metrics, ahead of Philosophy.<br>• **Executive Hub Architecture**: Clean high-signal previews that cross-link directly to standalone deep-dives (`/credentials`, `/skills`, `/education/bsc-cse`, `/philosophy`, `/archive`) without duplicating raw tables or 1,600+ lines of inline code.<br>• **Senior CS Pedigree in Hero**: Hero highlights B.Sc. in CSE (3.91 CGPA, 142 credits, 6 A+ Practicums) + DenseNet-201 Solo Research Thesis (97.93% accuracy) instead of high school HSC exam scores. | • None *(Fully optimized for 30s recruiter triage & senior positioning)* | **COMPLETED** |
| **Skills Matrix**<br>`/skills`<br>`src/pages/skills/index.astro` | **ATS Keyword Verification & Depth**<br>• Technical Recruiters<br>• Lead Engineers | • Contextual descriptions for each skill rather than a meaningless cloud of logo pills.<br>• Logical categorization into 4 architectural pillars.<br>• Emphasizes enterprise architecture, RLS, and SemVer registries.<br>• Single canonical route `/skills` (removed deprecated `/about/skills` alias). | • Does not differentiate between **Primary Production Stack** (hire me for this today) vs. **Secondary Exposure** (prior tools). | **MEDIUM** |
| **Philosophy Page**<br>`/philosophy`<br>`src/pages/philosophy/index.astro` | **Engineering Culture & Mindset**<br>• VP of Eng<br>• Principal Engineers | • Articulates high-level design ethos: Architecture-First AI synthesis, Defensive RLS, Reusable SemVer packages.<br>• Distinguishes you from junior developers who blindly prompt LLMs. | • Heavily textual; needs mini architectural diagrams, callouts, or pull-quotes.<br>• Needs direct cross-links to project case studies that serve as live proof of each principle. | **LOW** |
| **Verified Credentials**<br>`/credentials`<br>`src/pages/credentials/index.astro` | **Skill Verification & Due Diligence**<br>• Background Checkers<br>• Corporate Recruiters | • Interactive category filters (Google Cloud, Cisco, AI, Management, Web).<br>• Issuer summary counters and direct outbound verification links (Credly/Cert authorities). | • **"Certification Collector" syndrome risk**: 33 badges can dilute your core software engineering identity if intro courses sit beside advanced Google Cloud/Cisco credentials.<br>• Add a **"Featured / High-Rigor"** toggle to highlight top 6 enterprise credentials first. | **MEDIUM** |
| **Academic Pedigree**<br>`/education/[slug]`<br>`src/pages/education/[slug].astro` | **CS Fundamentals Verification**<br>• Technical Recruiters<br>• FAANG/Enterprise Sourcing | • 3.91 CGPA in B.Sc. CSE (Batch 55) is an elite academic signal.<br>• 11-semester transcript proves foundational mastery of Data Structures, Algorithms, RDBMS, and Distributed Systems. | • **The HSC (High School) subpage (`/education/hsc-science`) is unnecessary for international tech recruiters.** High school details dilute senior positioning. Keep B.Sc. as primary and archive HSC. | **HIGH** |
| **Research Publication**<br>`/research/[slug]`<br>`src/pages/research/[slug].astro` | **Analytical Rigor & Applied AI**<br>• AI/ML Hiring Teams<br>• R&D Leads | • Demonstrates deep learning competency (Ekush dataset, DenseNet-201, 16 benchmarked models).<br>• Sole researcher credit proves self-directed research discipline. | • Needs an **"Executive Takeaways in 3 Bullets"** summary card above the abstract for non-academic hiring managers.<br>• Add a prominent **"Download Full Paper (PDF)"** or GitHub repository button in the hero. | **MEDIUM** |
| **Archives & Memoirs**<br>`/archive`<br>`src/pages/archive/index.astro` | **Character, Leadership & EQ**<br>• Executive Hiring<br>• Culture Fit Screeners | • Exceptional personal character: Pope Francis 2017 security protocol volunteer (100k attendees), 2018 student road safety leadership, 3-year classical Tabla discipline.<br>• High EQ, teamwork, and stamina. | • **Framing risk**: Without executive context, international recruiters might mistake it for a personal scrapbook.<br>• Frame as **"Civic Leadership, High-Stakes Operations & Cultural Discipline"**. | **LOW** |

---

## Part 2: Problems with the Current About Page (`about.astro`)

The current `src/pages/about.astro` file spans **1,608 lines** of Astro and CSS. A structural audit reveals four critical recruiter friction points:

```
CURRENT FLOW (Suboptimal for Recruiters):
[Hero Profile] ──> [HSC & B.Sc. Cards in Hero] ──> [Metrics] ──> [Philosophy] ──> [Capabilities] ──> [Academic Pedigree] ──> [Credentials] ──> [Beyond Terminal] ──> [Contact]
```

1. **High School (HSC) Featured in Hero Banner**:
   - Right below the hero bio, a two-card grid highlights Daffodil International University alongside Notre Dame College (HSC).
   - High school qualifications send an immediate junior/student signal to Western and international recruiters.
2. **Inverted Hierarchy (Philosophy Before Tech Stack)**:
   - A recruiter scans for technologies (e.g., Vue 3, PostgreSQL, Node.js) *before* reading 4 paragraphs of architectural philosophy.
   - Putting Philosophy in Section 01 pushes the Technical Skill Matrix down past the second scroll.
3. **Severe Page Duplication with Standalone Directories**:
   - The about page includes full tables and lists of credentials, education, skills, and memoirs that already have dedicated pages (`/credentials`, `/skills`, `/education/bsc-cse`, `/archive`).
   - The page should act as a concise **Executive Hub** that links to deep-dive pages rather than duplicating raw data inline.
4. **Missing 15-Second Executive Triage Block**:
   - Recruiters lack an immediate summary card stating: Target Role, Total Years of Experience, Primary Stack, Location, Work Authorization / Relocation Availability, and direct Resume PDF link.

---

## Part 3: Recommended Reorganized Flow for the About Page

Below is the optimized 8-stage sequence designed specifically for a **30-second recruiter triage**:

```
PROPOSED OPTIMIZED FLOW:
┌────────────────────────────────────────────────────────────────────────┐
│ 01. The Executive Triage Anchor (Hero + Fast Metadata + Resume Button) │
├────────────────────────────────────────────────────────────────────────┤
│ 02. Hard Proof Impact Ribbon (4 Numeric Key Performance Indicators)   │
├────────────────────────────────────────────────────────────────────────┤
│ 03. Core Technical Capabilities Matrix (Prioritized Domain Stacks)     │
├────────────────────────────────────────────────────────────────────────┤
│ 04. Executive Career Trajectory (Google XYZ Landmark Milestones)       │
├────────────────────────────────────────────────────────────────────────┤
│ 05. Engineering Philosophy & Operating Principles (How You Build)      │
├────────────────────────────────────────────────────────────────────────┤
│ 06. Academic Pedigree & Research (B.Sc. CSE 3.91 + Deep Learning)     │
├────────────────────────────────────────────────────────────────────────┤
│ 07. Verified Industry Credentials (Top 4 High-Rigor Badges + Outlink)  │
├────────────────────────────────────────────────────────────────────────┤
│ 08. Beyond the Terminal: Civic Leadership & Creative Discipline        │
├────────────────────────────────────────────────────────────────────────┤
│ 09. Sticky Frictionless Contact & Closing Conversion                   │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Section-by-Section Blueprint & Content Breakdown

#### Section 01: The Executive Triage Anchor (Hero)
* **Goal**: Establish immediate candidate-role fit in under 5 seconds.
* **Key Elements**:
  * **Status Dot**: `[001] AVAILABLE FOR OPPORTUNITIES · REMOTE / RELOCATION`
  * **Name & Title**: `Marcel David Baroi` — `Full-Stack Software Engineer & System Architect`
  * **Executive Bio (2 sentences)**: Focused on enterprise SaaS, multi-tenant relational schemas, and architecture-first full-stack delivery.
  * **15-Second Recruiter Triage Pill Bar**:
    * Location: `Dhaka, BD (UTC+6) • US/EU Overlap`
    * Specialization: `Enterprise SaaS & Distributed Schemas`
    * Work Status: `Full-Time / Contract • Open to Relocation`
  * **Primary CTAs**:
    * `[Download Resume (PDF)]` (High-contrast accent button with SVG icon)
    * `[Email Me]` (`mailto:marceldavidbaroi@gmail.com`)
    * `[LinkedIn]` / `[GitHub]` links

#### Section 02: Hard-Proof Impact Ribbon (`#at-a-glance`)
* **Goal**: Quantify scale, depth, and output before the recruiter reads long text.
* **4 Metric Counters**:
  1. `10+ Platforms Shipped` — *Enterprise ERP, Multi-Tenant SaaS & Mobile*
  2. `100% RLS Data Isolation` — *Zero-Trust Multi-Tenant Database Security*
  3. `+60% Code Reusability` — *Via SemVer Private NPM Package Architectures*
  4. `3.91 / 4.00 CGPA` — *B.Sc. in Computer Science & Engineering (Batch 55)*

#### Section 03: Core Technical Capabilities Matrix (`#capabilities`)
* **Goal**: Match job descriptions and ATS keywords immediately after metrics.
* **Structure**: 4 domain cards with tags and bullet chips:
  1. **System Architecture & Workflow**: Architecture-First AI Synthesis, Relational Data Modeling (3NF), Multi-Tenant RLS Schemas, SemVer Packaging.
  2. **Backend & Relational Data**: PostgreSQL (Indexing, RPCs, Execution Plans), Supabase, PHP (MVC & Costing Routines), Node.js / NestJS, REST APIs.
  3. **Frontend & Mobile Ecosystem**: Vue 3 (Composition API), Quasar Framework, React / Next.js, TypeScript (Strict Contracts), Pinia.
  4. **DevOps & Infrastructure**: Docker, Git Submodules, Monorepos, Tailwind CSS / UI Systems.
* **Outlink**: Secondary button `[Explore Full Skills Catalog & Proficiency Breakdown →]` linking to `/skills`.

#### Section 04: Executive Career Trajectory (`#career-highlights`)
* **Goal**: Narrative proof of enterprise experience following Google's XYZ formula.
* **Format**: 2–3 structured accomplishment cards:
  * **Enterprise SaaS & ERP Systems**: Architected parent-pooled stock allocation and landed cost engines with 100% RLS tenant isolation across 17+ domain modules.
  * **Cross-Platform Mobile & Web Suites**: Engineered unified Quasar/Vue 3 applications backed by private package registries, cutting code duplication by 60%.
* **Outlink**: Button `[View All 12+ Production Case Studies →]` linking to `/work`.

#### Section 05: Engineering Philosophy & Architecture Mindset (`#philosophy`)
* **Goal**: Demonstrate technical maturity, defensive design, and maintainability for Engineering Managers.
* **4 Architectural Tenets**:
  1. `01 // Architecture-First AI Synthesis`: Pre-plan schemas, dependency trees, and strict contracts before prompting code generation.
  2. `02 // Zero-Trust Relational Data`: Enforce data integrity at the database engine level (RLS, constraints, foreign key cascades).
  3. `03 // Atomic Enterprise Reusability`: Extract shared business logic into private SemVer npm packages.
  4. `04 // Measurable Velocity & Longevity`: Self-documenting TypeScript contracts and predictable state architectures.
* **Outlink**: Button `[Read Full Engineering Philosophy →]` linking to `/philosophy`.

#### Section 06: Academic Pedigree & Applied Research (`#academic-pedigree`)
* **Goal**: Formal validation of CS fundamentals and scientific research capability.
* **Card 1: B.Sc. in Computer Science & Engineering (DIU)**:
  * Highlight: CGPA 3.91, CSE Batch 55, 142 credits, 6 consecutive A+ software practicums.
  * Direct Link: `[View Full 11-Semester Academic Transcript →]` to `/education/bsc-cse`.
* **Card 2: Final Year Thesis — Bangla HWCR (DenseNet-201)**:
  * Highlight: Sole researcher, 80,000 Ekush dataset images, 16 benchmarked deep learning models, 97.93% accuracy.
  * Direct Link: `[Read Research Paper & Benchmarks →]` to `/research/01-bangla-hwcr-ekush`.
* *Note on HSC*: Omit large promotional banners for high school (Notre Dame College) on this master page; reference it subtly in the educational summary or archive.

#### Section 07: Verified Industry Credentials (`#credentials`)
* **Goal**: Prove continuous learning and enterprise certifications without badge spam.
* **Content**: Show **4 high-rigor credentials** only:
  1. Google Cloud Certified / Enterprise AI
  2. Cisco Networking Academy (Enterprise Networking)
  3. Generative AI Architecture / DeepLearning.AI
  4. Advanced TypeScript & Full-Stack Systems
* **Outlink**: Button `[View All 33 Verified Credentials & Credly Records →]` linking to `/credentials`.

#### Section 08: Beyond the Terminal: Civic Leadership & Creative Craft (`#beyond-terminal`)
* **Goal**: High EQ, leadership under pressure, and creative focus.
* **3 Dimension Cards**:
  1. **High-Stakes Diplomatic Protocol**: Core volunteer for Pope Francis 2017 visit (Papal Mass of 100,000 attendees & youth assembly).
  2. **Civic Responsibility & Organization**: Student Road Safety Movement 2018 (Emergency corridor management, transport safety governance).
  3. **Classical Indian Percussion (Tabla)**: 3 years formal training (2015–2017) in complex mathematical rhythm cycles (Taal) and timing discipline.
* **Outlink**: Button `[Explore Preserved Memoirs & College Archives →]` linking to `/archive`.

#### Section 09: Frictionless Contact & Closing CTA (`#collaboration`)
* **Goal**: Zero-dropoff conversion to interview/email.
* **Content**:
  * Heading: `Let's Build Something Resilient`
  * Subtext: `Available for full-stack engineering roles, system architecture design, and high-impact SaaS platforms.`
  * Action Buttons:
    * `[Email Me Directly]` (`marceldavidbaroi@gmail.com`)
    * `[Connect on LinkedIn]`
    * `[Download Resume (PDF)]` (Repeated here so recruiters don't need to scroll back up)

---

## Part 4: Technical Refactoring Roadmap for `about.astro`

To transform the current monolithic 1,608-line file into a clean, maintainable architecture:

1. **Extract Reusable Subcomponents into `src/components/about/`**:
   - `AboutHero.astro` (Hero, triage pills, resume button)
   - `AboutMetrics.astro` (4-card metric strip)
   - `AboutCapabilities.astro` (Domain skill cards)
   - `AboutPhilosophy.astro` (4 engineering principles)
   - `AboutEducationResearch.astro` (DIU transcript card + Thesis card)
   - `AboutCredentialsPreview.astro` (Top 4 verified credentials)
   - `AboutBeyondCode.astro` (Civic leadership & tabla)
2. **Centralize Shared Data in `src/data/`**:
   - Move inline metric arrays and principles out of `about.astro` into `src/data/aboutData.ts` to keep page templates declarative and concise (< 200 lines).
3. **Consolidate Duplicate CSS**:
   - Replace redundant local styling with the global design tokens defined in `src/styles/` to maintain typography and spacing consistency across all pages.

---

## Part 5: Cross-Site Enhancements for Multi-Persona Visitors

To maximize conversion across every stakeholder who lands on the portfolio—from **30-second recruiters** to **rigorous VP of Engineering interviewers**, **non-technical founders**, and **fellow developers**—implement these cross-cutting upgrades:

### 1. Recruiter & Talent Sourcer Enhancements (Zero-Friction Conversion)
* **Persistent "Resume (PDF)" in Global Header**:
  * *Current state*: Global header navigation contains only `Home`, `Work`, `About`, and raw social links.
  * *Upgrade*: Add a high-contrast, persistent **"Resume"** button with a download/external icon on the right side of the navbar across all pages. A recruiter deep in a project case study should never have to backtrack to get your CV.
* **1-Click "Copy Email" with Instant Feedback**:
  * *Current state*: Email links use standard `mailto:`, which frequently opens the wrong default desktop application (e.g., Apple Mail instead of browser Gmail).
  * *Upgrade*: Pair email links with a 1-click clipboard icon that copies `marceldavidbaroi@gmail.com` and displays a `"Copied!"` micro-tooltip.
* **Timezone & Work Authorization Badge**:
  * International and US/EU remote recruiters need immediate answers regarding logistics.
  * Add a subtle status pill in the hero and footer:
    * *Working Hours*: `Based in Dhaka (UTC+6) · 4–5 hrs overlap with US East & EU CET`
    * *Authorization / Availability*: `Available for Full-Time · Remote / Relocation`
* **ATS-Scannable Plain-Text CV Link**:
  * In addition to a styled graphical PDF, provide a direct link to an ATS-optimized plain-text version for corporate talent acquisition databases.

---

### 2. Engineering Manager, CTO & Lead Architect Enhancements (Proof of Depth)
* **Proprietary Enterprise IP Badges & Architecture Diagrams**:
  * When projects cannot have public GitHub repositories (due to commercial confidentiality or client NDA), explicitly flag them:
    `🔒 Enterprise IP · Proprietary / Production Only`
  * Compensate for private code by embedding **Mermaid.js architectural diagrams** (e.g., frontend client → RLS isolation layer → PostgreSQL RPC transactions → double-entry ledger). This conclusively proves deep architectural ownership without breaching IP.
* **10–15 Second Screen Recordings / Interactive GIF Demos**:
  * Recruiters and busy CTOs rarely log in to external staging apps or create mock accounts.
  * Embed 10–15 second high-framerate, silent WebP screen recordings or animated demos showing complex interactions (e.g., parent-pooled inventory updates in real time, live barcode scanning).
* **Connect Experience Entries Directly to Case Studies**:
  * In the homepage **Experience** section (`#experience`), each company card should link directly to the corresponding case study:
    `Associated Production Case Study: TradeflowBD ERP →`
  * Eliminates any disconnect between resume dates and concrete technical deliverables.

---

### 3. Non-Technical Founder & Client Enhancements (Business ROI)
* **"Before vs. After" Business Outcome Callouts**:
  * Non-technical stakeholders care less about query optimization and more about operational throughput.
  * Lead each project case study with a prominent business gain box:
    * *Before*: Manual stock reconciliation required 12 hours weekly with an 8% inventory drift.
    * *After*: Automated landed cost calculations and real-time ATP checks eliminated stockouts and saved 15+ hours/week.
* **Production Uptime & System Reliability Badges**:
  * Showcase mission-critical stability: `99.9% Uptime in Production`, `Zero Schema Drift Across 980+ Migrations`, `100% RLS Tenant Isolation`.

---

### 4. Technical SEO, Link Sharing & Social Previews (Slack / LinkedIn Unfurl)
* **OpenGraph & Twitter Card Metadata in `BaseLayout.astro`**:
  * Currently, `src/layouts/BaseLayout.astro` only specifies `<title>` and `<meta name="description">`.
  * When links are shared in internal Slack channels (`#engineering-hiring`) or LinkedIn messages, they must render an attractive rich card:
    ```html
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={Astro.url} />
    <meta property="og:image" content="/og-preview.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/og-preview.png" />
    ```
* **Dedicated 1200x630 Social Preview Image (`public/og-preview.png`)**:
  * High-craft dark-mode banner featuring name, headline (*"Full-Stack Software Engineer & System Architect"*), core stack pills, and key metrics (*"3.91 CGPA · 10+ Shipped Platforms"*).
* **Schema.org JSON-LD Structured Data**:
  * Add a `<script type="application/ld+json">` Person schema to help Google accurately index your credentials, alumni status, and professional engineering titles.

---

### 5. Interactive & UX Polish (High-Craft Developer Signals)
* **Interactive Domain & Stack Filter on `/work` [COMPLETED]**:
  * Added 5 interactive domain tabs: `All Work (14)`, `Enterprise SaaS & ERP (4)`, `FinTech & Accounting (4)`, `Mobile & IoT (2)`, `Tools & Architecture (6)`.
  * Added real-time ATS keyword search bar + 7 quick-toggle stack pills (`Vue 3 / Quasar`, `PostgreSQL / RLS`, `Next.js / React`, `NestJS`, `Capacitor / Android`, `Docker`, `Firebase`).
  * Instant client-side DOM filtering with zero page reloads, counter badges, and empty-state fallback.
* **Quick Keyboard Command Menu (`Cmd + K` / `Ctrl + K`)**:
  * A lightweight shortcut modal allowing tech-savvy visitors to type `resume`, `projects`, `skills`, `email`, or `linkedin` for instant navigation. Demonstrates frontend ergonomics and design taste.
* **Estimated Reading Time on Long-Form Case Studies [COMPLETED]**:
  * Dynamic word-count computation (200 wpm) calculating reading budget for the markdown body and all structured frontmatter modules (Executive overview, Key decisions, KPI metrics, Value proposition).
  * Prominently displayed in 3 key triage locations on `/work/[slug]`:
    1. Top navigation breadcrumb bar pill with clock icon (e.g., `⏱️ 4 min read`)
    2. Case study header badge row alongside category chips
    3. `Recruiter Review Budget` metadata card displaying exact reading time and total word count.

---

## Part 6: Global Strategic Implementation Priority Matrix

| Phase | Upgrade Task | Target File(s) | Impacted Persona | Estimated Effort | Recruiter Priority | Status |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: |
| **Phase 1** | **Add Persistent "Resume (PDF)" button to Global Header** | `src/layouts/BaseLayout.astro` | Technical Recruiters, Sourcers | 10 mins | **CRITICAL** | Pending |
| **Phase 1** | **OpenGraph & Twitter Card Social Preview Meta Tags** | `src/layouts/BaseLayout.astro`<br>`public/og-preview.png` | Sourcing Teams on Slack / LinkedIn | 30 mins | **HIGH** | Pending |
| **Phase 1** | **Add 1-Click "Copy Email" with Tooltip Feedback** | `src/layouts/BaseLayout.astro`<br>`src/pages/about.astro` | All Visitors | 15 mins | **HIGH** | Pending |
| **Phase 2** | **Reorganize `about.astro` to 9-Stage Recruiter Flow** | `src/pages/about.astro`<br>`src/components/about/*` | Hiring Managers, Recruiters | 2 hours | **HIGH** | **COMPLETED** |
| **Phase 2** | **Add Interactive Category / Stack Filter to `/work`** | `src/pages/work.astro` | Technical Recruiters, Leads | 45 mins | **HIGH** | **COMPLETED** |
| **Phase 3** | **Link Homepage Experience Timeline directly to Case Studies** | `src/pages/index.astro` | Engineering Managers, Leads | 20 mins | **MEDIUM** | Pending |
| **Phase 3** | **De-emphasize High School (HSC) & Highlight B.Sc. + Thesis** | `src/pages/index.astro`<br>`src/pages/about.astro` | International Recruiters | 25 mins | **HIGH** | Pending |
| **Phase 4** | **Add Architecture Flowcharts (Mermaid.js) to Private IP Projects** | `src/content/projects/*.md` | VP of Eng, Principal Architects | 1.5 hours | **HIGH** | Pending |
| **Phase 4** | **Add Quick Keyboard Command Menu (`Cmd + K`)** | `src/components/CommandMenu.astro` | Fellow Developers, Product Leads | 1.5 hours | **MEDIUM** | Pending |

