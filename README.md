# **🎭 Create Testla Screenplay - CLI tool for quickly creating Testla Screenplay projects with Playwright 🎭**

This package provides an initializer to interactively and automatically set up new Testla Screenplay projects with Playwright.

## Usage

You can create a new Testla Screenplay project using one of the following commands:

```bash
# In the current directory (recommended: create an empty directory first)
npm init testla-screenplay
yarn create testla-screenplay
pnpm create testla-screenplay
```

The tool uses the current directory name as the project name and sets up the project structure there.

**Example:**
```bash
mkdir my-tests
cd my-tests
npm init testla-screenplay
# Project name is "my-tests"
```

## What happens when you run it?

1. **Interactive configuration (prompts):**
   - Name of the test directory (default: `tests`)
   - Base URL of the application under test
   - Browser (chromium, firefox, webkit)
   - Headless mode (default: true)
   - Reporter (testla-reporter, html, junit, json, list, dot)

2. **Project structure is created:**
   ```
   <project-directory>/
   ├── <tests>/                  # Test files (e.g. example.spec.ts)
   ├── screenplay/
   │   ├── tasks/                # Example task
   │   ├── actions/              # (empty)
   │   ├── questions/            # (empty)
   │   └── screens/              # Example screen
   ├── fixtures/                 # Test actor
   ├── playwright.config.ts      # Playwright configuration
   ├── .env                      # Environment variables
   ├── .gitignore                # Git ignore
   ├── README.md                 # Project documentation (generated)
   └── package.json
   ```

3. **Dependencies are installed:**
   - `@playwright/test`
   - `@testla/screenplay-playwright`
   - `dotenv`
   - `@types/node` (dev)

4. **Configuration and example files are generated:**
   - Playwright configuration (`playwright.config.ts`)
   - `.env` file with your settings
   - Example test, demo task, demo screen, fixtures
   - Project-specific README (replaces this file in the target project)

5. **package.json is updated:**
   - Script: `test` → `npx playwright test`

## Features

- 🛠️ Interactive setup with sensible defaults
- 📁 Automatic folder structure following the Screenplay pattern
- 🚀 Ready to use with example code and configuration
- 🌐 Multi-browser support (Chromium, Firefox, WebKit)
- 📚 Generates a README for the new project

## Example output after successful setup

```
✔ Success! Created a Testla Screenplay project at /path/to/project

We suggest that you begin by typing:

npm test
Runs the end-to-end tests.

And check out the following files:
- ./<tests>/example.spec.ts - Example test
- ./fixtures/user.ts - Definition of the Actor
- ./screenplay/tasks/demo-task.ts - Example task
- ./screenplay/screens/demo-screen.ts - Example screen
- ./playwright.config.ts - Playwright configuration
- ./.env - Environment variables

✨ More info: https://github.com/testla-project/testla-screenplay-playwright-js/tree/main/docs ✨

🚀 Discord: https://discord.gg/MDRjCH3v 🚀

Happy hacking! 🎭
```

## Requirements

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

## Links

- [Testla Screenplay Playwright](https://github.com/testla-project/testla-screenplay-playwright-js/)
- [Discord Community](https://discord.gg/MDRjCH3v)

## License

MIT