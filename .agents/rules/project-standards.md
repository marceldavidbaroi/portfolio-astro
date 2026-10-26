# Project Case Study Data Standards & Authoring Rules

This document defines the standard for authoring, updating, and refactoring project case studies. All projects live in `src/content/projects/<slug>/` with `project.json`, `body.json`, and optional `vpc.json`. All files are validated by Zod schemas to ensure recruiters, hiring managers, and product leaders can triage candidate competency in under 30 seconds.

---

## 1. The CV-Card & 30-Second Recruiter Triage Framework

Treat every project card on the portfolio as a **top-tier engineering CV / Resume entry**. The project card provides recruiters and hiring managers with a clear accomplishment statement at a glance:

| # | CV Component | Project JSON Field | Format & Google XYZ Standard |
| :--- | :--- | :--- | :--- |
| **1** | **Job / Project Header** | `title`, `role`, `timeline` | Title + Exact Role + Timeline (e.g. `Lead Migration Engineer · 2025 — Present`). |
| **2** | **The CV Bullet (Google XYZ)** | `description` | **Strict Google XYZ format**: `"Accomplished [X] as measured by [Y], by doing [Z]"` (2–3 punchy lines, ~25–35 words). |
| **3** | **Skills & Tech Tags** | `chip`, `techStack` | Category chip + top 3 technology pills (e.g. `Enterprise ERP`, `Vue 3.5`, `PostgreSQL`). |
| **4** | **Executive Case Study Proof** | `executiveOverview`, `impactMetrics` | Detailed XYZ impact paragraph + 3–6 numeric KPI pills in case study. |
| **5** | **Engineering Trade-offs** | `keyDecisions` | Challenge → Decision (with architectural trade-off) → Measured Impact. |
| **6** | **Product Value Canvas** | `valueProposition` or `vpc.json` | 2-column matrix: Severe Pains (Before) vs Architectural Gains (After). |
| **7** | **Proof of Work** | `links`, `visualAssets`, `images` | Framed hero interface screenshots + live demo links or proprietary IP badge. |

---

## 2. Mandatory Project JSON Structure

Every project directory in `src/content/projects/<slug>/` MUST contain:
- `project.json`: Metadata, ownership, metrics, decisions, and product specs.
- `body.json`: Typed narrative blocks (`heading`, `paragraph`, `list`, `table`, `mermaid`, `code`, `quote`).
- `vpc.json` (optional): Value Proposition Canvas customer profile & value map.

Example `project.json`:

```json
{
  "id": "01",
  "title": "TradeflowBD – Multi-Tenant Wholesale ERP",
  "subtitle": "Multi-tenant SaaS ERP with parent-pooled virtual stock allocation and landed cost engine.",
  "description": "Architected a multi-tenant enterprise ERP achieving 100% database RLS isolation and zero-overselling inventory synchronization across 17+ domain modules and 4 application scopes via recursive PostgreSQL policies, ATP algorithms, and atomic RPC transactions.",
  "chip": "Enterprise ERP & SaaS",
  "order": 1,
  "featured": true,
  "platformType": "desktop",
  "role": "Lead Framework & Migration Engineer",
  "timeline": "2025 — Present",
  "status": "Active Production",
  "classification": "🔒 Proprietary Enterprise IP",
  "contribution": {
    "mode": "owner",
    "startedFrom": "scratch",
    "myShare": "lead",
    "teamSize": 4,
    "label": "Product Owner & Lead",
    "headline": "Architected a multi-tenant enterprise ERP across four login surfaces and parent/child tenants.",
    "scope": [
      "Schema split, migration ordering, and local replay",
      "Money-kernel alignment across wholesale, shop, dropship, and inbound AP"
    ]
  }
}
```
# Strict Google XYZ CV Bullet (Accomplished [X], measured by [Y], by doing [Z]):
# Focus on SYSTEM CAPABILITY & BUSINESS VALUE (e.g. Zero Overselling, 100% RLS Isolation), NOT internal trivia (e.g. lines of code or migration count).
description: "Architected a multi-tenant enterprise ERP achieving 100% database RLS isolation and zero-overselling inventory synchronization across 17+ domain modules and 4 application scopes via recursive PostgreSQL policies, ATP algorithms, and atomic RPC transactions."
chip: "Enterprise ERP & SaaS"           # Category chip (e.g. Mobile IoT, FinTech, Full-Stack System)
order: 1
featured: true
platformType: "desktop"                 # "desktop" or "mobile"

# 2. ROLE, OWNERSHIP & LIFECYCLE
role: "Lead Framework & Migration Engineer"
timeline: "2025 — Present"
status: "Active Production"              # "Active Production", "Completed", "Archived"
classification: "🔒 Proprietary Enterprise IP"

# Ownership Schema
contribution:
  mode: owner                          # 'owner' | 'co-owner' | 'contributor' | 'maintainer'
  startedFrom: scratch                 # 'scratch' | 'existing'
  myShare: lead                        # 'lead' | 'major' | 'minor'
  teamSize: 4                          # Exact team count (omit with # TODO(me) if not verified)
  label: "Product Owner & Lead"
  headline: "Architected a multi-tenant enterprise ERP across four login surfaces and parent/child tenants."
  scope:
    - "Schema split, migration ordering, and local replay"
    - "Money-kernel alignment across wholesale, shop, dropship, and inbound AP"

# 3. REAL USER PROBLEM
problem:
  statement: "Wholesale import groups run parent holdings, sister desks, and resellers on disconnected spreadsheets, causing overselling and mis-reported courier COD."
  evidence: internal-use               # 'interviews' | 'observed' | 'internal-use' | 'assumption'
  whoHurts:
    - "import-operator"
    - "shop-buyer"
    - "dropship-reseller"
    - "capital-partner"

# 4. USER BENEFIT MATRIX (Replaces legacy valueProposition)
benefitMatrix:
  - persona: "Import / Wholesale Operator"
    pain: "Overselling across sales channels"
    before: "Wholesale desk and shop carts share stock without a single ATP pool."
    after: "One warehouse quantity enforced by server-side issue/pick RPCs."
    measure:
      metric: "Channel ATP consistency"
      from: "Desynced per-channel spreadsheets"
      to: "Single warehouse ATP pool"
      proof: designed                  # 'measured' | 'estimated' | 'designed' | 'qualitative'
    attribution: personal              # 'personal' | 'team' | 'product'
    feature:
      - "Wholesale"
      - "Shop"
      - "Dropship"

# 5. WHAT I IMPROVED (Required if mode != 'owner' OR startedFrom == 'existing')
improvements:
  - area: "Frontend shell bundle size"
    before: "Monolithic CSS and synchronous libraries loaded on initial shell"
    after: "Route-level CSS split and lazy heavy libs (Mermaid, ExcelJS)"
    how: "Route-level code splitting and dynamic ESM imports"
    measure:
      metric: "First-load CSS reduction"
      from: "100% monolithic shell CSS"
      to: "~67% reduction on initial shell"
      proof: measured                  # 'measured' | 'estimated' | 'designed' | 'qualitative'
    userBenefit: "Faster initial dashboard load on cellular connections"
    attribution: personal              # 'personal' | 'team'
    ref: "https://github.com/..."      # Optional PR/commit link

# 6. CATEGORIZED TECHNOLOGY STACK
techStack:
  frontend:
    - "Vue 3.5"
    - "Quasar 2"
    - "TypeScript"
    - "Pinia"
  backend:
    - "Supabase (PostgreSQL 15+)"
    - "Row-Level Security (RLS)"
    - "Atomic RPCs"
  database:
    - "PostgreSQL 15+"
    - "1,330+ Versioned Migrations"
  devops:
    - "Cloudflare Pages"
    - "Docker Local Supabase"
  mobile_hardware: []

# 7. PROJECT LINKS & PROOF
links:
  liveDemo: "https://example.com"      # Optional: Valid URL only (omit if proprietary/NDA)
  parentPlatform: ""
  github: "https://github.com/..."     # Optional: Public repo URL only
  docs: ""

# 8. VISUAL ASSETS
images:
  - "/images/projects/[slug]/dashboard.webp"
  - "/images/projects/[slug]/details.webp"
visualAssets:
  heroMockup: "/images/projects/[slug]/dashboard.webp"

# 9. ENGINEERING DECISIONS MATRIX (3 to 5 Technical Trade-offs)
keyDecisions:
  - challenge: "Cross-tenant data leakage between competing sales desks on shared database."
    decision: "Implemented PostgreSQL Row-Level Security (RLS) policies evaluated at database engine level."
    outcome: "Eliminated application-layer leaks; zero data leakage across multi-tenant scopes."
  - challenge: "Overselling stock across concurrent POS and e-commerce checkouts."
    decision: "Engineered parent-pooled virtual stock allocation algorithms with pessimistic locking RPC transactions."
    outcome: "Eliminated duplicate inventory checkouts."

# 10. SECURITY & ROADMAP BULLETS
securityReliability:
  - "PostgreSQL RLS security-definer RPCs for all financial mutations."
  - "JWT bearer token claims validated at DB layer."
futureRoadmap:
  - "Automated multi-region database read replica failover."
---
```

---

## 3. Markdown Body Structure Rules

The body content below the frontmatter should read like an engineering design doc, following this canonical heading order:

```markdown
## System Architecture & Domain Scope
Explain the high-level architecture (Page → Store → Service → Repository), application scopes, and domain boundaries.

## Core Engineering Innovations
Deep-dive into 2–3 complex systems you personally designed (with database schema snippets, code blocks, or RPC logic).

## Database Design & Concurrency
Explain migration patterns, ACID transactions, isolation levels, and data integrity guarantees.

## Performance Benchmarks & Reliability
Present load test results, query optimization wins, or memory profile improvements with concrete numbers.

## Lessons Learned & Architectural Retrospective
Explain what worked well, what trade-offs were made, and what you would architect differently today.
```

---

## 4. Writing Quality Checklist for Projects

- [ ] **No Fluff / Buzzwords:** Avoid "passionate developer", "hard worker", "built modern app". Use concrete engineering verbs: *Architected, Engineered, Implemented, Decomposed, Apportioned, Profiled, Migrated*.
- [ ] **Hard Numbers Everywhere:** Every case study must include numbers (e.g. `980+ migrations`, `470+ Vue components`, `100% RLS`, `<150ms latency`).
- [ ] **STAR / XYZ Format:** Ensure the executive overview strictly follows Google's XYZ formula.
- [ ] **No Broken Links:** If a project repository is private or under NDA, omit the link or mark it clearly as proprietary commercial IP rather than pointing to a dead/dummy URL.
