# evaluate.md — 12-Dimension Job Evaluation Mode

**Trigger:** `/evaluate [URL]`

Read `modes/_shared.md` first.

---

## Step 1 — Verify Job Is Active

Use Playwright to load the URL. Check for:
- HTTP 200 response
- No "job closed", "position filled", or "no longer available" signals in the page content

If inactive:
> "This posting appears to be closed. Logging as SKIP. Paste a different URL or check the company's careers page."
Write a SKIP row to `batch/tracker-additions/` and stop.

---

## Step 2 — Extract Job Data

From the live posting, extract:
- Company name
- Role title
- Location / remote policy
- Compensation (if stated)
- Tech stack and tools mentioned
- Required certifications
- Preferred certifications
- Years of experience required
- Key responsibilities (top 5)
- Key requirements (top 5)
- Application deadline (if stated)

---

## Step 3 — Read Resume and Portfolio

Read `resume.md` and `portfolio.md` in full. Do not use hardcoded content — always read the files.
If either file is empty/stub, warn: "resume.md is not set up yet. Run `/resume setup` first."

---

## Step 4 — Score All 12 Dimensions

For each dimension, provide:
- Score (0–10)
- One-line rationale

Use weights from `config/scoring.yml`. Calculate weighted composite score.

```
DIMENSION SCORES
  1. Role Match          [score]/10  — [rationale]
  2. Tech Stack          [score]/10  — [rationale]
  3. ATS Keywords        [score]/10  — [rationale]
  4. Cert Alignment      [score]/10  — [rationale]
  5. Compensation        [score]/10  — [rationale]
  6. Growth Trajectory   [score]/10  — [rationale]
  7. Culture/Mission     [score]/10  — [rationale]
  8. Location/Remote     [score]/10  — [rationale]
  9. Portfolio Relevance [score]/10  — [rationale]
 10. Interview Prob.     [score]/10  — [rationale]
 11. Urgency             [score]/10  — [rationale]
 12. Network/Referral    [score]/10  — [rationale]

COMPOSITE SCORE: [X.X]/10 — [Tier Label]
```

---

## Step 5 — Cert Gap Analysis

Cross-reference extracted cert requirements against the user's cert tier profile from `config/profile.yml`:
- List required certs the user already has (or is pursuing)
- List required certs that are gaps
- Estimated time to close each gap
- Whether this is a hard blocker or soft preference

---

## Step 6 — Strengths and Gaps

```
STRENGTHS (3–5 bullets)
  ✅ [specific strength tied to JD requirement]
  ...

GAPS (3–5 bullets)
  ⚠️  [specific gap + how to address or frame it]
  ...
```

---

## Step 7 — Personalization Hooks

From `portfolio.md`, identify 1–3 specific proof points that map directly to JD requirements.
Format: "[Project name] demonstrates [specific skill] because [specific detail]."

---

## Step 8 — Interview Intel

Generate role-specific questions:

```
INTERVIEW PREP
  Technical Questions:
    1. [cloud/cyber question tied to this JD]
    2. [tool-specific question based on tech stack]
    3. [scenario question based on key responsibility]

  Behavioral Questions:
    1. [STAR prompt tied to a strength from Step 6]
    2. [STAR prompt addressing a common challenge in this role]
```

---

## Step 9 — Recommended Action

Based on composite score tier:
- **8.0+**: "Apply now. Tailor resume today, generate cover letter, target submission within 24 hours."
- **6.0–7.9**: "Good fit. Spend 30 minutes tailoring resume. Cover letter recommended."
- **4.0–5.9**: "Low priority. Apply only if this week's pipeline is thin."
- **< 4.0**: "Skip. Not worth the time given current gaps."

---

## Step 10 — Save Report

Write a full markdown report to:
`reports/{###}-{company-slug}-{YYYY-MM-DD}.md`

Include all data from Steps 2–9.

---

## Step 11 — Write TSV Row

Write to `batch/tracker-additions/{company-slug}-{date}.tsv`:
```
{date}\t{company}\t{role}\t{url}\t{score}\tEvaluated\t❌\t❌\t\t{followup-date}
```

Set FollowUp date to 7 days from today.

---

## Step 12 — Prompt for Next Action

> "Evaluation complete. Score: [X.X]/10 ([Tier]).
>
> Want me to generate the tailored resume and cover letter now? (yes / no)"

If yes: invoke `modes/resume-mode.md` then `modes/cover.md` in sequence.
