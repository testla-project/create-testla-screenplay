import inquirer from 'inquirer';

export default async function promptConfig() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "testDirectory",
      message: "Name of your tests folder (default is 'tests' or 'e2e' if 'tests' already exists):",
      default: "tests"
    },
    {
      type: "input",
      name: "baseUrl",
      message: "What is the base URL of the application under test?"
    },
    {
      type: "list",
      name: "browser",
      message: "Which browser do you want to use?",
      choices: ["chromium", "firefox", "webkit"]
    },
    {
      type: "confirm",
      name: "headless",
      message: "Should tests run in headless mode?",
      default: true
    },
    // {
    //   type: "list",
    //   name: "ci",
    //   message: "Which CI/CD do you want to use?",
    //   choices: ["GitHub Actions", "GitLab CI/CD"]
    // },
    // {
    //   type: "confirm",
    //   name: "useAWS",
    //   message: "Will you interact with AWS services in your tests?",
    //   default: false
    // },
    {
      type: "list",
      name: "reporter",
      message: "Which reporter do you want to use?",
      choices: ["screenplay:text", "playwright:html", "playwright:junit", "playwright:json", "playwright:list", "playwright:dot"],
      default: "screenplay:text"
    }
  ]);
}
