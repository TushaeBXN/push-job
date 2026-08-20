# _shared.md — Shared Context for All Modes

Read this file at the start of every mode. It defines archetypes, cert tiers, shared conventions,
and context that every mode relies on.

---

## Job Search Archetypes

Read `config/profile.yml` for the user's target roles. Use these archetypes as the default framework; when evaluating or tailoring for a role, identify which archetype it maps to:

| Archetype         | Target Titles                                               | Key Evidence to Show                              |
|-------------------|-------------------------------------------------------------|---------------------------------------------------|
| SOC Analyst       | SOC Analyst L1/L2, Security Analyst, Threat Analyst        | Sentinel, KQL, honeynet, alert triage             |
| Cloud Engineer    | Cloud Engineer, Jr. Cloud Engineer, Cloud Ops               | AWS (re/Start), IAM, EC2, S3, CLI, Terraform      |
| Cloud Security    | Cloud Security Engineer, Security Engineer, Cloud SecOps    | AWS + Azure + Sentinel + IAM security             |
| DevSecOps         | DevSecOps Engineer, Platform Security, Security SRE         | CI/CD security, IaC, containers, SIEM integration |

---

## Cert Tier Profile

Read the user's current cert tiers from `config/profile.yml` (`certs.tier1`, `certs.tier2`, `certs.tier3`).

Default tiers (override with profile.yml):

**Tier 1 — In Progress**
- AWS CLF-C02 (Cloud Practitioner)
- CompTIA CySA+ (Cybersecurity Analyst)

**Tier 2 — Next 6–12 months**
- AWS SAA-C03 (Solutions Architect Associate)
- CompTIA Security+
- Microsoft AZ-500 (Azure Security Engineer Associate)

**Tier 3 — Long-Term**
- AWS SAP-C02 (Solutions Architect Professional)
- CISSP
- CCSP

---

## Canonical Application Statuses

Use exactly these values — no variations:
`Evaluated` | `Applied` | `Followed Up` | `Responded` | `Interview` | `Offer` | `Rejected` | `Discarded` | `SKIP`

---

## TSV Tracker Format

10 columns, tab-separated, saved to `data/applications.md`:
```
Date\tCompany\tRole\tURL\tScore\tStatus\tResume\tCover\tNotes\tFollowUp
```

- **Date**: ISO 8601 (YYYY-MM-DD)
- **Score**: 0.0–10.0 (weighted composite)
- **Status**: one of the canonical statuses above
- **Resume**: ✅ if tailored resume generated, ❌ if not
- **Cover**: ✅ if cover letter generated, ❌ if not
- **FollowUp**: ISO date of next recommended follow-up, or blank

---

## Report File Naming Convention

`reports/{###}-{company-slug}-{YYYY-MM-DD}.md`

Examples:
- `reports/001-crowdstrike-2026-04-05.md`
- `reports/002-aws-soc-2026-04-06.md`

Number is zero-padded to 3 digits. Check the reports/ directory to find the next number.

---

## Pipeline.md Format

`data/pipeline.md` holds URLs pending evaluation — one per line, optionally annotated:
```
https://example.com/jobs/123  # seen on LinkedIn, looks strong
https://example.com/jobs/456
```

---

## Playwright Usage Rules

- Use Playwright (not WebSearch) to verify job postings are still active
- If a page 404s or shows "This job is no longer available", log `SKIP` and notify user
- Use WebSearch for company research (news, culture, hiring signals)
- Never scrape personal data

---

## Tone Guidelines

- Direct and confident — the user is building a technical career with real experience
- No hedging ("you might want to consider possibly...")
- No filler ("Great question!")
- Acknowledge gaps honestly and frame them as closing fast
- Match cover letter tone to company culture (startup: casual + bold; enterprise: formal + precise)
