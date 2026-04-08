# Push Job

![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square)
![Playwright](https://img.shields.io/badge/Playwright-1.44%2B-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

**AI-powered job search pipeline for cloud, cybersecurity, and tech roles.**

Built with Claude Code. 15 modes. Cover letter generation, cert gap analysis, follow-up scheduling,
portal scanning across 60+ companies, and a 12-dimension scoring system — all running locally from
your terminal.

Before you start, make sure you have the following installed on your machine:

Node.js (Version 18 or higher is recommended)

Git

Claude Code (Since this tool is built to run specifically with the claude CLI)

Step-by-Step Installation

Clone the Repository

Open your terminal or command prompt and run:

Bash



git clone https://github.com/TushaeBXN/push-job.git

cd push-job

Install Dependencies

Install the necessary Node modules and the Playwright browser (which the tool uses to scan job portals):

Bash

npm install

npx playwright install chromium

Set Up Your Profile

You need to create your personal configuration files. The repository includes examples to help you get started:

Copy config/profile.example.yml to config/profile.yml and fill in your details (target roles, minimum salary, etc.).

Copy templates/portals.example.yml to templates/portals.yml.

Launch the Tool

Since this is designed as a "brain" for Claude Code, you launch it by starting a Claude session inside the folder:

Bash

claude

Once launched, Claude will detect the .claude/skills and CLAUDE.md files. It should automatically walk you through the remaining onboarding steps to verify your resume and portfolio files.

Available Commands

Once you are inside the claude session, you can use these custom slash commands to manage your job search:

CommandAction/scanScans 60+ job portals for new matching roles./evaluate [URL]Scores a job posting based on your 12-dimension profile./cover [URL]Generates a tailored cover letter for that specific role./resume [URL]Creates an ATS-optimized resume tailored to the job description./briefGives you a daily snapshot of your application pipeline.

---

## Push Job vs. career-ops

| Feature | career-ops | Push Job |
|---------|-----------|---------|
| Cover letter generation | ❌ | ✅ |
| Cert gap analysis | ❌ | ✅ |
| Follow-up scheduler | ❌ | ✅ |
| Daily brief mode | ❌ | ✅ |
| GitHub portfolio sync | ❌ | ✅ |
| Scoring dimensions | 10 | **12** |
| Portal focus | AI/SaaS | **Cloud + Cyber + Tech** |
| Stack | Go + Node + Shell | **Node only** |
| Cover letter template | ❌ | ✅ |
| Defense/GovCloud portals | ❌ | ✅ |
| Cert-to-role unlock matrix | ❌ | ✅ |

---

## Quick Start

```bash
# Clone
git clone https://github.com/TushaeThomas/push-job.git
cd push-job

# Install
npm install
npx playwright install chromium

# Launch
claude
```

Claude will detect missing personal files and walk you through first-run onboarding automatically.

---

## Commands

| Command | Description |
|---------|-------------|
| `/evaluate [URL]` | Score a job posting across 12 dimensions + cert gap analysis |
| `/cover [URL]` | Generate a tailored cover letter (company-researched, no "I am writing to...") |
| `/resume [URL]` | ATS-optimized resume tailored to a specific JD + PDF generation |
| `/scan` | Scan 60+ cloud/cyber portals for new matching roles |
| `/batch pipeline` | Evaluate all pending URLs in parallel |
| `/tracker` | View full application pipeline by status |
| `/interview [company]` | Role-specific technical + behavioral prep with mock Q&A |
| `/certs` | Cert gap analysis across all Tier 1 applications |
| `/followup` | Check overdue follow-ups and draft outreach emails |
| `/brief` | Daily pipeline snapshot + one recommended action |
| `/negotiate [amount]` | Salary negotiation scripts anchored to market data |
| `/outreach [company]` | LinkedIn/cold email drafts |
| `/portfolio-sync` | Sync GitHub repos into portfolio.md as proof points |
| `/check` | Pipeline health check (files, tracker integrity, status validation) |

---

## 12-Dimension Scoring System

Every job is scored as a weighted composite (0–10):

| # | Dimension | Weight | What It Measures |
|---|-----------|--------|-----------------|
| 1 | Role match | 12% | JD title alignment with target roles |
| 2 | Tech stack | 12% | AWS, Azure, KQL, Sentinel, AD, honeynet overlap |
| 3 | ATS keyword match | 10% | JD keywords present in your resume |
| 4 | Cert alignment | 10% | Required/preferred certs vs. your tier profile |
| 5 | Compensation fit | 10% | Comp vs. your minimum (from profile.yml) |
| 6 | Growth trajectory | 8% | Will this role accelerate your path? |
| 7 | Culture/mission | 8% | Company mission alignment |
| 8 | Location/remote | 8% | Remote-friendly or target city match |
| 9 | Portfolio relevance | 8% | GitHub proof points matching the JD |
| 10 | Interview probability | 6% | Likelihood of passing ATS + screen |
| 11 | Urgency | 4% | Expiring posting, hot company |
| 12 | Network/referral | 4% | Warm connection or community overlap |

**Score tiers:**

| Score | Tier | Action |
|-------|------|--------|
| 8.0+ | Apply Now | Tailored resume + cover letter today |
| 6.0–7.9 | Apply/Tailor | Polish resume, generate cover letter |
| 4.0–5.9 | Low Priority | Apply only if the week is slow |
| < 4.0 | Skip | Log and move on |

---

## Cert Tier Profile

The scoring engine uses a tiered cert profile to assess alignment and prioritize study:

**Tier 1 — In Progress:** AWS CLF-C02 · CompTIA CySA+
**Tier 2 — Next:** AWS SAA-C03 · Security+ · AZ-500
**Tier 3 — Long-term:** AWS SAP-C02 · CISSP · CCSP

Run `/certs` to see which certs appear most in your active applications.

---

## Portal Coverage

**60+ companies across:**

| Category | Companies |
|----------|-----------|
| Cloud Providers | AWS, Azure, GCP, Cloudflare, Fastly, DigitalOcean, Akamai |
| Cloud MSPs | Rackspace, 2nd Watch, Logicworks, Presidio |
| Cybersecurity (EDR/XDR) | CrowdStrike, SentinelOne, Huntress, Rapid7, Cybereason |
| Network/Identity | Palo Alto Networks, Okta, Zscaler, Fortinet, Tenable |
| SIEM/SOC | Splunk, Elastic, Devo, Sumo Logic, Arctic Wolf, Exabeam |
| DevSecOps/CSPM | Wiz, Snyk, HashiCorp, Lacework, Orca Security, Aqua |
| Defense/GovCloud | Booz Allen, SAIC, Leidos, MITRE, ManTech, GDIT |
| Enterprise | Microsoft, IBM, Accenture, Deloitte, KPMG |
| AI/Automation | Anthropic, Databricks, Weights & Biases, Scale AI |
| Fintech | Bank of America, Wells Fargo, LendingTree |
| Job Boards | LinkedIn, Wellfound, Dice, RemoteOK, CyberSecJobs |

---

## Project Structure

```
push-job/
├── CLAUDE.md                    ← Agent brain (scoring, routing, onboarding)
├── README.md
├── package.json
├── .gitignore
├── resume.md                    ← Your resume (gitignored)
├── portfolio.md                 ← GitHub portfolio (gitignored)
├── config/
│   ├── profile.example.yml      ← Copy to profile.yml and fill in
│   └── scoring.yml              ← Tweak scoring weights
├── modes/
│   ├── _shared.md               ← Archetypes, cert tiers, conventions
│   ├── evaluate.md              ← 12-dimension evaluation
│   ├── cover.md                 ← Cover letter generation
│   ├── resume-mode.md           ← ATS resume tailoring + PDF
│   ├── scan.md                  ← Portal scanning
│   ├── batch.md                 ← Parallel batch evaluation
│   ├── tracker.md               ← Application status
│   ├── interview.md             ← Interview prep
│   ├── certs.md                 ← Cert gap analysis
│   ├── followup.md              ← Follow-up scheduler
│   ├── brief.md                 ← Daily pipeline brief
│   ├── negotiate.md             ← Salary negotiation
│   ├── outreach.md              ← LinkedIn/cold outreach
│   └── portfolio-sync.md        ← GitHub portfolio sync
├── templates/
│   ├── resume.html              ← ATS-optimized HTML resume
│   ├── cover.html               ← Cover letter template
│   ├── portals.example.yml      ← 60+ companies (copy to portals.yml)
│   └── states.yml               ← Canonical application statuses
├── scripts/
│   ├── generate-pdf.mjs         ← Playwright PDF generator
│   ├── tracker-merge.mjs        ← Dedup + merge TSV additions
│   └── pipeline-check.mjs       ← Health checks
├── data/                        ← gitignored (your personal data)
├── reports/                     ← gitignored (per-job eval reports)
├── output/                      ← gitignored (generated PDFs)
├── interview-prep/
│   └── story-bank.md            ← STAR story library
├── examples/
│   └── resume.example.md        ← Resume format reference
├── docs/
│   └── SETUP.md                 ← Full setup guide
└── .claude/skills/push-job/
    └── push-job.md              ← Claude Code skill definition
```

---

## Philosophy

**Quality over quantity.**

Push Job is designed to produce 3–5 strong, tailored applications per week — not 50
spray-and-pray submissions. Every application has a researched cover letter, a keyword-optimized
resume, and a clear reason to apply.

The agent prepares. You review. You submit.

---

## Built By

**Tushae Thomas (Brian)**
AWS re/Start Student · Azure SOC Practitioner · Cybersecurity Builder

- Background: Microsoft Sentinel, KQL, Active Directory, honeynet-based threat detection
- Pursuing: AWS Cloud Practitioner (CLF-C02) · CompTIA CySA+
- Target: Cloud Engineer | SOC Analyst | DevSecOps | Cloud Security Engineer
- Location: Charlotte, NC
- Brand: BER/TMG
- GitHub: [TushaeThomas](https://github.com/TushaeThomas)

---

## Topics

`job-search` `claude-code` `cloud` `cybersecurity` `career` `ai-agent` `open-source`
`devsecops` `soc-analyst` `aws` `azure` `playwright`

---

## License

MIT — use it, fork it, build on it.
