export function generateReadme(testDir, testCommand) {
    return `# Testla Screenplay Playwright Project

This project was created with \`create-testla-screenplay\` and uses the Testla Screenplay Pattern together with Playwright for End-to-End testing.

## 📁 Folder Structure

\`\`\`
${testDir}/                   # Test files (E2E Tests)
├── example.spec.ts      # Example test
│
screenplay/              # Screenplay Pattern implementation
├── tasks/               # Tasks - Business logic and workflows
│   └── demo-task.ts     # Example task
├── actions/             # Actions - Simple UI interactions
├── questions/           # Questions - Application state queries
├── screens/             # Screens - Locators and UI element definitions
│   └── demo-screen.ts   # Example screen
│
fixtures/                # Test fixtures and helper functions
├── user.ts              # Actor definitions and test setup
│
playwright.config.ts     # Playwright configuration
.env                     # Environment variables (not in Git)
.gitignore               # Git ignore file
\`\`\`

## 📂 What goes into which folder?

### \`${testDir}/\`
- **Test files**: This is where the actual E2E tests are located
- **Example**: \`login.spec.ts\`, \`checkout.spec.ts\`

### \`screenplay/tasks/\`
- **Business logic**: Composite actions that include multiple steps
- **Example**: "Login", "Purchase product", "Complete order"

### \`screenplay/actions/\`
- **Simple UI interactions**: Basic actions with individual UI elements
- **Example**: "Click button", "Enter text", "Select dropdown"

### \`screenplay/questions/\`
- **State queries**: Checking the current application state
- **Example**: "Is user logged in?", "Is cart empty?"

### \`screenplay/screens/\`
- **UI element definitions**: Locators and selectors for UI elements
- **Example**: Login page elements, header navigation, footer links

### \`fixtures/\`
- **Test setup**: Actor definitions, test data, helper functions
- **Example**: User fixtures, test data, mock data

## 🚀 Running Tests

### Run all tests
\`\`\`bash
${testCommand}
\`\`\`

## 🔧 Configuration

Main configuration is done through:
- **\`playwright.config.ts\`**: Playwright-specific settings
- **\`.env\`**: Environment variables (BASE_URL, HEADLESS, etc.)

### Important Environment Variables
- \`BASE_URL\`: The base URL of the application under test
- \`HEADLESS\`: Whether tests should run in headless mode
- \`USERNAME\`: Whether tests need a username for login
- \`PASSWORD\`: Whether tests need a password for login

## 📚 Documentation

### Official Testla Screenplay Documentation
🔗 **[Testla Screenplay Playwright Documentation](https://github.com/testla-project/testla-screenplay-playwright-js/tree/main/docs)**

The official documentation contains:
- Detailed guides to the Screenplay Pattern
- API reference
- Best practices
- Advanced examples

### Playwright Documentation
🔗 **[Playwright Documentation](https://playwright.dev/)**

## 💬 Community & Support

### Discord Channel
🚀 **[Join our Discord Channel](https://discord.gg/MDRjCH3v)**

Here you can:
- Ask questions
- Get help
- Discuss best practices
- Connect with other developers

## 🎭 Happy Testing!

Have fun testing with the Testla Screenplay Pattern and Playwright!
`;
}

export function generateGitignore() {
    return `# Playwright
node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
.DS_Store

# Environment variables
.env
`;
}

export function generateEnvFile(answers) {
    return `HEADLESS=${answers.headless}
BASE_URL=${answers.baseUrl}
ANDY_USER_NAME=ANDY
ANDY_USER_PASSWORD=the-secret-password
`;
}
