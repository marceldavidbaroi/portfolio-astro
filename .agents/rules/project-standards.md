# Project Case Study Data Standards & Authoring Rules

This document defines the standard for authoring, updating, and refactoring project case studies. All projects in `src/content/projects/` must follow this schema and structural standard to ensure recruiters, hiring managers, and product leaders can triage candidate competency in under 30 seconds.

---

## 1. The CV-Card & 30-Second Recruiter Triage Framework

Treat every project card on the portfolio as a **top-tier engineering CV / Resume entry**. The project card provides recruiters and hiring managers with a clear accomplishment statement at a glance:

| # | CV Component | Frontmatter Field | Format & Google XYZ Standard |
| :--- | :--- | :--- | :--- |
| **1** | **Job / Project Header** | `title`, `role`, `timeline` | Title + Exact Role + Timeline (e.g. `Lead Migration Engineer · 2025 — Present`). |
| **2** | **The CV Bullet (Google XYZ)** | `description` | **Strict Google XYZ format**: `"Accomplished [X] as measured by [Y], by doing [Z]"` (2–3 punchy lines, ~25–35 words). |
| **3** | **Skills & Tech Tags** | `chip`, `techStack` | Category chip + top 3 technology pills (e.g. `Enterprise ERP`, `Vue 3.5`, `PostgreSQL`). |
| **4** | **Executive Case Study Proof** | `executiveOverview`, `impactMetrics` | Detailed XYZ impact paragraph + 3–6 numeric KPI pills in case study. |
| **5** | **Engineering Trade-offs** | `keyDecisions` | Challenge → Decision (with architectural trade-off) → Measured Impact. |
| **6** | **Product Value Canvas** | `valueProposition` | 2-column matrix: Severe Pains (Before) vs Architectural Gains (After). |
| **7** | **Proof of Work** | `links`, `visualAssets`, `images` | Framed hero interface screenshots + live demo links or proprietary IP badge. |

---

## 2. Mandatory Frontmatter Schema Template

Every markdown file in `src/content/projects/` MUST adhere to this YAML frontmatter structure:

```yaml
---
# 1. CORE IDENTIFIERS & CV CARD SCANNING
id: "01"                                # Two-digit index string ("01", "02", ...)
title: "TradeflowBD – Multi-Tenant Wholesale ERP"
subtitle: "Multi-tenant SaaS ERP with parent-pooled virtual stock allocation and landed cost engine."
# Strict Google XYZ CV Bullet (Accomplished [X], measured by [Y], by doing [Z]):
# Focus on SYSTEM CAPABILITY & BUSINESS VALUE (e.g. Zero Overselling, 100% RLS Isolation), NOT internal trivia (e.g. lines of code or migration count).
description: "Architected a multi-tenant enterprise ERP achieving 100% database RLS isolation and zero-overselling inventory synchronization across 17+ domain modules and 4 application scopes via recursive PostgreSQL policies, ATP algorithms, and atomic RPC transactions."
chip: "Enterprise ERP & SaaS"           # Category chip (e.g. Mobile IoT, FinTech, Full-Stack System)
order: 1
featured: true
platformType: "desktop"                 # "desktop" or "mobile"

# 2. ROLE & LIFECYCLE (CV Subtitle)
role: "Lead Framework & Migration Engineer"
timeline: "2025 — Present"
status: "Active Production"              # "Active Production", "Completed", "Archived"

# 3. CATEGORIZED TECHNOLOGY STACK
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
    - "980+ Versioned Migrations"
    - "Double-Entry Wallet"
  devops:
    - "Cloudflare Pages"
    - "Docker Local Supabase"
  mobile_hardware: []                  # Optional: ML Kit, Capacitor, NFC, BLE

# 4. PROJECT LINKS & PROOF
links:
  liveDemo: "https://example.com"      # Optional: Valid URL only (omit if proprietary/NDA)
  parentPlatform: ""
  github: "https://github.com/..."     # Optional: Public repo URL only
  docs: ""

# 5. VISUAL ASSETS
images:
  - "/images/projects/[slug]/dashboard.png"
  - "/images/projects/[slug]/details.png"
visualAssets:
  heroMockup: "/images/projects/[slug]/dashboard.png"

# 6. EXECUTIVE OVERVIEW (GOOGLE XYZ FORMULA)
# Formula: "Accomplished [X] as measured by [Y], by doing [Z]"
executiveOverview: "Architected a multi-tenant SaaS ERP that enabled wholesale parent corporations to dynamically allocate stock [X], achieving 100% database-enforced RLS isolation across 17+ domain modules and 980+ migrations [Y] by designing PostgreSQL Row-Level Security policies, ATP algorithms, and atomic RPC transactions [Z]."

# 7. QUANTIFIABLE IMPACT METRICS (3 to 6 Items)
impactMetrics:
  - label: "Tenant Data Isolation"
    value: "100%"
    detail: "Database engine enforced via RLS policies"
  - label: "Domain Modules"
    value: "17+"
    detail: "Procurement, Commerce, Finance, Capital"
  - label: "Database Migrations"
    value: "980+"
    detail: "Versioned schema with local Docker replay"
  - label: "Atomic RPCs"
    value: "300+"
    detail: "Server-side transactional financial writes"

# 8. ENGINEERING DECISIONS MATRIX (3 to 5 Technical Trade-offs)
keyDecisions:
  - challenge: "Cross-tenant data leakage between competing sales desks on shared database."
    decision: "Implemented PostgreSQL Row-Level Security (RLS) policies evaluated at database engine level instead of application middleware."
    outcome: "Eliminated application-layer leaks; zero data leakage across multi-tenant scopes."
  - challenge: "Overselling stock across concurrent POS and e-commerce checkouts."
    decision: "Engineered parent-pooled virtual stock allocation algorithms with pessimistic locking RPC transactions."
    outcome: "Eliminated duplicate inventory checkouts and reduced stock reconciliation discrepancies to 0."

# 9. VALUE PROPOSITION CANVAS (Business & User Friction)
valueProposition:
  targetCustomer: "Wholesale Import Conglomerates, Parent Corporations & Sister Sales Desks"
  items:
    - painTitle: "Siloed Stock Counts & Overselling"
      painDescription: "Sister desks counted warehouse stock separately, causing frequent fulfillment delays and stockouts."
      gainTitle: "Parent-Pooled Virtual Allocation (ATP)"
      gainDescription: "Physical stock exists strictly on parent; child sales desks consume real-time virtual slices with zero overselling."
    - painTitle: "Manual Landed Cost Guesswork"
      painDescription: "Customs duties and freight tariffs calculated manually in spreadsheets produced inaccurate margin projections."
      gainTitle: "Automated Landed Cost Engine"
      gainDescription: "Deterministic server-side RPC apportions freight weight and customs fees per SKU at shipment finalization."

# 10. OPTIONAL SECURITY & ROADMAP BULLETS
securityReliability:
  - "PostgreSQL RLS security-definer RPCs for all financial mutations."
  - "JWT bearer token claims validated at DB layer."
futureRoadmap:
  - "Automated multi-region database read replica failover."
  - "GraphQL federation layer for third-party logistics integrations."
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
