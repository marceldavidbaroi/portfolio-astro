---
id: "01"
title: "TradeflowBD – Multi-Tenant Wholesale ERP"
subtitle: "Multi-tenant SaaS ERP with parent-pooled virtual stock allocation, landed cost engine, and universal double-entry money kernel."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected a multi-tenant enterprise ERP achieving 100% database RLS isolation and zero-overselling inventory synchronization across 17+ domain modules, 4 application scopes, and 1,330+ migrations via recursive PostgreSQL policies, ATP algorithms, and atomic RPC transactions."
chip: "Enterprise ERP & SaaS"
order: 1
featured: true
platformType: "desktop"

role: "Lead Framework & Migration Engineer"
timeline: "2025 — Present"
status: "Active Production"
classification: "🔒 Proprietary Enterprise IP"

stack:
  - "Vue 3"
  - "Quasar"
  - "Supabase"
  - "TypeScript"
  - "PostgreSQL"
  - "Capacitor (Android)"

techStack:
  frontend:
    - "Vue 3.5"
    - "Quasar 2"
    - "TypeScript"
    - "Pinia"
    - "TanStack Query"
    - "Vue Router 5"
    - "Phosphor Icons Web"
    - "ApexCharts & Chart.js"
    - "ExcelJS & Mermaid"
  mobile_hardware:
    - "Capacitor (Android Build)"
  backend:
    - "Supabase (PostgreSQL 15+)"
    - "Row-Level Security (RLS)"
    - "Atomic RPCs (300+ Functions)"
    - "Supabase Realtime Channels"
    - "Google OAuth"
    - "Firebase Cloud Messaging"
  database:
    - "PostgreSQL 15+"
    - "Universal Bills & Pays Money Kernel"
    - "Landed Cost Apportionment Engine"
    - "1,330+ Versioned Migrations"
    - "Declarative Domain Schemas (Split)"
  devops:
    - "Cloudflare Pages"
    - "Docker Local Supabase Replay"
    - "Python ETL Pipelines"
    - "Vite CSS Splitting & Chunking"
    - "Cloudinary CDN"

links:
  liveDemo: ""
  parentPlatform: ""
  github: ""
  docs: ""

images:
  - "/images/projects/tradeflowbd/dashboard.webp"
  - "/images/projects/tradeflowbd/shipment-details.webp"
  - "/images/projects/tradeflowbd/shop-catalog-config.webp"
  - "/images/projects/tradeflowbd/dropship-dossier.webp"
  - "/images/projects/tradeflowbd/shop-mobile-storefront.webp"

visualAssets:
  heroMockup: "/images/projects/tradeflowbd/dashboard.webp"
  architectureDiagram: "/images/projects/tradeflowbd/shipment-details.webp"
  databaseErd: "/images/projects/tradeflowbd/dropship-dossier.webp"
  screenshots:
    - "/images/projects/tradeflowbd/dashboard.webp"
    - "/images/projects/tradeflowbd/shipment-details.webp"
    - "/images/projects/tradeflowbd/shop-catalog-config.webp"
    - "/images/projects/tradeflowbd/dropship-dossier.webp"
    - "/images/projects/tradeflowbd/shop-mobile-storefront.webp"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Architected a plug-and-play multi-tenant SaaS ERP platform that unified parent wholesale operations and child sales desks across 4 distinct business models [X], achieving 100% database-enforced tenant isolation, zero inventory overselling, and a 67% first-paint CSS reduction across 17+ domain modules and 1,330+ migrations [Y] by designing recursive PostgreSQL Row-Level Security policies, Available-to-Promise algorithms, atomic PostgreSQL RPC transactions, and route-based bundle splitting [Z]."

impactMetrics:
  - label: "Tenant Data Isolation"
    value: "100%"
    detail: "Enforced at database engine level via 200+ RLS policies"
  - label: "Database Migrations"
    value: "1,330+"
    detail: "Versioned schema with clean Docker replay & diff checks"
  - label: "Domain Modules"
    value: "17+"
    detail: "Procurement, Commerce, Finance, Verticals, Capital"
  - label: "Application Scopes"
    value: "4 Surfaces"
    detail: "Platform Admin, Parent ERP, B2B Shop, Investor Portal"
  - label: "Atomic RPCs"
    value: "300+"
    detail: "Server-side transactional financial writes & ACID compliance"
  - label: "First-Load CSS Drop"
    value: "67% Cut"
    detail: "Route-level splitting from 857 KiB to 281 KiB on initial paint"

valueProposition:
  targetCustomer: "Wholesale Import Conglomerates, Parent Corporations & Sister Sales Desks"
  items:
    - painTitle: "Siloed Stock Counts & Out-of-Stock Checkouts"
      painDescription: "Sister concerns counted warehouse stock separately, causing frequent overselling, duplicate inventory entries, and fulfillment delays."
      gainTitle: "Parent-Pooled Virtual Allocation (ATP)"
      gainDescription: "Physical stock exists strictly on the parent entity; child sales desks consume real-time virtual slices with zero overselling across POS and storefronts."

    - painTitle: "Fragmented Landed Costing & Pricing Guesswork"
      painDescription: "Customs duties, freight tariffs, and FX rates calculated manually in spreadsheets produced inaccurate margin projections and financial leakages."
      gainTitle: "Automated Landed Cost Apportionment Engine"
      gainDescription: "Deterministic server-side RPC apportions freight weight and customs fees per SKU, locking authoritative unit costs at shipment finalization."

    - painTitle: "Multi-Tenant Data Leakage Risks Between Sister Desks"
      painDescription: "Competing sister desks operating on a shared database risked viewing sensitive pricing, customer lists, and financial yield reports."
      gainTitle: "100% Database-Enforced Row-Level Security"
      gainDescription: "200+ PostgreSQL RLS policies evaluate session claims at the database engine level, eliminating application-layer leaks."

    - painTitle: "Unreconciled Invoices & Shadow Excel Accounting"
      painDescription: "Multi-desk payments, dropship margins, courier COD remittances, and credit lines maintained in unlinked ledgers resulted in unreconciled balances."
      gainTitle: "Universal Bills & Pays Money Kernel"
      gainDescription: "Unified Profile · Bill · Pay · Alloc · Cashbook engine handling AR, AP, and courier remittances with immutable journal entries."

problemStatement: "Wholesale import enterprises operated through fragmented spreadsheets for costing, manual shipment logs, isolated stock counts per desk, and shadow accounting in Excel. This caused frequent overselling, unreconciled financial balances, and massive risk of cross-tenant data leakage between competing sister concerns."

architectureSummary: "Single unified codebase serving 4 distinct application scopes (Platform, App, Shop, Investor) built on Vue 3 / Quasar SPA, TanStack Query server-state cache, and Supabase PostgreSQL with declarative domain schemas, 200+ RLS policies, and 300+ atomic RPCs."

keyDecisions:
  - challenge: "Database-Level Isolation vs App-Level Filtering"
    decision: "Enforced Row-Level Security (RLS) on every tenant-scoped table, evaluated from authenticated session tokens rather than client-side WHERE clauses."
    outcome: "Eliminated cross-tenant data leak vulnerabilities; security boundary is the PostgreSQL engine itself."
  - challenge: "Parent–Child Shared Stock & Allocation"
    decision: "Physical stock rows exist strictly on the parent company. Sister concerns receive virtual allocation slices (global_stock_allocations) for sales desks."
    outcome: "Single source of truth for Available-to-Promise (ATP) stock; eliminated overselling across wholesale POS, storefronts, and dropship desks."
  - challenge: "Ad-Hoc Wallets vs Unified Money Kernel"
    decision: "Replaced disconnected wallet tables with a unified Money Kernel (Profile · Bill · Pay · Alloc · Cashbook). Single bills table with polymorphic document kinds (standard, credit_note, debit_note) for AR and AP."
    outcome: "Eliminated shadow ledgers; deterministic settlement for wholesale trade, dropship courier remittances, and inbound shipment AP."
  - challenge: "Monolithic 10,000+ Line SQL Schema"
    decision: "Split schema into declarative domain folders (procurement/, shop_order/, bills_pays/, notifications/) with isolated types, tables, RPCs, and RLS scripts verified via supabase db diff."
    outcome: "Enabled parallel domain evolution and reliable local Docker migration replay (1,330+ migrations) before production deploys."
  - challenge: "Redundant API Fetching & Stale Client UI"
    decision: "Integrated TanStack Query (@tanstack/vue-query) with query key factories, optimistic mutations, and targeted cache patches."
    outcome: "Cart mutations and shipment costing updates reflect instantly without full dataset refetches or N+1 queries."
  - challenge: "Massive SPA Bundle & First-Paint Latency"
    decision: "Implemented route-level CSS splitting (cssCodeSplit: true), dynamic imports for heavy diagramming (Elk/Mermaid) and Excel export (ExcelJS), and vendor chunking."
    outcome: "First-load CSS slashed from 857 KiB to 281 KiB (-67%), isolating Firebase and Chart.js into lazy route chunks."

securityReliability:
  - "PostgreSQL Row-Level Security (RLS) on all tenant tables with membership_has_module_action() policy checks."
  - "Atomic RPC transactions for bills, dropship settlements, shipment finalizations, and cashbook transfers."
  - "Four scoped login surfaces with Google OAuth via Supabase Auth and automatic token refresh."
  - "End-to-end type safety with database.types.ts generated automatically after every migration."
  - "Archive-first governance for shipment batches — financial audit trails preserved with no accidental hard deletes."
  - "Soft-delete trash system with 30-day retention and tenant-scoped purge engines."
  - "Local-first development workflow using Docker Supabase with full 1,330+ migration replay before production deployment."
  - "Declarative schema diff verification (backend:schema:diff) guarding against drifting migrations."

futureRoadmap:
  - "Schema Domain Extraction: Finalize remaining schema stubs (customer, products, reporting, thrift, investor)."
  - "Customs Documentation Generator: Automated regional compliance rules and export document generation."
  - "Maritime Tracking APIs: Real-time container telemetry and vessel arrival tracking."
  - "Investor Portal v2: Capital withdrawal and allocation request workflows beyond read-only reporting."
  - "Capacitor iOS: Mobile barcode inventory audit companion for iOS devices."
---

## At a Glance

| | |
|---|---|
| **What it is** | Multi-tenant enterprise wholesale ERP and commerce platform |
| **Who it's for** | Import/wholesale conglomerates with parent companies, child sales desks, and sister concerns |
| **Core problem** | Run procurement, stock, wholesale sales, B2B storefronts, dropship networks, and multi-currency treasury in one system — with zero overselling and 100% database-enforced tenant data isolation |
| **How it's built** | Vue 3.5 / Quasar 2 SPA → Supabase PostgreSQL 15+ with declarative domain schemas, 200+ RLS policies, and 300+ atomic RPCs |
| **Scale** | 17+ domain modules · 1,330+ migrations · 470+ Vue components · 4 application scopes · 4 business models |

---

## The Problem

Wholesale import businesses in Bangladesh and emerging trade hubs operate across complex, distributed legal and commercial boundaries:

- A **parent company** manages international supplier procurement, maritime freight, customs clearance, and central warehouse stock.
- **Sister concerns (child tenants)** operate independent wholesale sales desks, branded B2B storefronts, and dropship reseller networks.
- **External investors** fund high-capital shipment batches and require real-time yield visibility without accessing operational tenant data.
- **B2B customers** purchase through branded storefronts, carry credit limits, and require instant invoice reconciliation.

### Operational Friction Prior to TradeflowBD

```mermaid
flowchart TD
    subgraph Before ["Before: Fragmented Operations"]
        A["Spreadsheets for Costing & FX Tariffs"] --> B["Manual Inbound Shipment Tracking"]
        B --> C["Siloed Stock Counts Per Sales Desk"]
        C --> D["Frequent Out-of-Stock Overselling"]
        D --> E["Shadow Accounting & Manual Ledgers in Excel"]
        E --> F["Zero Reconciliation of Dropship Courier COD"]
        F --> G["Severe Tenant Data Leakage Risk Across Desks"]
    end
```

| Operational Friction | Business & Technical Consequence |
|---|---|
| **No Centralized Stock Pool** | Same physical inventory counted independently per sister concern — leading to catastrophic overselling and multi-week stock reconciliation disputes. |
| **Pricing Guesswork** | International freight, customs duties, and fluctuating FX rates calculated in static spreadsheets; unit landed costs were inaccurate, causing margin bleed. |
| **Tenant Data Leakage** | Competing sales desks operated on shared servers; application-level filtering (`WHERE tenant_id = ?`) frequently leaked client lists, margin sheets, and sales volume. |
| **Unreconciled Cash & COD** | Courier cash-on-delivery remittances, dropshipper commission payouts, and wholesale dues were managed in disconnected ledgers with zero audit trail. |
| **Monolithic Code & SQL Drift** | 10,000+ lines of unstructured SQL migrations created deploy paralysis, regression bugs, and schema divergence between local and production databases. |

---

## System Architecture & Domain Scope

TradeflowBD is architected as a **unified multi-tenant commerce engine** supporting four co-existing business models, four distinct user application scopes, and a strict parent–child data isolation boundary.

```mermaid
flowchart TB
    subgraph Clients ["Four Distinct Application Scopes"]
        PLATFORM["Platform Scope<br/>/platform/* (Superadmin)"]
        APP["App Scope<br/>/:slug/app/* (Staff & Admin)"]
        SHOP["Shop Scope<br/>/:slug/shop/* (B2B Buyers & Resellers)"]
        INVESTOR["Investor Scope<br/>/:slug/investor/* (Capital Partners)"]
    end

    subgraph Frontend ["Frontend Layer — Vue 3.5 / Quasar SPA"]
        ROUTER["Vue Router 5 + Scope Guards"]
        PERMS["Runtime Module & Action Guards"]
        TQ["TanStack Query (Server-State Cache)"]
        PINIA["Pinia Stores (Client State)"]
        MODULES["17+ Domain Modules<br/>Page → Store → Service → Repository"]
        PERF["Route-Level CSS Code Splitting<br/>& Dynamic Heavy Imports"]
    end

    subgraph Backend ["Backend Layer — Supabase PostgreSQL 15+"]
        AUTH["Supabase Auth (Google OAuth + Scoped JWTs)"]
        RLS["PostgreSQL Row-Level Security (200+ Policies)"]
        RPC["Atomic Transactional RPCs (300+ Functions)"]
        SCHEMAS["Declarative Domain Schemas<br/>(procurement/, shop_order/, bills_pays/, notifications/)"]
        MIG["1,330+ Versioned Migrations"]
    end

    subgraph External ["DevOps & Data Pipelines"]
        CF["Cloudflare Pages (SPA CDN)"]
        DOCKER["Local Docker Supabase Replay"]
        PYTHON["Python ETL (Catalog Scraping & Sync)"]
        CAPACITOR["Capacitor Android Companion"]
    end

    PLATFORM & APP & SHOP & INVESTOR --> ROUTER
    ROUTER --> PERMS --> MODULES
    MODULES --> TQ & PINIA
    TQ --> RPC
    PINIA --> RPC
    RPC --> RLS --> SCHEMAS
    AUTH --> RLS
    CF --> Frontend
    DOCKER --> MIG
    PYTHON --> SCHEMAS
    CAPACITOR --> RPC
```

### 1. Four Application Scopes (Surfaces)

Rather than maintaining separate web repositories, the entire ecosystem runs from a single unified codebase partitioned into four distinct application surfaces:

| Scope | Entry Route | Target Persona | Architectural Capabilities |
| :--- | :--- | :--- | :--- |
| **`platform`** | `/auth/platform/login` → `/platform/*` | Superadmin | Multi-tenant provisioning, module catalog activation, global reference data, platform telemetry. |
| **`app`** | `/:slug/app/*` | Tenant Admin & Staff | Complete wholesale ERP backoffice: procurement, ATP inventory, bills & payments desk, costing, and reports. |
| **`shop`** | `/:slug/shop/*` (or custom host) | B2B Buyers & Resellers | High-performance storefront: wholesale catalog browsing, customer cart, dropship ordering, and order tracking. |
| **`investor`** | `/:slug/investor/*` | Capital Partners | Strictly read-only yield statements, shipment batch profitability, and financial performance audits (zero withdrawal access). |

### 2. Multi-Tenant Parent–Child Hierarchy

The multi-tenant isolation model is strictly **one level deep**:

```mermaid
flowchart TD
    subgraph Platform ["Platform Superadmin"]
        SA["Superadmin Console"] --> TENANTS["Tenant Registry"]
    end

    subgraph Parent ["Parent Enterprise (parent_id = NULL)"]
        P["Parent Holding Workspace"]
        P --> PHYS["Authoritative Physical Stock (global_stocks)"]
        P --> SHIPMENTS["Inbound Shipments & Landed Costs"]
        P --> INVESTORS["Capital Allocations"]
        P --> TREASURY["Consolidated Treasury Ledger"]
    end

    subgraph Children ["Child Tenants / Sister Desks (parent_id = parent.id)"]
        P -->|Virtual ATP Allocations| C1["Child A — Wholesale Sales Desk"]
        P -->|Virtual ATP Allocations| C2["Child B — B2B Storefront & Dropship"]
        C1 --> BILLS1["Wholesale Invoices & Dues"]
        C2 --> ORDERS1["Storefront Checkouts & COD Remittances"]
    end

    TENANTS --> P
```

- **Physical Stock Ownership:** Physical warehouse inventory rows (`global_stocks`) exist strictly on the parent entity. Child sales desks consume real-time virtual slices via `global_stock_allocations`.
- **Inbound Shipments:** Managed and owned exclusively at the parent tier.
- **Billing & Commerce:** Child sales desks generate `bills` stamped with their `issued_by_tenant_id` for customer-facing branding, while settlement rolls into the parent consolidated ledger.
- **Hierarchy Boundary:** A child tenant cannot spawn sub-tenants; a parent with active children cannot be nested.

### 3. Four Co-existing Business Models

TradeflowBD is architected to support four distinct commercial modalities within a single tenant configuration without table cross-contamination:

```text
Pre-Order (PBC / Catalog Negotiation)
        ↓ demand aggregation & purchase order
Parent Warehouse (global_stocks) → Wholesale Invoice / Stock-Backed Shop / Dropship

K-beauty (koba_*)     ← Isolated UK/Korean catalog, retail carts & commission engine
Thrift (thrift_*)     ← Isolated one-off garment intake, barcode tagging & POS
```

1. **Brandwala Wholesale (BW):** The flagship in-hand inventory model. Goods land in parent warehouse `global_stocks`, receive landed cost stamps, and are sold via wholesale invoices (`bills`), stock-backed shops, and dropship channels.
2. **Pre-Order (Product-Based Costing / PBC):** Quotes generated before goods land. Backlog auto-suggestions (`costingFile`) aggregate customer demand before international purchase orders are cut.
3. **K-beauty (Koba):** Dedicated UK/Korean cosmetics catalog with dedicated tables (`koba_products`, `koba_orders`, `koba_carts`). Operates an isolated profit-share and commission engine without contaminating wholesale FIFO stock.
4. **Thrift:** Second-hand garment vertical with individual garment intake boxes, unique SKU thermal barcodes, physical condition grading, dedicated thrift POS, and courier COD reconciliation.

---

## Core Engineering Innovations

```
+----------------------------------------------------------------------------------------------------+
|  [Logo] TradeflowBD  |  [Scope: Parent Corp v]  |  [Global Search Ctrl+K]  |  [FX: ৳170]  | (Avatar) |
+----------------------+-----------------------------------------------------------------------------+
| NAVIGATION           | BREADCRUMB: Wholesale > Procurement > Inbound Shipments > Batch #SH-2026-08 |
|                      +-----------------------------------------------------------------------------+
| [=] Dashboard        | +-- BATCH KPI HEADER -----------------------------------------------------+ |
| [T] Tenants & Desks  | | Port of Origin: Felixstowe, UK   | Containers: 4x 40ft HQ   | Status: IN_TRANSIT| |
| [!] Access Control   | | Total CBM: 142.5 m³             | Net Weight: 18,420 kg    | Landed: ৳8.45M    | |
| [?] Help Center      | +-------------------------------------------------------------------------+ |
| [@] Customers        |                                                                             |
| [#] Invoices (POS)   | +-- ACTION TOOLBAR -------------------------------------------------------+ |
| [>] Procurement      | | [+ Add Items] [Apportion Landed Costs] [Print Thermal Tags] [v Export]   | |
| [*] Product Costing  | +-------------------------------------------------------------------------+ |
| [$] Shop & Dropship  |                                                                             |
| [&] Bills & Pays     | +-- REAL-TIME PRODUCT APPORTIONMENT TABLE --------------------------------+ |
|                      | | [x] | SKU Code     | Product Name         | Qty  | Unit(£) | Landed(৳) | Margin% | |
|                      | |-----|--------------|----------------------|------|---------|-----------|---------| |
|                      | | [ ] | TOALP001     | Alpecin Shampoo C1   | 1200 | £4.75   | ৳1,280.00 | 18.5%   | |
|                      | | [ ] | TOAQU133A    | Aquafresh Toothpaste | 3500 | £0.75   | ৳380.00   | 14.2%   | |
|                      | | [ ] | TONXT-JKT    | Next Corduroy Jacket | 450  | £12.00  | ৳2,850.00 | 32.0%   | |
|                      | +-------------------------------------------------------------------------+ |
| [<-] Sign Out        | PAGE 1 OF 18 (240 ITEMS)                      [<<] [<] [1] [2] [3] [>] [>>] |
+----------------------+-----------------------------------------------------------------------------+
```

### 1. Parent-Pooled Available-to-Promise (ATP) Stock Allocation

To eliminate the classic multi-desk overselling problem, physical inventory is centralized in parent `global_stocks` while child desks receive virtual allocation slices.

```mermaid
flowchart TD
    subgraph Central ["Parent Warehouse Physical Inventory"]
        PHY["Physical Batch Stock (global_stocks)"]
        HOLDS["Active Reservation Holds (shop_order_holds)"]
        ATP["Authoritative ATP = Physical - (Committed + Holds)"]
    end

    subgraph Desks ["Concurrent Sales Channels"]
        D1["Wholesale POS Desk"]
        D2["B2B Web Storefront"]
        D3["Dropship Reseller Network"]
    end

    subgraph Atomic ["Pessimistic Locking RPC Execution"]
        RPC["deduct_allocated_stock_atomic()"]
        MUTEX["SELECT ... FOR UPDATE on Stock Rows"]
    end

    D1 & D2 & D3 --> RPC
    RPC --> MUTEX
    MUTEX --> ATP
    ATP -- Insufficient Stock --> REJECT["Atomic Abort (Zero Overselling)"]
    ATP -- Stock Available --> DEDUCT["Decrement Physical & Release Holds"]
```

- When a buyer adds a product to a cart or places an order on a child storefront, an atomic RPC calculates real-time Available-to-Promise (ATP) inventory: `ATP = Quantity Physical - (Quantity Committed + Quantity Held)`.
- Concurrent checkouts acquire a pessimistic row lock (`SELECT FOR UPDATE`) on the target stock slice. If ATP is depleted, the transaction immediately rolls back with an authoritative `INSUFFICIENT_STOCK` error code.

### 2. The Unified Bills & Pays Money Kernel

The platform refactored fragmented, ad-hoc wallet tables into a unified **Money Kernel**:

```text
Layers: Profile → Bill → Pay → Allocation → Cashbook
```

```mermaid
flowchart LR
    subgraph Parties ["Profiles (Party)"]
        BUYER["Wholesale Buyer"]
        DROP["Dropshipper"]
        VENDOR["Shipment Vendor"]
        COURIER["Courier Service"]
    end

    subgraph Document ["Universal Bills Table"]
        AR["AR Bills (Standard)<br/>Wholesale Take / B2B Order"]
        AP["AP Bills (Standard)<br/>Vendor / Cargo / Local Opex"]
        NOTES["Adjustment Notes<br/>(Credit / Debit Notes via parent_bill_id)"]
    end

    subgraph Settlement ["Pays & Instruments"]
        PAY["Pays (Multi-Currency & FX)<br/>Collect / Payout"]
        INST["Pay Instruments (Bank / Cash / Cheque)"]
        ALLOC["Pay Allocations (Oldest-First Bill Match)"]
    end

    subgraph Custody ["Cashbook Engine"]
        TCASH["Tenant Cashbook (Operating Treasury)"]
        CCASH["Profile Cashbook (Custody / Leftover Balance)"]
    end

    Parties --> Document
    Document --> ALLOC
    PAY --> ALLOC
    PAY --> INST
    PAY --> Custody
```

- **Polymorphic Bills Engine:** A single `bills` table manages both Accounts Receivable (wholesale sales, condition sales, storefront orders) and Accounts Payable (inbound shipment vendor costs, cargo freight, and local port opex).
- **Immutable Financial Audit Trail:** Issued bills can never be quietly mutated. If quantities or prices change post-issuance, the system mandates a `credit_note` or `debit_note` referencing the `parent_bill_id`.
- **Dropship Remittance Mechanics:**
  1. Customer invoice issued to dropshipper at wholesale price upon dispatch.
  2. Courier collects retail cash-on-delivery (COD) face value into courier cashbook.
  3. Upon delivery, courier remits net bank deposit.
  4. System allocates remittance to settle supplier wholesale invoice; excess margin is deposited directly into the dropshipper's **Custody Cashbook** for later payout.

### 3. Deterministic Landed Cost Apportionment Engine

Authoritative unit landed costs are stamped directly onto inventory rows at shipment finalization, ensuring downstream invoices, FIFO COGS, and investor yields never rely on estimations:

```mermaid
flowchart TD
    subgraph Inbound ["Inbound Shipment Batch (SH-2026-08)"]
        PO["Supplier PO (GBP £ / USD $)"]
        FREIGHT["Air / Sea Cargo Manifest (Per KG Tariff)"]
        CUSTOMS["Customs Clearance & Duties (BDT ৳)"]
        LOCAL["Local Port Transport & Stevedoring (BDT ৳)"]
    end

    subgraph Engine ["Server-Side Landed Cost RPC"]
        FX["Dynamic Effective FX Rate Multiplier"]
        WEIGHT["Weight-Proportional Freight Apportionment"]
        DUTY["Ad-Valorem Tariff Surcharge Calculation"]
    end

    subgraph Stamp ["Authoritative Finalization"]
        LOCK["Atomic Finalize RPC (finalize_shipment)"]
        UNIT["Authoritative landed_cost_bdt Stamped Per SKU"]
        HIST["Immutable Snapshot Locked into FIFO Inventory"]
    end

    Inbound --> Engine
    Engine --> LOCK
    LOCK --> UNIT --> HIST
```

$$\text{Landed Cost (BDT)} = (\text{Foreign Unit Price} \times \text{Effective FX}) + \left(\frac{\text{SKU Weight}}{\text{Total Batch Weight}} \times \text{Cargo Charges}\right) + \text{Apportioned Duty}$$

- **Dual-Phase Design:** Real-time in-memory calculation previews unit landed costs and estimated gross margins in the UI. When the shipment is marked received, an atomic `SECURITY DEFINER` RPC writes the authoritative `landed_cost_bdt` snapshot onto shipment items.
- **Outcome Variance Tracking:** Quantities received with physical defects, commercial shortages, or customs seizures are recorded as outcome adjustments, ensuring stock records reflect true physical reality.

### 4. Three-Layer Runtime Module & Permission Guard

Features are dynamically enabled per tenant without deploying bespoke code binaries:

```mermaid
flowchart TD
    REQ["User Requests Action / Route"] --> M{"1. Module Enabled?<br/>(tenant_modules)"}
    M -- No --> DENIED["403 Route Hidden / Action Blocked"]
    M -- Yes --> R{"2. Superadmin / Tenant Admin?<br/>(memberships.role)"}
    R -- Yes --> GRANTED["Access Granted"]
    R -- No --> A{"3. Explicit Action Grant?<br/>(module_actions)"}
    A -- Yes --> GRANTED
    A -- No --> DENIED
```

- **Action Grant Hierarchy:** Granular action grants (`view`, `create`, `edit`, `delete`, `manage`, `order`) evaluated at both the UI router navigation guard and database RLS engine via `membership_has_module_action()`.

---

## Database Design & Concurrency

### Declarative Modular Schema Split

To eliminate risk across 1,330+ migrations, the monolithic database schema was decomposed into declarative domain modules in `supabase/schemas/<domain>/`:

```
supabase/schemas/
├── _extensions.sql                  # Extensions (uuid-ossp, pgcrypto)
├── public.sql                       # Master declarative public schema (unsplit domains)
├── procurement/                     # SPLIT: Shipments, items, suppliers, purchase tracking
│   ├── 01_types.sql                 # Custom enums and composite domain types
│   ├── 02_tables.sql                # Table DDL, defaults, constraints, foreign keys, indexes
│   ├── 03_rpcs.sql                  # Stored procedures & atomic business logic
│   └── 04_rls.sql                   # Row Level Security engine policies
├── shop_order/                      # SPLIT: Shops, carts, listings, orders, dropship settlement
├── bills_pays/                      # SPLIT: Bills, lines, pays, instruments, cashbook, profiles
└── notifications/                   # SPLIT: Inbox, preferences, push subscriptions
```

### Local-First Docker Replay & Schema Diff Verification

Production data and schema migrations are safeguarded through a strict local verification workflow:

1. **Declarative Modification:** Developers edit SQL definitions directly in `supabase/schemas/<domain>/`.
2. **Schema Diffing:** Running `pnpm run backend:schema:diff` invokes `supabase db diff` to detect declarative changes and generate timestamped migration scripts.
3. **Clean Container Replay:** Running `pnpm run backend:reset` spins up a local Docker Supabase instance, wipes the database, and replays all **1,330+ migrations** sequentially.
4. **Automated Type Generation:** Running `pnpm run backend:types:local` emits fresh TypeScript contracts to `web/src/types/database.types.ts`.

---

## Performance Benchmarks & Reliability

During the Q4 2026 performance optimization initiative, the application underwent rigorous bundle profiling, route code splitting, and database query analysis.

### Frontend Optimization Program (Phase 1 & Phase 2 Results)

```mermaid
pie title First-Load CSS Bundle Size (KiB)
    "Vendor Quasar CSS (Split)" : 191
    "Index Shell CSS (Split)" : 90
    "Eliminated from First Load" : 576
```

| Metric | Before Optimization | After Optimization | Engineering Improvement |
| :--- | :--- | :--- | :--- |
| **First-Load CSS Bundle** | **857 KiB** (1 monolithic bundle) | **281 KiB** (vendor-quasar 191 + index 90) | **67% reduction** via `cssCodeSplit: true` across 199 route chunks |
| **Material Icons Web Font** | Shipped entire TTF font (~1.8 MB) | Removed completely | Replaced with `@phosphor-icons/web` tree-shaken SVG icons |
| **Diagramming Libraries** | Synchronous app import (1.4 MiB) | Dynamic on-demand import | Mermaid & Elk loaded strictly on developer documentation routes |
| **Excel Export Engine** | Synchronous app import (908 KiB) | Dynamic lazy import | ExcelJS loaded only when user triggers `.xlsx` export |
| **Push Notification Client** | Preloaded on app boot | Lazy chunk (~47 KiB) | Firebase FCM isolated to notification preferences page |
| **Scraped Static JSON** | 10+ MB in `web/public` | Extracted out of bundle | Relocated to Python ETL data storage (`python/data/uk/out`) |

### Database & Server-State Performance

- **Zero Slow App Queries:** Query pooler profiling confirmed zero user-facing SQL queries in the top 10 slowest database calls.
- **TanStack Query State Orchestration:** Integrated `@tanstack/vue-query` with declarative query key factories and optimistic mutation rollbacks. Complex cart mutations and shipment landed cost adjustments reflect instantaneously without full-dataset invalidations.
- **Pessimistic Concurrency:** High-concurrency checkout paths protected via row-level locks on stock rows, maintaining zero overselling across high-volume promotional sales events.

---

## Lessons Learned & Architectural Retrospective

| Architectural Decision | What Worked Well | What Was Refactored / Learned |
| :--- | :--- | :--- |
| **PostgreSQL RLS as Security Boundary** | Evaluating permissions at the database engine eliminated cross-tenant data leaks completely. Frontend bugs could never expose another tenant's confidential margins. | Policy recursion must be carefully controlled; complex subqueries in RLS policies can cause query planner degradation if not indexed properly. |
| **From Ad-Hoc Wallets to Money Kernel** | Moving to the unified Profile · Bill · Pay · Alloc · Cashbook model eliminated shadow Excel ledgers and unified AR, AP, and courier COD reconciliation into one schema. | Financial document updates must always use explicit credit/debit notes (`parent_bill_id`) rather than mutating issued invoices in place. |
| **Declarative Schema Split** | Decomposing `public.sql` into domain folders (`procurement/`, `bills_pays/`, etc.) enabled clean local Docker migration validation and dramatically faster code reviews. | Schema extraction requires automated diff tooling (`supabase db diff`) to ensure declarative files never drift from historical migration scripts. |
| **Server-State vs Client Store Separation** | Using TanStack Query for remote database state while reserving Pinia strictly for transient UI state eliminated cache synchronization bugs. | Optimistic updates on complex financial grids require bulletproof rollback handlers in case server-side RPC validation fails. |

---

## Visual Workflows & Architecture Wireframes

### Dropship Finance Hub — End-to-End Settlement Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Reseller as Dropship Reseller (Shop Scope)
    participant Desk as Wholesale Dropship Desk (App Scope)
    participant RPC as PostgreSQL RPC Engine
    participant Stock as Central Parent Stock Pool
    participant Kernel as Universal Money Kernel

    Reseller->>RPC: place_dropship_order(cart_payload)
    RPC->>Stock: Hold Available-to-Promise stock (ATP reservation)
    RPC->>Kernel: Issue Customer Invoice (Wholesale Price BDT)
    RPC-->>Reseller: Order Confirmed & Dispatch Queued

    Desk->>RPC: confirm_dropship_dispatched(courier_tracking_id)
    RPC->>Stock: Deduct physical stock & release hold
    RPC->>Kernel: Issue Courier AP Bill (Courier Fee BDT)
    RPC-->>Desk: Manifest Stamped

    Note over Desk,Kernel: Courier delivers goods & collects COD face value
    Desk->>RPC: record_courier_remittance(bank_deposit_bdt)
    RPC->>Kernel: Deposit into Courier Cashbook
    RPC->>Kernel: Allocate payment to Customer Invoice (Oldest First)
    RPC->>Kernel: Credit excess margin to Reseller Custody Cashbook
    RPC-->>Desk: Settlement Completed (Audited)
```

### Production Interface Showcase

#### 1. Executive Operations & Live Liquidity Dashboard
Centralized dashboard tracking multi-tenant liquid cash, gross billed turnover, active inbound consignments, real-time inventory assets (৳1.69M, 1,871 units), and courier COD remittances (Steadfast & Pathao).

![TradeflowBD Multi-Tenant Executive Dashboard — Live Stock Asset Valuation & Fulfillment Pipeline](/images/projects/tradeflowbd/dashboard.webp)

#### 2. Inbound Shipment Finalization & Landed Costing Breakdown
Procurement batch inspection (`Shiplu Shipment 24`) displaying foreign invoice price (£), unit weights, package weights, duty calculations, and locked unit landed cost (BDT) stamped prior to warehouse intake.

![Inbound Shipment Landed Cost Details — Real-Time Item Weight & Currency Apportionment](/images/projects/tradeflowbd/shipment-details.webp)

#### 3. B2B Storefront & Multi-Currency Product Catalog Configuration
Administrative product and storefront configuration desk displaying real-time available stock, vendor references, international list pricing (£), and customer group access rules.

![B2B Storefront & Shop Catalog Configuration — Real-Time Available Stock & Multi-Currency Pricing](/images/projects/tradeflowbd/shop-catalog-config.webp)

#### 4. Dropship Dispatch Dossier & Settlement Ledger
Settlement ledger for dropship dispatch (`ORD-20261008-00860`) itemizing end-customer COD collection (৳8,900.00), packaging & print charge deductions, wholesale dossier cost (৳7,851.00), and automated estimated profit split (৳1,049.00).

![Dropship Dispatch Dossier & Settlement Ledger — Direct COD Collection, Courier Surcharge & Margin Split](/images/projects/tradeflowbd/dropship-dossier.webp)

#### 5. Mobile Wholesale Storefront (Shop Scope)
B2B buyer ordering experience optimized for mobile screens, featuring direct step-quantity pickers, rapid cart mutations, and bottom tab navigation for catalog, cart, and order tracking.

![B2B Wholesale Mobile Storefront (Shop Scope) — Direct Step-Quantity Ordering & Real-Time Cart](/images/projects/tradeflowbd/shop-mobile-storefront.webp)

---

## Future Roadmap

```mermaid
timeline
    title TradeflowBD Architectural Roadmap
    section Completed
        Declarative Schema Split : Decomposed procurement, shop_order, bills_pays, notifications
        Bills & Pays Money Kernel : Unified AR, AP, and courier cashbook engine
        Bundle Optimization : 67% first-paint CSS reduction and dynamic heavy imports
    section In Progress
        Final Schema Extraction : Move customer, products, reporting, and thrift into domain folders
        Thrift Barcode Engine : Direct thermal print integration for Capacitor Android companion
    section Planned
        Customs Compliance Automation : Automated regional export/import declaration documents
        Maritime Telemetry APIs : Real-time container shipping and port congestion tracking
        Investor Portal v2 : Direct capital withdrawal requests and ledger audits
```
