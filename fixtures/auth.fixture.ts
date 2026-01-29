import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

type AuthFixtures = {
  loggedIn: InventoryPage;
};

export const test = base.extend<AuthFixtures>({


  loggedIn: async ({ page }, use) => {

    const username = process.env.SITE_USERNAME;
    const password = process.env.SITE_PASSWORD;

    if (!username || !password) {
      throw new Error('❌ Missing SITE_USERNAME or SITE_PASSWORD');
    }

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    //await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await loginPage.login(username, password);
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
});

export { expect } from '@playwright/test';