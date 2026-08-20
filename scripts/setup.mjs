#!/usr/bin/env node
/**
 * setup.mjs
 * First-run setup: copy example configs and initialize required directories.
 *
 * Usage:
 *   node scripts/setup.mjs
 *   npm run setup
 */

import { existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let created = 0;

function ensureDir(relPath) {
  const full = join(root, relPath);
  if (!existsSync(full)) {
    mkdirSync(full, { recursive: true });
    console.log(`  📁  Created ${relPath}/`);
    created++;
  }
}

function copyIfMissing(src, dest) {
  const fullDest = join(root, dest);
  if (existsSync(fullDest)) {
    console.log(`  ✅  ${dest} already exists — skipping`);
    return;
  }
  const fullSrc = join(root, src);
  if (!existsSync(fullSrc)) {
    console.log(`  ⚠️   ${src} not found — skipping`);
    return;
  }
  copyFileSync(fullSrc, fullDest);
  console.log(`  📄  Created ${dest} (copied from ${src})`);
  created++;
}

function initIfMissing(relPath, content) {
  const full = join(root, relPath);
  if (existsSync(full)) {
    console.log(`  ✅  ${relPath} already exists — skipping`);
    return;
  }
  writeFileSync(full, content, 'utf8');
  console.log(`  📄  Initialized ${relPath}`);
  created++;
}

console.log('\n── PUSH JOB SETUP ──\n');

// Directories
ensureDir('data');
ensureDir('reports');
ensureDir('output');
ensureDir('batch/tracker-additions');

// Personal config copies
console.log('');
copyIfMissing('config/profile.example.yml', 'config/profile.yml');
copyIfMissing('templates/portals.example.yml', 'portals.yml');

// Stub files (user fills these in)
console.log('');
initIfMissing('resume.md', '# Resume\n\nPaste your resume content here.\n');
initIfMissing('portfolio.md', '# Portfolio\n\nRun `/portfolio-sync` to auto-populate from GitHub.\n');

// Tracker
console.log('');
initIfMissing(
  'data/applications.md',
  'Date\tCompany\tRole\tURL\tScore\tStatus\tResume\tCover\tNotes\tFollowUp\n'
);
initIfMissing('data/pipeline.md', '');
initIfMissing('data/followups.md', '');

console.log('');
if (created === 0) {
  console.log('All files already exist. Setup is complete.\n');
} else {
  console.log(`Setup complete — ${created} file(s) created.\n`);
  console.log('Next steps:');
  console.log('  1. Fill in config/profile.yml with your target roles, salary, and locations');
  console.log('  2. Paste your resume into resume.md');
  console.log('  3. Review portals.yml and remove companies you\'d never apply to');
  console.log('  4. Run: claude\n');
}
