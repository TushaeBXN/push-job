# Push Job

## ⚡ BIG UPDATE — Aug 25, 2025

**Two upgrades shipping today:**

**1. `/resume` → Gap Disclosure step**
Before rewriting your resume, Push Job now asks you — in your own words — what you've actually done that covers the missing keywords. Use your phone's dictation feature or type it out. Both tools can finish the job. Only real experience gets added, so your resume passes ATS on context — not keyword stuffing that gets filtered out anyway.

**2. New command: `/gigs` — FU Money Mode**
FU money doesn't come from side hustles. Run `/gigs` and Push Job audits your resume for every skill that could earn you remote income today — then maps each one to a master list of niche gig platforms and marketplaces, including ones you've probably never heard of. Start adding yourself today.

**3. `/interview` upgraded — Stage-Based Prep**
Generic interview prep is out. The `/interview` mode now identifies which stage you're in — recruiter screen, hiring manager, panel, executive, or case study — and builds everything around what that specific interviewer is actually evaluating. Each stage has a completely different strategy, and now the agent knows the difference.

---

<img width="1254" height="1254" alt="jobpush" src="https://github.com/user-attachments/assets/35d2c270-7228-4ddf-a7c7-6010de4c867d" />

![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square)
![Playwright](https://img.shields.io/badge/Playwright-1.44%2B-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

**Push Job is an AI job search assistant that runs on your computer.**

You tell it what kind of job you want. It scans 60+ company job boards, scores each posting, writes your cover letter, tailors your resume, tracks your applications, and reminds you when to follow up — all from a single chat window.

Runs locally on your machine. Requires a Claude Code subscription — the lowest tier works fine (claude.ai/code).

---

## What It Does

| Task | How it helps |
|------|-------------|
| Find jobs | Scans 60+ company career pages and job boards automatically |
| Score jobs | Rates every posting 0–10 so you know which ones are worth your time |
| Write cover letters | Researches the company, then writes a tailored letter — no generic templates |
| Tailor your resume | Rewrites your resume with keywords from the specific job description |
| Track applications | Keeps a log of everything you've applied to and where each one stands |
| Follow-up reminders | Tells you when it's time to check in and drafts the email for you |
| Interview prep | Generates role-specific questions and drills you with mock Q&A |

---

## Before You Start

You need three things installed on your computer. Node.js and Git are free. Claude Code requires a paid subscription — the lowest tier works fine.

**1. Node.js** (the engine that runs the tool)
- Download it at https://nodejs.org — click the button that says "LTS"
- Run the installer, click through the prompts

**2. Git** (used to download this project)
- Download it at https://git-scm.com/downloads
- Run the installer, leave all settings as default

**3. Claude Code** (the AI chat window the tool runs inside)
- Install it by opening your terminal and running:

```bash
npm install -g @anthropic/claude-code
```

> **What's a terminal?** On Mac: press `Cmd + Space`, type `Terminal`, hit Enter. On Windows: search for `Command Prompt` in the Start menu.

> **Have a powerful computer?** Claude Code supports pointing to a local AI model running on your own machine (via Ollama or LM Studio) instead of paying per use. If your machine can run a strong open-source model like Llama 3 or Mistral, you can dramatically cut costs that way. It is **not free** — you still need a Claude Code subscription to use the tool itself — but running a local model on top of it can make the ongoing usage nearly zero. This is an advanced setup; the standard paid subscription is the easiest way to get started.

---

## Setup — Step by Step

### Step 1 — Download Push Job

Open your terminal and run these two lines, one at a time:

```bash
git clone https://github.com/TushaeBXN/push-job.git
```

```bash
cd push-job
```

> This downloads the project to your computer and moves you inside the folder.

---

### Step 2 — Install Dependencies

Run these two lines, one at a time:

```bash
npm install
```

```bash
npx playwright install chromium
```

> This installs the tools Push Job needs to scan job websites. It may take a minute or two.

---

### Step 3 — Run First-Time Setup

```bash
npm run setup
```

> This creates your personal config files and sets up the folders where your data will be saved.

---

### Step 4 — Fill In Your Profile

Open the file `config/profile.yml` in any text editor (Notepad, TextEdit, VS Code — anything works).

Fill in:
- Your target job titles (e.g. "Cloud Engineer", "SOC Analyst")
- Your location and whether you want remote work
- Your minimum salary

Save the file when you're done.

---

### Step 5 — Add Your Resume

Open the file `resume.md` and paste your resume content in.

Don't worry about formatting perfectly — just get your experience, skills, and education in there. The AI will handle the rest when it tailors it for each job.

---

### Step 6 — Launch

```bash
claude
```

> This opens the AI chat window inside Push Job. You're now ready to go.

---

## How to Use It (Commands)

Once you're inside the chat, type any of these commands:

| Command | What it does |
|---------|-------------|
| `/scan` | Searches 60+ job boards and company career pages for roles that match your profile |
| `/evaluate [paste a job URL here]` | Scores a job posting from 0–10 and tells you if it's worth applying |
| `/cover [paste a job URL here]` | Writes a tailored cover letter for that specific job |
| `/resume [paste a job URL here]` | Rewrites your resume with keywords from that job's description |
| `/tracker` | Shows all your applications and their current status |
| `/followup` | Checks which applications need a follow-up and drafts the email |
| `/brief` | Gives you a quick daily summary — what's pending, what needs action |
| `/interview [company name]` | Preps you for the interview with likely questions and mock Q&A |
| `/certs` | Shows which certifications appear most in your active applications |
| `/negotiate [offer amount]` | Helps you respond to a salary offer with market-rate data |
| `/outreach [company name]` | Drafts a LinkedIn message or cold email to a recruiter |
| `/portfolio-sync` | Pulls your GitHub projects and summarizes them as proof points |
| `/batch pipeline` | Scores all the jobs in your list at once |
| `/check` | Makes sure everything is set up correctly |

### Example workflow

```
/scan                                         ← find new jobs
/evaluate https://jobs.example.com/123        ← is this one worth it?
/cover https://jobs.example.com/123           ← write the cover letter
/resume https://jobs.example.com/123          ← tailor the resume
/tracker                                      ← see where everything stands
/followup                                     ← check in on old applications
```

---

## How Jobs Are Scored

Every job gets a score from 0 to 10. The AI looks at 12 things:

| # | What it checks | Weight |
|---|---------------|--------|
| 1 | Does the job title match what you're looking for? | 12% |
| 2 | Does the tech stack match your skills? | 12% |
| 3 | Does your resume have the keywords the job is looking for? | 10% |
| 4 | Do your certifications match what they want? | 10% |
| 5 | Does the salary meet your minimum? | 10% |
| 6 | Will this role help you grow? | 8% |
| 7 | Does the company's mission align with yours? | 8% |
| 8 | Is the location or remote policy a match? | 8% |
| 9 | Do your projects prove you can do this work? | 8% |
| 10 | How likely are you to get an interview? | 6% |
| 11 | Is the posting about to expire or the company hot right now? | 4% |
| 12 | Do you have any connections or warm leads there? | 4% |

**What the score means:**

| Score | What to do |
|-------|-----------|
| 8.0 or higher | Apply today — tailor your resume and cover letter now |
| 6.0 – 7.9 | Strong candidate — worth the effort to polish and apply |
| 4.0 – 5.9 | Low priority — apply only if you have a slow week |
| Under 4.0 | Skip — log it and move on |

---

## Where It Searches

Push Job scans 60+ companies across these categories:

| Category | Examples |
|----------|---------|
| Cloud Providers | AWS, Azure, Google Cloud, Cloudflare, DigitalOcean |
| Cloud Managed Services | Rackspace, Logicworks, Presidio |
| Cybersecurity | CrowdStrike, SentinelOne, Huntress, Rapid7, Palo Alto Networks |
| Identity & Network | Okta, Zscaler, Fortinet, Tenable |
| SIEM / SOC Platforms | Splunk, Elastic, Arctic Wolf, Devo, Sumo Logic |
| DevSecOps & Cloud Security | Wiz, Snyk, HashiCorp, Lacework, Aqua |
| Defense & Government Cloud | Booz Allen, SAIC, Leidos, MITRE, ManTech |
| Enterprise | Microsoft, IBM, Accenture, Deloitte, KPMG |
| AI & Data | Anthropic, Databricks, Scale AI |
| Fintech | Bank of America, Wells Fargo |
| Job Boards | LinkedIn, Dice, Wellfound, RemoteOK, CyberSecJobs |

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
| Defense/GovCloud portals | ❌ | ✅ |
| Cert-to-role unlock matrix | ❌ | ✅ |

---

## Philosophy

**Quality over quantity.**

Push Job is built to produce 3–5 strong, tailored applications per week — not 50 spray-and-pray submissions. Every application that goes out has a researched cover letter, a keyword-optimized resume, and a clear reason to apply.

**The AI prepares. You review. You submit.**

Push Job will never click Apply for you. Every cover letter, resume, and outreach message comes to you for review first.

---

## Built By

**Tushae Thomas (Brian)**
Independent AI Engineer · AWS Certified Cloud Practitioner · Azure SOC Practitioner

- Background: Microsoft Sentinel, KQL, Active Directory, honeynet-based threat detection
- Certified: AWS Cloud Practitioner (CLF-C02) ✅ · Pursuing: CompTIA CySA+
- Target roles: Cloud Engineer | SOC Analyst | DevSecOps | Cloud Security Engineer
- GitHub: [TushaeBXN](https://github.com/TushaeBXN)

---

## License

MIT — use it, fork it, build on it.
