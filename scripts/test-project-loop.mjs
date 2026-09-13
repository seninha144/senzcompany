import { chromium, expect } from '@playwright/test';
import { mkdir, writeFile, unlink, rmdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';

// Temporary local-only fixture route; removed before the production build.
const dir = 'src/app/[locale]/loop-verification';
await mkdir(dir);
await writeFile(
  `${dir}/page.tsx`,
  `import { ProjectLoop } from '@/components/project-loop';
export default function Page(){return <main style={{paddingTop:1800}}><ProjectLoop src="/loop-fixture.webm" poster="/projects/luzen/preview-poster.webp" label="Preview" pauseLabel="Pause preview" playLabel="Play preview" /></main>}`,
);
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '-p', '3001'], {
  windowsHide: true,
  stdio: 'inherit',
});
let browser;
try {
  for (let i = 0; i < 60; i++) {
    try {
      await fetch('http://localhost:3001');
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  const bytes = await page.evaluate(async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#252720';
    ctx.fillRect(0, 0, 320, 200);
    const recorder = new MediaRecorder(canvas.captureStream(10), { mimeType: 'video/webm' });
    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    const done = new Promise((resolve) => {
      recorder.onstop = async () =>
        resolve(Array.from(new Uint8Array(await new Blob(chunks).arrayBuffer())));
    });
    recorder.start();
    await new Promise((r) => setTimeout(r, 500));
    recorder.stop();
    return done;
  });
  let requests = 0;
  await page.route('**/loop-fixture.webm', (route) => {
    requests++;
    return route.fulfill({ contentType: 'video/webm', body: Buffer.from(bytes) });
  });
  await page.goto('http://localhost:3001/en/loop-verification');
  const video = page.locator('video');
  await expect(video).not.toHaveAttribute('src');
  expect(requests).toBe(0);
  await video.scrollIntoViewIfNeeded();
  await expect.poll(() => video.evaluate((v) => !v.paused)).toBe(true);
  expect(
    await video.evaluate(
      (v) => v.muted && v.loop && v.playsInline && !v.controls && v.preload === 'metadata',
    ),
  ).toBe(true);
  await page.getByRole('button', { name: 'Pause preview' }).click();
  await expect.poll(() => video.evaluate((v) => v.paused)).toBe(true);
  await page.getByRole('button', { name: 'Play preview' }).click();
  await expect.poll(() => video.evaluate((v) => !v.paused)).toBe(true);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(() => video.evaluate((v) => v.paused)).toBe(true);
  await page.reload();
  await video.scrollIntoViewIfNeeded();
  await expect(video).not.toHaveAttribute('src');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect.poll(() => video.evaluate((v) => !v.paused)).toBe(true);
  await page.evaluate(() => scrollTo(0, 0));
  await expect.poll(() => video.evaluate((v) => v.paused)).toBe(true);
  console.log(
    'Video verified: deferred request, real playback, muted loop, pause/resume, offscreen pause, reduced-motion poster.',
  );
} finally {
  await browser?.close();
  server.kill();
  await unlink(`${dir}/page.tsx`);
  await rmdir(dir);
  // Next's generated development validator can retain the temporary route.
  await unlink('.next/dev/types/validator.ts').catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
}
