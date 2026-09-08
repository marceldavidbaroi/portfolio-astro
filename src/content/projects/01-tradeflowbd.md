---
id: "01"
title: "Enterprise Wholesale ERP – Multi-Tenant Commerce Platform"
subtitle: "Multi-tenant SaaS ERP with parent-pooled virtual stock allocation, landed cost engine, and universal double-entry wallet."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected a multi-tenant enterprise ERP achieving 100% database RLS isolation and zero-overselling inventory synchronization across 17+ domain modules and 4 application scopes via recursive PostgreSQL policies, ATP algorithms, and atomic RPC transactions."
chip: "Enterprise ERP & SaaS"
order: 1
featured: true
platformType: "desktop"

role: "Lead Framework & Migration Engineer"
timeline: "2026 — Present"
status: "Active Production"
classification: "🔒 Proprietary Enterprise IP"

techStack:
  frontend:
    - "Vue 3.5"
    - "Quasar 2"
    - "TypeScript"
    - "Pinia"
    - "TanStack Query"
    - "Vue Router 5"
  backend:
    - "Supabase (PostgreSQL 15+)"
    - "Row-Level Security (RLS)"
    - "Atomic RPCs (300+ Functions)"
    - "Supabase Realtime Channels"
    - "Google OAuth"
  database:
    - "PostgreSQL 15+"
    - "Universal Double-Entry Wallet"
    - "Landed Cost Apportionment Engine"
    - "980+ Versioned Migrations"
  devops:
    - "Cloudflare Pages"
    - "Docker Local Supabase"
    - "Python ETL Pipelines"
    - "Capacitor Android"
    - "Cloudinary CDN"
  mobile_hardware: []

links:
  liveDemo: ""
  parentPlatform: ""
  github: ""
  docs: ""

images:
  - "/images/projects/tradeflowbd/dashboard.webp"
  - "/images/projects/tradeflowbd/shipments-list.webp"
  - "/images/projects/tradeflowbd/shipment-details.webp"
  - "/images/projects/tradeflowbd/product-costing.webp"

visualAssets:
  heroMockup: "/images/projects/tradeflowbd/dashboard.webp"
  architectureDiagram: "/images/projects/tradeflowbd/shipments-list.webp"
  databaseErd: "/images/projects/tradeflowbd/shipment-details.webp"
  screenshots:
    - "/images/projects/tradeflowbd/dashboard.webp"
    - "/images/projects/tradeflowbd/shipments-list.webp"
    - "/images/projects/tradeflowbd/shipment-details.webp"
    - "/images/projects/tradeflowbd/product-costing.webp"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Architected a plug-and-play multi-tenant SaaS ERP platform that enabled parent wholesale corporations and child sales desks to dynamically toggle business modules based on subscription tiers [X], achieving 100% database-enforced tenant data isolation and zero inventory overselling across 17+ domain modules and 4 application scopes [Y] by designing recursive PostgreSQL Row-Level Security policies, parent-pooled virtual stock allocation algorithms, and atomic PostgreSQL RPC transactions [Z]."

impactMetrics:
  - label: "Tenant Data Isolation"
    value: "100%"
    detail: "Enforced at database engine level via 200+ RLS policies"
  - label: "Domain Modules"
    value: "17+"
    detail: "Procurement, Commerce, Finance, Verticals, Capital"
  - label: "Application Scopes"
    value: "4 Surfaces"
    detail: "Platform Admin, Parent ERP, B2B Shop, Investor Portal"
  - label: "Inventory Overselling"
    value: "Eliminated"
    detail: "Single ATP source of truth via parent-pooled allocations"
  - label: "Atomic RPCs"
    value: "300+"
    detail: "All complex financial writes server-side & ACID compliant"
  - label: "Landed Cost Engine"
    value: "Automated"
    detail: "Deterministic freight and duty apportionment per SKU"

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
      painDescription: "Multi-desk payments, dropship margins, and credit lines maintained in unlinked ledgers resulted in unreconciled balances."
      gainTitle: "Universal Double-Entry Multi-Currency Wallet"
      gainDescription: "Atomic database RPCs settle buyer payments, partner payouts, and platform fee splits with audit-trailed journal entries."

problemStatement: "Wholesale import enterprises operated through fragmented spreadsheets for costing, manual shipment logs, isolated stock counts per desk, and shadow accounting in Excel. This caused frequent overselling, unreconciled financial balances, and massive risk of cross-tenant data leakage between competing sister concerns."

architectureSummary: "Single unified codebase serving 4 distinct application scopes (Platform, App, Shop, Investor) built on Vue 3 / Quasar SPA, TanStack Query server-state cache, and Supabase PostgreSQL with 200+ RLS policies and 300+ atomic RPCs."

keyDecisions:
  - challenge: "Database-Level Isolation vs App-Level Filtering"
    decision: "Enforced Row-Level Security (RLS) on every tenant-scoped table, evaluated from authenticated session tokens rather than client-side WHERE clauses."
    outcome: "Eliminated cross-tenant data leak vulnerabilities; security boundary is the PostgreSQL engine itself."
  - challenge: "Parent–Child Shared Stock & Allocation"
    decision: "Physical stock rows exist strictly on the parent company. Sister concerns receive virtual allocation slices (global_stock_allocations) for sales desks."
    outcome: "Single source of truth for Available-to-Promise (ATP) stock; eliminated overselling across wholesale POS, storefronts, and dropship desks."
  - challenge: "Atomic Financial Transactions & Invoice Issuance"
    decision: "Replaced multi-step client-side database writes with SECURITY DEFINER PostgreSQL RPCs executing within atomic BEGIN...COMMIT blocks."
    outcome: "Zero data corruption on concurrent invoice creation, dropship settlement, or shipment finalization."
  - challenge: "Fragmented Ledgers & Shadow Accounting"
    decision: "Architected a Universal Wallet rule with one ledger per (parent_tenant_id, entity_type, entity_id, currency), deriving P&L from immutable landed cost snapshots."
    outcome: "Consolidated treasury on parent books with operating tenant audit tags and zero shadow ledgers."
  - challenge: "Redundant API Fetching & Stale Client UI"
    decision: "Integrated TanStack Query (@tanstack/vue-query) with query key factories, optimistic mutations, and targeted cache patches."
    outcome: "Cart mutations and shipment costing updates reflect instantly without full dataset refetches."
  - challenge: "Monolithic 10,000+ Line SQL Schema"
    decision: "Split schema into domain-modular folders (procurement/, shop_order/, sales_invoice/, etc.) with isolated tables, RPCs, and RLS scripts."
    outcome: "Enabled parallel domain evolution and reliable local Docker migration validation before production deploys."

securityReliability:
  - "PostgreSQL Row-Level Security (RLS) on all tenant tables with membership_has_module_action() policy checks."
  - "Atomic RPC transactions for invoices, dropship settlements, shipment finalizations, and wallet transfers."
  - "Four scoped login surfaces with Google OAuth via Supabase Auth and automatic token refresh."
  - "End-to-end type safety with database.types.ts generated automatically after every migration."
  - "Archive-first governance for shipment batches — financial audit trails preserved with no accidental hard deletes."
  - "Soft-delete trash system with 30-day retention and tenant-scoped purge engines."
  - "Local-first development workflow using Docker Supabase with full 980+ migration replay before production deployment."

futureRoadmap:
  - "Wallet Parent-Books Migration: Consolidate all ledger writers onto the unified parent books model."
  - "Schema Domain Split: wallet, thrift, investor, and permissions modules."
  - "Customs Documentation Generator: Automated regional compliance rules and export document generation."
  - "Maritime Tracking APIs: Real-time container telemetry and vessel arrival tracking."
  - "Investor Portal v2: Capital withdrawal and allocation request workflows beyond read-only reporting."
  - "Capacitor iOS: Mobile barcode inventory audit companion for iOS devices."
---

## At a Glance

| | |
|---|---|
| **What it is** | Multi-tenant wholesale ERP and commerce platform |
| **Who it's for** | Import/wholesale businesses with parent companies and sister concerns |
| **Core problem** | Run procurement, stock, sales, storefronts, dropship, and treasury in one system — without data leaking between tenants |
| **How it's built** | Vue 3 / Quasar SPA → Supabase PostgreSQL with RLS + atomic RPCs |
| **Scale** | 17+ domain modules · 980+ migrations · 470+ Vue components · 4 application scopes |

---

## The Problem

Wholesale import businesses in Bangladesh and similar markets run complex operations across multiple legal entities:

- A **parent company** handles international procurement, customs clearance, and warehouse stock
- **Sister concerns (child tenants)** run wholesale desks, B2B storefronts, and dropship reseller networks
- **External investors** fund shipment batches and need yield visibility
- **B2B customers** order through branded storefronts with their own wallets and credit limits

### Pain points before TradeflowBD

```mermaid
flowchart TD
    subgraph Before ["Before: Fragmented Operations"]
        A["Spreadsheets for costing & demand"] --> B["Manual shipment tracking"]
        B --> C["Separate stock counts per desk"]
        C --> D["Shadow accounting in Excel"]
        D --> E["No single view of AR / payables"]
        E --> F["Data leakage risk across tenants"]
    end
```

| Pain Point | Business Impact |
|---|---|
| **No shared stock pool** | Same physical inventory counted separately per sister concern — overselling and reconciliation nightmares |
| **Fragmented finance** | Margins calculated in spreadsheets; no single ledger for vendors, couriers, customers, and investors |
| **Tenant data leakage risk** | Application-level filtering is not enough when competing businesses share one database |
| **Rigid feature tiers** | Enabling dropship or investor capital for one tenant required code changes, not configuration |
| **Slow onboarding** | New sister concern = days of manual setup, stock duplication, and permission wiring |
| **No customer-facing commerce** | Wholesale desks had no B2B storefront; orders came through phone and WhatsApp |

### The core question

> How do you build one SaaS platform where a parent company pools physical stock, multiple child desks sell from allocations, customers shop online, investors see yield — and **no tenant can ever see another tenant's data**?

---

## The Solution

TradeflowBD is a **plug-and-play multi-tenant ERP** that covers the full wholesale lifecycle:

```text
Pre-Order Costing → Inbound Shipment & Landed Cost → Warehouse Pooling
    → Multi-Desk Selling (Wholesale / Storefront / Dropship)
        → Universal Wallet Settlement → Treasury & Investor Reporting
```

![TradeflowBD Executive Dashboard — Live Sellable Stock, Valuation & Batches](/images/projects/tradeflowbd/dashboard.webp)

One platform. Four login surfaces. Database-enforced isolation. Configuration-driven modules.

```mermaid
flowchart LR
    subgraph Input ["Demand & Procurement"]
        PBC["Pre-Order Costing"]
        SHIP["Inbound Shipments"]
    end

    subgraph Pool ["Parent Warehouse"]
        STOCK["Global Stock Pool"]
        LOC["4-Tier Bin Locations"]
    end

    subgraph Sell ["Multi-Desk Selling"]
        WS["Wholesale POS"]
        SHOP["B2B Storefront"]
        DS["Dropship Desk"]
    end

    subgraph Finance ["Consolidated Finance"]
        WALLET["Universal Wallet"]
        TREASURY["Treasury Reports"]
        INV["Investor Yield"]
    end

    PBC --> SHIP
    SHIP --> STOCK
    STOCK --> LOC
    STOCK --> WS
    STOCK --> SHOP
    STOCK --> DS
    WS --> WALLET
    SHOP --> WALLET
    DS --> WALLET
    WALLET --> TREASURY
    WALLET --> INV
```

---

## Architecture

### High-level system design

```mermaid
flowchart TB
    subgraph Clients ["Client Surfaces"]
        PLATFORM["Platform Scope<br/>/superadmin/*"]
        APP["App Scope<br/>/:slug/app/*"]
        SHOP["Shop Scope<br/>/:slug/shop/*"]
        INVESTOR["Investor Scope<br/>/:slug/investor/*"]
    end

    subgraph Frontend ["Frontend — Vue 3 / Quasar SPA"]
        ROUTER["Vue Router + Scope Guards"]
        PERMS["Module Permission Guard"]
        TQ["TanStack Query<br/>Server State Cache"]
        PINIA["Pinia Stores"]
        MODULES["20+ Domain Modules<br/>page → store → service → repository"]
    end

    subgraph Backend ["Backend — Supabase"]
        AUTH["Supabase Auth<br/>Google OAuth"]
        RLS["Row-Level Security<br/>200+ Policies"]
        RPC["Atomic RPCs<br/>300+ Functions"]
        RT["Realtime Channels"]
        DB["PostgreSQL 15+"]
    end

    subgraph Pipeline ["Data Pipeline"]
        PYTHON["Python ETL<br/>Price Check / WTS Sync"]
        EXCEL["ExcelJS Bulk Import"]
    end

    PLATFORM & APP & SHOP & INVESTOR --> ROUTER
    ROUTER --> PERMS --> MODULES
    MODULES --> TQ & PINIA
    TQ --> RPC
    PINIA --> RPC
    RPC --> RLS --> DB
    AUTH --> RLS
    RT --> TQ
    PYTHON --> DB
    EXCEL --> MODULES
```

### Deployment topology

```mermaid
flowchart LR
    USER["Users"] --> CF["Cloudflare Pages<br/>Quasar SPA Build"]
    CF --> SB["Supabase Cloud<br/>PostgreSQL + Auth + Storage"]
    DEV["Developers"] --> DOCKER["Local Supabase<br/>Docker"]
    DOCKER --> MIGRATE["980+ Migrations<br/>Replay Before Deploy"]
    MIGRATE --> SB
    PYTHON["Python ETL Scripts"] --> SB
    MOBILE["Capacitor Android<br/>Barcode Scanner"] --> CF
```

---

## Multi-Tenant Model

The hardest design problem was **parent–child hierarchy with shared stock but isolated desks**.

```mermaid
flowchart TD
    subgraph Platform ["Platform Superadmin"]
        SA["Superadmin"] --> TENANTS["Tenant Registry"]
    end

    subgraph Parent ["Parent Company (parent_id = NULL)"]
        P["Parent Workspace"]
        P --> PHYS["Physical Stock (global_stocks)"]
        P --> SHIPMENTS["Inbound Shipments"]
        P --> INVESTORS["Investor Capital Pools"]
        P --> REPORTS["Consolidated Treasury"]
    end

    subgraph Children ["Sister Concerns (parent_id = parent.id)"]
        P -->|Virtual Allocations| C1["Child A — Wholesale Desk"]
        P -->|Virtual Allocations| C2["Child B — Storefront & Dropship"]
        C1 --> INV1["Sales Invoices & Customers"]
        C2 --> SHOP1["B2B Storefront Orders"]
    end

    TENANTS --> P
```

### Ownership rules

| Entity | Owner | Child Access |
|---|---|---|
| Physical stock (`global_stocks`) | Parent only | Read via `global_stock_allocations` |
| Inbound shipments | Parent only | None |
| Sales invoices | Parent books, child branding | Child creates via `issued_by_tenant_id` |
| Shop orders | Child tenant | Parent sees consolidated wallet |
| Wallet ledger | Parent books (`parent_tenant_id`) | Child tagged via `operating_tenant_id` |

**Key rule:** Hierarchy is strictly **one level deep**. A child cannot have children. A parent with children cannot be assigned a parent.

---

## Four Application Scopes

One codebase, four distinct user experiences — each with its own auth flow, layout theme, and permission model.

```mermaid
flowchart LR
    URL["Incoming URL"] --> R1{Route Match}
    R1 -->|"/superadmin/*"| S0["Platform<br/>Tenant provisioning"]
    R1 -->|"/:slug/app/*"| S1["App<br/>ERP backoffice"]
    R1 -->|"/:slug/shop/*"| S2["Shop<br/>B2B storefront"]
    R1 -->|"/:slug/investor/*"| S3["Investor<br/>Read-only portal"]
```

| Scope | Users | Primary Capabilities |
|---|---|---|
| **Platform** | Superadmin | Create tenants, global reference data, platform health |
| **App** | Admin & Staff | Procurement, stock, invoices, wallet, settings, dropship desk |
| **Shop** | B2B Customers | Catalog browse, cart checkout, order tracking, merchant wallet |
| **Investor** | Capital Partners | Shipment batch profitability, capital statements, yield performance |

---

## Permission & Module Gating

Features are not hardcoded per tenant. A three-layer guard decides access at runtime.

```mermaid
flowchart TD
    REQ["User attempts action"] --> M{"1. Module enabled?<br/>(tenant_modules)"}
    M -- No --> DENY["Access Denied"]
    M -- Yes --> A{"2. User is admin?<br/>(memberships.role)"}
    A -- Yes --> ALLOW["Access Granted"]
    A -- No --> G{"3. Has action grant?<br/>(module_actions)"}
    G -- Yes --> ALLOW
    G -- No --> DENY
```

### Action grant hierarchy

```text
view    → Read tables and detail pages
create  → Add new records
edit    → Modify drafts and configs
delete  → Soft-delete to Trash
manage  → Admin overrides, voiding, settings
order   → Customer cart placement (shop scope only)
```

Navigation menus and dashboard widgets are filtered dynamically — a tenant without the `thrift` module never sees thrift routes, even if the code exists in the bundle.

---

## Core Technical Decisions

### Decision 1 — Database-level isolation, not app-level filtering

| | |
|---|---|
| **Problem** | Competing corporate tenants share one PostgreSQL database. A bug in a `WHERE tenant_id = ?` clause leaks financial data. |
| **Decision** | Row-Level Security (RLS) on every tenant-scoped table, evaluated from the authenticated session token — not from client-side filters. |
| **Outcome** | Queries cannot cross tenant boundaries even under concurrent high-throughput access. Security boundary is the database, not the Vue app. |

```mermaid
flowchart LR
    APP["Vue App"] -->|"JWT with tenant context"| SB["Supabase Client"]
    SB --> RPC["RPC / Direct Query"]
    RPC --> RLS["RLS Policy Check<br/>membership_has_module_action()"]
    RLS -- Pass --> DATA["Tenant-Scoped Rows"]
    RLS -- Fail --> EMPTY["Zero Rows Returned"]
```

---

### Decision 2 — Parent-owned stock, virtual child allocations

| | |
|---|---|
| **Problem** | Sister concerns selling the same physical inventory each maintain separate stock counts — leading to overselling and reconciliation failures. |
| **Decision** | Physical stock rows exist only on the parent tenant. Children receive virtual allocation slices (`global_stock_allocations`) for their sales desks. |
| **Outcome** | Single source of truth for ATP (available-to-promise). Wholesale POS, storefront, and dropship all draw from the same pool without duplication. |

---

### Decision 3 — Atomic RPCs for all complex writes

| | |
|---|---|
| **Problem** | Invoice issuance touches stock allocation, movement logs, wallet ledger, and billing profile balance — a partial client-side write corrupts data. |
| **Decision** | All multi-table mutations run as `SECURITY DEFINER` PostgreSQL RPCs (`create_invoice_from_payload`, `confirm_dropship_delivered`, `finalize_shipment`, etc.). |
| **Outcome** | Every business transaction is atomic. TypeScript types are regenerated from the schema after each migration (`backend:types`). |

```mermaid
sequenceDiagram
    participant UI as Vue Component
    participant TQ as TanStack Query
    participant RPC as PostgreSQL RPC
    participant DB as Database

    UI->>TQ: Mutation (place order)
    TQ->>RPC: create_shop_order_from_cart()
    RPC->>DB: BEGIN
    RPC->>DB: Allocate stock (ATP check)
    RPC->>DB: Create order + items
    RPC->>DB: Record wallet ledger entry
    RPC->>DB: COMMIT
    RPC-->>TQ: Order result
    TQ-->>UI: Optimistic cache patch
```

---

### Decision 4 — Universal Wallet with no shadow ledgers

| | |
|---|---|
| **Problem** | Separate accounting tables per entity type (customer AR, vendor AP, courier COD, investor capital) create fragmented, unreconcilable finance. |
| **Decision** | One wallet per `(parent_tenant_id, entity_type, entity_id, currency)`. P&L derived from immutable cost snapshots (`landed_cost_bdt`) — not duplicate ledger balances. |
| **Outcome** | Consolidated treasury on parent books. Child desks tagged via `operating_tenant_id` for audit drill-down. No shadow accounting. |

```mermaid
flowchart TD
    subgraph OneWallet ["One-Wallet Rule"]
        KEY["(parent_tenant_id, entity_type, entity_id, currency)"]
    end

    subgraph Entities ["Entity Types"]
        TENANT["tenant — company cash"]
        CUSTOMER["customer — AR / store credit"]
        VENDOR["vendor — payables"]
        COURIER["courier — COD collections"]
        CARGO["cargo_company — freight payables"]
        INVESTOR["investor — capital pool"]
    end

    KEY --> TENANT & CUSTOMER & VENDOR & COURIER & CARGO & INVESTOR

    subgraph PnL ["Read-Side P&L (No Shadow Ledger)"]
        SNAP["Immutable cost snapshots<br/>on invoice lines"]
        SNAP --> MARGIN["Invoice Margin Report"]
        SNAP --> SHIPPNL["Shipment Batch P&L"]
    end
```

---

### Decision 5 — TanStack Query for server state orchestration

| | |
|---|---|
| **Problem** | Pinia stores refetching on every navigation caused redundant RPC calls and stale UI on complex pages (shop pricing, shipment costing). |
| **Decision** | TanStack Query (`@tanstack/vue-query`) with query key factories, `staleTime` tuning, optimistic mutations, and targeted cache patches. |
| **Outcome** | Add-to-cart patches the cart cache without refetching the full active-carts list. Shipment costing uses batch RPCs, never per-item loops. |

---

### Decision 6 — Domain-modular schema split

| | |
|---|---|
| **Problem** | A single 10,000+ line `public.sql` made every schema change high-risk and slow to review. |
| **Decision** | Split into domain folders (`procurement/`, `shop_order/`, `sales_invoice/`) each with `02_tables.sql`, `03_rpcs.sql`, `04_rls.sql`. |
| **Outcome** | Procurement and commerce schema can evolve independently. Local Docker replay validates migrations before production deploy. |

---

## Domain Modules

```mermaid
mindmap
  root((TradeflowBD))
    Governance
      Tenant Auth & RBAC
      Access Control
      Operational Data Reset
      Soft Delete / Trash
    Procurement
      Inbound Shipments
      Landed Cost Engine
      Warehouse Locations
      Stock Movements
    Commerce
      Wholesale POS
      B2B Storefront
      Dropship Finance Hub
      Catalog Negotiation
    Finance
      Universal Wallet
      Treasury Reports
      Customer Dues
      Courier COD Remittance
    Verticals
      Thrift (Second-Hand Retail)
      Koba (UK Cross-Border)
      Product-Based Costing
    Capital
      Investor Profiles
      Shipment Allocations
      Yield Reporting
```

### Module highlights

| Module | What it solves |
|---|---|
| **Procurement & Stock** | International shipment intake, freight/customs cost entries, landed cost apportionment by weight, 4-tier bin hierarchy |
| **Sales Invoice** | Wholesale POS with FIFO stock search, billing profiles, returns restocking, invoice paper printing |
| **Shop & Dropship** | Three shop types (catalog, in-stock, dropship), B2B cart/checkout, 3-step Dropship Finance Hub settlement |
| **Product-Based Costing** | Pre-order demand files with customer backlog auto-suggest → procurement demand list handoff |
| **Universal Wallet** | Multi-currency double-entry ledger for all entity types, cash-in reports, atomic transfers |
| **Reporting & Treasury** | Invoice margin, shipment P&L, customer dues aging, courier bulk remittance |
| **Investor Capital** | Shipment batch cost-share allocations, read-side yield, capital ledger |
| **Thrift** | Second-hand vertical: consignment shipments, thermal barcodes, garment measurements, POS, COD remittance |
| **Koba** | UK catalog scraping pipeline (Python), commission pricing, cross-border order fulfillment |

![Product-Based Costing V2 — Pre-Order Demand, FX Rates & Profit Margin Modeling](/images/projects/tradeflowbd/product-costing.webp)

![Procurement & Inbound Shipments List — Real-Time Batch Lifecycle & Archival Tracking](/images/projects/tradeflowbd/shipments-list.webp)

---

## Dropship Finance Hub — Example End-to-End Flow

Shows how procurement, commerce, and wallet layers connect in one atomic workflow.

```mermaid
sequenceDiagram
    participant Reseller as Dropship Reseller (Shop)
    participant Desk as Dropship Desk (App)
    participant RPC as PostgreSQL RPCs
    participant Stock as Parent Stock Pool
    participant Wallet as Universal Wallet

    Reseller->>RPC: place_dropship_order()
    RPC->>Stock: Hold stock (ATP reservation)
    RPC->>Wallet: Record customer receivable
    RPC-->>Reseller: Order confirmed

    Desk->>RPC: confirm_dropship_delivered()
    RPC->>Stock: Release hold, deduct quantity
    RPC->>Wallet: Record courier COD collection
    RPC->>Wallet: Record merchant payout
    RPC-->>Desk: Settlement complete
```

---

## Landed Cost Engine

Every margin report, invoice line, and investor yield calculation depends on accurate unit costs stamped at shipment finalization.

![Shipment Details & Landed Cost Breakdown — Real-time Item Weight & Currency Apportionment](/images/projects/tradeflowbd/shipment-details.webp)

```mermaid
flowchart LR
    A["Cost Entries<br/>(Goods, Freight, Customs)"] --> B["Effective FX &<br/>Weight Surcharges"]
    B --> C["Apportion Freight<br/>by Product Weight"]
    C --> D["Landed Unit Cost (BDT)"]
    D --> E["Stamp landed_cost_bdt<br/>on Shipment Items"]
    E --> F["Available for<br/>Stock Allocation & Sales"]
```

**Formula:**

```text
Landed Cost (BDT) = (Purchase Price × FX Rate) + Apportioned Cargo Charge + Customs Surcharge
```

Dual-phase design: in-memory preview in the UI; authoritative stamp written to the database only on shipment finalization.

---

## Tech Stack

| Layer | Technology | Role |
|---|---|---|
| **Frontend** | Vue 3.5 + Quasar 2 + TypeScript | SPA with modular domain architecture |
| **State** | Pinia + TanStack Query | Client state + server cache orchestration |
| **Routing** | Vue Router 5 | Scope-aware guards (platform / app / shop / investor) |
| **Backend** | Supabase (PostgreSQL 15+) | Database, auth, storage, realtime |
| **Security** | RLS + Security-Definer RPCs | Tenant isolation + atomic transactions |
| **Types** | Generated `database.types.ts` | Schema → TypeScript contract on every migration |
| **Deploy** | Cloudflare Pages | Frontend CDN with `dist/spa` output |
| **Local Dev** | Supabase CLI + Docker | Migration replay before production push |
| **ETL** | Python scripts | Price Check / WTS product sync to Supabase |
| **Mobile** | Capacitor (Android) | Barcode scanning and inventory audit companion |
| **Media** | Cloudinary | Image upload and optimization |

---

## Impact & Results

| Metric | Value | Detail |
|---|---|---|
| **Tenant data isolation** | 100% | RLS enforced at database level, not application level |
| **Application scopes** | 4 | Platform, App, Shop, Investor — one codebase |
| **Domain modules** | 17+ | Documented, module-gated, independently evolvable |
| **Database migrations** | 980+ | Versioned schema with local Docker replay |
| **Vue components** | 470+ | Modular page → store → service → repository pattern |
| **Atomic RPCs** | 300+ | All complex writes server-side, type-safe |
| **Onboarding time** | Minutes | Child tenant + module enablement via configuration, not code deploy |
| **Stock duplication** | Eliminated | Parent pool + virtual allocations — single ATP source |

---

## Security & Reliability

- **PostgreSQL RLS** on all tenant-scoped tables with membership-based policy evaluation
- **Atomic RPCs** for invoice creation, dropship settlement, shipment finalization, wallet transfers
- **Four scoped login surfaces** with Google OAuth via Supabase Auth and automatic token refresh
- **Type-safe contracts** between generated Supabase types and frontend stores/composables
- **Archive-first governance** for shipments — financial audit trails preserved, no accidental hard deletes
- **Soft-delete trash** with 30-day retention and tenant-scoped purge engine
- **Local-first development** — Docker Supabase with full migration replay before any production deploy

---

## What I Built (Personal Contributions)

As Lead Framework & Migration Engineer:

- Designed the **parent–child tenant hierarchy** and stock allocation model
- Architected the **Universal Wallet** parent-books consolidation (in progress migration)
- Built the **module permission guard** system (`tenant_modules` + `module_actions` + scope routing)
- Led the **schema modularization** — splitting monolithic SQL into domain-scoped folders
- Established the **page → store → service → repository** module pattern across 20+ domains
- Implemented **TanStack Query** caching strategy with optimistic mutations and batch RPC patterns
- Drove **980+ migrations** with local-first Supabase workflow and generated TypeScript types
- Built specialized verticals: **Thrift** (second-hand retail), **Koba** (UK cross-border), **Dropship Finance Hub**

---

## Visual Workflows & Architecture Wireframes

### 1. Enterprise Desktop Layout — 3-Tier Navigation & Workspace Grid

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
| [&] Wallets & Ledger | +-- REAL-TIME PRODUCT APPORTIONMENT TABLE --------------------------------+ |
|                      | | [x] | SKU Code     | Product Name         | Qty  | Unit(£) | Landed(৳) | Margin% | |
|                      | |-----|--------------|----------------------|------|---------|-----------|---------| |
|                      | | [ ] | TOALP001     | Alpecin Shampoo C1   | 1200 | £4.75   | ৳1,280.00 | 18.5%   | |
|                      | | [ ] | TOAQU133A    | Aquafresh Toothpaste | 3500 | £0.75   | ৳380.00   | 14.2%   | |
|                      | | [ ] | TONXT-JKT    | Next Corduroy Jacket | 450  | £12.00  | ৳2,850.00 | 32.0%   | |
|                      | +-------------------------------------------------------------------------+ |
| [<-] Sign Out        | PAGE 1 OF 18 (240 ITEMS)                      [<<] [<] [1] [2] [3] [>] [>>] |
+----------------------+-----------------------------------------------------------------------------+
```

### 2. Multi-Tenant Stock Allocation & Landed Cost Engine Workflow

```mermaid
flowchart TD
    subgraph S1 ["1. International Procurement & Cargo Manifest"]
        INVOICE["Supplier Purchase Order<br/>(GBP £ / USD $)"]
        FREIGHT["Sea / Air Freight Costs<br/>(Per kg / Per CBM)"]
        CUSTOMS["Customs Duty, AIT & Port Handling<br/>(Regional Clearing Agents)"]
    end

    subgraph S2 ["2. Automated Landed Cost Engine"]
        INVOICE & FREIGHT & CUSTOMS --> ENGINE["Weight & Value Apportionment Engine<br/>Effective FX Rate Multiplier"]
        ENGINE --> STAMP["Final Landed Unit Cost Stamped<br/>(Per Single Item SKU)"]
    end

    subgraph S3 ["3. Parent Warehouse & Pooled Virtual Stock"]
        STAMP --> POOL["Central Parent Stock Pool<br/>Available-to-Promise (ATP) Queue"]
    end

    subgraph S4 ["4. Multi-Tenant Sales Channels"]
        POOL -->|"RLS Scoped Views"| DESK1["Wholesale POS Desk<br/>(Bulk Invoicing)"]
        POOL -->|"Virtual Reservation"| DESK2["Online Storefront<br/>(B2C B2B Commerce)"]
        POOL -->|"Atomic Holds"| DESK3["Dropship Reseller Network<br/>(3-Tier Commission Desk)"]
    end

    subgraph S5 ["5. Settlement & Treasury Ledger"]
        DESK1 & DESK2 & DESK3 --> RPC_SETTLE["PostgreSQL Atomic RPCs<br/>(place_order, deduct_stock)"]
        RPC_SETTLE --> WALLET["Universal Double-Entry Wallet<br/>(Parent-Books Consolidated Ledger)"]
    end
```

---

## Future Roadmap

```mermaid
timeline
    title TradeflowBD Roadmap
    section In Progress
        Wallet Parent-Books Migration : Consolidate all ledger writers onto parent books model
        Schema Domain Split : wallet, thrift, investor, permissions modules
    section Planned
        Customs Documentation Generator : Regional compliance rules automation
        Maritime Tracking APIs : Real-time container telemetry integration
        Investor Portal v2 : Withdrawal request workflow beyond read-only reporting
        Capacitor iOS : Mobile inventory companion for iOS
```
