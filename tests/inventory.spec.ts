import { test, expect } from '../fixtures/auth.fixture';

test('@regression inventory loads', async ({ loggedIn }) => {
  await expect(await loggedIn.isLoaded()).toBeTruthy();
});

test('@regression @smoke add item to cart', async ({ loggedIn, page }) => {
  await loggedIn.addProductToCart('Sauce Labs Backpack');
  await loggedIn.openCart();
  await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
});