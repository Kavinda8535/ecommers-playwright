import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async isLoaded() {
    return this.page.locator('.inventory_list').isVisible();
  }

  async addProductToCart(productName: string) {

    const productId = productName
    .toLowerCase()
    .replace(/\s+/g, '-');

    console.log

    await this.page.locator(`#add-to-cart-${productId}`).click();

    //await this.page.click(`text=${productName} >> xpath=.. >> button`); This is anti pattern. Why? Use Id is the best practice.
    //add-to-cart-sauce-labs-backpack=id
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}