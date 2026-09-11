import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = new URL('../test-results/visuals/', import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await page.addInitScript(() => {
  window.senzVitals = { lcp: 0, cls: 0 };
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) window.senzVitals.lcp = entry.startTime;
  }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) window.senzVitals.cls += entry.value;
    }
  }).observe({ type: 'layout-shift', buffered: true });
});

const measurements = [];
try {
  for (const locale of ['en', 'pt', 'fr', 'it', 'de']) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`http://localhost:3000/${locale}`);
      await page.waitForTimeout(1000);
      measurements.push({
        locale,
        width,
        ...(await page.evaluate(() => window.senzVitals)),
      });
      await page.screenshot({
        path: fileURLToPath(new URL(`${locale}-${width}.png`, output)),
        fullPage: true,
      });
    }
  }
  for (const path of ['contact', 'work/luzen', 'about', 'services']) {
    await page.goto(`http://localhost:3000/en/${path}`);
    await page.screenshot({
      path: fileURLToPath(new URL(`en-${path.replaceAll('/', '-')}.png`, output)),
      fullPage: true,
    });
  }
  await writeFile(new URL('local-vitals.json', output), JSON.stringify(measurements, null, 2));
  console.log(JSON.stringify(measurements, null, 2));
} finally {
  await browser.close();
}
