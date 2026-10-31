import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const base = process.env.VERIFY_URL || 'http://localhost:3000';
const results = [];
const viewports = [
  ['reported', { width: 1918, height: 920 }],
  ['laptop', { width: 1366, height: 768 }],
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
];

await fs.mkdir('lab/contexts', { recursive: true });

for (const [name, viewport] of viewports) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.locator('.contexts-section').scrollIntoViewIfNeeded();
  await page.waitForTimeout(650);
  await page.screenshot({ path: `lab/contexts/${name}.png` });

  const metrics = await page.evaluate(() => {
    const track = document.querySelector('.context-track');
    const trackRect = track?.getBoundingClientRect();
    const items = [...document.querySelectorAll('.context-track > *')].map(element => {
      const rect = element.getBoundingClientRect();
      return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height };
    });
    const overlaps = items.some((item, index) => items.slice(index + 1).some(other => item.left < other.right && item.right > other.left && item.top < other.bottom && item.bottom > other.top));
    return {
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      trackTransform: track ? getComputedStyle(track).transform : null,
      trackWithinViewport: !!trackRect && trackRect.left >= -1 && trackRect.right <= innerWidth + 1,
      itemCount: items.length,
      itemOverlap: overlaps,
      minimumItemWidth: Math.round(Math.min(...items.map(item => item.width))),
    };
  });
  results.push({ name, errors, ...metrics });
  await page.close();
}

await browser.close();
await fs.writeFile('lab/contexts-report.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
