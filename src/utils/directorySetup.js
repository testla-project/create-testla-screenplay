import fs from 'fs-extra';
import path from 'path';

export async function createDirectoryStructure(testDir, projectRoot) {
    const dirs = [
        `${testDir}`,
        "fixtures",
        "screenplay/tasks",
        "screenplay/actions",
        "screenplay/questions",
        "screenplay/screens"
    ];

    for (const dir of dirs) {
        await fs.ensureDir(path.join(projectRoot, dir));
    }
}
