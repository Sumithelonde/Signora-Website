import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const base = process.env.VERIFY_URL || 'http://localhost:3000';
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
const results = [];

async function withPage(name, viewport, run) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', error => errors.push(error.message));
  try {
    results.push({ name, errors, ...(await run(page)) });
  } catch (error) {
    results.push({ name, errors, failed: error instanceof Error ? error.message : String(error) });
  } finally {
    await page.close();
  }
}

await withPage('hero-autoplay-controls', { width: 1366, height: 768 }, async page => {
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  const pause = page.getByRole('button', { name: 'Pause' });
  await pause.waitFor();
  await page.waitForTimeout(1900);
  const progressBeforePause = await page.locator('.hero-progress').getAttribute('aria-valuenow');
  await pause.click();
  await page.waitForTimeout(120);
  const resumeVisible = await page.getByRole('button', { name: 'Resume' }).isVisible();
  const pausedLetterCount = await page.locator('.hero-letter.is-visible').count();
  await page.waitForTimeout(450);
  const pausedLetterCountAfterWait = await page.locator('.hero-letter.is-visible').count();
  await page.getByRole('button', { name: 'Resume' }).click();
  await page.waitForTimeout(450);
  const resumedLetterCount = await page.locator('.hero-letter.is-visible').count();
  const soundButtonText = (await page.locator('.hero-controls button').nth(1).textContent())?.trim();
  const legacyPrompt = /Enable sound and play|Play silently/i.test(await page.locator('body').innerText());
  await page.getByRole('button', { name: 'Skip intro' }).click();
  await page.waitForTimeout(450);
  return {
    progressBeforePause: Number(progressBeforePause),
    resumeVisible,
    progressStableWhilePaused: pausedLetterCountAfterWait === pausedLetterCount,
    progressAdvancedAfterResume: resumedLetterCount > pausedLetterCountAfterWait,
    soundButtonText,
    legacyPrompt,
    resolutionVisible: await page.locator('.hero-resolution').isVisible(),
  };
});

await withPage('mobile-navigation', { width: 390, height: 844 }, async page => {
  await page.goto(`${base}/solutions`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const toggle = page.getByRole('button', { name: 'Open navigation menu' });
  await toggle.click();
  await page.waitForTimeout(300);
  const openState = await page.evaluate(() => ({
    expanded: document.querySelector('.menu-toggle')?.getAttribute('aria-expanded'),
    navVisibility: getComputedStyle(document.querySelector('.mobile-nav')).visibility,
    navOpacity: Number(getComputedStyle(document.querySelector('.mobile-nav')).opacity),
    bodyOverflowY: getComputedStyle(document.body).overflowY,
    activeText: document.activeElement?.textContent?.trim().replace(/\s+/g, ' ').slice(0, 40),
  }));
  await page.keyboard.press('Shift+Tab');
  const trappedText = await page.evaluate(() => document.activeElement?.textContent?.trim().replace(/\s+/g, ' ').slice(0, 60));
  await page.keyboard.press('Escape');
  await page.waitForTimeout(320);
  const closedState = await page.evaluate(() => ({
    expanded: document.querySelector('.menu-toggle')?.getAttribute('aria-expanded'),
    navVisibility: getComputedStyle(document.querySelector('.mobile-nav')).visibility,
    bodyOverflowY: getComputedStyle(document.body).overflowY,
    focusReturned: document.activeElement === document.querySelector('.menu-toggle'),
  }));
  return { openState, trappedText, closedState };
});

await withPage('solution-tabs-keyboard', { width: 1366, height: 768 }, async page => {
  await page.goto(`${base}/solutions`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const tabs = page.locator('.product-ledger__tabs [role="tab"]');
  await tabs.first().focus();
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(100);
  return page.evaluate(() => {
    const selected = document.querySelector('.product-ledger__tabs [aria-selected="true"]');
    const panel = document.querySelector('#solution-panel');
    return {
      selectedId: selected?.id,
      activeId: document.activeElement?.id,
      panelLabelledBy: panel?.getAttribute('aria-labelledby'),
      tabStops: [...document.querySelectorAll('.product-ledger__tabs [role="tab"]')]
        .filter(tab => tab.getAttribute('tabindex') === '0').length,
    };
  });
});

await withPage('pipeline-tabs-keyboard', { width: 1366, height: 768 }, async page => {
  await page.goto(`${base}/technology`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const tabs = page.locator('.architecture-map__rail [role="tab"]');
  await tabs.first().focus();
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  return page.evaluate(() => {
    const selected = document.querySelector('.architecture-map__rail [aria-selected="true"]');
    const panel = document.querySelector('#architecture-panel');
    return {
      selectedId: selected?.id,
      activeId: document.activeElement?.id,
      panelLabelledBy: panel?.getAttribute('aria-labelledby'),
      tabStops: [...document.querySelectorAll('.architecture-map__rail [role="tab"]')]
        .filter(tab => tab.getAttribute('tabindex') === '0').length,
    };
  });
});

await withPage('education-companion', { width: 1366, height: 768 }, async page => {
  await page.goto(`${base}/future`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const button = page.getByRole('button', { name: /Move companion/ });
  await button.scrollIntoViewIfNeeded();
  await button.click();
  await page.waitForTimeout(500);
  return page.evaluate(() => {
    const companion = document.querySelector('.education-vision__companion')?.getBoundingClientRect();
    const control = document.querySelector('.education-vision__canvas button')?.getBoundingClientRect();
    const overlap = !!companion && !!control && companion.left < control.right && companion.right > control.left && companion.top < control.bottom && companion.bottom > control.top;
    return { overlap, controlHeight: control?.height, companionClass: document.querySelector('.education-vision__companion')?.className };
  });
});

await withPage('contact-validation', { width: 1366, height: 768 }, async page => {
  await page.goto(`${base}/partners#contact`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const submit = page.getByRole('button', { name: 'Prepare email' });
  await submit.scrollIntoViewIfNeeded();
  await submit.click();
  return page.evaluate(() => ({
    activeField: (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement) ? document.activeElement.name : '',
    firstFieldInvalid: !document.querySelector('input[name="name"]')?.checkValidity(),
    urlUnchanged: location.pathname.replace(/\/$/, '') === '/partners',
  }));
});

await browser.close();
await fs.mkdir('lab', { recursive: true });
await fs.writeFile('lab/interaction-report.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));

