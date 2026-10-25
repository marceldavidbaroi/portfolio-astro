---
id: "02"
title: "Service Desk – Diagnostics-First Support Platform & In-App Vue Widget"
subtitle: "Multi-tenant helpdesk unifying a native Vue in-app widget, IMAP email and public web forms into one agent inbox, shipped as reusable NPM packages for the company suite and as a standalone web app."
# Google XYZ: Accomplished [X], measured by [Y], by doing [Z]
description: "Delivered a diagnostics-first support platform unifying 3 intake channels in one agent inbox, shipped as reusable NPM packages for the company suite plus a standalone web app, via database-driven app routing and server-side PII redaction."
chip: "SaaS & Customer Support"
order: 2
featured: true
platformType: "desktop"

# ROLE, OWNERSHIP & LIFECYCLE
role: "Full-Stack Software Engineer (Solo Owner)"
timeline: "2026 — Present"
status: "Active Production"
classification: "🔒 Proprietary Enterprise IP · Proficient Information Systems"

contribution:
  mode: owner
  startedFrom: scratch
  myShare: lead
  teamSize: 1
  label: "Solo Engineer & Product Owner · Proficient Information Systems"
  headline: "Planned, validated with the client, and delivered the Service Desk hub, reusable NPM packages, native Vue in-app widget and standalone web app as the only engineer, working from architecture direction set by the CEO and company architect."
  scope:
    - "Product planning and requirements verification with the client, then end-to-end implementation"
    - "Reusable NPM package components (@itc/service-desk) integrated into the company suite, plus a standalone web app separate from the suite"
    - "Implemented the architect-directed stack: IMAP ingestion, Knockout.js visitor surface, and the multi-channel intake model"
    - "Laravel BFF (/api/v1/support/*), dual-database persistence (MongoDB tickets + MySQL configuration/RBAC)"
    - "Vue 3 / Quasar agent workbenches and the shared @itc/service-desk package"
    - "In-app Vue widget: Sanctum-bound intake, telemetry buffers, screenshot capture and annotation"
    - "Release V1: dynamic app registry, origin triage, omnichannel continuity"
  outOfScope:
    - "High-level architecture direction (technology and channel choices) set by the CEO and company architect"
    - "Product pricing and commercial strategy (company-owned)"
    - "Production hosting infrastructure (separate team)"

# REAL USER PROBLEM
problem:
  statement: "Portfolio apps reported bugs through scattered emails and hardcoded .env stream mappings, so agents received 'cannot reproduce' tickets with no route, API or error context, and every new app meant a code deploy."
  evidence: interviews              # requirements verified with the client before build
  whoHurts:
    - "end-reporter"
    - "host-app-developer"
    - "support-agent"

# USER BENEFIT MATRIX
benefitMatrix:
  - persona: "End Reporter (App User / Employee)"
    pain: "Manually describing browser, URL, screen size and steps; separate helpdesk login"
    before: "Free-text emails with no environment context and a second account to track tickets."
    after: "One-click filing from inside the app; route, viewport, user agent and annotated screenshot attach automatically via the existing Sanctum session."
    measure:
      metric: "Reporter-typed environment details"
      from: "Manual description of URL, device and steps"
      to: "Auto-captured diagnostics pack (schema_version 1)"
      proof: designed
    attribution: personal
    feature:
      - "In-App Widget"
      - "Screenshot Annotator"
      - "My Tickets"
  - persona: "Support Agent / Triage Operator"
    pain: "'Cannot reproduce' loops and context switching between app inboxes"
    before: "Tickets without error messages, API payloads or origin app."
    after: "Diagnostics tab with the last 20 Axios calls (status, latency, request_id), Vue exceptions, last failed API, plus client_app badges and a multi-select app filter."
    measure:
      metric: "Network context per ticket"
      from: "None"
      to: "Last 20 API calls + runtime errors"
      proof: designed
    attribution: personal
    feature:
      - "Diagnostics Tab"
      - "Origin Triage Filter"
      - "Unified Inbox"
  - persona: "Host App Developer / SaaS Owner"
    pain: "Config sprawl: stream IDs and secrets hardcoded across .env files"
    before: "SERVICE_DESK_IN_APP_STREAM_IDS redeployed for every new app."
    after: "support_widget_apps registry and /service-desk/apps admin page map apps to streams with zero code deploys."
    measure:
      metric: "Deploys needed to onboard an app"
      from: "1 backend deploy per app"
      to: "0 (self-service registration)"
      proof: designed
    attribution: personal
    feature:
      - "App Registry"
      - "Admin Apps Page"
      - "Origin Allow-List"

# PRODUCT CONTEXT & VALUE PROPOSITION CANVAS
product:
  summary: "Planned, validated and shipped a diagnostics-first, multi-tenant support platform that unifies in-app Vue, IMAP email and public web form intake in one agent inbox, distributed as reusable NPM packages (@itc/service-desk) and a standalone web app."
  tagline: "One agent inbox for in-app, email and web form support, with diagnostics attached."
  problem: "Portfolio apps reported bugs through scattered emails and hardcoded .env stream mappings, so agents received 'cannot reproduce' tickets with no route, API or error context, and every new app meant a code deploy."
  valueProposition:
    targetCustomer: "App Users, Host Developers & Support Agents"
    showCanvas: true
    items:
      - painTitle: "Manual Context & Extra Logins"
        painDescription: "Reporters retype URL, viewport and steps, and need a separate helpdesk account."
        gainTitle: "One-Click Context Capture"
        gainDescription: "Route, viewport, screenshot and identity attach automatically via the host app's Sanctum session."
      - painTitle: "Redeploys for Every New App"
        painDescription: "Hardcoded .env stream IDs force a backend deploy per onboarded app."
        gainTitle: "Zero-Deploy App Registry"
        gainDescription: "A support_widget_apps table and admin page map apps to streams at request time."
      - painTitle: "'Cannot Reproduce' Loops"
        painDescription: "Agents chase missing API payloads across disconnected inboxes."
        gainTitle: "Diagnostics in One Inbox"
        gainDescription: "Last 20 API calls, request IDs and Vue errors, filterable by app."
    canvas:
      labels:
        title: "The Value Proposition Canvas"
        valueProposition: "Service Desk Platform & In-App Vue Widget"
        customerSegment: "App Users, Host Devs & Support Agents"
      customerJobs:
        - title: "Report Bugs In-Workflow"
          note: "File issues from the current Vue page without leaving the app."
        - title: "Onboard Apps Fast"
          note: "Add support intake to a new app without rebuilding forms."
        - title: "Triage Multi-App Tickets"
          note: "Reproduce and resolve tickets from many apps in one workspace."
      pains:
        - title: "Manual Context Entry"
          note: "Reporters retype URL, screen size and steps taken."
        - title: "Secondary Login Friction"
          note: "A separate helpdesk account just to track a ticket."
        - title: "Hardcoded .env Routing"
          note: "Stream IDs in config files force a deploy per new app."
        - title: "Cannot Reproduce Loops"
          note: "Missing errors and API payloads cause back-and-forth."
      gains:
        - title: "1-Click Context Filing"
          note: "Route, viewport and screenshot attach automatically."
        - title: "Self-Service Registry"
          note: "Map apps to streams from an admin page, no deploy."
        - title: "High-Fidelity Diagnostics"
          note: "Last 20 API calls, request IDs and Vue errors per ticket."
        - title: "Single Multi-App Inbox"
          note: "One feed with origin badges and a per-app filter."
      productsAndServices:
        - title: "In-App Vue Widget"
          note: "Help panel capturing router state, API calls and screenshots."
        - title: "Service Desk Hub"
          note: "Agent inbox for widget, IMAP email and public form tickets."
        - title: "Admin App Registry"
          note: "support_widget_apps table and admin page for app-to-stream mapping."
      painRelievers:
        - title: "Auto Context & Error Capture"
          note: "Captures route, viewport, locale and unhandled exceptions."
        - title: "Sanctum Session, Zero Seats"
          note: "Host app auth identifies reporters; no agent seat needed."
        - title: "Server-Side PII Redaction"
          note: "Strips auth headers, cookies and API keys before saving."
      gainCreators:
        - title: "Central App-Stream Map"
          note: "Tickets route by app_id from the database at request time."
        - title: "Unified Diagnostics Schema"
          note: "Versioned pack (schema_version 1) attached to every ticket."
        - title: "Origin Badges & Filter"
          note: "client_app chips and multi-select filter isolate each queue."

# Flat Stack Tags for Cards & UI Badges
stack:
  - "Vue 3"
  - "Laravel 11"
  - "MongoDB"
  - "MySQL"
  - "TypeScript"
  - "Quasar 2"

# WHAT I IMPROVED (Release V1)
improvements:
  - area: "In-app ticket routing"
    before: "Stream mapping hardcoded in .env (SERVICE_DESK_IN_APP_STREAM_IDS)"
    after: "Database-backed registry (support_widget_apps) resolving app_id to support_stream_id at request time"
    how: "New widget middleware on POST /api/v1/support/me/tickets with allowed_origins checks and 400 on unregistered app_id"
    measure:
      metric: "Code deploys per new app"
      from: "1"
      to: "0"
      proof: designed
    userBenefit: "Developers register new Vue apps in minutes without engineering involvement"
    attribution: personal
  - area: "Agent triage by origin"
    before: "All app tickets mixed in one undifferentiated feed"
    after: "client_app badge chips on ticket cards and multi-select app filter in ServiceDeskFiltersForm"
    how: "client_app query parameter appended to GET /tickets"
    measure:
      metric: "Queue isolation per portfolio app"
      from: "None"
      to: "Per-app filtered views"
      proof: designed
    userBenefit: "Agents isolate a single product's queue without separate sessions"
    attribution: personal

# CATEGORIZED TECHNOLOGY STACK
techStack:
  frontend:
    - "Vue 3"
    - "Quasar 2"
    - "TypeScript"
    - "Vue Router 4"
    - "Knockout.js (public form visitor surface)"
    - "Marker.js (screenshot annotation)"
    - "Modular Composables"
    - "@itc/service-desk package"
  backend:
    - "Laravel 11+ (BFF)"
    - "PHP 8.3"
    - "Laravel Sanctum"
    - "Tenant Isolation Middleware"
    - "Queues & Background Workers"
    - "IMAP / SMTP Engine"
  database:
    - "MongoDB (ticket documents)"
    - "MySQL (streams, apps registry, mailboxes, RBAC, forms)"
  devops:
    - "Docker Compose"
    - "Cron Scheduler & Queue Workers"
    - "Private NPM package publishing"
    - "Standalone web app deployment"
  mobile_hardware: []

# LINKS & PROOF
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
  # TODO(me): add /images/projects/service-desk/widget-apps-registry.webp and diagnostics-tab.webp
visualAssets:
  heroMockup: "/images/projects/service-desk/inbox-ticket-detail.webp"

# ENGINEERING DECISIONS MATRIX
keyDecisions:
  - challenge: "Hardcoded .env stream mapping forced a deploy for every new Vue app."
    decision: "Moved routing into a support_widget_apps table (app_id, support_stream_id, allowed_origins, is_active) with a widget-only middleware resolving the stream per request."
    outcome: "Apps register through /service-desk/apps with zero code deploys; unregistered app_id submissions are rejected with 400."
  - challenge: "New widget routing must never break existing email and form intake."
    decision: "Scoped the middleware strictly to POST /api/v1/support/me/tickets so SupportEmailIngressService (IMAP) and public form controllers keep native mailbox/form stream mappings."
    outcome: "Three channels coexist in one inbox; validated end to end across widget, email and form lifecycles."
  - challenge: "'Cannot reproduce' tickets from missing client state."
    decision: "Packaged a versioned diagnostics pack (schema_version 1): route metadata, viewport, locale, tenant, a ring-buffer of the last 20 Axios calls with request_id, and trapped window.onerror, unhandled rejections and Vue errors."
    outcome: "Every in-app ticket arrives with reproducible context and an isolated last_failed_api."
  - challenge: "Diagnostics can leak credentials and PII into tickets."
    decision: "Enforced server-side sanitization: drop unmapped keys, cap payload size, redact Authorization, Cookie, Set-Cookie and API keys before persisting as support.context and diagnostics.json."
    outcome: "Debug context without storing secrets in the ticket store."
  - challenge: "Support had to work inside the company suite and also as an independent product, without duplicating UI code."
    decision: "Packaged the agent console and in-app widget as reusable NPM components (@itc/service-desk) consumed by the suite, and built a standalone web app on the same packages."
    outcome: "One shared codebase serves both the integrated suite experience and the standalone product; new host apps embed support by installing the package."
  - challenge: "Variable custom ticket fields vs strict relational config."
    decision: "Dual-database: MongoDB for flexible ticket documents and threads, MySQL for streams, apps, mailboxes, forms and RBAC."
    outcome: "Schema flexibility for custom attributes with relational integrity for administration."
  - challenge: "Public replies leaking internal discussion."
    decision: "Dual-lane threading: public replies trigger sanitized SMTP, private notes stay internal within one chronological thread."
    outcome: "Zero accidental exposure of internal notes to customers."

securityReliability:
  - "Sanctum session auth plus tenant-isolation middleware verifying membership and permissions on every API call."
  - "Origin allow-list (allowed_origins) and is_active flag per registered app; 400 for unregistered app_id."
  - "Server-side payload scrubbing and header redaction for diagnostics packs."
  - "Encrypted app secrets and mailbox credentials; never exposed in API responses."
  - "Anti-spam on public forms: double opt-in, honeypot, IP rate limits, reCAPTCHA."
  - "Isolated queue workers separating IMAP polling from outbound notifications."

futureRoadmap:
  - "MVP 2: SLA sweep engine with breach countdown chips, business-hours routing and round-robin assignment, keyboard triage, real-time WebSocket/SSE feed."
  - "MVP 3: screenshot blur/blackout redaction, 'What we will send' opt-out tray, reply email notifications with tokenized reply-by-email, duplicate detection."
  - "MVP 4: two-way webhook sync with Jira, Linear and GitHub; FRT and resolution dashboards; CSAT automation; integration failure alerts."
---

## System Architecture & Domain Scope

**Service Desk** is a diagnostics-first, multi-tenant support platform I built solo at Proficient Information Systems. The CEO and company architect set the technical direction (IMAP ingestion, Knockout.js for the visitor surface, the channel model, and product expectations); I planned the work, verified requirements with the client, and implemented and shipped the product. It turns the support inbox into a command center for a portfolio of Vue/Quasar apps, with three intake channels feeding one agent workspace.

### Distribution Model

- **NPM packages:** the agent console, in-app widget and shared composables ship as reusable components (`@itc/service-desk`), published through the company's internal NPM system.
- **Suite integration:** the packages plug into the company suite, so host apps gain support intake by installing the package and registering an `app_id`.
- **Standalone web app:** a separate deployment of the same packages for use outside the suite.

| Channel | Ingress | Tag | Stream resolution |
|---|---|---|---|
| In-App Vue Widget | `POST /api/v1/support/me/tickets` (Sanctum session) | `in_app` | `app_id` → `support_widget_apps` → `support_stream_id` |
| Email | Async IMAP polling → `SupportEmailIngressService` | `email` | Mailbox configuration |
| Public Web Form | Server-rendered hosted form | `form` | Form configuration |

```mermaid
flowchart TB
    subgraph Host["Host Vue App (Sanctum)"]
        W["HelpHeaderMount / InAppTicketPanelLayer"]
        T["Telemetry: Axios ring-buffer · router · runtime errors"]
        S["Screenshot capture + annotator"]
    end
    Email["Inbound Email (IMAP)"]
    Form["Public Web Form"]

    subgraph API["Laravel BFF /api/v1/support/*"]
        MW["Widget Middleware: app_id + origin check"]
        REG[("support_widget_apps")]
        SAN["Sanitizer: strip, cap, redact"]
        ING["IMAP Ingress Service"]
        FC["Public Form Controllers"]
    end

    subgraph Data["Persistence"]
        M[("MongoDB: tickets")]
        Q[("MySQL: streams, apps, RBAC")]
    end

    Agent["Agent Console (@itc/service-desk): unified inbox, client_app filter, diagnostics tab"]

    W --> MW
    T --> MW
    S --> MW
    MW --> REG
    MW --> SAN --> M
    Email --> ING --> M
    Form --> FC --> M
    REG --> Q
    M --> Agent
```

Frontend follows a modular composable architecture (11 authenticated routes under `/service-desk/*`) with scoped state that resets on tenant switch. The agent console exposes four workbenches: triage inbox, stream queues, form builder and email templates, plus the V1 apps registry.

### Persona Value Map

| Persona | Pains removed | Shipped | Roadmap |
|---|---|---|---|
| **End Reporter** | Manual context entry, separate login, no ticket visibility | Auto context capture, screenshot crop and annotation, Sanctum session, My Tickets | Blur redaction, data opt-out tray, reply-by-email (MVP 3) |
| **Host Developer** | Rebuilding intake per app, `.env` sprawl, seat costs, PII leaks | `@itc/service-desk` components, app registry, unlimited reporters, server-side redaction | None |
| **Support Agent** | "Cannot reproduce" loops, multi-app switching, repetitive replies | Diagnostics tab, unified inbox with `client_app` filter, canned responses and templates | Duplicate detection (MVP 3), Jira/Linear/GitHub sync (MVP 4) |

## Core Engineering Innovations

### 1. Database-Driven App Registry (Release V1)

Replaced `SERVICE_DESK_IN_APP_STREAM_IDS` with a registry table:

```
support_widget_apps
  id · app_id · support_stream_id (FK → support_streams)
  allowed_origins · is_active · timestamps
```

Widget middleware on `POST /api/v1/support/me/tickets` extracts `app_id`, loads the active record, enforces `allowed_origins`, and resolves the destination stream. Unregistered or inactive apps return `400 Bad Request`. The `/service-desk/apps` page (`SupportWidgetAppsPage`, Quasar table plus create/edit modal, validated by FormRequests) lets owners onboard apps with no deploy.

### 2. Channel Isolation

The middleware applies only to the widget endpoint. IMAP ingestion and public forms keep their native mailbox/form stream mappings, so adding dynamic routing could not regress existing intake.

### 3. Deterministic Diagnostics Engine (`schema_version: 1`)

- **Environment auto-capture:** route `fullPath`, `meta.title`, query params, viewport, user agent, locale, timezone, active tenant.
- **Runtime pack:** ring-buffer of the last 20 Axios requests (latency, HTTP status, backend `request_id`), trapped `window.onerror`, unhandled promise rejections and Vue exceptions, with `last_failed_api` isolated.
- **Sanitization pipeline:** unmapped keys dropped, size limits enforced, `Authorization`/`Cookie`/`Set-Cookie`/API keys redacted, stored as `support.context` and a downloadable `diagnostics.json`.

### 4. Origin Triage

`client_app` badge chips on ticket cards and a multi-select filter in `ServiceDeskFiltersForm.vue` that appends `client_app` to `GET /tickets`, isolating one product's queue inside the shared inbox.

## Database Design & Concurrency

- **MongoDB** stores ticket documents, custom fields and conversation threads (flexible schema, fast reads).
- **MySQL** stores streams, the app registry, mailbox credentials (encrypted), form schemas, templates, RBAC and audit logs.
- IMAP polling runs on dedicated queue workers with message deduplication and thread matching via `In-Reply-To`, `References` and ticket hash, so ingestion never blocks API requests.
- Tenant isolation middleware verifies membership and permissions on every call; granular gates cover `support.view`, `create`, `edit`, `assign`, `delete` and `config`.

## Performance Benchmarks & Reliability

| Metric | Value |
|---|---|
| Intake channels unified | 3 |
| Agent workbenches | 4 (+ apps registry) |
| REST endpoints | 30+ |
| Authenticated routes | 11 |
| Network calls captured per ticket | last 20 |
| Deploys to onboard a new app | 0 (was 1) |
| Release V1 delivery | 4-day sprint |
| Delivery surfaces | Suite-integrated packages + standalone web app |

<!-- TODO(me): add measured numbers if available: ticket list p95 latency, IMAP poll-to-ticket time, number of registered apps, tickets handled. -->

**V1 release validation:** end-to-end lifecycle executed across all three channels (widget with screenshot → correct stream; IMAP email → polled into ticket; public form → assigned stream), plus triage validation that email/form tickets display correctly beside widget tickets under the app filter. Feature tests cover `/me/*` routes and multi-tenant isolation.

## Lessons Learned & Architectural Retrospective

- **What worked:** scoping middleware to a single endpoint made a routing rewrite low-risk; versioning the diagnostics schema (`schema_version`) leaves room to evolve the payload.
- **Packaging:** building reusable NPM components first meant the suite integration and the standalone app shared one codebase instead of diverging.
- **Trade-off:** the dual-database design buys flexibility but adds operational surface (two engines to back up and monitor).
- **Do differently:** ship the app registry from day one instead of `.env` mapping, and add screenshot redaction and the data opt-out tray earlier, since privacy controls matter most for diagnostic capture.
- **Next:** SLA sweep engine and automated routing (MVP 2), then privacy controls (MVP 3) and Jira/Linear/GitHub sync (MVP 4).
