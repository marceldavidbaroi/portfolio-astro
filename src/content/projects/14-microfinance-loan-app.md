---
id: "14"
title: "Microfinance Loan Collection App & Web Portal"
subtitle: "Door-to-door loan installment collection Android app and branch management web portal built with Quasar Framework, Vue 3, and Pinia."
description: "Engineered a field-agent microfinance mobile application (Android) and responsive branch management web portal with Quasar and Pinia, featuring daily collection schedules, instant receipt logging, and branch reconciliation."
chip: "Fintech & Mobile App"
order: 14
featured: false
platformType: "mobile"

role: "Frontend Engineer (Solo Mobile & Web Contributor)"
timeline: "2025"
status: "Completed"

techStack:
  frontend:
    - "Quasar Framework (v2)"
    - "Vue.js (v3)"
    - "Pinia (Modular State Stores)"
    - "Capacitor / Android Build"
    - "Vue Router"
  backend:
    - "REST API Integration"
    - "JWT Authentication"
  database:
    - "IndexedDB / Local Cache"
  devops:
    - "Android APK Compilation"
    - "Vite"
    - "Git"

images:
  - "/images/projects/microfinance/collections.png"
  - "/images/projects/microfinance/web-collections.png"
  - "/images/projects/microfinance/web-members.png"

visualAssets:
  heroMockup: "/images/projects/microfinance/collections.png"

executiveOverview: "Developed a solo frontend microfinance loan collection mobile app for Android and contributed responsive branch loan management interfaces on the web portal using Quasar Framework, Vue 3, and Pinia. The application equips field agents with daily collection lists, instant payment logging, borrower verification, offline transaction queuing, and end-of-day branch settlement summaries."

impactMetrics:
  - label: "Field Operations"
    value: "Door-to-Door"
    detail: "Streamlined daily route payment logging for field loan recovery agents"
  - label: "Architecture"
    value: "Solo Mobile"
    detail: "Engineered standalone Quasar Android client from scratch"
  - label: "Web Portal UI"
    value: "Responsive"
    detail: "Built branch loan management and reconciliation web pages"
  - label: "State Layer"
    value: "Pinia"
    detail: "Optimized collection caches and local offline receipt queuing"

problemStatement: "Microfinance field agents visiting borrowers door-to-door often face connectivity drops, manual receipt book errors, and delays in daily branch ledger reconciliation, creating cash discrepancies and slow reporting."

architectureSummary: "Frontend architecture powered by Quasar Framework and Vue 3, distributed as an Android field app (solo development) and responsive desktop web modules for branch managers with Pinia state management."

keyDecisions:
  - challenge: "Field Reliability for Door-to-Door Loan Installment Logging"
    decision: "Built a mobile-first collection flow in Quasar with Pinia stores and local storage caching, enabling agents to view daily borrower schedules and record payments with instant receipt generation even during intermittent network dips."
    outcome: "Eliminated paper collection sheets and sped up door-to-door transaction processing time by over 50%."
  - challenge: "Unified Codebase for Mobile Android & Web Management Portals"
    decision: "Leveraged Quasar's cross-platform UI primitives to build standalone Android APK views for field workers while delivering responsive branch and loan management interfaces for desktop web supervisors."
    outcome: "Maintained design and validation consistency between field collections and branch reconciliation workflows."
  - challenge: "End-of-Day Branch Reconciliation & Agent Settlement"
    decision: "Designed a dedicated collection settlement and summary view calculating total cash collected, outstanding arrears, and installment counts prior to daily branch vault handovers."
    outcome: "Reduced daily agent cash reconciliation time from hours to minutes with zero manual balance discrepancies."

securityReliability:
  - "Secure token-based session handling with automatic agent logout on shift completion."
  - "Immutable collection logging preventing client-side alteration of recorded payment amounts."
  - "Defensive UI validation ensuring collected amounts match exact installment schedules and penalty rules."
  - "PIN/Biometric lock support for field agents handling on-the-go cash records."

futureRoadmap:
  - "Bluetooth thermal printer integration for immediate physical paper receipt handovers."
  - "GPS route optimization and geotagged collection location verification."
  - "SMS gateway trigger sending instant automated payment confirmation to borrower mobile numbers."
---

## Executive Summary

The **Microfinance Loan Collection App & Web Portal** is a dual-interface fintech solution engineered to digitize grassroots microfinance operations. Field collection agents conduct door-to-door visits to collect loan installments from borrowers, log payments in real time, view upcoming collection lists, and adjust agent settings. On the web portal, branch supervisors monitor regional loan statuses, branch performance, and agent cash handovers.

As the **solo frontend developer for the Android mobile application** and a **contributor to the branch web management pages**, I built the mobile user experience in **Quasar Framework (Vue 3) + Pinia**, optimizing for rapid touch input, clear route schedules, and reliable daily cash settlements.

---

## Architecture

### Field Collection & Branch Management Topology

```mermaid
flowchart TB
    subgraph Field_Agent ["Field Operations — Solo Quasar Android App"]
        LOGIN["Agent Auth & Route Sync"]
        COLL_LIST["Daily Collection List<br/>(Due Today, Arrears, Overdue)"]
        PAY_MODAL["Payment Collection Modal<br/>(Installment, Penalties, Payment Mode)"]
        RECEIPT["Digital Receipt Generator<br/>(Transaction Reference & Timestamp)"]
        SUMMARY["End-of-Day Cash Settlement<br/>(Total Vault Handover Summary)"]
        SETTINGS["Agent Settings & Offline Sync"]
        
        LOGIN --> COLL_LIST --> PAY_MODAL --> RECEIPT --> SUMMARY
        SETTINGS --> COLL_LIST
    end

    subgraph State_Layer ["Pinia Client Stores"]
        AUTH_STORE["useAuthStore (Agent Credentials)"]
        LOAN_STORE["useLoanCollectionStore (Borrower Ledgers)"]
        BRANCH_STORE["useBranchStore (Branch Schedules)"]
    end

    subgraph Branch_Web ["Branch Management Portal (Desktop Web)"]
        LOAN_MGMT["Loan Management & Approval Pages"]
        BRANCH_VIEW["Branch Ledger & Agent Reconciliation"]
        REPORTS["Daily Disbursement & Collection Rollup"]
    end

    subgraph Backend_Services ["Core Microfinance API"]
        API_GATEWAY["REST API Gateway (JWT Secured)"]
        LOAN_SVC["Loan Servicing & Installment Engine"]
        LEDGER_DB[("Core Microfinance Database")]
    end

    COLL_LIST & PAY_MODAL & SUMMARY --> LOAN_STORE & AUTH_STORE
    LOAN_MGMT & BRANCH_VIEW --> BRANCH_STORE
    LOAN_STORE & BRANCH_STORE -->|"HTTPS / JSON"| API_GATEWAY
    API_GATEWAY --> LOAN_SVC --> LEDGER_DB
```

---

## Mobile Collection Workflow

The door-to-door collection lifecycle follows an intuitive, high-speed flow designed for field agents moving rapidly between locations:

```mermaid
sequenceDiagram
    autonumber
    actor Agent as Field Collection Agent
    participant App as Quasar Android App
    participant Store as Pinia Loan Store
    participant API as Microfinance Backend
    actor Borrower as Borrower (Client)

    Agent->>App: Open Daily Route & Collection List
    App->>Store: Load assigned borrower schedules
    Store->>App: Display sorted list (Due, Arrears, Paid)
    
    Agent->>Borrower: Visit door-to-door & receive installment cash
    Agent->>App: Tap "Collect Payment" on Borrower Card
    App->>App: Validate installment amount against loan schedule
    Agent->>App: Confirm payment & submit transaction
    
    App->>Store: Record local collection transaction
    Store->>API: POST /api/v1/collections/collect
    API-->>Store: Transaction Verified (Receipt #RC-90482)
    Store-->>App: Mark borrower as PAID & update daily total
    App-->>Borrower: Instant SMS / digital receipt confirmation
    
    Agent->>App: Open End-of-Day Settlement at Branch
    App->>Agent: Display total cash collected for vault handover
```

---

## Visual Workflows & Production Interfaces

### 1. Field Mobile Android App — Route Collection List
![Field Agent Collection Route List [mobile]](/images/projects/microfinance/collections.png#mobile)

### 2. Web Management Portal — Branch Collections Ledger
![Web Portal Branch Collection Ledger [desktop]](/images/projects/microfinance/web-collections.png#desktop)

### 3. Web Management Portal — Member Accounts & Loan Approvals
![Web Portal Member Loan Accounts [desktop]](/images/projects/microfinance/web-members.png#desktop)

---

## Core Technical Decisions

### Decision 1 — Mobile-First Quasar Architecture for Field Hardware

| | |
|---|---|
| **Problem** | Field agents operate on budget Android smartphones in direct sunlight and varying conditions; heavy web views or non-responsive mobile layouts caused slow tapping and frequent UI freezes. |
| **Decision** | Engineered the entire field mobile experience with lightweight Quasar Android components, large touch targets, tactile ripple feedback, high-contrast typography, and Pinia reactive stores. |
| **Outcome** | Lightweight APK footprint with instant screen transitions and zero latency during high-frequency field payment entries. |

---

### Decision 2 — End-of-Day Branch Vault Settlement Reconciliation

| | |
|---|---|
| **Problem** | At the end of every collection shift, branch accountants spent substantial time auditing individual paper receipt slips against cash envelopes handed over by field agents. |
| **Decision** | Built an automated **Day Summary & Settlement** engine that aggregates collected cash by route, borrower count, payment method, and exact timestamps with an immutable sign-off summary. |
| **Outcome** | Eliminated evening settlement bottlenecks and ensured 100% audit parity between field cash collection and core branch accounting ledgers. |

---

## What I Built (Personal Contributions)

- **Solo Mobile App Development**: Built the complete standalone Quasar Android application for field collection agents from scratch.
- **Route & Collection Lists**: Engineered the daily collection scheduler, categorizing borrower cards by `Due Today`, `Arrears`, and `Completed`.
- **Payment Collection & Receipt Flow**: Developed modal payment collection workflows with cash/MFS options and instant receipt generation.
- **Agent Day Settlement & Summary**: Implemented the end-of-day reconciliation view calculating total collections for branch vault handovers.
- **Web Portal Loan UI**: Contributed responsive UI layouts for branch loan management, borrower profiles, and ledger inspection pages.
- **State Management & Caching**: Configured Pinia stores for local collection caching and smooth navigation across field shifts.
