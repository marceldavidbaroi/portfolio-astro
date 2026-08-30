---
id: "07"
title: "PennyPerfect – Modular Accounting Suite"
subtitle: "Enterprise modular accounting suite decomposed into 7 composable Vue 3 / Vite packages for multi-tenant financial reporting and double-entry ledgers."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected an enterprise modular accounting suite across 7 composable npm packages and 6 production surfaces by designing a meta-orchestrator, standardized Vue provide/inject abstractions, and Laravel Sanctum multi-tenant APIs."
chip: "Fintech & Enterprise SaaS"
order: 7
featured: false
platformType: "desktop"

role: "Frontend Engineer (Modular Package Architecture)"
timeline: "2025 — H1 2026"
status: "Active Production"

techStack:
  frontend:
    - "Quasar Framework (v2)"
    - "Vue.js (v3) + TypeScript"
    - "Pinia (+ PersistedState)"
    - "Vue Router 4 (appPlugin Discovery)"
    - "Vite 7 (Library Mode: ESM/CJS)"
    - "html2canvas + jsPDF"
  backend:
    - "Laravel 11 API (itc/pennyperfect)"
    - "Laravel Sanctum (auth:sanctum)"
    - "Multi-Tenant Branch & User Scoping"
  database:
    - "PostgreSQL (Double-Entry Ledgers, Tax Codes & Statements)"
  devops:
    - "pnpm Workspaces (workspace:*)"
    - "Nested Git Submodules (.modules)"
    - "Docker Compose Local Stack"
    - "Vite HMR & Menu Auto-Discovery"
  mobile_hardware: []

links:
  liveDemo: ""
  parentPlatform: ""
  github: ""
  docs: ""

images:
  - "/images/projects/pennyperfect/chart-of-accounts.png"
  - "/images/projects/pennyperfect/transactions.png"
  - "/images/projects/pennyperfect/balance-sheet.png"
  - "/images/projects/pennyperfect/income-statement.png"
  - "/images/projects/pennyperfect/reports.png"

visualAssets:
  heroMockup: "/images/projects/pennyperfect/chart-of-accounts.png"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Delivered a comprehensive double-entry accounting suite for multi-tenant organizations [X] by decomposing PennyPerfect into 7 independently publishable Vue packages covering chart of accounts, transactions, balance sheets, P&L statements, reports, and settings [Y], achieving 6 auto-discovered production menu surfaces under /penny-perfect/* backed by standardized Vue provide/inject abstractions and Laravel Sanctum multi-tenant APIs [Z]."

impactMetrics:
  - label: "Modular Packages"
    value: "7 Packages"
    detail: "Six domain packages orchestrated by a meta-dependency installer"
  - label: "Production Surfaces"
    value: "6 Menus"
    detail: "Chart of Accounts, Transactions, Balance Sheet, P&L, Reports, Settings"
  - label: "API Surface"
    value: "15+ Endpoints"
    detail: "Accounts CRUD, tax codes, statements, ledger, and debit/credit rollups"
  - label: "Integration Stability"
    value: "P0 Resolved"
    detail: "Boot-time configureTaxApi and lazy dialogs eliminated 401-driven session logout"
  - label: "Report Export Engine"
    value: "A4 PDF"
    detail: "Client-side multi-page summary PDF assembly via html2canvas & jsPDF"
  - label: "Multi-Tenant Scoping"
    value: "100% Isolated"
    detail: "Tenant context and branch routing via dynamic API interceptors"

valueProposition:
  targetCustomer: "Enterprise Finance Teams, Multi-Tenant SaaS Organizations & Accounting Leads"
  items:
    - painTitle: "Monolithic Frontend Bloat Across Accounting Modules"
      painDescription: "Integrating double-entry accounting into host applications traditionally bloated frontend bundles and coupled financial code with unrelated core app logic."
      gainTitle: "7 Composable Autonomous Vue Library Packages"
      gainDescription: "Decomposed the suite into independently versioned packages (@itc/pennyperfect-*) orchestrated by a meta-package with dynamic route discovery."

    - painTitle: "P0 Session Logouts from Premature Boot-Time API Calls"
      painDescription: "Unauthenticated tax code fetch calls during initial application boot triggered 401 errors, inadvertently logging users out of their host session."
      gainTitle: "Lazy Dialog Loading & Safe Host Boot Handlers"
      gainDescription: "Engineered configureTaxApi boot abstractions and deferred API requests until dialog mount, guaranteeing 100% boot stability."

    - painTitle: "Heavy Server-Side PDF Rendering Infrastructure"
      painDescription: "Generating multi-page A4 balance sheets and monthly income statements previously required dedicated headless browser microservices."
      gainTitle: "Client-Side In-Browser A4 PDF Assembly"
      gainDescription: "Engineered client-side rendering with hidden iframes, html2canvas rasterization, and jsPDF assembly for instant zero-server PDF exports."

problemStatement: "Finance teams inside Supercards tenants needed in-app accounting—accounts, journal entries, tax-aware income/expense, and standard financial reports—without bolting on a separate ERP. Legacy PennyPerfect UIs assumed a monolithic loan-app API (e.g. /loanapp/branchs, cashbook import/export) and wrong default API hosts, causing broken branch filters, failed imports, and session logout when tax endpoints 401'd on page load."

architectureSummary: "Seven Vite-built Vue library packages expose routes, Pinia stores, and Quasar pages; the Supercards host provides apiClient, authStore, and tenantStore via boot/provide; @itc/menu-system discovers appPlugin menus; all domain HTTP flows through itc/pennyperfect on Laravel under /api/v1 with Sanctum + tenant middleware."

keyDecisions:
  - challenge: "Feature scope vs. maintainability in a monorepo with nested git repos"
    decision: "Split PennyPerfect into domain packages (@itc/pennyperfect-transactions, -chartofaccounts, -balancesheet, -incomestatement, -reports, -settings) with @itc/pennyperfect as a meta dependency installer; each package ships appPlugin.routes + appPlugin.menu with parent: pennyperfect."
    outcome: "Teams can version, build, and publish modules independently; host integration is boot + spread routes + discover:ci instead of a growing frontend/src tree."

  - challenge: "Inconsistent HTTP client patterns across packages (raw Axios vs @itc/coreservice callApi)"
    decision: "Standardized host boot files (pennyperfect-transactions, pennyperfect-settings, pennyperfect-balancesheet) calling configureTaxApi / configureSettingsApi / configureBalanceSheetApi with apiUrlBuilder + appId: pennyperfect; feature pages inject apiClient, authStore, tenantStore for Axios-interceptor packages."
    outcome: "Single source of truth for API base URL from VITE_API_BASE_URL; Bearer + x-tenant-id headers applied consistently; tax codes load only when dialogs open."

  - challenge: "Legacy branch API (/loanapp/branchs) missing in Supercards backend"
    decision: "Migrated income statement and reports branch loaders to GET /tenants/{tenantId}/branches (itc/core-auth-accounts); made branchId nullable across transaction and settings forms to match backend validation."
    outcome: "Branch filters populate on Income Statement and Reports; transactions save without forced branch selection."

  - challenge: "Reports had duplicate route definitions (src/routes.ts vs src/router/routes.ts)"
    decision: "Unified appPlugin.routes to ./src/router/routes.ts; host imports { routes } from package entry as single source of truth."
    outcome: "One route set for /penny-perfect/reports plus /external/reports print URLs and voucher preview routes."

  - challenge: "Print/PDF export without server-side rendering"
    decision: "Client-side PDF via hidden iframe loading /external/reports, html2canvas snapshot of .report-preview-a4, jsPDF multi-page assembly."
    outcome: "Monthly/daily summaries export to PDF without additional backend render pipeline."

securityReliability:
  - "All accounting APIs require auth:sanctum; tenant context via X-Tenant-Id from tenantStore interceptors on apiClient."
  - "Tax and settings modules support configure*Api with shared callApiClient from host boot—no hardcoded production tokens in package source."
  - "Pinia persisted state (reports, chart-of-accounts) retains filter preferences locally; failed fetches clear stale lists and rethrow or return empty payloads."
  - "System accounts in chart of accounts are guarded in UI (SystemAccountWarningDialog) to prevent destructive edits on protected rows."

futureRoadmap:
  - "Migrate cashbook import/export from legacy /loanapp/transaction/cashbook-* to itc/pennyperfect-backed endpoints."
  - "Consolidate remaining /loanapp/* settings APIs onto core-auth-accounts + pennyperfect tax-code routes."
  - "Add general ledger package (@itc/pennyperfect-general-ledger) to the meta-package dependency set for a seventh reporting surface."
  - "Unify all packages on @itc/coreservice callApi instead of mixed raw Axios service layers."
---

## Executive Summary

**PennyPerfect** is an enterprise modular double-entry accounting suite engineered for multi-tenant **Supercards** organizations. Rather than a monolithic ERP, PennyPerfect is architected as **seven composable frontend packages** (`@itc/pennyperfect-*`) that deliver dedicated accounting modules—from chart of accounts and journal transactions to balance sheets, income statements, and PDF reporting.

All packages are orchestrated by a meta-dependency package (`@itc/pennyperfect`), auto-discovered through `@itc/menu-system`, and powered by a consolidated Laravel package (`itc/pennyperfect`) operating under `/api/v1` with Sanctum authentication and strict tenant-scoping.

---

## Architecture

### Modular Package Composition & Host Ingestion Topology

```mermaid
flowchart TB
    subgraph Host_App ["Supercards Host Application (Quasar / Vue 3)"]
        BOOT["Host Boot Files<br/>(configureTaxApi, configureSettingsApi)"]
        INJECT["Vue provide/inject<br/>(apiClient, authStore, tenantStore)"]
        MENU_SYS["@itc/menu-system<br/>(discover:ci / appPlugin auto-discovery)"]
    end

    subgraph Meta_Package ["@itc/pennyperfect (Meta-Orchestrator)"]
        DEPS["Exports aggregated routes & package bindings"]
    end

    subgraph Domain_Packages ["7 Composable Vue 3 / Vite Library Packages"]
        PKG_COA["@itc/pennyperfect-chartofaccounts<br/>(Ledger Trees, System Account Guards)"]
        PKG_TX["@itc/pennyperfect-transactions<br/>(Income, Expense, Journal, Tax Dialogs)"]
        PKG_IS["@itc/pennyperfect-incomestatement<br/>(P&L Statements, Branch Breakdown)"]
        PKG_BS["@itc/pennyperfect-balancesheet<br/>(Asset/Liability Ledgers, Equity Rollup)"]
        PKG_REP["@itc/pennyperfect-reports<br/>(Daily/Monthly Summaries, A4 PDF Export)"]
        PKG_SET["@itc/pennyperfect-settings<br/>(Tax Codes, Fiscal Years, Currency)"]
    end

    subgraph Backend_Services ["Laravel API Gateway (/api/v1)"]
        SANCTUM["Laravel Sanctum (auth:sanctum)"]
        TENANT_MW["Tenant Scoping Middleware (X-Tenant-Id)"]
        PP_BE["itc/pennyperfect (Accounting Engine)"]
        AUTH_BE["itc/core-auth-accounts (Branches & Users)"]
        PG_DB[("PostgreSQL Database<br/>(Tenant-Scoped Accounts & Ledgers)")]
    end

    Host_App --> Meta_Package
    Meta_Package --> Domain_Packages
    BOOT & INJECT --> Domain_Packages
    Domain_Packages -->|"HTTPS / Bearer Token + X-Tenant-Id"| SANCTUM
    SANCTUM --> TENANT_MW
    TENANT_MW --> PP_BE & AUTH_BE
    PP_BE & AUTH_BE --> PG_DB
```

---

## Package Architecture Standard

Each `@itc/pennyperfect-*` package is structured as an isolated, independently versioned Vite library package:

```
@itc/pennyperfect-<module>/
├── src/
│   ├── components/      # Quasar UI components, Dialogs, Trees
│   ├── pages/           # Root module pages mounted under /penny-perfect/*
│   ├── stores/          # Module Pinia stores (with persisted state if needed)
│   ├── services/        # HTTP API services (apiUrlBuilder + callApi / apiClient)
│   ├── types/           # TypeScript interfaces & DTO contracts
│   ├── router/          # routes.ts exporting RouteRecordRaw[]
│   └── index.ts         # appPlugin manifest (routes, menu, boot helpers)
├── package.json         # Scoped package manifest, peerDependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite 7 library build (ESM + CJS)
```

---

## Data Schema & Accounting Ledger Flow

PennyPerfect enforces double-entry bookkeeping rules across all journal, income, and expense entries:

```mermaid
erDiagram
    TENANT ||--o{ ACCOUNT : "defines chart of"
    ACCOUNT ||--o{ ACCOUNT : "parent/child hierarchy"
    TENANT ||--o{ TRANSACTION : "records"
    TRANSACTION ||--o{ TRANSACTION_ENTRY : "contains debit/credit lines"
    ACCOUNT ||--o{ TRANSACTION_ENTRY : "impacted by"
    TAX_CODE ||--o{ TRANSACTION : "applied to"
    BRANCH ||--o{ TRANSACTION : "attributed to"

    ACCOUNT {
        uuid id PK
        string code
        string name
        string type "Asset | Liability | Equity | Revenue | Expense"
        uuid parent_id FK
        boolean is_system_account
        decimal current_balance
    }

    TRANSACTION {
        uuid id PK
        string reference_no
        date transaction_date
        string type "Journal | Income | Expense"
        uuid tax_code_id FK
        uuid branch_id FK
        decimal total_amount
        string status "Draft | Posted"
    }

    TRANSACTION_ENTRY {
        uuid id PK
        uuid transaction_id FK
        uuid account_id FK
        string entry_type "DEBIT | CREDIT"
        decimal amount
    }

    TAX_CODE {
        uuid id PK
        string code
        decimal rate_percentage
        boolean is_active
    }
```

---

## Visual Workflows & Production Interfaces

### 1. Chart of Accounts Ledger Hierarchy
![PennyPerfect Chart of Accounts](/images/projects/pennyperfect/chart-of-accounts.png)

### 2. Multi-Tab Transactions & Tax Code Management
![PennyPerfect Transactions Ledger](/images/projects/pennyperfect/transactions.png)

### 3. Financial Statements: Balance Sheet & Income Statement
![PennyPerfect Balance Sheet](/images/projects/pennyperfect/balance-sheet.png)

![PennyPerfect Income Statement](/images/projects/pennyperfect/income-statement.png)

### 4. Operational Financial Reports & Export
![PennyPerfect Reports & Summaries](/images/projects/pennyperfect/reports.png)

---

## Client-Side Report Preview & Multi-Page A4 PDF Assembly

```mermaid
sequenceDiagram
    autonumber
    actor User as Finance Manager
    participant Page as Reports Page (/penny-perfect/reports)
    participant Store as useReportsStore (Pinia)
    participant API as itc/pennyperfect (/api/v1/reports)
    participant Iframe as Hidden Print Iframe (/external/reports)
    participant Engine as html2canvas + jsPDF

    User->>Page: Select Monthly Summary & Branch Filter
    Page->>Store: fetchMonthlySummary({ branchId, month, year })
    Store->>API: GET /api/v1/reports/monthly-summary
    API-->>Store: JSON Summary Records
    Store-->>Page: Render On-Screen Report
    
    User->>Page: Click "Export to PDF"
    Page->>Iframe: Mount styled report in hidden A4 print frame
    Iframe->>Engine: html2canvas captures high-res DOM snapshot (.report-preview-a4)
    Engine->>Engine: Paginate canvas slices into 297x210mm A4 pages (jsPDF)
    Engine-->>User: Trigger browser PDF download (PennyPerfect_Report_2026.pdf)
```

---

## What I Built (Personal Contributions)

- **Engineered Multi-Package Frontend Architecture**: Decomposed the accounting system into 7 modular Vite/Vue 3 packages (`@itc/pennyperfect-*`) with standalone routes, Pinia stores, and Quasar UI pages.
- **P0 Authentication & Tax API Resolution**: Diagnosed and fixed boot-time tax endpoint failure that caused unexpected session logouts on page load by implementing `configureTaxApi` lazy configuration.
- **Standardized Host Provide/Inject Integration**: Implemented host boot providers for `apiClient`, `authStore`, and `tenantStore`, ensuring uniform Sanctum Bearer tokens and `X-Tenant-Id` header propagation.
- **Branch API Alignment**: Refactored branch loaders across statements and reports to consume `GET /tenants/{tenantId}/branches` from `itc/core-auth-accounts` and made branch fields nullable for flexible transactions.
- **Route & Menu Discovery Pipeline**: Streamlined `appPlugin.routes` and `@itc/menu-system` auto-discovery to expose 6 production accounting surfaces under the `/penny-perfect/*` hierarchy.
- **Client-Side PDF Generation Engine**: Designed an in-browser PDF export pipeline using hidden iframe rendering, `html2canvas`, and `jsPDF` for pixel-perfect A4 accounting statements without server rendering load.
