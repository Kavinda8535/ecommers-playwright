import { test, expect } from '../fixtures/auth.fixture';
import { CartPage } from '../pages/cart.page';

test('cart updates correctly', async ({ loggedIn, page }) => {
  await loggedIn.addProductToCart('Sauce Labs Bike Light');
  await loggedIn.openCart();

  const cartPage = new CartPage(page);
  const items = await cartPage.getCartItems();
  expect(items.some(i => i.includes('Sauce Labs Bike Light'))).toBeTruthy();
});