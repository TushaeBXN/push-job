# portfolio-sync.md — GitHub Portfolio Sync Mode

**Trigger:** `/portfolio-sync`

Read `modes/_shared.md` first.
This mode does not exist in career-ops. It is a core differentiator of Push Job.

---

## Step 1 — Load GitHub Profile

Use Playwright to load: `https://github.com/TushaeThomas`

(If user has a different GitHub username in `config/profile.yml`, use that instead.)

Extract:
- All public repositories (name, description, last updated, primary language, stars)
- Pinned repositories
- README if available on the profile

---

## Step 2 — Evaluate Each Repository

For each public repo, visit its page and extract:
- README content (first 500 words or full if short)
- Technologies used (from README, topics tags, file extensions)
- What problem it solves or what it demonstrates
- Any metrics, outcomes, or highlights mentioned

Prioritize:
1. Pinned repos
2. Repos with READMEs
3. Repos with security/cloud/infra relevance

---

## Step 3 — Map to Target Roles

For each repo, map it to one or more of the user's archetypes from `modes/_shared.md`:

| Repo | Tech | Archetype | Proof Point |
|------|------|-----------|-------------|
| [name] | [stack] | SOC/Cloud/DevSecOps | [specific claim] |

---

## Step 4 — Write portfolio.md

Generate a structured `portfolio.md`:

```markdown
# Portfolio — [name from profile.yml]

Last synced: [date]
GitHub: [github from profile.yml]

---

## [Project Name]
- **Repo:** https://github.com/TushaeThomas/[repo]
- **Stack:** [languages, tools, services]
- **What it does:** [1–2 sentences from README or inferred]
- **Proof point:** [specific achievement, detection, or capability demonstrated]
- **Relevant for:** [SOC Analyst | Cloud Engineer | Cloud Security | DevSecOps]

---
[repeat for each significant repo]
```

---

## Step 5 — Identify Portfolio Gaps

After mapping all repos, compare against archetype requirements from `modes/_shared.md`:

```
PORTFOLIO GAP ANALYSIS

Strong coverage:
  ✅ [archetype] — [repo that covers it]

Gaps:
  ⚠️  Cloud Engineer — no IaC or AWS deployment project visible
  ⚠️  DevSecOps — no CI/CD pipeline or container security project

Quick-win suggestions:
  → Add a README to [repo name] to make [skill] visible
  → Consider publishing your [AWS re/Start project] if appropriate
  → A simple Terraform or CloudFormation lab repo would close the Cloud Engineer gap
```

---

## Step 6 — Save and Confirm

Write the generated content to `portfolio.md`.
Confirm: "portfolio.md updated with X projects. Run `/evaluate [URL]` and these will be used as proof points automatically."

---

## Resync Trigger

Run `/portfolio-sync` anytime to refresh.
The agent will diff the new repo list against the existing `portfolio.md` and add/update entries.
