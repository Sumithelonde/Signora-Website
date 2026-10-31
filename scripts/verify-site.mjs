import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const base = process.env.VERIFY_URL || 'http://localhost:3002';
const routes = ['/', '/solutions/', '/technology/', '/industries/', '/research/', '/impact/', '/about/', '/future/', '/partners/'];
const modes = [
  ['desktop', { width: 1440, height: 900 }, 'no-preference'],
  ['mobile', { width: 390, height: 844 }, 'no-preference'],
];

await fs.mkdir('lab/site', { recursive: true });
const browser = await chromium.launch({ executablePath: chrome, headless: true });
const report = [];

for (const [mode, viewport, reducedMotion] of modes) {
  const context = await browser.newContext({ viewport, reducedMotion });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    const failed = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`); });
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(350);

    const slug = route === '/' ? 'home' : route.replaceAll('/', '');
    await page.screenshot({ path: `lab/site/${slug}-${mode}-top.png` });
    await page.evaluate(() => window.scrollTo(0, Math.max(0, (document.documentElement.scrollHeight - innerHeight) * .5)));
    await page.waitForTimeout(250);
    await page.screenshot({ path: `lab/site/${slug}-${mode}-mid.png` });

    const metrics = await page.evaluate(() => ({
      title: document.title,
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      documentHeight: document.documentElement.scrollHeight,
      navLinks: Array.from(document.querySelectorAll('#mobile-navigation a')).map(link => link.getAttribute('href')),
      visibleFocusables: Array.from(document.querySelectorAll('a,button,input,select,textarea')).filter(element => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0;
      }).length,
    }));

    report.push({ mode, route, errors, failed, ...metrics });
    await page.close();
  }
  await context.close();
}

const reducedContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const reducedPage = await reducedContext.newPage();
const reducedErrors = [];
reducedPage.on('console', message => { if (message.type() === 'error') reducedErrors.push(message.text()); });
reducedPage.on('pageerror', error => reducedErrors.push(error.message));
await reducedPage.goto(base, { waitUntil: 'networkidle' });
await reducedPage.screenshot({ path: 'lab/site/home-reduced-top.png' });
report.push({ mode: 'reduced', route: '/', errors: reducedErrors, failed: [], ...(await reducedPage.evaluate(() => ({
  title: document.title,
  h1: document.querySelector('h1')?.textContent?.trim() || '',
  horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
  documentHeight: document.documentElement.scrollHeight,
  navLinks: [],
  visibleFocusables: document.querySelectorAll('a,button,input,select,textarea').length,
}))) });
await reducedContext.close();
await browser.close();

await fs.writeFile('lab/site-report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
