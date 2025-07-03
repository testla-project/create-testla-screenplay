import chalk from 'chalk';

export function printSuccessMessage(projectRoot, testCommand, testDir) {
    console.log(chalk.green(`\n✔ Success! Created a Testla Screenplay project at ${projectRoot}`));
    console.log(`
We suggest that you begin by typing:

${testCommand}
Runs the end-to-end tests.

And check out the following files:
- ./${testDir}/example.spec.ts - Example end-to-end test
- ./fixtures/user.ts - Definition of the Actor
- ./screenplay/tasks/example-task.ts - Example Task definition
- ./screenplay/screens/example-screen.ts - Example Screen definition
- ./playwright.config.ts - Playwright Test configuration
- ./env - Environment Variables

✨ Visit https://github.com/testla-project/testla-screenplay-playwright-js/tree/main/docs for more information. ✨

🚀 To get in touch join the Discord Channel https://discord.gg/MDRjCH3v 🚀

Happy hacking! 🎭
`);
}
