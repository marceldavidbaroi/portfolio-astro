---
id: '01'
title: TradeFlow BD – Multi-Tenant Wholesale ERP
subtitle: Sell modules on four kernels — one parent stock, one books, wholesale + shop + dropship + pre-order.
description: 'Lead engineer on a production multi-tenant wholesale ERP: parent/child tenants, four login surfaces, and sell modules (wholesale, shop, dropship, inbound, money) on shared Access, Warehouse, Landed Cost, and Money kernels — Postgres RLS, atomic RPCs, Vue/Quasar SPA on Supabase.'
chip: Enterprise ERP & SaaS
order: 1
featured: true
platformType: desktop
contribution:
  mode: owner
  startedFrom: scratch
  myShare: lead
  # TODO(me): teamSize
  label: Product owner & lead engineer
  headline: Owned architecture and migration for a multi-tenant wholesale ERP — four login surfaces, parent/child tenants, and channel flows on shared stock and money kernels.
  scope:
  - Schema split, migration ordering, and local replay
  - Money-kernel alignment across wholesale, shop, dropship, and inbound AP
  - Platform docs and VPC narrative in the product SPA

# 2. REAL USER PROBLEM
problem:
  statement: Wholesale import groups run parent holdings, sister desks, shops, and capital partners on disconnected spreadsheets and channel-specific stock — causing overselling, COD mis-reported as revenue, and weak audit trails between sister brands.
  evidence: internal-use # TODO(me): confirm evidence type
  whoHurts:
  - import-operator
  - shop-buyer
  - dropship-reseller
  - capital-partner

# 3. USER BENEFIT MATRIX (replaces product.valueProposition.items)
benefitMatrix:
  - persona: Import / Wholesale Operator
    pain: Overselling across channels
    before: Wholesale desk, shop carts, and dropship picks share parent stock without a single ATP pool.
    after: One warehouse quantity enforced by server-side issue/pick RPCs; no per-channel shadow stock.
    measure:
      metric: Channel ATP pool consistency
      from: Desynced per-channel stock books
      to: Single warehouse ATP pool
      proof: designed
    attribution: personal
    feature:
      - Wholesale
      - Shop
      - Dropship
  - persona: Dropship reseller / Import operator
    pain: COD booked as sales
    before: Courier collections get mixed with B2B merchant totals on reports.
    after: "Merchant AR at ship, remittance pays the bill, surplus goes to custody cashbook. (Illustrated by flow: ৳2,200 face, ৳1,500 bill, ৳80 courier AP, ৳2,120 remittance, ৳620 leftover)."
    measure:
      metric: Ledger separation (paper vs cash)
      from: Mixed courier cash in sales revenue
      to: Strict AR & custody cashbook split
      proof: designed
    attribution: personal
    feature:
      - Dropship
      - Money desks
  - persona: Import / Wholesale Operator
    pain: Landed cost guesswork
    before: Margins use invoice-line guesses instead of paid AP and locked shipment costs.
    after: Unit cost stamped from paid AP and locked shipment costs.
    measure:
      metric: Landed cost valuation basis
      from: Unlocked invoice line guesses
      to: Paid AP and locked freight Restamp
      proof: designed
    attribution: personal
    feature:
      - Inbound
      - PBC
  - persona: Platform/IT owner
    pain: Cross-tenant data leakage risks
    before: Filtering tenant data relies on client-side SPA logic.
    after: Boundary enforced in PostgreSQL via RLS and membership_has_module_action().
    measure:
      metric: Database isolation
      from: Application-layer query filtering
      to: PostgreSQL RLS policy enforcement
      proof: designed
    attribution: personal
    feature:
      - Tenants
      - Access kernel

# 4. IMPROVEMENTS (optional for owner + scratch; measured engineering outcomes)
improvements:
  - area: Frontend shell bundle size
    before: Monolithic CSS and synchronous libraries loaded on initial shell
    after: Route-level CSS split and lazy heavy libs (Mermaid, ExcelJS, FCM)
    how: Route-level split and dynamic ESM imports
    measure:
      metric: First-load CSS reduction
      from: 100% monolithic shell CSS
      to: ~67% reduction on initial shell
      proof: measured
    userBenefit: Faster initial dashboard interactive load on cellular connections
    attribution: personal
  - area: Schema deployment reliability
    before: Manual SQL execution with unverified migration ordering
    after: Reproducible local replay on Docker Supabase before deploy
    how: Declarative schema domain diffing and ordered migration replay
    measure:
      metric: Local migration replay count
      from: 0 automated local checks
      to: 1,330+ versioned migrations replayed locally
      proof: measured
    userBenefit: Zero schema regression downtime during production pushes
    attribution: personal

# Legacy fields kept for backward compatibility (deprecated: derived myImpact and benefitMatrix take precedence)
myImpact:
- label: Tenant isolation
  value: RLS
  attribution: personal
  detail: Cross-tenant boundary enforced in PostgreSQL, not only in the SPA
- label: Sell modules
  value: 9 packs
  attribution: product
  detail: Tenants, money, inbound, wholesale, shop, shop admin, dropship, PBC, thrift
- label: Login surfaces
  value: '4'
  attribution: product
  detail: platform · app · shop · investor
- label: Schema discipline
  value: 1,330+
  attribution: personal
  detail: Versioned migrations with local Docker replay before deploy
product:
  summary: Owned architecture and migration for TradeFlow BD — a multi-tenant wholesale ERP where every sell module posts to the same stock and money kernels. Delivered four scoped login surfaces, parent/child tenants with database-enforced isolation, and channel flows (wholesale desk, B2B shop, dropship with COD remittance, pre-order costing) without shadow ledgers or channel overselling.
  problem: Wholesale import groups run parent holdings, sister desks, shops, and capital partners on disconnected spreadsheets and channel-specific stock — causing overselling, COD mis-reported as revenue, and weak audit trails between sister brands.
  valueProposition:
    targetCustomer: Import / Wholesale Operator
    showCanvas: true
    items:
    - painTitle: Overselling across channels
      painDescription: Wholesale desk, shop carts, and dropship picks share parent stock without a single ATP pool.
      gainTitle: One warehouse quantity
      gainDescription: Server-side issue and pick RPCs enforce availability; no per-channel shadow stock.
    - painTitle: COD booked as sales
      painDescription: Courier collections get mixed with B2B merchant totals on reports.
      gainTitle: Paper vs cash separated
      gainDescription: Merchant AR at ship; remittance pays the bill; surplus goes to custody cashbook.
    - painTitle: Landed cost guesswork
      painDescription: Margins use invoice-line guesses instead of paid AP and locked shipment costs.
      gainTitle: Stamp from paid AP
      gainDescription: Lock shipment costs, pay vendors, restamp unit cost on lots.
  tagline: One platform for import/wholesale operators who run a parent company, sister sales desks, B2B shops, and dropship resellers — without duplicate stock books or booking courier COD as revenue.
role: Lead Framework & Migration Engineer
timeline: 2025 — Present
status: Active Production
classification: 🔒 Proprietary Enterprise IP
stack:
- Vue 3.5
- Quasar 2
- Supabase
- TypeScript
- PostgreSQL 15+
- Capacitor
techStack:
  frontend:
  - Vue 3.5
  - Quasar 2
  - TypeScript
  - Pinia
  - TanStack Query
  - Vue Router 5
  mobile_hardware:
  - Capacitor (Android — Thrift warehouse app)
  backend:
  - Supabase Auth (Google OAuth)
  - PostgreSQL RLS + 300+ RPCs
  - Supabase Realtime
  database:
  - PostgreSQL 15+
  - Declarative schema domains (procurement, shop_order, bills_pays)
  - 1,330+ migrations
  devops:
  - Cloudflare Pages
  - Docker local Supabase replay
  - Python ETL (catalog sync)
links:
  liveDemo: ''
  parentPlatform: ''
  github: ''
  docs: ''
images:
- /images/projects/tradeflowbd/dashboard.webp
- /images/projects/tradeflowbd/shipment-details.webp
- /images/projects/tradeflowbd/shop-catalog-config.webp
- /images/projects/tradeflowbd/dropship-dossier.webp
- /images/projects/tradeflowbd/shop-mobile-storefront.webp
visualAssets:
  heroMockup: /images/projects/tradeflowbd/dashboard.webp
  screenshots:
  - /images/projects/tradeflowbd/dashboard.webp
  - /images/projects/tradeflowbd/shipment-details.webp
  - /images/projects/tradeflowbd/shop-catalog-config.webp
  - /images/projects/tradeflowbd/dropship-dossier.webp
  - /images/projects/tradeflowbd/shop-mobile-storefront.webp
caseStory:
  thesis: TradeFlow BD is sell modules on four shared kernels. Each module is a full job; together they keep sales, cash, COD, and stock aligned.
  productHeadline: One platform for import/wholesale operators who run a parent company, sister sales desks, B2B shops, and dropship resellers — without duplicate stock books or booking courier COD as revenue.
  productBullets:
  - Parent owns warehouse lots and consolidated books; child brands issue bills and run storefronts on the same kernels.
  - Wholesale (take/condition/walk-in), shop carts, and dropship picks debit the same available-to-promise pool.
  - Inbound shipments lock landed cost from paid AP; money kernel handles AR, AP, remittance, and profile cashbook leftover.
  - Optional verticals (K-beauty, thrift) use isolated stock tables — never mixed with core `global_stocks`.
  showVpcContrastCards: false
  diagrams:
  - id: architecture
    label: Architecture Blueprint
    mermaid: "flowchart TB\n  ACC[\"Access: tenants, grants, 4 scopes\"]\n  WH[\"Warehouse: parent lots, ATP\"]\n  LC[\"Landed cost: lock, FX stamp\"]\n  MON[\"Money: bills, pays, cashbook\"]\n  ACC --> WH --> LC --> MON\n  subgraph sell[\"Sell modules\"]\n    M1[\"Tenants\"]\n    M2[\"Inbound\"]\n    M3[\"Wholesale\"]\n    M4[\"Shop + admin\"]\n    M5[\"Dropship\"]\n    M6[\"PBC\"]\n    M7[\"Money desks\"]\n    M8[\"Thrift\"]\n  end\n  sell --> ACC\n  M2 --> WH\n  M2 --> LC\n  M3 --> WH\n  M3 --> MON\n  M4 --> WH\n  M5 --> WH\n  M5 --> MON\n  M6 --> MON\n  M7 --> MON\n"
  - id: scopes
    label: Architecture Flow
    mermaid: "flowchart LR\n  P[\"platform\"]\n  A[\"app\"]\n  S[\"shop\"]\n  I[\"investor\"]\n  P -->|\"provision\"| A\n  A -->|\"catalog + ops\"| S\n  A -->|\"capital views\"| I\n"
  - id: modules
    label: Architecture Blueprint
    mermaid: "flowchart LR\n  INB[\"Inbound\"] --> WH[\"Warehouse kernel\"]\n  WH --> BW[\"Wholesale\"]\n  WH --> SH[\"Shop\"]\n  WH --> DS[\"Dropship\"]\n  PBC[\"PBC / pre-order\"] --> DEM[\"Demand\"]\n  DEM --> INB\n  BW --> MON[\"Money kernel\"]\n  SH --> MON\n  DS --> MON\n  PBC --> MON\n"
  platforms:
  - scope: platform
    who: Superadmin
    does: Tenant provision, module catalog, global reference — never company stock or bills
  - scope: app
    who: Tenant staff
    does: ERP desks (inbound, wholesale, shop admin, dropship, money, costing) gated by grants
  - scope: shop
    who: Buyer / reseller
    does: Catalog, cart, orders, merchant statement — no warehouse bins or cost lock
  - scope: investor
    who: Capital partner
    does: Read-only shipment share and statements — no withdraw in v1
  modules:
  - name: Tenants
    summary: Parent/child companies, module packs, staff grants
    kernels: Access
  - name: Money
    summary: Bills, pays, allocations, cashbook — every channel posts here
    kernels: Money
  - name: Inbound shipment
    summary: Land cargo, bins, post-to-stock, landed-cost lock
    kernels: Warehouse, Landed cost
  - name: Wholesale
    summary: Compose, issue, collect — take, condition, walk-in
    kernels: Warehouse, Money
  - name: Shop (storefront)
    summary: Buyer catalog, cart, orders (`shop` scope)
    kernels: Access, Warehouse, Money
  - name: Shop admin
    summary: Shops, pricing, groups, orders hub (`app` scope)
    kernels: Access, Warehouse, Money
  - name: Dropship
    summary: Reseller to recipient; ship/issue; remittance vs COD face
    kernels: Warehouse, Money
  - name: Product-based costing
    summary: Quote file → demand → inbound → delivery close
    kernels: Money, Landed cost
  - name: Thrift
    summary: Isolated `thrift_*` vertical + Capacitor warehouse app
    kernels: Isolated from BW FIFO
  stackRationale:
  - tech: PostgreSQL + RLS
    reason: Tenant and grant boundaries must hold even if the SPA has a bug — membership and module actions evaluated in the database.
  - tech: Atomic RPCs
    reason: Stock issue, dropship ship+issue, bill pay, and remittance allocation must commit or roll back as one unit.
  - tech: Supabase
    reason: Auth, Postgres, realtime, and typed client generation for a small team shipping ERP breadth without a custom API layer for every desk.
  - tech: Vue 3 + Quasar 2
    reason: One SPA serves platform, app, shop, and investor themes with shared components and route-level code splitting.
  - tech: Declarative schema split
    reason: procurement, shop_order, and bills_pays evolve independently; `db diff` guards drift across 1,330+ migrations.
  - tech: Capacitor (Thrift app)
    reason: Floor barcode intake and audit against the same database without duplicating thrift inventory in a second stack.
architectureSummary: Vue/Quasar SPA on Supabase Postgres. Four kernels (Access, Warehouse, Landed cost, Money) and nine sell modules as adapters — not separate ledgers or inventory silos for core BW.
keyDecisions:
- challenge: Multi-tenant security
  decision: Row-level security and `membership_has_module_action()` on tenant data — not client-side filtering alone.
  outcome: Tenant boundary enforced at the database engine.
- challenge: Channel overselling
  decision: Stock on parent `global_stocks`; channels consume ATP via pessimistic RPCs (`SELECT FOR UPDATE`).
  outcome: Single source of truth for quantity across wholesale, shop, and dropship.
- challenge: Shadow wallets
  decision: Unified money kernel — profile, bill, pay, allocation, cashbook — with adjustment notes after issue.
  outcome: One books layer for AR, AP, COD remittance, and leftover.
- challenge: Monolithic SQL
  decision: Declarative domain folders under `supabase/schemas/<domain>/` with migration diff checks.
  outcome: Safer evolution and reproducible local replay before production push.
securityReliability:
- RLS on tenant tables; financial writes through SECURITY DEFINER RPCs where grants require it.
- Archive-first shipment governance; soft-delete trash with tenant-scoped purge.
- Generated `database.types.ts` after schema changes; local Docker replay of full migration chain.
futureRoadmap:
- Finish schema extraction for remaining domains (customer, products, reporting, thrift, investor).
- Investor portal v2 — withdrawal workflows beyond read-only.
- Thrift thermal print and iOS companion for floor audit.
---

## Technical appendix (hiring manager depth)

Expand this section only when you need implementation detail. The story above is the recruiter path.

### Flagship flow — dropship remittance (numbers)

| Step | What happens |
| --- | --- |
| Retail COD | Recipient pays courier face value (e.g. ৳2,200) — **not** booked as merchant sales |
| At ship | B2B merchant bill issued (e.g. ৳1,500) + courier AP (e.g. ৳80) |
| Bank in | Net remittance (e.g. ৳2,120) allocates to merchant bill |
| Leftover | Surplus (e.g. ৳620) credits dropshipper custody cashbook for payout |

### Flagship flow — inbound landed cost

1. Record shipment cost buckets → draft AP bills per bucket × currency.  
2. Lock shipment → issue AP.  
3. Pay vendors → FX from actual pays → restamp unit cost on open lots.  
4. Corrections via credit/debit notes — not silent edits to issued AP.

### Schema & delivery

- Declarative domains: `procurement/`, `shop_order/`, `bills_pays/`, `notifications/` (+ unsplit `public.sql`).  
- Local workflow: edit schemas → `db diff` → migration → `backend:local` replay on Docker Supabase.  
- Frontend: route-level CSS split (~67% first-load CSS reduction on initial shell) and lazy heavy libs (Mermaid, ExcelJS, FCM).

### What I owned

- Migration ordering and schema split for safe empty-DB replay.  
- Money-kernel alignment across wholesale, shop order, dropship settlement, and inbound AP.  
- Platform/docs narrative and VPC structure for operators (in-product guide at `/docs` on the product SPA).
