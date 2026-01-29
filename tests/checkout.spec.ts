import { test, expect } from '../fixtures/auth.fixture';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test('@regression successful checkout', async ({ loggedIn, page }) => {
  await loggedIn.addProductToCart('Sauce Labs Bolt T-Shirt');
  await loggedIn.openCart();

  const cartPage = new CartPage(page);
  await cartPage.checkout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();

  await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});