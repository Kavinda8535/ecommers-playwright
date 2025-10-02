import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const username = process.env.SITE_USERNAME || '';
const password = process.env.SITE_USERNAME || '';

test('valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  //await loginPage.login(username, password);
  await loginPage.login(process.env.SITE_USERNAME!, process.env.SITE_PASSWORD!); // Local Run...
  console.log('Username:', process.env.SITE_USERNAME!);
  console.log('Password:', process.env.SITE_PASSWORD!);
  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page).toHaveURL(/inventory.html/); //Swag Labs
  //await expect(page.locator('.app_logo')).toContainText('Swag Labs');
  await expect(page.locator('.app_logo')).toBeVisible();
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');
  //await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');Epic sadface: Username and password do not match any user in this service
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});