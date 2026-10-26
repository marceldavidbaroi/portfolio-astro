# Project Content Specifications

Every project in `src/content/projects/<order>-<slug>/` requires exactly three data files to be rendered in the portfolio:

```text
src/content/projects/<order>-<slug>/
├── project.json    # Core metadata, CV card bullet, ownership, tech stack, and key decisions
├── vpc.json        # Strategyzer Value Proposition Canvas (jobs, pains, gains, relievers)
└── body.json       # Appendix content blocks (prose, tables, mermaid diagrams, code snippets)
```

---

## 1. `project.json`

This file is validated by the Astro content collection schema (`src/content.config.ts`). It drives both the project card summary on `/work` and the case study page at `/work/<slug>`.

### Full Structure & Schema

```json
{
  "id": "01",
  "title": "Project Title",
  "subtitle": "Short one-sentence summary of the product.",
  "description": "Accomplished [X] as measured by [Y], by doing [Z]. (Google XYZ CV bullet format)",
  "chip": "Enterprise ERP & SaaS",
  "order": 1,
  "featured": true,
  "platformType": "desktop",

  "role": "Lead Framework & Migration Engineer",
  "timeline": "2025 — Present",
  "status": "Active Production",
  "classification": "🔒 Proprietary Enterprise IP",

  "contribution": {
    "mode": "owner",
    "startedFrom": "scratch",
    "myShare": "lead",
    "label": "Product owner & lead engineer",
    "headline": "Owned architecture and migration across all product domains.",
    "scope": [
      "Subsystem 1",
      "Subsystem 2"
    ],
    "teamSize": 4
  },

  "problem": {
    "statement": "Real user friction or operational problem before this system was built.",
    "evidence": "internal-use",
    "whoHurts": [
      "import-operator",
      "shop-buyer"
    ]
  },

  "benefitMatrix": [
    {
      "persona": "Primary User Role",
      "pain": "The acute pain point",
      "before": "Workflow before the system",
      "after": "Workflow after the system",
      "measure": {
        "metric": "Key Metric Name",
        "from": "Old baseline",
        "to": "New outcome",
        "proof": "designed"
      },
      "attribution": "personal",
      "feature": [
        "Module Name"
      ]
    }
  ],

  "improvements": [
    {
      "area": "Specific Area / Subsystem",
      "before": "Previous problematic state",
      "after": "Improved state",
      "how": "Technical implementation detail",
      "measure": {
        "metric": "Metric name",
        "from": "Previous measure",
        "to": "Improved measure",
        "proof": "measured"
      },
      "userBenefit": "How the user benefits from this improvement",
      "attribution": "personal"
    }
  ],

  "myImpact": [
    {
      "label": "Tenant isolation",
      "value": "100% RLS",
      "attribution": "personal",
      "detail": "Cross-tenant boundary enforced in PostgreSQL engine"
    }
  ],

  "product": {
    "summary": "Executive summary of what was delivered.",
    "problem": "Problem statement for case study narrative.",
    "tagline": "Punchy product tagline.",
    "valueProposition": {
      "targetCustomer": "Target User / Operator",
      "showCanvas": true,
      "items": [
        {
          "painTitle": "Pain Title",
          "painDescription": "Detailed pain description.",
          "gainTitle": "Gain Title",
          "gainDescription": "Detailed gain description."
        }
      ]
    }
  },

  "stack": [
    "Vue 3.5",
    "Supabase",
    "TypeScript",
    "PostgreSQL 15+"
  ],

  "techStack": {
    "frontend": ["Vue 3.5", "Quasar 2", "TypeScript"],
    "mobile_hardware": [],
    "backend": ["Supabase Auth", "PostgreSQL RLS", "RPCs"],
    "database": ["PostgreSQL 15+", "Versioned Migrations"],
    "devops": ["Cloudflare Pages", "Docker"]
  },

  "links": {
    "liveDemo": "",
    "parentPlatform": "",
    "github": "",
    "docs": ""
  },

  "images": [
    "/images/projects/<slug>/dashboard.webp"
  ],

  "visualAssets": {
    "heroMockup": "/images/projects/<slug>/dashboard.webp",
    "screenshots": [
      "/images/projects/<slug>/dashboard.webp"
    ]
  },

  "keyDecisions": [
    {
      "challenge": "Architectural bottleneck or concurrency conflict.",
      "decision": "Chosen pattern or algorithm with trade-offs.",
      "outcome": "Measurable technical outcome."
    }
  ],

  "securityReliability": [
    "Row-Level Security (RLS) enforcement",
    "JWT claim validation in PostgreSQL"
  ],

  "futureRoadmap": [
    "Automated read replica failover"
  ]
}
```

### Key Field Options & Enums

* `platformType`: `"desktop"` | `"mobile"`
* `status`: `"Active Production"` | `"Completed"` | `"Archived"`
* `contribution.mode`: `'owner'` | `'co-owner'` | `'contributor'` | `'maintainer'`
* `contribution.startedFrom`: `'scratch'` | `'existing'`
* `contribution.myShare`: `'lead'` | `'major'` | `'minor'`
* `problem.evidence`: `'interviews'` | `'observed'` | `'internal-use'` | `'assumption'`
* `proof`: `'measured'` | `'estimated'` | `'designed'` | `'qualitative'`
* `attribution`: `'personal'` | `'team'` | `'product'`
* **Rule**: If `contribution.mode != 'owner'` OR `contribution.startedFrom == 'existing'`, `improvements` must contain at least 1 item.

---

## 2. `vpc.json`

This file provides data for the Strategyzer Value Proposition Canvas rendered in the **Product Context** section.

### Full Structure & Schema

```json
{
  "labels": {
    "title": "The Value Proposition Canvas",
    "valueProposition": "System / Product Name",
    "customerSegment": "Target Customer Persona"
  },
  "customerJobs": [
    {
      "title": "Short Job Title",
      "note": "What the user/customer is trying to accomplish."
    }
  ],
  "pains": [
    {
      "title": "Short Pain Title",
      "note": "Risks, bad outcomes, blockers, or friction."
    }
  ],
  "gains": [
    {
      "title": "Short Gain Title",
      "note": "Concrete benefits, efficiencies, or positive outcomes."
    }
  ],
  "productsAndServices": [
    {
      "title": "Feature or Package",
      "note": "Core tool, engine, or workflow delivered."
    }
  ],
  "painRelievers": [
    {
      "title": "Reliever Title",
      "note": "How the architectural implementation kills the customer pain."
    }
  ],
  "gainCreators": [
    {
      "title": "Creator Title",
      "note": "How the solution creates or multiplies customer gains."
    }
  ]
}
```

---

## 3. `body.json`

This file provides typed blocks for the expandable **Technical Appendix** section at the bottom of the case study.

### Full Structure & Supported Blocks

```json
{
  "blocks": [
    {
      "type": "heading",
      "level": 2,
      "text": "Technical Appendix"
    },
    {
      "type": "paragraph",
      "text": "Inline text supporting **bold**, `code`, *italics*, and [links](https://example.com)."
    },
    {
      "type": "table",
      "header": ["Step", "Action", "Outcome"],
      "rows": [
        ["1", "Issue order", "ATP allocated atomically"],
        ["2", "Post ledger", "Double-entry journal updated"]
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        { "text": "First ordered item" },
        { "text": "Second ordered item" }
      ]
    },
    {
      "type": "mermaid",
      "code": "flowchart LR\\n  A[Client] -->|RPC| B[(PostgreSQL)]"
    },
    {
      "type": "code",
      "lang": "typescript",
      "code": "export const config = { timeoutMs: 5000 };"
    },
    {
      "type": "quote",
      "text": "Architecture statement or operational quote."
    },
    {
      "type": "divider"
    },
    {
      "type": "comment",
      "text": "Author-only notes or TODOs (parsed but not rendered in UI)."
    }
  ]
}
```
