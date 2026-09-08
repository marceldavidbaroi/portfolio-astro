---
id: "13"
title: "Cross-Border Beauty Commerce & Catalog Ordering System"
subtitle: "Cross-border beauty commerce platform with automated catalog scraping, multi-layer reseller commission engine, and dual-scope storefronts."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected a cross-border commerce vertical achieving automated catalog ingestion for 40+ brands and 5-layer commission calculation via Python ETL scrapers, dual-scope Quasar storefronts, and PostgreSQL RPCs."
chip: "Cross-Border Commerce"
order: 13
featured: true
platformType: "desktop"

role: "Full-Stack Developer (Commerce & Data Pipelines)"
timeline: "2025"
status: "Active Production"
classification: "🔒 Proprietary Enterprise IP"

techStack:
  frontend:
    - "Quasar Framework (v2)"
    - "Vue.js (v3) + TypeScript"
    - "Pinia"
    - "Shared Staff App & Customer Shop Scopes"
  backend:
    - "Supabase (PostgreSQL + Auth + RPCs)"
    - "Row-Level Security (RLS)"
    - "Python 3 (BeautifulSoup & Requests)"
    - "WooCommerce REST API Pipeline"
  database:
    - "PostgreSQL (koba_products, koba_orders, koba_carts)"
    - "Atomic RPCs (place_koba_order, get_koba_customer_profile)"
  devops:
    - "pnpm Scripts (ETL pipelines)"
    - "Git & GitHub"
  mobile_hardware: []

links:
  liveDemo: ""
  parentPlatform: "https://tradeflowbd.com"
  github: ""
  docs: ""

images:
  - "/images/thumb-1.png"
  - "/images/thumb-2.png"
  - "/images/thumb-3.png"
  - "/images/thumb-4.png"

visualAssets:
  heroMockup: "/images/dummy-project.png"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Built a cross-border K-Beauty commerce vertical inside TradeflowBD [X] — automating UK catalog ingestion via Python scrapers, enabling resellers to set custom sell prices above base commission, and powering staff desk and customer storefronts from shared Vue pages [Y] with a 5-layer commission engine and phone-based customer profiling for repeat-buyer intelligence [Z]."

impactMetrics:
  - label: "Catalog Ingestion"
    value: "40+ Brands"
    detail: "COSRX, Laneige, Beauty of Joseon, Anua auto-detected via Python scrapers"
  - label: "Commission Engine"
    value: "5 Layers"
    detail: "Base commission, custom price markup, COD %, packing & gateway flat fees"
  - label: "Commerce Scopes"
    value: "2 Surfaces"
    detail: "Staff order desk + customer B2B storefront from one shared Vue codebase"
  - label: "Order Lifecycle"
    value: "6 Stages"
    detail: "Pending → Confirmed → Processing → Shipped → Delivered → Cancelled"
  - label: "Order Ingestion"
    value: "Atomic RPC"
    detail: "Cart snapshot to order and items in a single ACID PostgreSQL transaction"
  - label: "Customer CRM"
    value: "Phone Profile"
    detail: "Repeat buyer profile, spend frequency, and brand demand analytics"

valueProposition:
  targetCustomer: "Cross-Border Resellers, Wholesale Importers & K-Beauty Retail Operations"
  items:
    - painTitle: "Manual Spreadsheet Price Copying from UK Wholesalers"
      painDescription: "Resellers spent hours manually browsing UK wholesale websites and copying prices into spreadsheets, resulting in stale catalog prices."
      gainTitle: "Automated Python Scraping & Ingestion Pipelines"
      gainDescription: "Engineered automated scrapers for kobareseller.com and WooCommerce APIs, auto-tagging 40+ K-Beauty brands into PostgreSQL."

    - painTitle: "Complex Manual Commission & COD Profit Calculations"
      painDescription: "Calculating custom price markups, delivery adjustments, gateway fees, and packing fees by hand led to payout disputes."
      gainTitle: "5-Layer Real-Time Commission Calculation Engine"
      gainDescription: "Automated real-time profit share calculations at checkout, recording net commission transparently for monthly reconciliation."

    - painTitle: "Zero Customer Intelligence on Cash-on-Delivery Orders"
      painDescription: "Resellers had no visibility into whether a phone number had high return rates or previous successful deliveries before dispatching."
      gainTitle: "Phone-Based Customer CRM & Delivery Analytics"
      gainDescription: "Engineered customer profiling RPCs that display buyer order frequency, total spend, and delivery history upon phone lookup."

problemStatement: "Bangladeshi K-Beauty resellers sourced products from UK wholesalers manually — copying prices from kobareseller.com into spreadsheets, calculating commissions by hand, taking orders over WhatsApp, and having no visibility into repeat customer delivery history or brand demand patterns."

architectureSummary: "Python scrapers ingest UK K-Beauty catalogs into Supabase → shared Vue catalog/cart/order pages serve both staff (app scope) and customers (shop scope) → atomic place_koba_order RPC with configurable commission engine and phone-based customer analytics RPCs."

keyDecisions:
  - challenge: "Stale Manual Catalog Management"
    decision: "Built Python ETL pipelines — retail scraper for kobareseller.com (session auth + CSRF) and wholesale scraper for kobainternational.com (WooCommerce REST API) — upserting into koba_products with brand auto-detection for 40+ K-Beauty labels."
    outcome: "Catalog refreshes on demand via pnpm run python:koba-retail / python:koba-wholesale without manual data entry."

  - challenge: "Reseller Custom Pricing Above Base Commission"
    decision: "Cart supports per-item custom sell price (must be ≥ base GBP price). Extra profit above base is split between reseller and company via configurable extra_profit_user_pct / extra_profit_company_pct in koba_retail_settings."
    outcome: "Resellers negotiate customer-facing prices while the platform enforces minimum base price and auto-calculates profit share."

  - challenge: "Complex Multi-Fee Commission Calculation"
    decision: "Checkout computes net order commission live: (base commission − gateway flat per item) + extra profit user share + delivery adjustment − COD % − packing flat − invoice flat. All charge rules stored in tenant koba_retail_settings."
    outcome: "Transparent commission breakdown at cart checkout and persisted on koba_orders for payout reconciliation."

  - challenge: "Dual Audience from One Codebase"
    decision: "Same Vue pages (KobaRetailProductsPage, KobaCartPage, KobaOrdersPage) mounted under both /:slug/app/koba/retail/* (staff) and /:slug/shop/koba/retail/* (customers) with scope-aware guards and role-conditional UI (admin sees settings, customers see add-to-cart)."
    outcome: "One component library serves staff order desk and customer self-service storefront — no duplicate pages."

  - challenge: "Repeat Customer Intelligence"
    decision: "Phone-number-based customer profiling via get_koba_customer_profile RPC — total orders, spend, delivery success rate, brand demand breakdown, top products, order frequency, and full order history."
    outcome: "Staff sees buyer history on checkout phone lookup and dedicated customer CRM pages before confirming high-value COD orders."

securityReliability:
  - "Tenant-scoped RLS on koba_products, koba_carts, koba_orders, and koba_retail_settings."
  - "Atomic place_koba_order RPC — cart snapshot to order + items in one transaction."
  - "Security-definer customer analytics RPCs with membership role checks (admin/staff only)."
  - "Module gating via koba_retail and koba_wholesale tenant_modules keys."
  - "Customer group scoping on carts and orders for multi-reseller tenant isolation."

futureRoadmap:
  - "Automated scheduled catalog sync (cron) instead of manual scraper runs."
  - "Courier API integration for live tracking number push on shipped status."
  - "Wallet integration — net commission payout to reseller universal wallet."
  - "Wholesale B2B bulk order desk expansion beyond catalog browse."
  - "Customer delivery risk scoring (similar to Thrift vertical's courier risk RPC)."
---

## Executive Summary

**Koba** is a tenant-scoped vertical inside **TradeflowBD** that handles the full cross-border K-Beauty commerce lifecycle — from UK catalog scraping through reseller pricing, cart/checkout, order fulfillment tracking, and customer analytics.

Bangladeshi K-Beauty resellers source authentic products from **UK wholesalers** (Kobareseller, Koba International) at GBP base prices, set custom sell prices in BDT, and distribute them locally via Cash on Delivery (COD). Koba automates catalog ingestion, calculates complex multi-layer commissions, and provides customer intelligence based on phone numbers.

---

## The Problem

K-Beauty resellers in Bangladesh operate a cross-border sourcing model with several manual bottlenecks:

```mermaid
flowchart TD
    subgraph Before ["Before: Manual Cross-Border Reselling"]
        A["Browse kobareseller.com manually"] --> B["Copy prices to spreadsheet"]
        B --> C["Calculate commission by hand"]
        C --> D["Take orders via WhatsApp / phone"]
        D --> E["No customer order history"]
        E --> F["Re-enter address every order"]
        F --> G["Commission disputes at month-end"]
    end
```

| Pain Point | Business Impact |
|---|---|
| **Manual Catalog Sync** | Prices and stock status stale within days; resellers sell out-of-stock items |
| **Hand-Calculated Commissions** | Errors in COD %, packing fees, and profit splits cause payout disputes |
| **No Customer CRM** | Repeat buyers re-enter addresses; no visibility into delivery success or brand preferences |
| **WhatsApp Order Chaos** | No order status tracking, no confirmed/delivered quantity reconciliation |
| **Separate Staff vs Customer Flows** | Staff desk and customer self-service require duplicate tools |
| **40+ K-Beauty Brands** | COSRX, Laneige, Innisfree, Anua, Beauty of Joseon — manual brand tagging is error-prone |

---

## Architecture

### System Topology & Ingestion Pipeline

```mermaid
flowchart TB
    subgraph Sources ["UK Catalog Sources"]
        KR["kobareseller.com<br/>Session + CSRF Auth"]
        KI["kobainternational.com<br/>WooCommerce REST API"]
    end

    subgraph Pipeline ["Data Pipeline"]
        PY_RETAIL["export_koba_retail_data.py"]
        PY_WHOLESALE["export_koba_wholesale_data.py"]
        BRANDS["Brand Auto-Detection<br/>40+ K-Beauty labels"]
    end

    subgraph Backend ["Supabase PostgreSQL"]
        KP["koba_products<br/>koba_brands<br/>koba_categories"]
        KC["koba_carts / koba_cart_items"]
        KO["koba_orders / koba_order_items"]
        KS["koba_retail_settings"]
        RPC["RPCs: place_koba_order<br/>get_koba_customer_profile<br/>list_koba_orders<br/>get_koba_cart"]
    end

    subgraph Frontend ["Quasar Vue 3 SPA"]
        APP["App Scope<br/>/:slug/app/koba/retail/*"]
        SHOP["Shop Scope<br/>/:slug/shop/koba/retail/*"]
        SHARED["Shared Pages<br/>Products · Cart · Orders · CRM"]
    end

    KR --> PY_RETAIL
    KI --> PY_WHOLESALE
    PY_RETAIL & PY_WHOLESALE --> BRANDS --> KP
    KP --> SHARED
    KC & KO & KS --> RPC
    RPC --> SHARED
    APP & SHOP --> SHARED
```

### Dual-Scope Routing

One set of Vue pages serves two audiences with scope-aware guards:

| Surface | Route Prefix | Users | Unique Capabilities |
|---|---|---|---|
| **Staff App** | `/:slug/app/koba/retail/*` | Admin, Staff | Custom sell price, commission preview, customer phone lookup, settings, CRM |
| **Customer Shop** | `/:slug/shop/koba/retail/*` | B2B customers | Browse catalog, add to cart, checkout, track own orders |

---

## Commission & Charge Engine

Every order computes net commission through a multi-layer formula configured per tenant in `koba_retail_settings`:

```mermaid
flowchart TD
    subgraph PerItem ["Per Item"]
        BASE["Base Price (GBP)<br/>from UK catalog"]
        CUSTOM["Custom Sell Price<br/>(reseller sets ≥ base)"]
        COMM["Base Commission<br/>(from catalog)"]
        GW["− Gateway Flat Fee<br/>(per item)"]
        EXTRA["Extra Profit<br/>= (custom − base) × qty"]
    end

    subgraph Split ["Profit Split"]
        USER["User Share<br/>extra_profit × user_pct"]
        COMPANY["Company Share<br/>extra_profit × company_pct"]
    end

    subgraph Deductions ["Order Deductions"]
        COD["COD Charge<br/>final_total × cod_pct"]
        PACK["Packing Flat Fee"]
        INV["Invoice Flat Fee"]
        DEL["Delivery Charge<br/>(district-based)"]
    end

    subgraph Net ["Net Result"]
        NET["Net Order Commission<br/>= product commission + user share<br/>+ delivery adjustment<br/>− COD − packing − invoice"]
    end

    BASE --> CUSTOM
    COMM --> GW
    CUSTOM --> EXTRA
    EXTRA --> USER & COMPANY
    GW --> NET
    USER --> NET
    COD & PACK & INV --> NET
    DEL --> NET
```

---

## Order Lifecycle & Customer Intelligence

```mermaid
stateDiagram-v2
    [*] --> pending: Customer / Staff places order
    pending --> confirmed: Address verified, phone checked
    confirmed --> processing: Dispatched for UK packing
    processing --> shipped: Courier tracking assigned
    shipped --> delivered: Delivery confirmed
    pending --> cancelled: Rejected before shipment
    confirmed --> cancelled: Cancelled before dispatch
    delivered --> [*]
    cancelled --> [*]
```

### Customer Graph (Phone-Based CRM)

Repeat buyer profiling keyed on `shipping_phone` — critical for COD risk assessment in Bangladesh:

```mermaid
flowchart TD
    PHONE["Staff types customer phone<br/>at checkout"] --> LOOKUP["get_koba_customer_profile RPC"]
    LOOKUP --> OVERVIEW["Total orders · Total spent<br/>First/last order dates<br/>Avg days between orders"]
    LOOKUP --> LOCATION["Auto-fill district, thana,<br/>delivery address"]
    LOOKUP --> DEMAND["Brand demand breakdown<br/>Top products by frequency"]
    LOOKUP --> HISTORY["Full order history<br/>with commission per order"]
```

---

## What I Built (Personal Contributions)

- **Python UK Catalog Scrapers**: Retail (`kobareseller.com`) and wholesale (`kobainternational.com`) pipelines with automated 40+ brand regex tagging.
- **Shared Dual-Scope Commerce Pages**: Single Vue codebase serving both internal staff order desks and customer self-service storefronts.
- **Real-Time Commission & Charge Engine**: Live checkout preview calculating custom markup splits, COD deductions, packaging flats, and net earnings.
- **Atomic Order Placement**: PostgreSQL `place_koba_order` security-definer RPC snapshotting immutable commission states.
- **Phone-Based Customer CRM**: Customer profiling RPC aggregating purchase frequency, brand loyalty, and delivery success rates.
