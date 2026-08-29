---
id: "14"
title: "WanderLust – Airbnb Mini Clone & Hospitality Marketplace"
subtitle: "Full-stack vacation rental platform with Node.js, Express, MongoDB, EJS, Cloudinary image pipelines, and Passport.js authentication."
description: "Engineered an Airbnb mini clone with complete property listings management, Cloudinary media optimization, 5-star review aggregation, and session-based authentication using Node.js, Express, and MongoDB."
chip: "Full-Stack Web App"
order: 14
featured: false

role: "Full-Stack Web Developer"
timeline: "2024 — 2025"
status: "Completed"

techStack:
  frontend:
    - "EJS (Embedded JavaScript Templates)"
    - "Bootstrap 5"
    - "Custom CSS3"
    - "HTML5 Canvas & Responsive Layouts"
  backend:
    - "Node.js"
    - "Express.js"
    - "Passport.js (Local Strategy)"
    - "Express-Session & Connect-Flash"
    - "Joi (Schema Validation)"
  database:
    - "MongoDB"
    - "Mongoose ODM"
  devops:
    - "Cloudinary API (Media Storage & Transformations)"
    - "Git & GitHub"
    - "Render / Vercel"

links:
  github: "https://github.com/marceldavidbaroi/WanderLast"

images:
  - "/images/thumb-1.png"
  - "/images/thumb-2.png"
  - "/images/thumb-3.png"
  - "/images/thumb-4.png"

visualAssets:
  heroMockup: "/images/dummy-project.png"

executiveOverview: "Built WanderLust, a full-stack vacation rental and hospitality platform modeled after Airbnb. Developed using Node.js, Express.js, and MongoDB with Mongoose, the application features complete property listing CRUD workflows, automated Cloudinary media transformations, nested review and rating systems, and role-based owner authorization via Passport.js."

impactMetrics:
  - label: "Architecture"
    value: "MVC Pattern"
    detail: "Clean separation of Models, Express Routers/Controllers, and EJS Views"
  - label: "Media Handling"
    value: "Cloudinary"
    detail: "Automated image optimization, transformations, and cloud storage"
  - label: "Security & Auth"
    value: "Passport.js"
    detail: "Session-based auth with salted hashing and ownership middleware"
  - label: "Data Validation"
    value: "Joi Schemas"
    detail: "Strict server-side validation for property listings and review payloads"

problemStatement: "Building a reliable vacation marketplace requires seamless property listing workflows, robust image storage with automated thumbnailing, cascaded database deletions (removing reviews and images when a listing is deleted), and strict authorization checks to prevent unauthorized property edits."

architectureSummary: "Classic Model-View-Controller (MVC) architecture with Express.js routing, Mongoose ODM middleware for cascading deletes, Joi server-side schema validation, and Cloudinary storage integration."

keyDecisions:
  - challenge: "Automated Media Upload & Optimization"
    decision: "Integrated Cloudinary via Multer storage engine to handle multi-file uploads directly from the listing creation form with automatic resizing and cloud CDN delivery."
    outcome: "Eliminated server storage bottlenecks and delivered optimized, responsive images for property showcases."
  - challenge: "Cascading Deletion of Nested Reviews"
    decision: "Implemented Mongoose post-hook `findOneAndDelete` middleware on the Listing schema to automatically delete all associated Review documents upon listing deletion."
    outcome: "Prevented orphaned review documents in MongoDB and maintained 100% database referential integrity."
  - challenge: "Granular Author Ownership Authorization"
    decision: "Created reusable Express middleware (`isOwner`, `isReviewAuthor`) to verify session user ID against document author fields before allowing edit or delete operations."
    outcome: "Protected user listings and reviews against IDOR attacks and unauthorized tampering."

securityReliability:
  - "Session-based authentication with Passport.js, salted password hashing, and HTTP-only session cookies."
  - "Server-side schema validation on all incoming request bodies using Joi to block malicious payloads."
  - "Granular ownership middleware protecting all PUT and DELETE endpoints."
  - "Centralized error-handling middleware with custom `ExpressError` wrapper class."

futureRoadmap:
  - "Interactive Mapbox GL integration with geolocation pins and radius-based search filters."
  - "Stripe payment gateway integration for instant booking reservations."
  - "Real-time host-to-guest messaging powered by Socket.io."
---

## Executive Summary

**WanderLust** is a full-stack vacation rental marketplace built with **Node.js, Express.js, MongoDB, and EJS**. Designed as an Airbnb mini clone, the platform provides seamless property exploration, multi-image listing registration, automated Cloudinary media transformations, 5-star guest reviews, and session-based authentication with owner-only access controls.

---

## Architecture

### High-level system design

```mermaid
flowchart TB
    subgraph Client ["Client Browser"]
        EJS["EJS Dynamic Views<br/>(Bootstrap 5 + Custom CSS)"]
        FORMS["Listing & Review Forms<br/>(Client-Side Bootstrap Validation)"]
    end

    subgraph Server ["Express.js Web Server (Node.js)"]
        ROUTERS["Express Resource Routers<br/>(/listings, /reviews, /users)"]
        AUTH_MW["Passport.js Authentication<br/>Session Middleware"]
        OWNER_MW["Ownership Verification Middleware<br/>(isOwner, isReviewAuthor)"]
        JOI_VAL["Joi Schema Validation Layer"]
        CONTROLLERS["MVC Controllers<br/>(Listings, Reviews, Users)"]
    end

    subgraph Media ["Cloud Media Pipeline"]
        MULTER["Multer Cloudinary Storage"]
        CLOUDINARY[("Cloudinary CDN<br/>Automated Resizing & Storage")]
    end

    subgraph Database ["Persistence Layer"]
        MONGO[("MongoDB Atlas<br/>Mongoose ODM")]
        HOOKS["Mongoose Lifecycle Hooks<br/>(Cascading Review Deletion)"]
    end

    EJS --> FORMS
    FORMS -->|"HTTP Requests + Multi-part Data"| ROUTERS
    ROUTERS --> AUTH_MW --> OWNER_MW --> JOI_VAL --> CONTROLLERS
    CONTROLLERS -->|"Image Upload Stream"| MULTER --> CLOUDINARY
    CONTROLLERS -->|"Queries & Mutations"| MONGO
    MONGO --> HOOKS
```

---

## Data Schema & Relationships

WanderLust uses a relational document model inside MongoDB managed through Mongoose schemas:

```mermaid
erDiagram
    USER ||--o{ LISTING : "owns"
    USER ||--o{ REVIEW : "writes"
    LISTING ||--o{ REVIEW : "contains"

    USER {
        ObjectId _id PK
        string email
        string username
        string hash
        string salt
    }

    LISTING {
        ObjectId _id PK
        string title
        string description
        string image_url
        string image_filename
        number price
        string location
        string country
        ObjectId owner FK
        ObjectId[] reviews FK
        timestamp createdAt
    }

    REVIEW {
        ObjectId _id PK
        string comment
        number rating
        ObjectId author FK
        timestamp createdAt
    }
```

---

## Core Technical Decisions

### Decision 1 — Server-Side Rendering with EJS & Express MVC

| | |
|---|---|
| **Problem** | Building a lightweight, SEO-friendly marketplace without the overhead and bundle size of a heavy client-side JavaScript SPA framework. |
| **Decision** | Adopted the classic **Model-View-Controller (MVC)** architecture with **EJS layouts** (using `ejs-mate`) and Bootstrap 5 for responsive, server-rendered HTML. |
| **Outcome** | Fast initial page load times, zero client build step required for views, and instant HTML delivery for search engine crawlers. |

---

### Decision 2 — Mongoose Cascading Deletes Middleware

| | |
|---|---|
| **Problem** | When a host deletes a property listing, associated reviews remain orphaned in the MongoDB database, wasting storage and creating data inconsistencies. |
| **Decision** | Implemented a Mongoose post-hook on `findOneAndDelete`: when a listing document is deleted, all review IDs in `listing.reviews` are automatically purged via `Review.deleteMany({ _id: { $in: doc.reviews } })`. |
| **Outcome** | 100% referential integrity with automatic cleanup of associated review documents. |

```mermaid
sequenceDiagram
    autonumber
    actor Host as Property Host
    participant Router as /listings/:id Router
    participant MW as isOwner Middleware
    participant Model as Listing.findByIdAndDelete()
    participant Hook as Mongoose Post Hook
    participant DB as MongoDB (Reviews Collection)

    Host->>Router: DELETE /listings/:id
    Router->>MW: Verify Host == Listing.owner
    MW-->>Router: Authorized
    Router->>Model: Execute Deletion
    Model->>Hook: Trigger findOneAndDelete Hook
    Hook->>DB: Review.deleteMany({ _id: { $in: listing.reviews } })
    DB-->>Hook: Deleted Associated Reviews
    Model-->>Router: Listing Deleted
    Router-->>Host: Redirect to /listings with Flash message
```

---

## Visual Workflows & Architecture Wireframes {#visual-workflows}

### 1. Property Details & Review Experience Wireframe

```
+----------------------------------------------------------------------------------------------------+
|  [Logo] WanderLust             |  [Explore]  |  [Add New Listing]          |  [Log In]  |  [Sign Up]|
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  BREADCRUMB: Home > Listings > Cliffside Ocean Villa in Bali                                       |
|                                                                                                    |
|  +-- PROPERTY SHOWCASE --------------------------------------------------------------------------+ |
|  |                                                                                               | |
|  |  +-------------------------------------------------------+  Owned by: @marcelbaroi            | |
|  |  |                                                       |                                    | |
|  |  |                 [ CLOUDINARY HERO IMAGE ]             |  Price: $280 / night               | |
|  |  |             (High-Res Ocean View Villa Photo)         |  Location: Uluwatu, Bali, Indonesia| |
|  |  |                                                       |                                    | |
|  |  +-------------------------------------------------------+                                    | |
|  |                                                                                               | |
|  |  Description: Luxurious 3-bedroom villa with private infinity pool overlooking the ocean.     | |
|  |                                                                                               | |
|  |  [ Edit Listing ]    [ Delete Listing ]   *(Visible only to property owner)*                  | |
|  +-----------------------------------------------------------------------------------------------+ |
|                                                                                                    |
|  +-- LEAVE A REVIEW -----------------------------------------------------------------------------+ |
|  |                                                                                               | |
|  |  Rating: [*] [*] [*] [*] [*]  (5 Stars)                                                       | |
|  |  Comments: [ Enter your stay experience...                                                  ] | |
|  |  [ Submit Review ]                                                                            | |
|  +-----------------------------------------------------------------------------------------------+ |
|                                                                                                    |
|  +-- ALL GUEST REVIEWS (4.9 / 5.0 Rating) -------------------------------------------------------+ |
|  |  +----------------------------------------+  +----------------------------------------+       | |
|  |  | @sarah_travels    ★★★★★ (5/5)          |  | @david_wanderer  ★★★★★ (5/5)           |       | |
|  |  | "Breathtaking views and super clean!"  |  | "Best stay in Bali, will return!"      |       | |
|  |  | [ Delete Review ] *(Author only)*      |  | [ Delete Review ] *(Author only)*      |       | |
|  |  +----------------------------------------+  +----------------------------------------+       | |
|  +-----------------------------------------------------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------+
```

---

## What I Built (Personal Contributions)

- **Engineered Full-Stack MVC Architecture**: Built complete routing, controllers, and EJS views across `/listings`, `/reviews`, and `/users` routes.
- **Implemented Cloudinary Media Pipeline**: Integrated Multer storage for direct photo uploads, image cropping, and responsive cloud delivery.
- **Developed Authentication & Access Control**: Configured Passport.js local strategy with secure password hashing and authorization middleware (`isOwner`, `isReviewAuthor`).
- **Designed MongoDB Schema & Cascading Deletes**: Created Mongoose models with automated cascading deletion for nested review collections.
- **Implemented Robust Input Validation**: Used Joi schemas on the server side to validate listing prices, strings, and review ratings against malicious payloads.

---

## Future Roadmap

```mermaid
timeline
    title WanderLust Evolution Roadmap
    section In Progress
        Mapbox Integration : Interactive geolocation maps and coordinate clustering
    section Planned
        Stripe Checkout : Instant payment booking pipeline with refund workflows
        Real-Time Chat : Host-to-guest messaging with Socket.io
        Search & Filter Engine : Price range sliders, amenities checklist, and instant search
```
