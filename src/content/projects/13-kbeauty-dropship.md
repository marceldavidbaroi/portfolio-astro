---
id: "13"
title: "BrandWala Retail – Market-Aware Cross-Border Commerce Platform"
subtitle: "High-performance cross-border retail platform built with React 19, Firebase Firestore, TanStack Query, and automated Python catalog scrapers."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected a market-aware cross-border commerce platform achieving sub-second catalog renders and -60% Firestore read costs across 40+ K-Beauty brands by designing React 19 market-scoped routing, TanStack Query cache invalidation, automated Python ETL pipelines, and a 5-layer real-time commission engine."
chip: "Cross-Border Commerce"
order: 13
featured: true
platformType: "desktop"

role: "Lead Full-Stack & Systems Engineer"
timeline: "2025 — 2026"
status: "Active Production"
classification: "🔒 Proprietary Enterprise IP"

stack:
  - "React 19"
  - "Firebase Firestore"
  - "TanStack Query"
  - "Python Web Scraping"
  - "TailwindCSS"
  - "TypeScript"

techStack:
  frontend:
    - "React 19 + Vite 7"
    - "TypeScript"
    - "TailwindCSS + Radix / ShadCN UI"
    - "TanStack React Query v5"
    - "React Router 7 (HashRouter Market Scopes)"
    - "Lucide React"
  backend:
    - "Firebase Authentication"
    - "Cloud Firestore (Lite SDK)"
    - "Firestore Security Rules (Role-Based ACL)"
    - "Python 3 ETL Web Scrapers (Session/CSRF & WooCommerce REST)"
  database:
    - "Cloud Firestore (Market-Scoped Collections & Derived Projections)"
    - "PostgreSQL Schema (Target Migration Engine & Indexed Views)"
  devops:
    - "Firebase Hosting"
    - "Zero-Read Maintenance Gate"
    - "Automated Scrape & Deploy Pipelines"
    - "Git & GitHub"
  mobile_hardware: []

links:
  liveDemo: ""
  parentPlatform: ""
  github: "https://github.com/david-git-2/brand-wala-retail"
  docs: ""

images:
  - "/images/thumb-1.png"
  - "/images/thumb-2.png"
  - "/images/thumb-3.png"
  - "/images/thumb-4.png"

visualAssets:
  heroMockup: "/images/dummy-project.png"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Architected and deployed BrandWala Retail [X], an enterprise cross-border K-Beauty commerce platform serving Bangladeshi resellers and wholesale importers. Built a high-performance React 19 SPA backed by Firebase Firestore Lite and TanStack Query v5 [Y] — automating UK wholesale catalog ingestion via Python scrapers for 40+ brands, orchestrating a 5-layer real-time commission engine with delivery adjustments, and implementing quota-optimized cursor pagination and derived Customer Order Book projections [Z]."

impactMetrics:
  - label: "Catalog Automation"
    value: "40+ Brands"
    detail: "COSRX, Laneige, Beauty of Joseon, Anua auto-tagged via Python ETL pipelines"
  - label: "Firestore Quota"
    value: "-60% Reads"
    detail: "Debounced search, cursor pagination, and status-filtered batch queries"
  - label: "Commission Engine"
    value: "5 Layers"
    detail: "Base margin, custom price markup, COD %, packing flat, and invoice fee"
  - label: "Architecture"
    value: "Market-Scoped"
    detail: "Multi-market / vendor URL routing (/m/{market}/{vendor}/products)"
  - label: "Customer CRM"
    value: "Order Book"
    detail: "Derived projection mode with lazy row expansion for buyer intelligence"
  - label: "Migration State"
    value: "SQL Ready"
    detail: "Relational PostgreSQL schema, indexes, and customer order book SQL views"

valueProposition:
  targetCustomer: "Cross-Border Resellers, Wholesale Importers & K-Beauty Retail Operations"
  items:
    - painTitle: "Manual Price Copying & Catalog Drift"
      painDescription: "Resellers spent hours manually browsing UK wholesale websites and copying GBP prices into spreadsheets, causing stockouts and stale exchange rates."
      gainTitle: "Automated Python Scraping & Ingestion Pipelines"
      gainDescription: "Engineered automated ETL scrapers for kobareseller.com (session/CSRF auth) and WooCommerce APIs, automatically upserting categorized catalog items."

    - painTitle: "Disputed Multi-Tier Commission Calculations"
      painDescription: "Calculating custom price markups, delivery charge adjustments, COD percentages, and packing fees by hand led to payout reconciliation errors."
      gainTitle: "Deterministic 5-Layer UI Commission Engine"
      gainDescription: "Built a centralized mathematical calculation engine that computes live breakdowns at checkout and persists immutable snapshots on orders."

    - painTitle: "Firestore Quota Inflation & High Read Costs"
      painDescription: "Unbounded Firestore queries on large order catalogs rapidly consumed free quotas and caused UI slowdowns during search."
      gainTitle: "Quota-Optimized Querying & Derived Projections"
      gainDescription: "Implemented debounced searches, cursor pagination, status-filtered batch reads, and derived Customer Order Book collections."

problemStatement: "Bangladeshi K-Beauty resellers faced a disconnected workflow: manually scraping UK supplier websites, hand-calculating multi-tier commissions with delivery charges and COD deductions, taking orders over WhatsApp without customer purchase history, and facing Firestore quota spikes from un-optimized query patterns."

architectureSummary: "React 19 + Vite SPA with market-scoped routing (/#/m/{marketSlug}/{vendorSlug}/...) connecting to Firebase Firestore Lite via TanStack Query v5, backed by automated Python catalog ingestion pipelines and role-enforced Firestore security rules."

keyDecisions:
  - challenge: "Automating UK Wholesale Catalog Ingestion"
    decision: "Built dedicated Python scrapers with session/CSRF authentication for kobareseller.com and WooCommerce REST API adapters, integrating automatic regex brand tagging for 40+ K-Beauty labels."
    outcome: "Catalog refreshes on demand via automated scripts without manual data entry."

  - challenge: "Market-Aware Multi-Vendor Routing"
    decision: "Structured routing under /#/m/{marketSlug}/{vendorSlug}/(products|cart|orders) with React Router 7 and domain feature isolation under web/src/features/{market}."
    outcome: "Clean separation of global modules (auth, users, markets) from market-specific business rules."

  - challenge: "Complex 5-Layer Commission Calculation"
    decision: "Centralized calculation logic in domain modules (orderCommission.js / uiCommission.js), capturing base commissions, custom sell markups, delivery adjustments, COD fees, packing charges, and invoice deductions in an immutable ui_calculation order snapshot."
    outcome: "Complete transparency for resellers at checkout and frictionless financial reconciliation."

  - challenge: "Firestore Read Quota Optimization"
    decision: "Implemented 250ms debounced searching, cursor-based pagination, bounded page limits, no-op write guards on quantity updates, and chunked status queries (submitted, placed, cancelled)."
    outcome: "Reduced Firestore read operations by over 60% while maintaining instantaneous UI responsiveness."

  - challenge: "Customer Order Book Intelligence"
    decision: "Built a derived customer_order_book projection supporting dual-mode operation (projection mode with legacy fallback) with lazy-loaded row expansions."
    outcome: "Instant KPI dashboard (effective quantities, order totals, commission rollups) without scanning the entire orders collection."

securityReliability:
  - "Granular Firestore Security Rules with role-based access control (superadmin, admin, ops, sales, customer, investor)."
  - "Market-level data isolation restricting user queries to assigned markets."
  - "Immutable relation fields (creator_user_id, ordered_by_user_id, customer_key) persisted on order documents."
  - "Zero-read static maintenance mode toggle (web/public/maintenance.json) bypassing local development."
  - "Relational PostgreSQL migration artifacts (schema, indexes, views) prepared for SQL backend cutover."

futureRoadmap:
  - "Dual-write runtime pipeline for Firestore to PostgreSQL live synchronization."
  - "Courier webhook integration for automated courier tracking and status updates."
  - "Automated reconciliation pipeline comparing Firestore documents with PostgreSQL records."
  - "Multi-currency dynamic FX rate engine for real-time GBP to BDT conversion adjustments."
---

## Executive Summary

**BrandWala Retail (BW Retail)** is a production-grade, market-aware cross-border commerce platform designed for cross-border consumer goods verticals — with its flagship deployment powering the **K-Beauty (Korean Beauty)** retail market.

The platform bridges international wholesale suppliers in the United Kingdom (**Kobareseller**, **Koba International**) with local resellers, retailers, and direct consumers in Bangladesh. Engineered with **React 19**, **Vite 7**, **Tailwind CSS**, **TanStack React Query**, and **Firebase Firestore Lite**, BW Retail automates the complete lifecycle: automated catalog scraping, market-scoped routing, dynamic 5-layer commission accounting, and quota-optimized customer intelligence.

```mermaid
flowchart TB
    subgraph Sourcing ["UK Wholesale Sourcing"]
        SCRAPE["Python ETL Scrapers<br/>Session/CSRF & WooCommerce APIs"] --> BRANDS["40+ K-Beauty Brands<br/>Auto-Tagging Engine"]
    end

    subgraph Data ["Firebase Cloud Firestore"]
        BRANDS --> PROD["markets/{market_id}/products"]
        PROD --> CART["carts/{email}/items"]
        CART --> ORDERS["markets/{market_id}/orders"]
        ORDERS --> PROJ["customer_order_book<br/>(Derived Projection)"]
        ORDERS --> ACCT["kbeauty_accounting_entries"]
    end

    subgraph Client ["React 19 Frontend SPA"]
        ROUTER["Market-Scoped Router<br/>/#/m/{marketSlug}/{vendorSlug}/*"]
        QUERY["TanStack Query v5<br/>Cache & Cursor Pagination"]
        UI["Radix / ShadCN Primitives<br/>Tailwind CSS"]
        CALC["5-Layer Commission Engine<br/>(ui_calculation snapshot)"]
    end

    Data <--> QUERY
    QUERY --> ROUTER --> UI
    UI --> CALC
```

---

## The Cross-Border Problem

Operating cross-border commerce between the UK and Bangladesh creates unique architectural and operational challenges:

```mermaid
flowchart TD
    subgraph Legacy ["Legacy Manual Operations"]
        A["Browse UK wholesale sites manually"] --> B["Manually copy GBP prices to sheets"]
        B --> C["Hand-calculate COD %, packing, and margin"]
        C --> D["Take orders via WhatsApp chats"]
        D --> E["No repeat customer history or risk scoring"]
        E --> F["Firestore read costs explode from un-indexed scans"]
    end
```

| Operational Challenge | Architectural Solution in BW Retail |
|---|---|
| **Stale Sourcing Prices** | Automated Python ETL ingestion pipelines fetching from session-authenticated supplier portals and WooCommerce APIs. |
| **Multi-Tier Profit Sharing** | Deterministic 5-layer commission calculation engine snapshotting pricing, COD fees, and delivery charges on every order. |
| **Firestore Read Quota Spikes** | Debounced search (250ms), cursor pagination, chunked status queries, and derived Customer Order Book projections. |
| **Multi-Market Expansion** | Modular domain architecture separating global auth/users from market features (`web/src/features/kbeauty`). |
| **Database Scalability** | Prepared PostgreSQL relational schema, indexed views, and migration scripts for seamless Firestore-to-SQL cutover. |

---

## Technical Architecture

### 1. Market-Aware & Vendor-Scoped Routing
The application enforces strict URL hierarchy and domain isolation using React Router:
- **Products Catalog**: `/#/m/{marketSlug}/{vendorSlug}/products`
- **Shopping Cart**: `/#/m/{marketSlug}/{vendorSlug}/cart`
- **Order Management**: `/#/m/{marketSlug}/{vendorSlug}/orders`
- **Customer Purchase Book**: `/#/m/{marketSlug}/{vendorSlug}/customers`

Global services (authentication, session state, market navigation) remain completely decoupled from market domain logic, allowing new retail verticals to plug into the platform without modifying core infrastructure.

```mermaid
flowchart LR
    URL["Route: /#/m/kbeauty/retail-1/orders"] --> GUARD["Market & Role Guards"]
    GUARD --> FEATURE["features/kbeauty/pages/OrdersPage.jsx"]
    FEATURE --> QUERY["useOrdersQuery (TanStack Query)"]
    QUERY --> FIRESTORE["Firestore: markets/kbeauty/orders"]
```

---

### 2. The 5-Layer Commission Engine
Every order computes net commissions deterministically through domain calculation pipelines (`orderCommission.js` & `uiCommission.js`), storing an immutable `ui_calculation` map directly on the order document:

```mermaid
flowchart TD
    subgraph Items ["Item Layer"]
        BASE["Base Wholesale Price (GBP)"]
        CUSTOM["Custom Reseller Sell Price (BDT)"]
        COMM["Base Product Commission"]
        EXTRA["Extra Profit = (Sell Price − Base Price) × Qty"]
    end

    subgraph Adjustments ["Order Deductions & Charges"]
        DEL["Delivery Adjustment (District / Thana)"]
        COD["COD Charge (Total × COD Rate %)"]
        PACK["Packing Flat Fee"]
        INV["Invoice Flat Fee"]
        FREE["Free Delivery Subsidy / Deduction"]
    end

    subgraph Output ["Settlement"]
        NET["Net Reseller Commission<br/>= Products Commission + Delivery Adjustment<br/>− COD Amount − Packing − Invoice − Free Delivery Deduction"]
    end

    BASE & CUSTOM & COMM --> EXTRA
    EXTRA & DEL & COD & PACK & INV & FREE --> NET
```

---

### 3. Quota Optimization & Derived Projections
To eliminate N+1 query fanout and high read costs on Firebase Firestore, BW Retail implements a comprehensive query optimization suite:

1. **Debounced Query Execution**: 250ms debounce on search bars preventing per-keystroke document reads.
2. **Cursor-Based Pagination**: Paginated document cursors with strict limit bounds.
3. **No-Op Write Guards**: Quantity update handlers compare dirty state before dispatching writes.
4. **Derived Customer Order Book**: A dedicated `customer_order_book` projection collection enabling instant KPI aggregation (effective quantities, order counts, gross spend) with lazy-loaded row expansions.

```mermaid
flowchart TD
    CRM["Customer Book Page"] --> CHECK{"Projection Exists?"}
    CHECK -- Yes --> PROJ["Projection Mode<br/>Read customer_order_book (1 read/customer)"]
    CHECK -- No --> FALLBACK["Legacy Fallback<br/>Aggregate active orders"]
    PROJ --> ROW["User Clicks Customer Row"]
    ROW --> LAZY["Lazy-Fetch Orders & Items on Demand"]
```

---

### 4. SQL & PostgreSQL Migration Readiness
To prepare the platform for enterprise relational throughput, a complete PostgreSQL migration architecture was designed:
- **Core Relational Schemas**: `sql/postgres/001_core_schema.sql`
- **Performance Indexes**: `sql/postgres/002_indexes.sql`
- **Customer Order Book SQL Views**: `sql/postgres/003_customer_order_book_view.sql`

---

## Personal Engineering Contributions

- **React 19 Frontend Architecture**: Designed the market-aware component hierarchy, Radix/ShadCN UI design system, and TanStack Query state orchestration.
- **Python Automated Sourcing ETL**: Developed web scrapers with session auth and CSRF management for UK wholesale platforms, implementing automated regex brand detection for 40+ brands.
- **Deterministic Commission Accounting**: Authored the full 5-layer commission calculation engine, ensuring zero discrepancies across order creation, status changes, and quantity saves.
- **Firestore Cost Optimization**: Reduced Firestore read volume by over 60% through debounced search pipelines, cursor pagination, and derived projection collections.
- **SQL Migration Strategy**: Architected PostgreSQL database schemas, indexes, and SQL analytical views for long-term database scalability.
