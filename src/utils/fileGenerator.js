import fs from 'fs-extra';
import { generatePlaywrightConfig } from '../templates/playwrightConfig.js';
import { generateExampleTest, generateUserFixtures, generateDemoTask, generateDemoScreen, generateScreensIndex, generateTasksIndex } from '../templates/testFiles.js';
import { generateReadme, generateGitignore, generateEnvFile } from '../templates/projectFiles.js';

export async function generateAllFiles(answers, testDir, testCommand) {
    // Generate configuration files
    await fs.outputFile("playwright.config.ts", generatePlaywrightConfig(answers, testDir));
    await fs.outputFile(".env", generateEnvFile(answers));
    await fs.outputFile(".gitignore", generateGitignore());
    await fs.outputFile("README.md", generateReadme(testDir, testCommand));

    // Generate test files
    await fs.outputFile(`${testDir}/example.spec.ts`, generateExampleTest());
    await fs.outputFile("fixtures/user.ts", generateUserFixtures());
    await fs.outputFile("screenplay/tasks/demo-task.ts", generateDemoTask());
    await fs.outputFile("screenplay/tasks/index.ts", generateTasksIndex());
    await fs.outputFile("screenplay/screens/demo-screen.ts", generateDemoScreen());
    await fs.outputFile("screenplay/screens/index.ts", generateScreensIndex());
}
