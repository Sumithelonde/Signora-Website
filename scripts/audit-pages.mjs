import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const base = process.env.AUDIT_URL || 'http://localhost:3000';
const routes = ['/', '/solutions', '/technology', '/industries', '/research', '/impact', '/about', '/future', '/partners'];
const viewports = [
  ['laptop', { width: 1366, height: 768 }],
  ['desktop', { width: 1440, height: 900 }],
];
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const report = [];

await fs.mkdir('lab/ui-audit', { recursive: true });

for (const [viewportName, viewport] of viewports) {
  for (const route of routes) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(route === '/' ? 900 : 500);

    const slug = route === '/' ? 'home' : route.slice(1);
    await page.screenshot({ path: `lab/ui-audit/${viewportName}-${slug}-top.png` });

    const metrics = await page.evaluate(() => {
      const visible = element => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0.01 && rect.width > 0 && rect.height > 0;
      };
      const outOfBounds = [...document.querySelectorAll('main *')]
        .filter(visible)
        .map(element => ({ element, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.left < -2 || rect.right > innerWidth + 2)
        .filter(({ element }) => !element.closest('.context-track'))
        .slice(0, 12)
        .map(({ element, rect }) => ({
          selector: `${element.tagName.toLowerCase()}.${[...element.classList].slice(0, 2).join('.')}`,
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
        }));
      const smallTargets = [...document.querySelectorAll('a, button, input, select, textarea')]
        .filter(visible)
        .map(element => ({ element, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.width < 24 || rect.height < 24)
        .slice(0, 12)
        .map(({ element, rect }) => ({
          text: (element.getAttribute('aria-label') || element.textContent || '').trim().slice(0, 50),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        }));
      const bodyText = document.body.innerText;
      return {
        title: document.title,
        horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
        pageHeight: document.documentElement.scrollHeight,
        outOfBounds,
        smallTargets,
        placeholderText: /lorem ipsum|coming soon|placeholder|todo\b/i.test(bodyText),
        mojibake: /�/.test(bodyText),
        h1Count: document.querySelectorAll('h1').length,
        visibleH1: [...document.querySelectorAll('h1')].filter(visible).length,
      };
    });
    report.push({ viewport: viewportName, route, errors, ...metrics });
    await page.close();
  }
}

await browser.close();
await fs.writeFile('lab/ui-audit-report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
