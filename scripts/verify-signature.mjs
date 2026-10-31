import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const base = process.env.VERIFY_URL || 'http://localhost:3000';
const results = [];

await fs.mkdir('lab/signature', { recursive: true });

for (const [name, viewport] of [['desktop', { width: 1900, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.locator('.signature-section').waitFor();
  await page.waitForTimeout(800);

  for (const progress of [0, 0.06, 0.18, 0.32, 0.55, 0.85]) {
    await page.evaluate(value => {
      const section = document.querySelector('.signature-section');
      if (!section) return;
      const start = section.getBoundingClientRect().top + scrollY;
      const range = Math.max(0, section.getBoundingClientRect().height - innerHeight);
      scrollTo(0, start + range * value);
    }, progress);
    await page.waitForTimeout(350);
    await page.screenshot({ path: `lab/signature/${name}-${String(progress).replace('.', '-')}.png` });

    const metrics = await page.evaluate(() => {
      const rect = selector => {
        const value = document.querySelector(selector)?.getBoundingClientRect();
        return value ? { left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height } : null;
      };
      const overlaps = (a, b) => !!a && !!b && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
      const intro = rect('.signature-intro h2');
      const response = rect('.signature-response h2');
      const cluster = rect('.signal-cluster');
      const path = rect('.signature-route path');
      const introOpacity = Number(getComputedStyle(document.querySelector('.signature-intro')).opacity);
      const responseOpacity = Number(getComputedStyle(document.querySelector('.signature-response')).opacity);
      return {
        horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
        introOpacity,
        responseOpacity,
        visibleCopyOverlapsCluster: (introOpacity > 0.1 && overlaps(intro, cluster)) || (responseOpacity > 0.1 && overlaps(response, cluster)),
        visibleCopyOverlapsPath: (introOpacity > 0.1 && overlaps(intro, path)) || (responseOpacity > 0.1 && overlaps(response, path)),
      };
    });
    results.push({ name, progress, errors: [...errors], ...metrics });
  }
  await page.close();
}

for (const [name, viewport] of [['reduced-desktop', { width: 1900, height: 900 }], ['reduced-mobile', { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.locator('.signature-section').scrollIntoViewIfNeeded();
  await page.waitForTimeout(350);
  await page.screenshot({ path: `lab/signature/${name}.png` });
  const metrics = await page.evaluate(() => {
    const copy = document.querySelector('.signature-response')?.getBoundingClientRect();
    const path = document.querySelector('.signature-route path')?.getBoundingClientRect();
    const overlaps = !!copy && !!path && copy.left < path.right && copy.right > path.left && copy.top < path.bottom && copy.bottom > path.top;
    return {
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      responseVisible: Number(getComputedStyle(document.querySelector('.signature-response')).opacity) === 1,
      copyOverlapsPath: overlaps,
    };
  });
  results.push({ name, errors, ...metrics });
  await page.close();
}

await browser.close();
await fs.writeFile('lab/signature-report.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
