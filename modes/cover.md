# cover.md — Cover Letter Generation Mode

**Trigger:** `/cover [URL or company name]`

Read `modes/_shared.md` first.
This mode does not exist in career-ops. It is a core differentiator of Push Job.

---

## Step 1 — Gather Source Materials

Read in full:
- `resume.md` (experience, skills, background)
- `portfolio.md` (proof points, GitHub projects)
- The most recent eval report in `reports/` matching this company/role

If no eval report exists, run `modes/evaluate.md` first, then return here.

---

## Step 2 — Research the Company

Use WebSearch to find:
- Recent company news (last 30 days)
- Mission statement and values
- Current hiring priorities or team focus areas
- Tone of their public-facing content (casual vs. formal)
- Hiring manager name (if findable via LinkedIn/job posting)

Use Playwright to load the job posting and careers page for additional signals.

---

## Step 3 — Draft the Cover Letter

Structure (4 paragraphs max, ~300 words total):

### Opening — Specific Hook
Lead with something real and current about THIS company — a product launch, a security incident
they responded to, a recent mission statement quote, or a team expansion.

Do NOT open with:
- "I am writing to express my interest in..."
- "I have always been passionate about..."
- "I came across your job posting..."

Example opening pattern:
> "[Company] just [did X]. That's the kind of [initiative/mission/problem] that made me stop scrolling."

### Body 1 — Most Relevant Experience
The single most compelling match between the user's background and this specific role.
Tie to archetype from `modes/_shared.md`. Be concrete.

### Body 2 — Proof Point with Metric
One specific project or achievement from `portfolio.md` with a measurable outcome.
Format: "[I/My project] [did X], resulting in [Y outcome]."
If no metric exists, use a clear demonstration of competence instead.

### Body 3 — Forward-Looking Fit
What excites the user about this specific company RIGHT NOW.
What they'd focus on in the first 30 days (based on the JD's top priorities).
Keep it specific — generic enthusiasm is worse than silence.

### Close — Low-Friction CTA
One sentence. No begging. Project confidence.
Example: "I'd welcome a quick conversation to go deeper on [specific thing]."

---

## Cover Letter Rules

1. No "I am writing to express my interest" openers — hard rule
2. Max 4 paragraphs, target 280–320 words
3. Must reference at least one specific, real, verifiable detail about the company
4. Match tone to company culture:
   - Startup / security boutique: direct, slightly bold, first-person energy
   - Enterprise / defense: professional, precise, credential-forward
5. Never fabricate metrics — use portfolio.md or omit
6. Never use the word "passionate" — show it, don't say it
7. Reference the role title exactly as written in the JD

---

## Step 4 — Output and Review

Display the full cover letter and ask:
> "Here's the draft. Want me to adjust the tone, swap the proof point, or update the opening hook? Say 'generate PDF' when ready."

---

## Step 5 — Generate PDF

When user approves, inject cover letter into `templates/cover.html` and run:
```
node scripts/generate-pdf.mjs templates/cover.html output/{company-slug}-cover-{date}.pdf
```

Confirm: "Cover letter PDF saved to `output/{company-slug}-cover-{date}.pdf`"

---

## Step 6 — Update Tracker

Update the TSV row for this application:
- Set Cover column to ✅
- Run `npm run merge` or prompt user to run it
