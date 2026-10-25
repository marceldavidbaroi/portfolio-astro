---
id: "04"
title: "MindVault – Multi-User Personal Finance Ledger Platform"
subtitle: "Full-stack personal finance app with an immutable decimal-precise ledger, per-account roles and pre-aggregated analytics, built as a self-directed learning project."
# Google XYZ: Accomplished [X], measured by [Y], by doing [Z]
description: "Engineered a full-stack personal finance platform with an immutable, decimal-precise ledger, measured by 89 REST endpoints, 24 entities and 82 tests, via a NestJS/TypeORM API, pre-aggregated summaries and a Next.js client."
chip: "Full-Stack FinTech"
order: 4
featured: false
platformType: "desktop"

# ROLE, OWNERSHIP & LIFECYCLE
role: "Solo Full-Stack Engineer"
timeline: "Oct 2025 — Dec 2025"
status: "Completed"
classification: "Personal Self-Learning Project"

contribution:
  mode: owner
  startedFrom: scratch
  myShare: lead
  teamSize: 1
  label: "Solo Developer · Self-Learning Project"
  headline: "Designed and built the entire platform alone, backend and frontend, to learn production-style NestJS, PostgreSQL and Next.js architecture."
  scope:
    - "NestJS 11 backend: 11 modules, 22 controllers, 28 services, 24 TypeORM entities"
    - "Arbitrary-precision ledger engine and incremental summary pipeline"
    - "JWT, passkey and security-question auth with session tracking"
    - "Account-level RBAC (Owner, Admin, Editor, Viewer)"
    - "Next.js 15 App Router client: 32 pages, 11 Zustand stores, 10 API services"
    - "Seeder CLI, Docker setup and 82 automated test cases"
  outOfScope:
    - "No production deployment or real end-users (learning project)"

# REAL USER PROBLEM
problem:
  statement: "Personal finance tools suffer from floating-point balance drift, opaque balance edits, all-or-nothing sharing and dashboards that slow down as transaction history grows."
  evidence: assumption                    # self-directed project, no user research
  whoHurts:
    - "individual-account-owner"
    - "shared-account-collaborator"

# USER BENEFIT MATRIX
benefitMatrix:
  - persona: "Individual Account Owner"
    pain: "Balances that drift or change without a trace"
    before: "Floating-point arithmetic and in-place edits make reconciliation unreliable."
    after: "decimal.js arithmetic with non-negative balance checks and an append-only AccountLedger audit trail."
    measure:
      metric: "Balance arithmetic"
      from: "IEEE 754 floating-point"
      to: "Arbitrary-precision decimals"
      proof: designed
    attribution: personal
    feature:
      - "Ledger Engine"
      - "AccountLedger Audit Trail"
  - persona: "Shared-Account Collaborator"
    pain: "Sharing means giving full access or duplicating accounts"
    before: "A single global role applies to every account a user touches."
    after: "Per-account roles (Owner, Admin, Editor, Viewer) enforced by NestJS guards via AccountUserRole."
    measure:
      metric: "Permission scope"
      from: "Global role only"
      to: "Per-account role"
      proof: designed
    attribution: personal
    feature:
      - "Account RBAC"
      - "Role Guards"
  - persona: "Dashboard Viewer"
    pain: "Analytics slow down as history grows"
    before: "Trend charts run SUM and GROUP BY scans over all transactions."
    after: "Daily, weekly, monthly, yearly and category summaries updated transactionally on each write."
    measure:
      metric: "Analytics read path"
      from: "On-demand aggregation over raw transactions"
      to: "Reads from 6 pre-aggregated summary entities"
      proof: designed
    attribution: personal
    feature:
      - "Summary Engine"
      - "Trend Charts"

# PRODUCT CONTEXT & VALUE PROPOSITION CANVAS
product:
  summary: "A self-built, multi-user personal finance platform that keeps balances exact, edits auditable and sharing granular, with fast analytics from pre-aggregated summaries."
  tagline: "Exact balances, auditable history, per-account sharing."
  problem: "Personal finance tools suffer from floating-point balance drift, opaque balance edits, all-or-nothing sharing and dashboards that slow down as transaction history grows."
  valueProposition:
    targetCustomer: "Individuals & Families Managing Multiple Accounts"
    showCanvas: true
    items:
      - painTitle: "Balance Drift & Hidden Edits"
        painDescription: "Floating-point math and silent edits make balances hard to reconcile."
        gainTitle: "Exact, Auditable Ledger"
        gainDescription: "decimal.js math, non-negative checks and an append-only AccountLedger trail."
      - painTitle: "All-or-Nothing Sharing"
        painDescription: "Sharing with family means full access or duplicated accounts."
        gainTitle: "Per-Account Roles"
        gainDescription: "Owner, Admin, Editor and Viewer roles set per account, not globally."
      - painTitle: "Slow Dashboards Over Time"
        painDescription: "On-demand SUM and GROUP BY scans grow with every transaction."
        gainTitle: "Pre-Aggregated Summaries"
        gainDescription: "Daily to yearly and category rollups updated on each write."
      - painTitle: "Lost Records on Delete"
        painDescription: "Removing a tag or category erases historical context."
        gainTitle: "Soft Delete & Recycle Bin"
        gainDescription: "Hierarchical tag groups with full restore."

# Flat Stack Tags for Cards & UI Badges
stack:
  - "Next.js 15"
  - "NestJS 11"
  - "PostgreSQL"
  - "TypeScript"
  - "TypeORM"
  - "Zustand"

# CATEGORIZED TECHNOLOGY STACK
techStack:
  frontend:
    - "Next.js 15 (App Router)"
    - "React 19"
    - "TypeScript 5"
    - "TailwindCSS 4"
    - "ShadCN UI (Radix UI)"
    - "Zustand 5"
    - "Recharts"
    - "Chart.js"
    - "React Hook Form"
    - "Zod"
  backend:
    - "NestJS 11"
    - "TypeORM 0.3"
    - "Passport JWT"
    - "bcrypt"
    - "decimal.js"
    - "class-validator"
    - "Swagger"
  database:
    - "PostgreSQL"
    - "24 TypeORM Entities"
  devops:
    - "Docker"
    - "Docker Compose"
    - "pnpm"
  mobile_hardware: []

# LINKS & PROOF
links:
  liveDemo: ""
  parentPlatform: ""
  github: "https://github.com/marceldavidbaroi/MindVault_Backend"
  githubFrontend: "https://github.com/marceldavidbaroi/MindVault_Frontend"
  githubBackend: "https://github.com/marceldavidbaroi/MindVault_Backend"
  docs: ""

# TODO(me): add 2-4 screenshots (dashboard, transaction explorer, reports) and fill these
images: []
visualAssets:
  heroMockup: ""

# ENGINEERING DECISIONS MATRIX
keyDecisions:
  - challenge: "JavaScript floating-point arithmetic makes account balances drift over repeated transactions."
    decision: "Stored amounts as string/numeric values and wrapped all math in decimal.js helpers (safeAdd, safeSubtract) with non-negative balance checks. Trade-off: explicit type parsing across services and DTOs."
    outcome: "Exact monetary arithmetic and no negative-balance underflow in ledger operations."
  - challenge: "Multi-interval trend queries need expensive SUM and GROUP BY scans as history grows."
    decision: "Added dedicated summary entities (daily, weekly, monthly, yearly, category) updated transactionally on create, update and delete. Trade-off: extra write-path work."
    outcome: "Dashboards and comparisons read pre-aggregated rows instead of scanning raw transactions."
  - challenge: "Users need different permissions on different accounts (owner here, viewer on a family account)."
    decision: "Separated global authentication from account authorization with an AccountUserRole junction entity and custom NestJS guards. Trade-off: extra lookups on account-scoped requests."
    outcome: "Strict per-account access without duplicating accounts or raising global privileges."
  - challenge: "Multi-entity client state and inconsistent API feedback caused prop drilling."
    decision: "Split data access into 10 API services and state into 11 domain Zustand stores, with a global ApiResponseToast bridge. Trade-off: more store and service files."
    outcome: "No prop drilling, isolated re-renders and uniform feedback on every mutation."
  - challenge: "Tagging needed soft delete and grouping without bloating controllers."
    decision: "Dedicated repositories, validators and transformers for tags and tag groups. Trade-off: more classes per module."
    outcome: "A decoupled tagging subsystem with recycle-bin restore."

securityReliability:
  - "JWT cookie and bearer authentication with bcrypt password hashing."
  - "Passkey verification, security questions, active session tracking and password-reset logging."
  - "Account-scoped RBAC guards (Owner, Admin, Editor, Viewer) on top of global authentication."
  - "Global ValidationPipe across 44 DTOs."
  - "Non-negative balance enforcement in the decimal ledger engine."
  - "82 automated test cases across 10 spec files (unit and e2e)."

futureRoadmap:
  - "Financial statement export engine (PDF and CSV)."
  - "Personal growth suite: LifeLog, Contacts, Capsule reflection, Knowledge base, Micro Actions, Storyline."
---

## System Architecture & Domain Scope

**MindVault** is a multi-user personal finance platform I built solo as a self-directed learning project, to practice production-style backend and frontend architecture rather than to serve live users. The NestJS backend owns accounts, transactions, the ledger, summaries, tags and authentication; the Next.js client handles dashboards, reports and account management.

| Layer | Flow |
|---|---|
| Frontend | `Page (app/)` → `Zustand Store` → `API Service` → HTTP |
| Backend | `Controller` → `ValidationPipe (DTO)` → `Service` → `TypeORM` → `PostgreSQL` |

```mermaid
flowchart TD
    subgraph Client ["Next.js 15 App Router"]
        UI["32 pages · 92 components"]
        Stores["11 Zustand stores"]
        Services["10 API services"]
        UI --> Stores --> Services
    end

    subgraph Server ["NestJS 11 + TypeORM"]
        Controllers["22 controllers · 89 endpoints"]
        Guards["JWT & account RBAC guards"]
        Domain["28 domain services"]
        Ledger["Ledger & decimal engine"]
        Summary["Incremental summary engine"]
        Controllers --> Guards --> Domain
        Domain --> Ledger
        Domain --> Summary
    end

    DB[("PostgreSQL · 24 entities")]
    Services -->|"REST + cookies"| Controllers
    Domain --> DB
```

### Persona Value Map

| Persona | Pains removed | Built |
|---|---|---|
| **Account Owner** | Balance drift, untraceable edits | Decimal ledger, immutable `AccountLedger`, non-negative checks |
| **Collaborator** | All-or-nothing sharing | Per-account roles via `AccountUserRole` and guards |
| **Dashboard Viewer** | Slow analytics, lost records | Pre-aggregated summaries, charts, soft-delete recycle bin |

## Core Engineering Innovations

### 1. Precision Ledger Engine
Balances are updated through `safeAdd` and `safeSubtract` helpers on `decimal.js`, with non-negative checks, while every change is written to an immutable `AccountLedger` table for audit.

### 2. Incremental Summary Pipeline
Transaction create, update and delete hooks update 6 summary entities (daily, weekly, monthly, yearly, category) in the same transaction, so analytics endpoints read rollups instead of raw history.

### 3. Contextual Account RBAC
An `AccountUserRole` junction entity maps users to accounts with Owner, Admin, Editor or Viewer roles, enforced by custom NestJS guards independent of global JWT auth.

### 4. Client State Architecture
Domain-specific Zustand stores and API services feed an `ApiResponseToast` listener, giving consistent success and error feedback across all mutations.

## Database Design & Concurrency

- 24 TypeORM entities on PostgreSQL covering users, sessions, accounts, ledgers, transactions, summaries, categories, currencies, roles and tags.
- Summary updates run in the same transaction as the ledger mutation they derive from, keeping balances and rollups consistent.
- Six `nestjs-command` seeders bootstrap roles, categories, currencies, account types, tag groups and tags.
- Tags use soft delete with restore, plus dedicated repositories, validators and transformers.

## Performance Benchmarks & Reliability

| Metric | Value |
|---|---|
| REST endpoints | 89 across 22 controllers |
| Domain services | 28 |
| Database entities | 24 |
| DTOs | 44 |
| Automated tests | 82 cases across 10 spec files |
| Frontend routes / components | 32 pages / 92 components |
| Zustand stores / API services | 11 / 10 |
| Commits | 161 (100 backend, 61 frontend), solo |

<!-- TODO(me): add real benchmarks if you measure them: dashboard endpoint latency with N transactions, summary update time per write. No latency numbers are claimed here. -->

## Lessons Learned & Architectural Retrospective

- **What worked:** isolating money math in one helper module and routing every balance change through it kept precision rules in a single place.
- **Trade-offs:** pre-aggregated summaries speed up reads but add write-path work; per-account roles add joins on scoped requests.
- **Learning outcome:** this project was my practice ground for modular NestJS design, transactional consistency, role-based access and a store-per-domain frontend.
- **Next:** statement export (PDF and CSV), then the personal growth suite.
<!-- TODO(me): add one or two honest "what I would do differently" points from your own experience. -->
