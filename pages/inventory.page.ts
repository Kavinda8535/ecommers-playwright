import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async isLoaded() {
    return this.page.locator('.inventory_list').isVisible();
  }

  async addProductToCart(productName: string) {
    await this.page.click(`text=${productName} >> xpath=.. >> button`);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}