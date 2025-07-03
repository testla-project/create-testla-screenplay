import fs from 'fs-extra';
import path from 'path';

export async function updatePackageJson(projectRoot) {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);

    packageJson.scripts = {
        ...packageJson.scripts,
        "test": "npx playwright test"
    };

    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
}
