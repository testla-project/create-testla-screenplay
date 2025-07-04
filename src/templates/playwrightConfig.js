export function generatePlaywrightConfig(answers, testDir) {
    // Transform reporter value based on selection
    let reporterValue;
    if (answers.reporter === 'screenplay:text') {
        reporterValue = '@testla/screenplay-playwright/reporter/text';
    } else if (answers.reporter.startsWith('playwright:')) {
        reporterValue = answers.reporter.replace('playwright:', '');
    } else {
        reporterValue = answers.reporter;
    }

    return `import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
testDir: './${testDir}',
/* Run tests in files in parallel */
fullyParallel: true,
/* Fail the build on CI if you accidentally left test.only in the source code. */
forbidOnly: !!process.env.CI,
/* Retry on CI only */
retries: process.env.CI ? 2 : 0,
/* Opt out of parallel tests on CI. */
workers: process.env.CI ? 1 : undefined,
/* Reporter to use. See https://playwright.dev/docs/test-reporters */
reporter: '${reporterValue}',
/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
use: {
    /* Base URL to use in actions like \`await page.goto('/')\`. */
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Run tests in headless mode */
    headless: !(process.env.HEADLESS === 'false'),
    
    /* Ignore HTTPS errors */
    ignoreHTTPSErrors: true,
    
    /* Take screenshot only on failure */
    screenshot: 'only-on-failure',
},

/* Configure projects for major browsers */
projects: [
    ${answers.browser === 'chromium' ? `{
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    },` : ''}
    ${answers.browser === 'firefox' ? `{
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
    },` : ''}
    ${answers.browser === 'webkit' ? `{
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
    },` : ''}
    ${answers.browser === 'all' ? `{
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    },

    {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
    },

    {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
    },` : ''}

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
],

/* Run your local dev server before starting the tests */
// webServer: {
//   command: 'npm run start',
//   url: 'http://localhost:3000',
//   reuseExistingServer: !process.env.CI,
// },
});
`;
}
