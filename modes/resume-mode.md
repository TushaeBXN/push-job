# resume-mode.md — ATS Resume Tailoring + PDF Generation

**Trigger:** `/resume [URL or company name]`

Read `modes/_shared.md` first.

---

## Step 1 — Load Source Materials

Read:
- `resume.md` (the master resume)
- The eval report for this company in `reports/` (for JD keywords and gaps)
- `portfolio.md` (for project proof points to surface)

If no eval report exists, run `modes/evaluate.md` first.

---

## Step 2 — ATS Keyword Analysis

From the JD (loaded via Playwright or from the eval report):
1. Extract the top 20 keywords and phrases (tools, certs, job verbs, stack)
2. Check which are already in `resume.md`
3. Flag which are missing but truthfully addable based on the user's actual background

**Keyword gap table:**
```
KEYWORD          | In Resume? | Can Add?
-----------------|------------|--------
[keyword]        | ✅/❌      | ✅/❌
...
```

---

## Step 3 — Tailor Resume Content

Produce a tailored version of `resume.md` for this specific role:

1. **Summary** — rewrite the professional summary to mirror the JD's language and required persona
   (SOC Analyst vs Cloud Engineer vs DevSecOps — pick the archetype from `modes/_shared.md`)

2. **Skills section** — surface the most relevant skills first; move AWS/Azure/Sentinel to the top
   if the role is cloud security, etc.

3. **Experience bullets** — for each experience entry, rewrite 2–3 bullets to:
   - Start with strong action verbs matching JD language
   - Include quantifiable outcomes where possible (numbers, scope, tools)
   - Mirror JD terminology exactly for ATS pass-through

4. **Certifications** — list Tier 1 certs as "In Progress (Expected [date])"
   Do not omit them — "in progress" is credible and signals commitment

5. **Projects** — pull the 1–2 most relevant projects from `portfolio.md` and add/expand them

---

## Step 4 — Output Tailored Resume

Display the full tailored resume as markdown.

> "Here's the tailored version for [Company] — [Role]. Review the changes highlighted below before I generate the PDF. Reply 'generate PDF' or suggest edits."

Show a diff summary:
- Summary rewritten: yes/no
- X bullets updated
- X keywords added
- X skills reordered

---

## Step 5 — Generate PDF

Inject tailored content into `templates/resume.html` and run:
```
node scripts/generate-pdf.mjs templates/resume.html output/{company-slug}-resume-{date}.pdf
```

Confirm: "Resume PDF saved to `output/{company-slug}-resume-{date}.pdf`"

---

## Step 6 — Update Tracker

Update TSV row: set Resume column to ✅
