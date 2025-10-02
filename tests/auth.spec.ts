import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const username = process.env.SAUCE_USERNAME || '';
const password = process.env.SAUCE_PASSWORD || '';

test('valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(username, password);
  //await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page).toHaveURL(/inventory.html/);
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');
  //await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');Epic sadface: Username and password do not match any user in this service
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});