import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 3,
  timeout: 60000,
  use: { baseURL: 'http://localhost:3000', browserName: 'chromium', headless: true },
  reporter: [['list']],
  webServer: {
    command: 'node node_modules/next/dist/bin/next start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 30000,
  },
});
