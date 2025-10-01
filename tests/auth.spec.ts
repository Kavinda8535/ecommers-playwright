import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');
  //await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');Epic sadface: Username and password do not match any user in this service
  await expect(loginPage.getErrorMessage()).toContain('Epic sadface: Username and password do not match any user in this service');
});