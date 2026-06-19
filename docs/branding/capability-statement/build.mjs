/**
 * Capability Statement — Build Script
 *
 * Generates:
 *   output/capability-statement.pdf
 *   output/preview-page-1.png  (through page-N.png)
 *
 * Usage:
 *   node docs/branding/capability-statement/build.mjs
 *   npm run build:capability-statement
 */

import puppeteer from 'puppeteer';
import fs        from 'fs';
import path      from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..', '..', '..');
const OUT  = path.join(__dirname, 'output');

function log(msg) { process.stdout.write(`[build] ${msg}\n`); }

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ── Prepare ────────────────────────────────────────────────────
ensureDir(OUT);

const logoPath    = path.join(ROOT, 'elsasa-logo-white-bg.png');
const logoBase64  = fs.readFileSync(logoPath).toString('base64');
const logoDataUrl = `data:image/png;base64,${logoBase64}`;

const tplPath = path.join(__dirname, 'index.html');
const html    = fs.readFileSync(tplPath, 'utf-8')
                  .replaceAll('__LOGO_DATA_URL__', logoDataUrl);

// ── Browser ────────────────────────────────────────────────────
log('Launching browser…');

const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-web-security',
    '--font-render-hinting=none',
  ],
});

const page = await browser.newPage();

// A4 at 96 dpi = 794 × 1123 CSS px.  deviceScaleFactor 2 → 2× retina quality for screenshots.
await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

log('Loading document…');
await page.setContent(html, { waitUntil: 'networkidle0' });

// Wait for web fonts to finish loading
await page.evaluate(() => document.fonts.ready);

// Small settle delay to ensure layout is stable
await new Promise(r => setTimeout(r, 600));

// ── PDF ────────────────────────────────────────────────────────
const pdfPath = path.join(OUT, 'capability-statement.pdf');
log('Generating PDF…');

await page.pdf({
  path:            pdfPath,
  format:          'A4',
  printBackground: true,
  margin:          { top: 0, right: 0, bottom: 0, left: 0 },
});

log(`✓  PDF  →  ${pdfPath}`);

// ── Screenshots ────────────────────────────────────────────────
log('Taking page screenshots…');

const pageEls  = await page.$$('.page');
let   captured = 0;

for (const [i, el] of pageEls.entries()) {
  const box = await el.boundingBox();
  if (!box) { log(`  ⚠  page ${i + 1} has no bounding box, skipping`); continue; }

  const outPath = path.join(OUT, `preview-page-${i + 1}.png`);
  await page.screenshot({
    path: outPath,
    clip: {
      x:      Math.round(box.x),
      y:      Math.round(box.y),
      width:  Math.round(box.width),
      height: Math.round(box.height),
    },
  });

  log(`✓  Page ${i + 1}  →  ${outPath}`);
  captured++;
}

await browser.close();

// ── Done ───────────────────────────────────────────────────────
log('');
log('─'.repeat(60));
log(`Build complete.`);
log(`  PDF     : ${pdfPath}`);
log(`  Previews: ${captured} page(s) in ${OUT}`);
log('─'.repeat(60));
