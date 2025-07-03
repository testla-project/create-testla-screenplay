export function generateExampleTest() {
    return `import { test } from '../fixtures/user';
import { Element } from '@testla/screenplay-playwright/web';
import { Do } from '../screenplay/tasks';
import { Demo } from '../screenplay/screens';

test('Demo-Test', async ({ Andy }) => {
    // Execute the demo task Do.something()
    await Andy.attemptsTo(Do.something());
    await Andy.asks(Element.toBe.visible(Demo.BODY));
});
`;
}

export function generateUserFixtures() {
    return `import { Browser, test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';
import { UseAPI } from '@testla/screenplay-playwright/api';

// Function to create an user actor with both Web browsing and API capabilities
const createUser = async (browser: Browser, actorName: string, username: string, password: string): Promise<Actor> => {
    const page = await browser.newPage();

    return Actor.named(actorName)
        .with('username', username)
        .with('password', password)
        .can(BrowseTheWeb.using(page))
};

// Define the types of actors
type Actors = {
    Andy: Actor;
};

// Define test fixtures for each actor
export const test = base.extend<Actors>({
    Andy: async ({ browser }, use) => {
        const Andy = await createUser(browser, 'Andy', \`\${process.env.ANDY_USER_NAME}\`, \`\${process.env.ANDY_USER_PASSWORD}\`);
        await use(Andy);
    },
});

// Export the expect function from the Playwright test library
export { expect } from '@playwright/test';
`;
}

export function generateDemoTask() {
    return `import { Actor, Task } from '@testla/screenplay-playwright';
import { Navigate, Wait } from '@testla/screenplay-playwright/web';

export class Do extends Task {
    private constructor() {
        super();
    }

    public async performAs(actor: Actor): Promise<any> {
        return actor.attemptsTo(
            Navigate.to('/'),
            Wait.forLoadState('networkidle'),
        );
    }

    public static something(): Do {
        return new Do();
    }
}
`;
}

export function generateTasksIndex() {
    return `import { Do } from './demo-task';

export {
    Do,
};
`;
}

export function generateDemoScreen() {
    return `export class Demo {
    static BODY = 'body';
}
`;
}

export function generateScreensIndex() {
    return `import { Demo } from './demo-screen';

export {
    Demo,
};
`;
}
