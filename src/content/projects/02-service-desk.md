---
id: "02"
title: "Customer Support System – Multi-Channel Helpdesk Platform"
subtitle: "Full-stack customer support and helpdesk platform with split-pane triage, dual-database engine (MongoDB + MySQL), and automated IMAP email ticketing."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected a multi-tenant customer support platform delivering sub-second triage across 4 agent workbenches and 3 ingestion channels by designing a dual-database engine (MongoDB + MySQL), automated IMAP synchronization, and a Laravel BFF."
chip: "SaaS & Customer Support"
order: 2
featured: true
platformType: "desktop"

role: "Full-Stack Software Engineer (Solo Core Contributor)"
timeline: "2026 — Present"
status: "Active Production"
classification: "🔒 Proprietary Enterprise IP"

stack:
  - "PHP"
  - "Blade"
  - "Quasar"
  - "Knockout.js"
  - "IMAP"
  - "MySQL"

techStack:
  frontend:
    - "Quasar Framework (v2)"
    - "Blade Templates"
    - "Knockout.js"
    - "Vue 3"
    - "TypeScript"
    - "Vue Router 4"
    - "Modular Composable Architecture"
    - "Vite Build System"
  backend:
    - "Laravel 11+ (BFF Architecture)"
    - "Laravel Sanctum & Tenant Isolation Middleware"
    - "Asynchronous Queues & Background Workers"
    - "IMAP / SMTP Email Ingestion Engine"
    - "Server-Rendered Visitor Forms (Blade & JavaScript)"
  database:
    - "MongoDB (Flexible Ticket Documents & Custom Schemas)"
    - "MySQL (Relational Streams, Mailboxes, RBAC & Form Schemas)"
  devops:
    - "Docker Compose Local Environment"
    - "Cron Scheduler & Multi-Worker Queue Runners"
    - "Modular Monorepo Architecture"
  mobile_hardware: []

links:
  liveDemo: ""
  parentPlatform: ""
  github: ""
  docs: ""

images:
  - "/images/projects/service-desk/inbox-ticket-detail.webp"
  - "/images/projects/service-desk/inbox-tickets-list.webp"
  - "/images/projects/service-desk/form-builder-questions.webp"
  - "/images/projects/service-desk/form-builder-settings.webp"
  - "/images/projects/service-desk/email-template-editor.webp"

visualAssets:
  heroMockup: "/images/projects/service-desk/inbox-ticket-detail.webp"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Architected and delivered an enterprise-grade multi-channel helpdesk and customer support platform across 4 primary agent workbenches (Triage Inbox, Stream Queues, Form Builder, Email Templates) [X], supporting 3 automated inbound ingestion channels (agent manual entry, bidirectional IMAP email sync, and public embeddable web forms) [Y] backed by a 30+ endpoint RESTful BFF, asynchronous queue workers, and a dual-database architecture combining MongoDB flexible documents with MySQL relational RBAC [Z]."

impactMetrics:
  - label: "Multi-Tenant Isolation"
    value: "100%"
    detail: "Stateless Sanctum tokens and tenant-resolved database boundaries"
  - label: "Agent Workbenches"
    value: "4 Surfaces"
    detail: "Split-pane inbox, queue streams, drag-and-drop form builder, email templates"
  - label: "Inbound Channels"
    value: "3 Channels"
    detail: "Manual agent creation, automated IMAP email sync, and public web forms"
  - label: "BFF Endpoints"
    value: "30+ REST APIs"
    detail: "Dedicated domain endpoints for tickets, queues, mailbox sync, and forms"
  - label: "Database Layer"
    value: "Dual-Engine"
    detail: "MongoDB flexible ticket documents + MySQL relational configuration & RBAC"
  - label: "Thread Isolation"
    value: "Zero Leaks"
    detail: "Dual-lane public customer replies isolated from private internal notes"

valueProposition:
  targetCustomer: "Multi-Tenant SaaS Enterprises, Support Team Leads & Customer Success Desks"
  items:
    - painTitle: "Lost Inquiries in Scattered Gmail Inboxes"
      painDescription: "Customer emails were spread across unmonitored aliases and personal inboxes, causing delayed responses, duplicate replies, and zero visibility into team backlog."
      gainTitle: "Unified Multi-Channel Agent Workbench"
      gainDescription: "Centralized Vue 3/Quasar desktop triage inbox aggregating automated IMAP email streams, custom public web forms, and manual ticket creation in one split-pane workspace."

    - painTitle: "Accidental Leaks of Internal Discussions to Customers"
      painDescription: "Support agents collaborating with engineers frequently replied on customer email threads, accidentally exposing internal technical deliberations."
      gainTitle: "Dual-Lane Public Replies vs. Private Internal Notes"
      gainDescription: "Engineered strict message channel isolation within the same thread—yellow-tinted private notes remain internal, while public replies trigger sanitized SMTP emails."

    - painTitle: "Spam Overload & Heavy Client Overhead on Web Forms"
      painDescription: "External contact forms were flooded with bot submissions and suffered slow load times from embedding heavy frontend SPA bundles."
      gainTitle: "Lightweight Server-Rendered Forms with Anti-Spam"
      gainDescription: "Visitor-facing forms load instantly as server-rendered HTML with double opt-in email verification, honeypots, rate limiting, and reCAPTCHA protection."

    - painTitle: "Rigid SQL Schemas Breaking Custom Customer Fields"
      painDescription: "Every enterprise client required different custom fields (order IDs, priority tags, device models) that caused frequent schema migrations."
      gainTitle: "Dual-Database Architecture (MongoDB + MySQL)"
      gainDescription: "Flexible MongoDB ticket documents handle unlimited arbitrary custom payloads, while MySQL preserves strict relational integrity for auth, queues, and mailboxes."

problemStatement: "Organizations previously managed customer requests through fragmented email inboxes and ad-hoc spreadsheets, causing delayed response times, lost tickets, and no visibility into team workload. Support teams needed a centralized multi-tenant platform with triage queues, assignee routing, threaded customer conversations with private internal notes, automated email ingestion, and custom web forms—without forcing external customers to create platform accounts."

architectureSummary: "Vue 3/Quasar desktop SPA connecting to a dedicated Laravel Backend-for-Frontend (BFF) at /api/v1/support/*; tickets persist as flexible MongoDB documents with rich metadata; stream configuration, mailboxes, and form schemas reside in MySQL; background workers handle IMAP email ingestion and outbound SMTP notifications asynchronously."

keyDecisions:
  - challenge: "Flexible Ticket Schema vs. Strict Relational Configuration"
    decision: "Adopted a dual-database architecture: stored highly variable ticket payloads, custom fields, and conversation threads in MongoDB, while keeping tenant configurations, mailbox credentials, queues, and permissions in relational MySQL."
    outcome: "Achieved ultra-fast ticket reads and schema flexibility for custom customer attributes while preserving strict relational integrity for system administration."

  - challenge: "Unified Conversation Threading with Public Replies vs. Private Internal Notes"
    decision: "Engineered a dual-lane messaging system allowing support agents to toggle between customer-facing email replies and private internal team notes within the same chronological thread."
    outcome: "Streamlined agent collaboration and eliminated accidental exposure of internal discussion to end customers."

  - challenge: "Reliable Bidirectional Email Ingestion Without Direct Provider Webhooks"
    decision: "Implemented an asynchronous IMAP polling pipeline on dedicated background worker queues with automatic message deduplication and email thread matching via In-Reply-To, References, and ticket hash identifiers."
    outcome: "Incoming customer emails automatically convert into tickets or append to existing threads reliably without blocking web API requests."

  - challenge: "Lightweight Public Web Forms Without Heavy Frontend App Overhead"
    decision: "Rendered visitor-facing forms as lightweight server-rendered HTML pages with client-side validation and anti-spam protection (reCAPTCHA, rate limits, honeypots), while keeping the full-featured drag-and-drop form builder in the agent SPA."
    outcome: "Instant load times for external customers and embeddable iframe compatibility across third-party websites without loading heavy SPA bundles."

  - challenge: "Frontend State Management Across Complex Multi-Tab Workbenches"
    decision: "Designed a modular composable architecture with scoped services and clean memory lifecycle resets on tenant switches, avoiding global state bloat."
    outcome: "Fast, responsive split-pane navigation with zero state leakage across organizational tenants."

  - challenge: "Spam Prevention & Data Quality on Public Submissions"
    decision: "Introduced configurable double opt-in email verification, automated acknowledgement triggers, honeypot fields, and IP rate limiting on public form endpoints."
    outcome: "Drastically reduced spam submissions and prevented bogus ticket creation in agent triage queues."

securityReliability:
  - "Stateless token authentication (Sanctum) combined with tenant isolation middleware verifying membership and permissions on every API call."
  - "Encrypted at-rest storage for external mailbox credentials; secrets are never exposed in API responses."
  - "Multi-layered anti-spam defenses for public forms: cryptographic submission tokens, Google reCAPTCHA, and IP rate limits."
  - "Immutable server-side audit trails for incoming customer emails and outbound notifications."
  - "Isolated background worker queues separating high-throughput email polling from immediate notification delivery."

futureRoadmap:
  - "Direct webhook ingestion engine for major email providers (SendGrid, Postmark, AWS SES) alongside IMAP."
  - "Embeddable customer live-chat widget connected to real-time agent presence."
  - "Automated SLA tracking and ticket escalation workflows."
  - "AI-assisted auto-categorization and smart draft response suggestions."
---

## Executive Summary

**Service Desk** is a high-throughput, multi-tenant customer support and helpdesk platform. Built **full-stack**, it provides a modern **Vue 3 / Quasar SPA workbench** for customer support teams and a scalable **Laravel Backend-for-Frontend (BFF)** handling automated email synchronization, queue workers, and public web form ingestion.

**Support agents** work inside a desktop SPA featuring a Gmail-style triage inbox with split-pane ticket inspection, advanced multi-attribute filtering (queues, tags, assignees, search), file attachments, and a dual-lane messaging interface offering **Public Customer Replies** alongside **Private Internal Team Notes**. **Administrators** manage **support queues** (stream assignment, routing rules, team permissions), **inbox mailboxes** (IMAP/SMTP connection wizard, health checks, manual sync), **public web forms** (visual drag-and-drop form builder, custom theme styling, reCAPTCHA anti-spam), and **templated automated emails** (auto-acknowledgements, ticket confirmation links).

**External customers never need an account.** They submit inquiries seamlessly via **email** (automated background IMAP parsing into structured tickets) or **public web forms** (lightweight server-rendered visitor pages with double opt-in verification). Inquiries persist with rich custom metadata in **MongoDB**, while core relational configurations, user roles, and mailbox credentials reside in **MySQL**.

---

## Architecture

### System Topology & Ingestion Pipeline

```mermaid
flowchart TB
    subgraph Customers["External Customers (Zero Account Overhead)"]
        EmailIn["Inbound Support Email"]
        WebForm["Public Embeddable Web Form"]
    end

    subgraph FrontendSPA["Agent Desktop SPA (Vue 3 / Quasar / TypeScript)"]
        Nav["Navigation & Route Guards"]
        Views["Agent Workbenches: Triage Inbox · Queues · Form Builder · Templates"]
        State["Modular State Composables & Service Client"]
        ThreadUI["Dual-Lane Message Thread (Customer Reply vs Internal Note)"]
    end

    subgraph BackendAPI["Backend-for-Frontend (Laravel REST API Host)"]
        BFF["REST API Gateway (/api/v1/support/*)"]
        VisitorRoutes["Lightweight Public Visitor Form Host"]
        AuthMW["Authentication & Tenant Isolation Middleware"]
        DomainServices["Domain Services: Ticket Manager · Ingestion · Form Engine · Mailer"]
        EventListeners["Event Listeners & Outbound SMTP Dispatcher"]
    end

    subgraph Workers["Background Asynchronous Workers"]
        Scheduler["Cron Task Scheduler"]
        PollWorker["Dedicated IMAP Polling Queue Worker"]
        MailWorker["Transactional Email Delivery Queue Worker"]
    end

    subgraph Persistence["Dual Database Layer"]
        Mongo[("MongoDB<br/>Rich Support Ticket Documents & Custom Fields")]
        MySQL[("MySQL<br/>Queues, Mailbox Auth, Forms, Templates & Audit Logs")]
        ExtMail["External IMAP Mail Servers"]
        SMTP["Outbound SMTP Gateways"]
    end

    EmailIn --> ExtMail
    WebForm --> VisitorRoutes

    Views --> State
    State --> ThreadUI
    Nav --> Views

    State --> AuthMW --> BFF
    BFF --> DomainServices
    VisitorRoutes --> DomainServices
    DomainServices --> Mongo
    DomainServices --> MySQL

    Scheduler --> PollWorker
    BFF -->|"Manual Sync Trigger"| PollWorker
    PollWorker --> ExtMail
    PollWorker --> DomainServices

    EventListeners --> MailWorker
    MailWorker --> SMTP
    EmailIn -.->|"Threaded Inbox View"| Customers
    MailWorker -.->|"Automated Notification"| Customers
```

---

## Technical Architecture Breakdown

### Frontend Engineering (Vue 3 / Quasar SPA)

| Functional Area | Engineering Implementation |
|---|---|
| **Routing & Navigation** | 11 authenticated routes under `/service-desk/*` with strict permission guards |
| **State Management** | Scoped modular composables with automatic tenant cache reset on workspace switch |
| **API Client Layer** | Structured REST service layer communicating with dedicated `/api/v1/support` endpoints |
| **RBAC Security** | Granular action-based access control checking user roles before rendering sensitive actions |
| **Triage Inbox** | High-performance split-pane inbox with dynamic sorting, filtering, and load-more pagination |
| **Stream Management** | Multi-tab queue administration for routing rules, notification preferences, and team assignments |
| **Visual Form Builder** | Drag-and-drop custom field builder with live preview, routing config, and embed code generator |

---

### Backend Engineering (Laravel BFF & Background Pipeline)

| Functional Area | Engineering Implementation |
|---|---|
| **API Gateway** | RESTful `/api/v1/support` endpoints serving dedicated agent queries and mutations |
| **Ticket Persistence** | Document-based persistence in MongoDB enabling flexible schemas, arbitrary tags, and nested custom fields |
| **Email Ingestion Engine** | Asynchronous IMAP sync with RFC-compliant threading (`In-Reply-To`, `References`, hash detection) |
| **Public Form Ingress** | Double opt-in verification service with cryptographic token validation, honeypots, and rate limiters |
| **Outbound Email Pipeline** | Event-driven queued transactional mailers sending branded customer updates and auto-acknowledgements |
| **Granular RBAC** | Backend authorization gates enforcing `support.view`, `create`, `edit`, `assign`, `delete`, and `config` |
| **Public Form Runtime** | Ultra-lightweight server-rendered HTML forms designed for high-speed iframe embeds |

---

## Channel → Ticket Ingestion Lifecycle

| Ingestion Channel | Ingress Mechanism | Ticket Channel Tag | Agent Workflow |
|---|---|---|---|
| **Manual Creation** | `POST /support/tickets` | `manual` | Agent creates ticket directly during phone or in-person support |
| **Email Ingestion** | Asynchronous IMAP Polling Job | `email` | Automated parsing into ticket thread with customer reply lanes |
| **Public Web Form** | Web Form API with optional email verification | `form` | Verified submissions convert into tickets with custom field tables |

---

## Visual Workflows & Production Interfaces

### 1. Split-Pane Agent Inbox & Threaded Detail View
![Service Desk Agent Inbox Split View [desktop]](/images/projects/service-desk/inbox-ticket-detail.webp#desktop)

### 2. Multi-Channel Ticket Queue & Filter View
![Service Desk All Tickets Queue [desktop]](/images/projects/service-desk/inbox-tickets-list.webp#desktop)

### 3. Public Web Form Field Builder
![Service Desk Form Builder Questions [desktop]](/images/projects/service-desk/form-builder-questions.webp#desktop)

### 4. Public Form Routing & Mailbox Settings
![Service Desk Form Builder Settings [desktop]](/images/projects/service-desk/form-builder-settings.webp#desktop)

### 5. Multi-Channel Email Template & Auto-Ack Editor
![Service Desk Email Template Editor [desktop]](/images/projects/service-desk/email-template-editor.webp#desktop)

---

## Full-Stack Ownership Map

| Architecture Layer | Core Responsibilities | Key Technologies |
|---|---|---|
| **Frontend UI & Workbenches** | Inbox triage, queue administration, form builder, email template editor | Vue 3, Quasar Framework, TypeScript |
| **Frontend State & Services** | Modular state composables, HTTP client services, RBAC UI gates | Vue Composables, Axios REST Client |
| **Backend REST API** | Request validation, resource serialization, tenant isolation middleware | Laravel 11, Laravel Sanctum |
| **Domain Services** | Ticket lifecycle management, IMAP parser, email thread matcher, form builder | PHP 8.3 Services, MongoDB ODM |
| **Asynchronous Workers** | Scheduled mailbox polling, email dispatching, deduplication pipelines | Laravel Queues, Redis / MySQL Queue |
| **Public Visitor Surface** | High-performance embeddable forms, anti-spam filters, double opt-in confirmation | Server-rendered HTML, JavaScript, reCAPTCHA |
