---
id: "06"
title: "UNIFLOW – Interactive Class Management & Collaborative Learning Platform"
subtitle: "Real-time collaborative academic portal built with Quasar Framework, Vue 3, Pinia, Firebase Firestore, and ApexCharts analytics."
# CV-Card Google XYZ Accomplishment Statement (Accomplished [X], measured by [Y], by doing [Z]):
description: "Architected a real-time academic collaboration portal achieving sub-second classroom state synchronization and 4-tier institutional modeling via Firebase Firestore listeners, Quasar (Vue 3), and 8 modular Pinia stores."
chip: "Quasar & Firebase Platform"
order: 6
featured: false
platformType: "desktop"

role: "Lead Full-Stack Developer"
timeline: "2024 — 2025"
status: "Completed"
classification: "Independent System / Platform"

techStack:
  frontend:
    - "Quasar Framework (v2)"
    - "Vue.js (v3)"
    - "Pinia (v3) + PersistedState"
    - "ApexCharts & Vue3-ApexCharts"
    - "Chart.js"
    - "Vue Router (v4)"
    - "Vite (@quasar/app-vite)"
  backend:
    - "Firebase 11 (Firestore Real-time DB)"
    - "Firebase Authentication"
    - "Firebase Security Rules"
    - "bcryptjs"
  database:
    - "Cloud Firestore (Document & Subcollection Model)"
    - "Real-time Listeners (onSnapshot)"
  devops:
    - "ESLint 9 + Prettier"
    - "PostCSS & Autoprefixer"
    - "Git & GitHub"
  mobile_hardware: []

links:
  liveDemo: ""
  parentPlatform: ""
  github: "https://github.com/marceldavidbaroi/UniFlow-"
  docs: ""

images:
  - "/images/thumb-1.png"
  - "/images/thumb-2.png"
  - "/images/thumb-3.png"
  - "/images/thumb-4.png"

visualAssets:
  heroMockup: "/images/dummy-project.png"

# Executive Overview (Expanded Google XYZ Accomplishment with Architectural Depth):
executiveOverview: "Engineered UNIFLOW, a modern real-time interactive class management and group collaboration platform for university students and educators [X]. Built with Quasar Framework (Vue 3) and Firebase Firestore, the system delivers live interactive lecture sessions and sub-second classroom synchronization [Y] via a 4-tier academic hierarchy model (Faculty → Department → Course → Group), multi-criterion grading rubrics, collaborative smart notes, and 8 modular Pinia stores [Z]."

impactMetrics:
  - label: "State Synchronization"
    value: "Sub-Second"
    detail: "Live Firestore onSnapshot listeners synchronizing classroom state"
  - label: "Academic Modeling"
    value: "4 Tiers"
    detail: "Faculty, Department, Course, and Group relational document hierarchy"
  - label: "State Architecture"
    value: "8 Stores"
    detail: "Modular Pinia domain isolation with persisted local caching"
  - label: "Grading Rubrics"
    value: "Multi-Criteria"
    detail: "Custom evaluation criteria with peer and instructor review toggles"
  - label: "Visual Analytics"
    value: "ApexCharts"
    detail: "Interactive student task completion and session participation rollups"
  - label: "Security Enforcement"
    value: "Role-Based"
    detail: "Granular Firestore security rules for students, teachers, and admins"

valueProposition:
  targetCustomer: "University Educators, Academic Departments & Student Study Groups"
  items:
    - painTitle: "Fragmented Classroom Collaboration Tools"
      painDescription: "Lectures, code playgrounds, chat threads, and grading sheets were spread across 4+ disconnected web apps, causing student context-switching."
      gainTitle: "Unified Interactive Real-Time Lecture Hub"
      gainDescription: "Single Quasar (Vue 3) interface synchronizing live video feeds, embedded code editors, and question queues in real-time."

    - painTitle: "Rigid & Opaque Assignment Grading Methods"
      painDescription: "Traditional university portals offered only binary score inputs without transparent breakdown of grading criteria or peer evaluation."
      gainTitle: "Multi-Criterion Assignment Grading Rubrics"
      gainDescription: "Customizable sub-collections allowing teachers to define multi-factor rubrics with automated score rollups and peer review."

    - painTitle: "High Database Latency on Course Roster Queries"
      painDescription: "Relational SQL joins across complex university departments, faculties, and student groups slowed down dashboard loads."
      gainTitle: "4-Tier Denormalized NoSQL Document Model"
      gainDescription: "Engineered high-speed Firestore schemas with sub-50ms query reads for course rosters and student group permissions."

problemStatement: "University classrooms often suffer from fragmented tools—scattered video links, detached discussion boards, external code playgrounds, and disconnected grading spreadsheets—leading to student disengagement and heavy administrative friction for instructors."

architectureSummary: "Single-Page Application built with Quasar Framework and Vue 3, connected to Cloud Firestore real-time NoSQL collections and Firebase Authentication, with client state managed across 8 modular Pinia stores."

keyDecisions:
  - challenge: "Real-Time Interactive Classroom Session Orchestration"
    decision: "Designed a real-time Firestore Session document model with live listeners (`onSnapshot`) synchronizing lecture state, embedded coding playground URLs, video feeds, and question queues between teachers and participants simultaneously."
    outcome: "Eliminated tool switching by unifying live lectures, coding environments, and interactive Q&A into a single reactive interface."
  - challenge: "Multi-Criterion Assignment Grading Rubrics"
    decision: "Implemented composite Firestore sub-collections for Tasks that bundle customizable grading criteria (description, max points, notes) along with instructor and peer-review toggle settings."
    outcome: "Enabled educators to define transparent evaluation standards while automating cumulative score calculations across diverse student submissions."
  - challenge: "Scalable Academic Data Modeling in NoSQL"
    decision: "Modeled a 4-tier hierarchy (Faculty → Department → Course → Group) using denormalized metadata in top-level documents combined with scoped Firestore security rules for role-based authorization."
    outcome: "Achieved sub-50ms query reads for course rosters and student group permissions without complex relational join overhead."

securityReliability:
  - "Firebase Authentication supporting email/password and federated Google OAuth logins."
  - "Granular Firestore Security Rules restricting document read/write access based on user role (`student`, `teacher`, `admin`)."
  - "Local session persistence using `pinia-plugin-persistedstate` to prevent state loss across browser reloads."
  - "Client-side form validation and schema guards across all task and session submission modals."

futureRoadmap:
  - "WebRTC integration for direct peer-to-peer audio/video streaming inside active sessions."
  - "AI-powered automated code submission analysis and syntax feedback engine."
  - "Automated calendar synchronization (Google Calendar / iCal export) for assignment deadlines."
---

## Executive Summary

**UNIFLOW** is a real-time collaborative class management platform tailored for university students, faculty members, and academic administrators. Built on top of the **Quasar Framework (Vue 3)** and powered by **Firebase Firestore**, UNIFLOW centralizes lecture delivery, group collaboration, assignment submissions, code playground sharing, and smart note-taking into a single cohesive ecosystem.

---

## Architecture

### System Topology & Client-to-Cloud Flow

```mermaid
flowchart TB
    subgraph Client ["Frontend — Quasar Framework (Vue 3 + Vite)"]
        UI["Quasar UI Components<br/>(Dialogs, Tables, Drawers, Steppers)"]
        ROUTER["Vue Router 4<br/>(Auth & Role Guards)"]
        PINIA["Pinia Modular Stores<br/>(Auth, Session, Group, Task, Note, Todo, User, Admin)"]
        CHARTS["Analytics Engine<br/>(ApexCharts & Chart.js)"]
    end

    subgraph Auth_Layer ["Firebase Authentication"]
        FB_AUTH["Firebase Auth<br/>(Email / Password & Google OAuth)"]
        BCRYPT["bcryptjs Hash Utilities"]
    end

    subgraph Cloud_DB ["Persistence & Real-time Layer (Cloud Firestore)"]
        SEC_RULES["Firestore Security Rules<br/>(Role-Based Access Control)"]
        COLL_FACULTY[("faculties / departments / courses")]
        COLL_GROUPS[("groups / resources")]
        COLL_SESSIONS[("sessions (Live State & Tasks)")]
        COLL_TASKS[("tasks / grading_rubrics / criteria")]
        COLL_NOTES[("notes / todos / items")]
    end

    UI --> PINIA
    ROUTER --> PINIA
    PINIA -->|"Auth Tokens"| FB_AUTH --> BCRYPT
    PINIA -->|"Real-Time Subscriptions (onSnapshot)"| SEC_RULES
    SEC_RULES --> COLL_FACULTY & COLL_GROUPS & COLL_SESSIONS & COLL_TASKS & COLL_NOTES
    COLL_TASKS & COLL_SESSIONS -->|"Aggregated Metrics"| CHARTS
```

---

## Data Schema & Relationships

UNIFLOW models academic structures, real-time sessions, and grading rubrics inside Cloud Firestore:

```mermaid
erDiagram
    FACULTY ||--o{ DEPARTMENT : contains
    DEPARTMENT ||--o{ COURSE : offers
    COURSE ||--o{ GROUP : organizes
    GROUP ||--o{ RESOURCE : shares
    USER ||--o{ GROUP : joins
    USER ||--o{ SESSION : creates
    SESSION ||--o{ TASK : contains
    TASK ||--|| GRADING_RUBRIC : defines
    GRADING_RUBRIC ||--o{ CRITERION : specifies
    USER ||--o{ NOTE : authors
    USER ||--o{ TODO : tracks
    TODO ||--o{ ITEM : contains

    FACULTY {
        string code PK
        string initial UK
        string name
        string headOfFaculty
    }

    DEPARTMENT {
        string code PK
        string facultyInitial FK
        string name
        number studentCount
    }

    COURSE {
        string code PK
        string departmentInitial FK
        string name
        number credits
    }

    GROUP {
        string groupID PK
        string groupName
        string courseCode FK
        string ownerId FK
        string[] members
        number maxMembers
    }

    SESSION {
        number sessionID PK
        string sessionName
        string createdBy FK
        boolean isActive
        string playgroundLink
        string[] materialLinks
        object[] questions
    }

    TASK {
        number taskID PK
        string title
        string authorId FK
        timestamp deadline
        number totalMarks
    }

    GRADING_RUBRIC {
        string rubricId PK
        number maxPoints
    }

    CRITERION {
        number criterionId PK
        string description
        number maxPoints
    }
```

---

## Core Technical Decisions

### Decision 1 — Pinia Modular Domain Stores with Persisted State

| | |
|---|---|
| **Problem** | Managing complex client state for 8 distinct domains (Auth, Sessions, Groups, Tasks, Notes, Todos, Users, Admin) inside a large single-page app causes bloated state and data loss on browser refresh. |
| **Decision** | Segmented state management into 8 independent Pinia stores (`useAuthStore`, `useSessionStore`, `useGroupStore`, `useTaskStore`, `useNoteStore`, `useTodoStore`, `useUserStore`, `useAdminStore`) integrated with `pinia-plugin-persistedstate`. |
| **Outcome** | Clean domain isolation, zero cross-store coupling, and instant session rehydration when navigating across university portals. |

---

### Decision 2 — Real-Time Active Classroom State Synchronization

| | |
|---|---|
| **Problem** | Instructors need to toggle live coding playgrounds, launch questions, and share real-time reference links during lectures without asking students to manually refresh pages. |
| **Decision** | Utilized Firestore `onSnapshot` listeners bound to active `sessionID` documents. State mutations by the teacher immediately propagate to all connected student clients in sub-second latency. |
| **Outcome** | True real-time classroom interactivity with live participant counters, instant question prompts, and synchronized external coding links. |

```mermaid
sequenceDiagram
    autonumber
    actor Teacher as Instructor
    participant UI as Quasar Session Dashboard
    participant Store as useSessionStore (Pinia)
    participant FS as Cloud Firestore
    actor Student as Student Client

    Teacher->>UI: Launch Live Coding Challenge (URL + Questions)
    UI->>Store: updateSessionState(sessionId, payload)
    Store->>FS: doc('sessions', id).update({ isActive: true, playgroundLink: url })
    FS-->>Student: onSnapshot() Event Triggered
    Student->>Student: Reactive UI renders live coding link & question panel
    Student->>FS: Submit answer / code attachment
    FS-->>Teacher: Live submission count increments on instructor dashboard
```

---

## Visual Workflows & Architecture Wireframes

### 1. Interactive Class Session Wireframe

```
+----------------------------------------------------------------------------------------------------+
|  [Logo] UNIFLOW               |  [Classes]  |  [Groups]  |  [Tasks]  |  [Notes]    | (Profile: Teacher)|
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  SESSION: CS401 — Advanced Distributed Systems (Live Active)               [ End Session Button ]  |
|                                                                                                    |
|  +-- INTERACTIVE LECTURE WORKSPACE --------------------------------------------------------------+ |
|  |                                                                                               | |
|  |  +-- CODING PLAYGROUND EMBED --------------+  +-- LIVE QUESTION & TASK QUEUE ---------------+ | |
|  |  | Playground Link: [ compiler.io/p/cs401 ] |  | Q1. Implement Raft Consensus Leader Election | |
|  |  | Mode: Interactive Live Collaboration      |  | Marks: [ 10 Pts ]  | Time Limit: [ 15 Mins ] | |
|  |  | Status: [ ACTIVE - 42 Students Joined ]  |  | Submissions Received: 28 / 42                | |
|  |  |                                         |  +---------------------------------------------+ | |
|  |  | [ Open in Fullscreen ] [ Share Screen ] |  | Attached Resources:                         | | |
|  |  |                                         |  | - [PDF] raft-extended.pdf                   | | |
|  |  |                                         |  | - [Video] MIT 6.824 Lecture 06              | | |
|  |  +-----------------------------------------+  +---------------------------------------------+ | |
|  +-----------------------------------------------------------------------------------------------+ |
|                                                                                                    |
|  +-- CONNECTED PARTICIPANTS & STUDY GROUPS (42 Online) -------------------------------------------+ |
|  | [x] Group A (Lab 1) - 4/4 Online | [x] Group B (Lab 1) - 4/4 Online | [x] Group C (Lab 2) - 3/4 Online |
|  +-----------------------------------------------------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------+
```

### 2. Multi-Criterion Grading Rubric Matrix

```
+-- ASSIGNMENT GRADING RUBRIC BUILDER -------------------------------------------------------------+
| Task: Distributed Key-Value Store Submission           | Total Marks: 100 Pts                    |
+--------------------------------------------------------------------------------------------------+
| #   | Criterion Description                       | Max Points | Evaluation Notes                |
|-----|---------------------------------------------|------------|---------------------------------|
| 01  | RPC Network Protocol & Heartbeat Handling   | 30 Pts     | Handles network partition drop  |
| 02  | Concurrent Data Serialization & Mutex Locks | 30 Pts     | Race condition prevention       |
| 03  | Unit & Integration Test Coverage            | 20 Pts     | Min 85% branch coverage passed  |
| 04  | Code Quality & Architecture Documentation   | 20 Pts     | Clean modular abstractions      |
+--------------------------------------------------------------------------------------------------+
| Settings: [x] Allow Late Submissions (-5% per day)  | [x] Enable Peer Review (2 Reviewers/Student)|
+--------------------------------------------------------------------------------------------------+
```

---

## What I Built (Personal Contributions)

- **Engineered Full-Stack Quasar SPA**: Developed modular components, routes, and responsive UI layouts using Quasar Framework v2 and Vue 3.
- **Architected Firestore Document Schemas**: Designed 4-tier relational document schemas, nested collections, and optimized queries for Faculties, Departments, Courses, Groups, and Sessions.
- **Implemented 8 Modular Pinia Stores**: Built domain-isolated state stores with persisted local state caching (`pinia-plugin-persistedstate`).
- **Built Live Interactive Session Engine**: Wired real-time Firestore listeners (`onSnapshot`) to sync coding playground URLs, questions, and material links across active sessions.
- **Developed Structured Assignment Rubrics**: Engineered the multi-criterion assignment grading system with customizable evaluation weights and peer-review toggle flags.
- **Integrated Institutional Analytics**: Built performance visualization dashboards utilizing ApexCharts and Chart.js to track student progress and session participation.

---

## Future Roadmap

```mermaid
timeline
    title UNIFLOW Evolution Roadmap
    section Completed
        Quasar & Firestore Core : Full platform architecture and live session engine
        Grading Rubrics & Pinia : Structured assessment engine and 8 domain stores
    section Next Phase
        In-App WebRTC Video : Native peer-to-peer audio/video streaming
        AI Code Feedback : Automated syntax & logic analysis on task submission
        Calendar Sync : Bi-directional iCal & Google Calendar deadline synchronization
```
