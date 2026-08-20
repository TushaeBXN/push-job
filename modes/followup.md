# followup.md — Follow-Up Scheduler Mode

**Trigger:** `/followup`

Read `modes/_shared.md` first.
This mode does not exist in career-ops. It is a core differentiator of Push Job.

---

## Step 1 — Load Follow-Up Data

Read `data/followups.md` and `data/applications.md`.
Get today's date.

---

## Step 2 — Calculate Days Since Application

For all rows in `data/applications.md` where Status is `Applied` or `Followed Up`:

```
Company          | Role                 | Applied     | Days Ago | FollowUp Date | Status
-----------------|----------------------|-------------|----------|---------------|----------
[company]        | [role]               | [date]      | X days   | [date]        | [flag]
...
```

Flag categories:
- **OVERDUE** — 14+ days since application with no response
- **DUE TODAY** — FollowUp date is today
- **COMING UP** — FollowUp date is 3–6 days from now

---

## Step 3 — Display Follow-Up Dashboard

```
=== FOLLOW-UP DASHBOARD — [DATE] ===

OVERDUE (14+ days, no response)
  🔴 [Company] — [Role] — Applied [X days ago]
     → Consider final follow-up or mark Discarded

DUE TODAY
  🟡 [Company] — [Role] — Applied [X days ago]
     → Draft below

COMING UP (3–6 days)
  🟢 [Company] — [Role] — Follow up on [date]
===
```

---

## Step 4 — Generate Follow-Up Emails

For each "DUE TODAY" entry, draft a follow-up email:

```
--- FOLLOW-UP: [Company] — [Role] ---

Subject: Following Up — [Role Title] Application

Hi [Hiring Manager name if known, otherwise "Hiring Team"],

I applied for the [Role Title] position on [application date] and wanted to follow up briefly.
I'm still very interested in the role and would welcome the chance to connect.

[One sentence about what specifically excites you about this company or role — from eval report.]

Thanks for your time — I know hiring is a busy process.

[your name from profile.yml]
[LinkedIn URL from profile.yml]
```

Rules:
- Max 3 sentences in body
- No groveling ("I hope I'm not bothering you...")
- Project confidence, not desperation
- Personalize with one real detail from the eval report
- NEVER send without the user's review

---

## Step 5 — Handle Overdue Entries

For each OVERDUE entry, suggest:

> "[Company] is 14+ days out with no response. Options:
> 1. Send final follow-up (I'll draft it)
> 2. Mark as Discarded and move on
> 3. Keep waiting (not recommended)"

If "final follow-up" chosen, draft with slightly more direct tone.
If "Discarded" chosen, update `data/applications.md` row.

---

## Step 6 — Update Follow-Up Dates

For all "DUE TODAY" entries where a follow-up was drafted:
Update FollowUp date in `data/applications.md` to +7 days from today.
Update Status to `Followed Up`.

Update `data/followups.md` with the full log of today's follow-up actions.
