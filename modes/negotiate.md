# negotiate.md — Salary Negotiation Mode

**Trigger:** `/negotiate [offer amount]` or `/negotiate`

Read `modes/_shared.md` first.

---

## Step 1 — Load Context

Read:
- `config/profile.yml` (minimum salary, target salary)
- The eval report for the company making the offer (from `reports/`)
- Any notes in `data/applications.md` for this company

---

## Step 2 — Assess the Offer

Input the offer details:
- Base salary
- Bonus structure (if any)
- Equity / RSUs (if any)
- Benefits (healthcare, 401k match, PTO)
- Remote / hybrid policy
- Start date flexibility

Compare against the user's minimums from `config/profile.yml`.

---

## Step 3 — Market Rate Context

Use WebSearch to find current market rates for:
- The role title in the user's target location (from profile.yml) and remote
- The company's typical comp range (Levels.fyi, Glassdoor, LinkedIn Salary)

Output:
```
OFFER ANALYSIS
  Their offer:       $X base + [bonus/equity]
  Your minimum:      $X (from profile.yml)
  Your target:       $X
  Market range (role + location): $X – $X
  Market range (remote): $X – $X

  Verdict: [Below market / At market / Above market]
  Negotiation headroom: [likely X–Y% increase possible]
```

---

## Step 4 — Negotiation Strategy

Based on the analysis, recommend one of these approaches:

**Counter-offer** (offer is below target, market supports it):
- Recommend counter amount
- Draft counter-offer script

**Accept with conditions** (offer meets minimum but below target):
- Script to accept while negotiating start date, remote flexibility, or signing bonus

**Accept** (offer meets or exceeds target):
- Confirm and draft acceptance language

---

## Step 5 — Draft Scripts

### Counter-Offer Script
```
"Thank you so much for the offer — I'm genuinely excited about [specific thing].

Based on my research into the market rate for [role] and the value I bring [specific skill/cert],
I was hoping we could get to [$X]. Is there flexibility there?

[Optional: "If base is fixed, I'd also consider a signing bonus or accelerated first review."]"
```

Rules:
- One counter only — pick a number and stick to it
- Never apologize for negotiating
- Always anchor to market data or specific value, not personal need
- If they say no, have an acceptance ready — don't leave the offer on the table

---

## Step 6 — Update Tracker

After negotiation resolves, update `data/applications.md`:
- Status → `Offer` (or `Rejected` if rescinded — rare but note if counter was aggressive)
- Notes field → final agreed comp
