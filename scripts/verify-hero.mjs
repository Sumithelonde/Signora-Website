import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const base = process.env.VERIFY_URL || 'http://localhost:3000';
const results = [];

await fs.mkdir('lab/hero', { recursive: true });

for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Skip intro' }).waitFor();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Skip intro' }).click();
  await page.waitForTimeout(900);
  await page.screenshot({ path: `lab/hero/complete-${name}.png` });

  const metrics = await page.evaluate(() => {
    const rect = selector => {
      const value = document.querySelector(selector)?.getBoundingClientRect();
      return value ? { left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height } : null;
    };
    const overlaps = (a, b) => !!a && !!b && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    const controls = rect('.hero-controls');
    const resolution = rect('.hero-resolution');
    const board = rect('.station-board');
    return {
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      controls,
      resolution,
      board,
      controlsOverlapResolution: overlaps(controls, resolution),
      boardOverlapResolution: overlaps(board, resolution),
      visibleCaption: !!document.querySelector('.hero-caption'),
      visibleStationLabel: getComputedStyle(document.querySelector('.station-label')).display !== 'none',
    };
  });
  results.push({ name, errors, ...metrics });
  await page.close();
}

for (const [name, viewport] of [['playback-desktop', { width: 1440, height: 900 }], ['playback-mobile', { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Pause' }).waitFor();
  await page.waitForTimeout(6800);
  await page.screenshot({ path: `lab/hero/${name}.png` });

  const metrics = await page.evaluate(() => {
    const rect = selector => {
      const value = document.querySelector(selector)?.getBoundingClientRect();
      return value ? { left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height } : null;
    };
    const overlaps = (a, b) => !!a && !!b && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    const controls = rect('.hero-controls');
    const caption = rect('.hero-caption');
    const board = rect('.station-board');
    return {
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      controls,
      caption,
      board,
      progressValue: Number(document.querySelector('.hero-progress')?.getAttribute('aria-valuenow')),
      legacyPromptPresent: document.body.textContent?.includes('Enable sound and play') || document.body.textContent?.includes('Play silently'),
      controlsOverlapCaption: overlaps(controls, caption),
      boardOverlapCaption: overlaps(board, caption),
      visibleCaption: !!document.querySelector('.hero-caption'),
      visibleResolution: !!document.querySelector('.hero-resolution'),
    };
  });
  results.push({ name, errors, ...metrics });
  await page.close();
}

{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.locator('.hero-resolution').waitFor();
  results.push({
    name: 'reduced-motion-mobile',
    errors,
    horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth - innerWidth),
    visibleResolution: await page.locator('.hero-resolution').isVisible(),
    animationRunning: await page.locator('.hero-progress').count() > 0,
  });
  await page.close();
}

await browser.close();
await fs.writeFile('lab/hero-report.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
