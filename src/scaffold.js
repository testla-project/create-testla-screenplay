import chalk from 'chalk';
import { installDeps, detectPackageManager, run } from './packageManager.js';
import { updatePackageJson } from './utils/packageSetup.js';
import { createDirectoryStructure } from './utils/directorySetup.js';
import { generateAllFiles } from './utils/fileGenerator.js';
import { printSuccessMessage } from './utils/messages.js';

export default async function scaffold(answers) {
  const projectRoot = process.cwd();
  const pm = detectPackageManager();
  const testDir = answers.testDirectory || 'tests';
  const testCommand = pm === 'npm' ? 'npm test' : pm === 'yarn' ? 'yarn test' : 'pnpm test';

  const initCommand = {
    npm: "npm init -y",
    yarn: "yarn init -y",
    pnpm: "pnpm init"
  }[pm];

  console.log(chalk.blue("🚀 Initializing Testla Screenplay project (" + initCommand + ")..."));
  run(initCommand, {});

  console.log(chalk.blue("→ Installing dependencies..."));
  installDeps(["@playwright/test", "@testla/screenplay-playwright", "dotenv"], false);
  
  console.log(chalk.blue("→ Installing dev dependencies..."));
  installDeps(["@types/node"], true);

  console.log(chalk.blue("→ Updating package.json scripts..."));
  await updatePackageJson(projectRoot);

  console.log(chalk.blue("→ Creating directory structure..."));
  await createDirectoryStructure(testDir, projectRoot);

  console.log(chalk.blue("→ Generating project files..."));
  await generateAllFiles(answers, testDir, testCommand);

  if (answers.useAWS) {
    console.log(chalk.yellow("⚠️  Add AWS-specific config manually (e.g., credentials, EC2 setup)."));
  }

  printSuccessMessage(projectRoot, testCommand, testDir);
}
