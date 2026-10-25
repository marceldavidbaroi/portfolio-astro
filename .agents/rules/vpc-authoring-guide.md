# Value Proposition Canvas (VPC) Authoring Guide for External AI

Use this prompt and format guide when prompting an external AI (like ChatGPT, Claude, or Gemini) to extract or structure a **Value Proposition Canvas (Strategyzer Model)** for projects in this portfolio.

---

## 1. Prompt Template to Give Your External AI

Copy and paste the prompt below into your external AI, along with your project notes, architecture doc, or PRD:

```markdown
You are a senior product and software systems architect. 
Please analyze the following project documentation and generate a complete Strategyzer Value Proposition Canvas.

Output the result strictly in the YAML frontmatter format shown below so it can be pasted directly into my Astro portfolio markdown file under `product.valueProposition.canvas`.

### Requirements:
1. Target Customer: Specify the exact target persona(s) (e.g., "Multi-Role: App Users, Host Devs & Support Agents").
2. Value Proposition Title: State the exact product name and tagline.
3. Customer Profile (Right Side / The Market):
   - customerJobs: 5–9 clear functional, social, or personal jobs the user is trying to accomplish.
   - pains: 5–12 acute frustrations, risks, bad outcomes, or bottlenecks.
   - gains: 5–12 positive outcomes, concrete efficiencies, or desired benefits.
4. Value Map (Left Side / The Solution):
   - productsAndServices: 4–6 core systems, engines, UI surfaces, or packages delivered.
   - painRelievers: 4–6 specific architectural features that kill the listed pains.
   - gainCreators: 4–6 specific technical implementations that deliver outsized gains.
5. Notes Format: Every item in each sector must have a punchy `title` (2–4 words) and a concise `note` (1–2 sentences explaining what it is).

### Output YAML Schema:
```yaml
product:
  summary: "1-2 sentence executive overview of what was built and shipped."
  tagline: "Punchy one-liner value statement."
  problem: "Core problem statement explaining why the old way hurt."
  valueProposition:
    targetCustomer: "Target Persona / Customer Segment"
    showCanvas: true
    items:
      - painTitle: "Top Pain 1"
        painDescription: "Description of the pain before the solution."
        gainTitle: "Architectural Gain 1"
        gainDescription: "How the solution resolves this pain."
      - painTitle: "Top Pain 2"
        painDescription: "Description of the second pain."
        gainTitle: "Architectural Gain 2"
        gainDescription: "How the solution resolves this pain."
    canvas:
      labels:
        title: "The Value Proposition Canvas"
        valueProposition: "Project Name & System Scope"
        customerSegment: "Customer Segment / Personas"
      customerJobs:
        - title: "Short Title"
          note: "Explanation of what the customer is trying to get done."
      pains:
        - title: "Short Title"
          note: "Explanation of the acute pain or obstacle."
      gains:
        - title: "Short Title"
          note: "Explanation of the desired gain or outcome."
      productsAndServices:
        - title: "Short Title"
          note: "Explanation of the feature, package, or service."
      painRelievers:
        - title: "Short Title"
          note: "Explanation of how the architecture relieves specific customer pains."
      gainCreators:
        - title: "Short Title"
          note: "Explanation of how the architecture creates specific customer gains."
```

Here is my project documentation:
[PASTE YOUR PROJECT NOTES / PRD HERE]
```

---

## 2. Where to Place the Output in Your Project File

Once the AI generates the YAML:

1. Open your project file in `src/content/projects/[index]-[slug].md` (e.g. `02-service-desk.md`).
2. Paste the `product:` block directly into the frontmatter.
3. Make sure `showCanvas: true` is set under `valueProposition`.
4. Run `npx astro sync` or `npm run dev`.

The interactive canvas diagram will automatically render with clickable sticky notes on the project's page under **Product Context**.
