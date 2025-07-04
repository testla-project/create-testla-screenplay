# Publishing Instructions

## How to publish create-testla-screenplay

1. **Update version** in `package.json`
2. **Test locally** using `npx create @testla/create-screenplay`
3. **Login to npm** (if not already): `npm login`
4. **Publish**: `npm publish`

## Testing locally

Before publishing, you can test the package locally:

```bash
# In this directory
npm install 
npm link

# Create a test project
mkdir test-project
cd test-project

# Test with npx
npx create @testla/create-screenplay
```

## How users will use it

Once published, users can create new projects with:

```bash
# Using npm (will prompt for project name)
npm init testla-screenplay

# Using yarn (will prompt for project name)
yarn create testla-screenplay

# Using pnpm (will prompt for project name)
pnpm create testla-screenplay
```

## Package naming convention

For npm init to work properly:
- Package name must be `create-testla-screenplay`
- The `bin` field in package.json must point to the executable
- The executable must have the shebang `#!/usr/bin/env node`

## Dependencies explanation

- `inquirer`: For interactive CLI questions
- `chalk`: For colored terminal output
- `fs-extra`: Enhanced file system operations
