import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    //await this.page.fill('#user-name', username);
    await this.page.fill('[data-test="username"]', 'standard_user'); // Best practice to use data-test attributes
    //await this.page.fill('#password', password);
    await this.page.fill('[data-test="password"]', 'secret_sauce');
    //await this.page.click('#login-button');
    await this.page.click('[data-test="login-button"]');
  }

  async getErrorMessage() {
    return this.page.textContent('[data-test="error"]');
  }
}