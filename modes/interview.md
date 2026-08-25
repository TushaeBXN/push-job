# interview.md — Cloud/Cyber Interview Prep Mode

**Trigger:** `/interview [company name or role]`

> **⚡ BIG UPDATE — Aug 25, 2025**
> Interview prep now routes by interview STAGE — not just role type. Before building prep, the agent identifies which type of interview Brian is facing (recruiter screen, hiring manager, panel, executive, or case study) and tailors the entire session to what that specific interviewer is actually evaluating. Generic prep is out.

Read `modes/_shared.md` first.

---

## Step 0 — Identify Interview Stage

Ask: "What stage is this interview — recruiter screen, hiring manager, panel, executive, or case study?"

Then apply the corresponding strategy below before proceeding to technical prep.

---

### Recruiter Screen Strategy
The recruiter is the gatekeeper. They already know Brian can do the job. Their job is to pass him through. Prep must cover:
- **Why this role** — specific reason tied to his career direction and the JD
- **Why this company** — concrete, researched detail (not "I love your mission")
- **Why his skills align** — direct map from his background to the JD requirements
- **Salary** — coach Brian to state a clear number or range. No hedging. Recruiters cannot move forward without this.

Output: 60-second opening pitch, salary framing script, 3 recruiter questions.

---

### Hiring Manager Strategy
The HM is evaluating four things: how Brian adds to the team, how much work it is to onboard him vs. someone else, how well he fits with the existing team, and how fast he'll make impact. Prep must cover:
- **Immediate impact** — what can he do in the first 30/60/90 days
- **Low lift signals** — autonomous, asks smart questions, ramps fast
- **Team fit** — collaborative, not territorial, lifts others
- **Specific contribution** — tie his skills to visible gaps in the JD or team

Output: 3 targeted STAR stories, 90-day impact pitch, 4 smart HM-level questions.

---

### Panel Interview Strategy
Panel interviews are almost always a culture assessment by multiple departments. Assessors are checking for collaboration, empathy for other departments' pain points, accountability, and contribution to what the org is building. The prep question Brian must answer first: *"What stories could I tell that would make me want to work with me?"*
- **Cross-functional stories** — worked across teams, resolved tension, supported another dept's goals
- **Accountability** — something went wrong and he owned it
- **Culture add** — makes the people around him better

Output: 4 cross-functional STAR stories, 3 accountability examples, questions tailored to each likely panel department.

---

### Executive Interview Strategy
Executives think in business cases, not job descriptions. Brian must communicate the business reason behind what his department does — not just the tasks. The key shift: instead of "I value X, here's an example," say "I value X *because* of the business impact it creates — specifically [business case]" and tie it to research on the organization or that executive's priorities.
- **Business case framing** — for every example, explain the WHY behind the metric
- **Strategic alignment** — show he understands where the company is going, not just where it is
- **Executive-level questions** — show business acumen, not just role curiosity

Output: 3 executive-framed examples with business case language, a company/leadership research brief, 3 executive-level questions.

---

### Case Study Strategy
The story matters less than what it reveals. Assessors want to see: aptitude with systems and frameworks, thoroughness and structure, and whether the chosen example aligns with where the company is *going* — not where it currently is (which requires research).
- **Case selection** — choose the strongest example that aligns with the company's direction
- **Structure** — context, challenge, approach, systems used, outcome, what you'd do differently
- **Forward alignment** — tie to where the company is headed, not its current state

Output: a structured case study template, what assessors are actually evaluating, research questions Brian should answer before the interview.

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
