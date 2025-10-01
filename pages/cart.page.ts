import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItems() {
    return this.page.locator('.cart_item').allTextContents();
  }

  async checkout() {
    await this.page.click('#checkout');
  }
}