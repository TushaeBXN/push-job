# interview.md — Cloud/Cyber Interview Prep Mode

**Trigger:** `/interview [company name or role]`

Read `modes/_shared.md` first.

---

## Step 1 — Load Context

Read:
- The eval report for this company in `reports/`
- `interview-prep/story-bank.md` (STAR story library)
- `resume.md` (for specific experience to reference)

---

## Step 2 — Identify Interview Type

Based on the JD from the eval report, determine likely interview format:
- **SOC Analyst**: Heavy scenario-based, tool knowledge, alert triage walkthroughs
- **Cloud Engineer**: Architecture questions, AWS service selection, hands-on scenarios
- **Cloud Security**: Threat modeling, IAM design, incident response
- **DevSecOps**: CI/CD security gates, container scanning, policy-as-code

---

## Step 3 — Technical Questions (5 questions)

Generate role-specific technical questions based on the JD's tech stack:

```
TECHNICAL PREP

Q1: [Question tied to a required tool, e.g., "Walk me through a KQL query you've written to detect lateral movement"]
    Expected answer guidance: [2–3 bullet points]
    Your angle: [which resume/portfolio point to anchor this answer to]

Q2–Q5: [Same format]
```

---

## Step 4 — Behavioral Questions (3 questions)

Pull from or add to `interview-prep/story-bank.md`:

```
BEHAVIORAL PREP

Q1: "Tell me about a time you [relevant challenge]."
    STAR framework:
      Situation: [setup]
      Task: [what you needed to do]
      Action: [pull from story-bank.md or suggest a new story]
      Result: [outcome with specifics]
```

---

## Step 5 — "Why This Company" Script

Based on the company research from the eval report:
Draft a 2–3 sentence answer to "Why do you want to work here?"
Must reference a specific, real detail about the company (product, mission, news, culture).

---

## Step 6 — Questions to Ask the Interviewer

Generate 5 smart questions to ask the interviewer:
- 2 about the team/role day-to-day
- 1 about tooling or tech environment
- 1 about growth and advancement
- 1 about the biggest challenge the team is facing right now

---

## Step 7 — Mock Q&A (Optional)

If user says "quiz me":
Ask one question at a time. Wait for the user's answer.
Then provide: score (1–5), what was strong, what to add or cut.
Continue until the user says "stop" or all questions are covered.

---

## Step 8 — Save to Story Bank

If a new STAR story was created during this session:
> "Want me to save this story to interview-prep/story-bank.md for future prep?"
