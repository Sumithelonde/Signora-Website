import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const url = process.env.VERIFY_URL || 'http://localhost:3002/about/';

const modes = [
  ['desktop', { width: 1440, height: 900 }, 'no-preference'],
  ['mobile', { width: 390, height: 844 }, 'no-preference'],
  ['small-mobile', { width: 375, height: 812 }, 'no-preference'],
  ['landscape', { width: 844, height: 390 }, 'no-preference'],
  ['reduced', { width: 1440, height: 900 }, 'reduce'],
];

await fs.mkdir('lab', { recursive: true });
const report = [];

for (const [name, viewport, reducedMotion] of modes) {
  const browser = await chromium.launch({ executablePath: chrome, headless: true });
  const page = await browser.newPage({ viewport, reducedMotion });
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.locator('.shader-frame').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  const frame = page.frameLocator('iframe[title="Interactive character wave"]');
  const visualCards = await frame.locator('.card').count();
  await page.screenshot({ path: `lab/team-${name}.png` });

  report.push({
    name,
    errors,
    visualCards,
    metrics: await page.evaluate(() => {
      const stage = document.querySelector('.shader-frame')?.getBoundingClientRect();
      return {
        viewport: [innerWidth, innerHeight],
        horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
        stage: stage ? [Math.round(stage.width), Math.round(stage.height)] : null,
        rosterMembers: document.querySelectorAll('.threeui-team__member').length,
        carouselFrames: document.querySelectorAll('iframe[title="Interactive character wave"]').length,
      };
    }),
  });
  await browser.close();
}

await fs.writeFile('lab/team-report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
