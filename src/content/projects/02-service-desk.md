---
id: "02"
title: "Service Desk – Multi-Channel Support Platform"
subtitle: "Full-stack helpdesk for Supercards: Quasar agent inbox, Laravel BFF, IMAP email ingress, and Blade public forms—multi-tenant with MongoDB tickets and MySQL queue config."
description: "Service Desk is a paired frontend library (@itc/service-desk) and Laravel package (itc/service-desk) that gives tenants a Gmail-style ticket inbox, stream/mailbox admin, public form builder, and email templates. Tickets persist as Support-type MongoDB cards; streams, IMAP mailboxes, forms, and templates live in tenant-scoped MySQL. The backend BFF exposes /api/v1/support/*; comments and outbound replies integrate with itc/card-comments and queued SMTP jobs."
chip: "SaaS & Customer Support"
order: 2
featured: true
platformType: "desktop"

role: "Full-Stack Engineer (Frontend + Backend)"
timeline: "2025–2026"
status: "Active Production"

techStack:
  frontend:
    - "Quasar v2 / Vue 3 / TypeScript"
    - "Composable state (no Pinia — module-level refs in useSupport*)"
    - "Vue Router 4 + @itc/menu-system appPlugin discovery"
    - "Vite 7 library build (dist + extracted service-desk.css)"
    - "@itc/ticket-list, card-comments, file-uploader, custom-fields, email-templete, tag-management, user-selection"
  backend:
    - "Laravel 11+ (itc/service-desk BFF)"
    - "Laravel Sanctum + tenant middleware"
    - "webklex/php-imap (IMAP poll + test)"
    - "Laravel Queues (default + service-desk-poll)"
    - "Blade + Knockout visitor forms (/support/forms/*)"
    - "Event listeners on itc/card-comments (outbound reply mail)"
  database:
    - "MongoDB — Support tickets via itc/core-cards"
    - "MySQL — streams, mailboxes, public forms, email templates, inbound dedupe log"
  devops:
    - "pnpm workspace (@itc/service-desk)"
    - "Composer path repo (itc/service-desk)"
    - "Docker Compose local stack"
    - "php artisan schedule:work + service-desk:queue-work"
    - "Nested git submodules (.modules)"

images:
  - "/images/projects/service-desk/inbox-ticket-detail.png"
  - "/images/projects/service-desk/inbox-tickets-list.png"
  - "/images/projects/service-desk/form-builder-questions.png"
  - "/images/projects/service-desk/form-builder-settings.png"
  - "/images/projects/service-desk/email-template-editor.png"

visualAssets:
  heroMockup: "/images/projects/service-desk/inbox-ticket-detail.png"

executiveOverview: "Built end-to-end Service Desk for Supercards tenants—measured by four production agent surfaces (Tickets, Streams, Forms, Email Templates), three inbound channels (manual, IMAP email, public web form), and a 30+ endpoint BFF—by shipping paired @itc/service-desk and itc/service-desk packages with MongoDB card tickets, async IMAP polling on a dedicated queue, confirm-then-ticket form flow, and Gmail-style inbox UI composed from 15+ @itc/* peer packages instead of a monolithic SPA module."

impactMetrics:
  - label: "Full-Stack Delivery"
    value: "2 packages"
    detail: "Frontend @itc/service-desk (67 Vue SFCs, 35 TS modules) + backend itc/service-desk (~93 PHP source files) as nested repos in Supercards."
  - label: "Agent Surfaces"
    value: "11 routes"
    detail: "Inbox split-pane, ticket detail, stream CRUD with 4 tabs, public form builder, email template admin—all under /service-desk/*."
  - label: "Inbound Channels"
    value: "3"
    detail: "Manual agent create, IMAP email (poll + thread matching), public web form (optional email confirmation + reCAPTCHA)."
  - label: "BFF Endpoints"
    value: "30+"
    detail: "Tickets, streams, mailboxes, integrations (forms/templates), inbound JSON, plus Blade visitor routes on API host."
  - label: "RBAC Actions"
    value: "6"
    detail: "support.view · create · edit · assign · delete · config — registered in actions.php and gated in useServiceDeskPermissions()."

problemStatement: "Supercards tenants had no native way to triage customer requests: support lived in email inboxes and ad-hoc forms outside the platform. Teams needed one inbox for assignees, watchers, tags, and threaded conversations—plus admin tools to connect IMAP mailboxes, publish embeddable web forms, and send templated acknowledgements—without giving customers Supercards accounts or exposing raw MongoDB card APIs to agents."

architectureSummary: "Quasar SPA composables call a Laravel BFF at /api/v1/support/*; tickets are MongoDB Support cards; queue config and IMAP credentials sit in MySQL; inbound email and outbound replies run on Laravel queues; visitor forms render as Blade pages on the API host while agents stay in the SPA."

keyDecisions:
  - challenge: "Ticket storage vs. rich Supercards card model"
    decision: "Reuse itc/core-cards MongoDB cards as tickets with Support entity tag and meta.support.* (stream, channel, requester, threading)—BFF hides raw /api/v1/cards from agents."
    outcome: "Assignees, watchers, attachments, and star state align with platform cards; agents only touch /api/v1/support/* for domain operations."

  - challenge: "Conversation thread without duplicating comment infrastructure"
    decision: "Frontend uses @itc/card-comments on /api/v1/cards/{id}/comment; backend listeners SendSupportReplyOnComment and PreventSupportEmailCommentMutation hook card-comments events for outbound SMTP and immutable email lanes."
    outcome: "Reply vs internal note UX in one thread; notify_customer: 1 queues SendSupportTicketReplyMail with mailbox SMTP and threading headers."

  - challenge: "Email ingress reliability without provider webhooks (Phase 8 pending)"
    decision: "IMAP polling via PollSupportStreamMailboxJob on service-desk-poll queue; scheduler dispatches due mailboxes; manual POST …/email/poll returns 202; SupportInboundLog dedupes by mailbox_id + message_id."
    outcome: "End-to-end inbound email with thread matching (In-Reply-To, References, [SUP-{id}]); FE soft-polls mailbox status every ~12s during manual fetch."

  - challenge: "Public forms without loading the Quasar SPA for visitors"
    decision: "Visitor pages on API host: Blade + Knockout at /support/forms/{publicKey}; admin builder in SPA; public_url always server-built—frontend never constructs visitor URLs."
    outcome: "Lightweight public submit surface with reCAPTCHA, honeypot, confirm-then-ticket flow, and iframe embed; guest portal removed."

  - challenge: "Frontend state complexity across inbox, stream editor, and builders"
    decision: "No Pinia store—module-level composables (useSupportTickets, useSupportStreams, useSupportMailboxes, …) + createSupportService(apiClient) factory; reset* helpers on tenant switch."
    outcome: "Thin pages under modularization limits; 15+ @itc/* peers handle list rows, comments, attachments, tags, and form field types."

  - challenge: "Spam and mistaken submissions on public forms"
    decision: "Per-form require_email_confirmation (default true) → pending row + confirmation mail; optional platform reCAPTCHA; rate limits and honeypot in SupportPublicFormSubmissionService."
    outcome: "Tickets created only after confirm token or explicit immediate-create policy; auto-ack and confirmation templates selectable per form."

securityReliability:
  - "All agent APIs: auth:sanctum, tenant.resolve, tenant.membership, X-Tenant-Id; ticket visibility limited to creator, assignee, or watcher on GET."
  - "IMAP passwords encrypted at rest; never returned in API responses (has_imap_password flag only)."
  - "Inbound form routes resolve tenant from public_key without Sanctum; reCAPTCHA and rate limiting on POST."
  - "Inbound email/form tickets created as SERVICE_DESK_SYSTEM_USER_ID—not impersonating a human agent."
  - "Email comment immutability enforced server-side; inbound Email, outbound Email reply, and Acknowledgement lanes read-only in UI."
  - "Production requires scheduler + default queue (mail) + service-desk-poll queue workers for IMAP and outbound delivery."

futureRoadmap:
  - "Phase 8: provider webhook POST /api/v1/support/inbound/email as alternative to IMAP-only ingress."
  - "Extract visitor form runtime to @itc/web-form incubator package (documented in web-form-package-plan.md)."
  - "STANDALONE.md — dedicated Quasar host shell for package-only development."
  - "Consolidate dual route files in older packages pattern; Service Desk already uses single routes.ts + appPlugin."
---

## Executive Summary

**Service Desk** is a multi-channel customer-support module inside **Supercards**. I built it **full stack**: the **frontend** `@itc/service-desk` Quasar library (agent UI) and the **backend** `itc/service-desk` Laravel BFF (API, workers, visitor pages).

**Agents** use a desktop SPA workbench at `/service-desk`—Gmail-style inbox with split-pane detail, filters (stream, tags, scope, search), assignees/watchers, attachments, and threaded comments with **Reply to customer** vs **Internal note** for email and form channels. **Admins** configure **streams** (queues with members, watchers, ticket categories), **IMAP mailboxes** (Gmail/Outlook presets, test connection, manual “Check for new mail”), **public web forms** (Google Forms–style field builder, themes, routing, reCAPTCHA), and **email templates** (confirmation, acknowledgement).

**Customers never log into Supercards.** They reach support via **email** (IMAP → ticket) or **public form** (Blade pages on the API host, optional confirm-by-email). Tickets are **MongoDB cards** with Support metadata; configuration lives in **MySQL**. Comments go through the platform **card-comments** API; the backend listens and sends **queued outbound mail** from the stream’s mailbox SMTP.

The architecture spans **~67 Vue components**, **~35 TypeScript modules**, and **~93 PHP source files**—composed with **15+ `@itc/*` peer packages** on the frontend and **8+ `itc/*` backend packages** on the server.

---

## Architecture

### System Topology & Client-to-Cloud Flow

```mermaid
flowchart TB
    subgraph Customers["Customers (no Supercards account)"]
        EmailIn["Email to support mailbox"]
        WebForm["Public form /support/forms/{key}"]
    end

    subgraph AgentSPA["Supercards SPA — @itc/service-desk"]
        Menu["@itc/menu-system<br/>4 menu items under Service Desk"]
        Pages["Pages: Inbox · Streams · Forms · Templates"]
        Composables["Composables<br/>useSupportTickets · Streams · Mailboxes …"]
        SupportSvc["createSupportService(apiClient)<br/>/api/v1/support/*"]
        CardComments["@itc/card-comments<br/>/api/v1/cards/{id}/comment"]
        Peers["@itc/ticket-list · file-uploader · custom-fields · tag-management …"]
    end

    subgraph APIHost["Laravel Host — itc/service-desk"]
        BFF["BFF routes/api.php<br/>/api/v1/support/*"]
        Web["routes/web.php<br/>Blade visitor forms + confirm"]
        MW["auth:sanctum · tenant.resolve · tenant.membership"]
        Services["Services layer<br/>Ticket · Stream · IMAP · Ingress · Forms · Mail"]
        Listeners["Listeners<br/>SendSupportReplyOnComment · PreventEmailMutation"]
    end

    subgraph Workers["Background workers"]
        Sched["schedule:work<br/>poll-mailboxes · purge-pending"]
        PollQ["queue: service-desk-poll<br/>PollSupportStreamMailboxJob"]
        MailQ["queue: default<br/>Reply · Ack · Confirmation mail"]
    end

    subgraph Data["Persistence"]
        Mongo[("MongoDB<br/>core-cards — Support tickets")]
        MySQL[("MySQL<br/>streams · mailboxes · forms · templates · inbound_log")]
        IMAP["External IMAP servers"]
        SMTP["Mailbox SMTP / MAIL_*"]
    end

    EmailIn --> IMAP
    WebForm --> Web

    Pages --> Composables
    Composables --> SupportSvc
    Pages --> CardComments
    Pages --> Peers
    Menu --> Pages

    SupportSvc --> MW --> BFF
    CardComments --> MW
    BFF --> Services
    Web --> Services
    Services --> Mongo
    Services --> MySQL

    Sched --> PollQ
    BFF -->|"POST …/email/poll 202"| PollQ
    PollQ --> IMAP
    PollQ --> Services

    Listeners --> MailQ
    MailQ --> SMTP
    EmailIn -.->|"reply in inbox"| Customers
    MailQ -.->|"customer email"| Customers
```

---

## Technical Package Breakdown

### Frontend Package (`@itc/service-desk`)

| Area | Implementation |
|------|----------------|
| **Routes** | 11 authenticated routes under `service-desk/*` (`src/routes.ts`) |
| **State** | Composable refs—no Pinia; `reset*` on tenant switch |
| **API Client** | `createSupportService(apiClient)` → `/api/v1/support` |
| **Permissions** | `useServiceDeskPermissions()` → `@itc/settings` RBAC |
| **Inbox** | `ServiceDeskIndex` + `@itc/ticket-list` + load-more pagination |
| **Stream Editor** | Tabs: general · mailbox · communication · forms; IMAP dialog + poll UX |
| **Form Builder** | `@itc/custom-fields` + routing/security/comms sections; preview/share from API `public_url` |
| **Host Wiring** | `provide('apiClient')`, `@import '@itc/service-desk/style.css'`, `pnpm discover:ci` |

---

### Backend Package (`itc/service-desk`)

| Area | Implementation |
|------|----------------|
| **BFF Prefix** | `/api/v1/support` — tickets, streams, mailboxes, integrations |
| **Tickets** | `SupportTicketService` on MongoDB cards + tag merge + visibility |
| **Email Ingress** | `SupportImapClient` → `SupportEmailIngressService` → thread matcher |
| **Form Ingress** | `SupportPublicFormSubmissionService` → pending or immediate ticket |
| **Outbound** | `SendSupportTicketReplyMail`, auto-ack, confirmation mailables |
| **RBAC** | `database/data/actions.php` — six `support.*` actions |
| **Visitor UI** | Blade views + `public-form.js` on API host (not SPA) |

---

## Channel → Ticket Flow

| Channel | Ingress | Ticket `meta.support.channel` | Agent UI |
|---------|---------|-------------------------------|----------|
| **Manual** | `POST /support/tickets` | `manual` | Create dialog + category tags |
| **Email** | IMAP poll job | `email` | Reply / internal note lanes |
| **Web Form** | `POST /inbound/forms/{key}` or confirm token | `form` | Form responses table + email reply |

---

## Visual Workflows & Production Interfaces

### 1. Split-Pane Agent Inbox & Threaded Detail View
![Service Desk Agent Inbox Split View [desktop]](/images/projects/service-desk/inbox-ticket-detail.png#desktop)

### 2. Multi-Channel Ticket Queue & Filter View
![Service Desk All Tickets Queue [desktop]](/images/projects/service-desk/inbox-tickets-list.png#desktop)

### 3. Public Web Form Field Builder
![Service Desk Form Builder Questions [desktop]](/images/projects/service-desk/form-builder-questions.png#desktop)

### 4. Public Form Routing & Mailbox Settings
![Service Desk Form Builder Settings [desktop]](/images/projects/service-desk/form-builder-settings.png#desktop)

### 5. Multi-Channel Email Template & Auto-Ack Editor
![Service Desk Email Template Editor [desktop]](/images/projects/service-desk/email-template-editor.png#desktop)

---

## Full-Stack Ownership Map

| Layer | Implementation | Integrates with |
|-------|----------------|-----------------|
| **FE Pages & Components** | Inbox, stream editor, form builder, template admin | 15+ `@itc/*` UI packages |
| **FE Composables & Service** | `supportService.ts`, filter/sync utils | Host `apiClient` inject |
| **BE Controllers & Requests** | Thin HTTP layer per resource | Form requests + API resources |
| **BE Domain Services** | Ticket, IMAP, ingress, forms, mail | `core-cards`, `card-comments`, `tag-management` |
| **BE Jobs & Scheduler** | Poll, outbound mail, purge pending | `service-desk-poll` + `default` queues |
| **BE Visitor Surface** | Public form Blade + confirm flow | reCAPTCHA, rate limits |
