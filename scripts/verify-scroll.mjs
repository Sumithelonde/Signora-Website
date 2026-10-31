import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const url = process.env.VERIFY_URL || 'http://localhost:3002';
const root = path.resolve('lab');

async function run(name, viewport, reducedMotion = 'no-preference') {
  const browser = await chromium.launch({ executablePath: chrome, headless: true });
  const page = await browser.newPage({ viewport, reducedMotion });
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const out = path.join(root, name);
  await fs.mkdir(out, { recursive: true });
  const shots = [
    ['00-hero', 'body', 0],
    ['01-gap-open', '.problem-section', 0.06],
    ['02-gap-peak', '.problem-section', 0.72],
    ['03-response-open', '.signature-section', 0.08],
    ['04-response-peak', '.signature-section', 0.72],
    ['05-method', '.technology-section', 0.5],
    ['06-solutions', '#solutions', 0.08],
    ['07-contexts', '.contexts-section', 0.54],
    ['08-research', '#research', 0.08],
    ['09-close', '#contact', 0.42],
  ];

  for (const [file, selector, fraction] of shots) {
    await page.evaluate(({ selector, fraction }) => {
      const element = document.querySelector(selector);
      if (!element) return;
      const top = element.getBoundingClientRect().top + scrollY;
      const travel = Math.max(0, element.getBoundingClientRect().height - innerHeight);
      document.documentElement.style.scrollBehavior = 'auto';
      scrollTo({ top: top + travel * fraction, behavior: 'instant' });
    }, { selector, fraction });
    await page.waitForTimeout(850);
    await page.screenshot({ path: path.join(out, `${file}.png`) });
  }

  const metrics = await page.evaluate(() => {
    const rail = document.querySelector('.context-track');
    const sections = [...document.querySelectorAll('[data-chapter]')].map((element) => ({
      id: element.id || element.className,
      height: Math.round(element.getBoundingClientRect().height),
    }));
    return {
      viewport: [innerWidth, innerHeight],
      documentWidth: document.documentElement.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      contextOverflow: rail ? rail.scrollWidth - innerWidth : null,
      sections,
    };
  });

  const focus = [];
  await page.keyboard.press('Home');
  for (let index = 0; index < 14; index += 1) {
    await page.keyboard.press('Tab');
    focus.push(await page.evaluate(() => {
      const element = document.activeElement;
      const rect = element?.getBoundingClientRect();
      return { tag: element?.tagName, text: element?.textContent?.trim().slice(0, 48), visible: !!rect && rect.width > 0 && rect.height > 0 };
    }));
  }

  await browser.close();
  return { name, errors, metrics, focus };
}

const report = [];
const mode = process.env.VERIFY_MODE || 'all';
if (mode === 'all' || mode === 'desktop') report.push(await run('desktop', { width: 1440, height: 900 }));
if (mode === 'all' || mode === 'mobile') report.push(await run('mobile', { width: 390, height: 844 }));
if (mode === 'all' || mode === 'reduced') report.push(await run('reduced', { width: 1440, height: 900 }, 'reduce'));
await fs.writeFile(path.join(root, 'scroll-report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
