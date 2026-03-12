import { Page } from '@playwright/test';

export class DvsaPage {
  constructor(private page: Page) {}

  async gotoHome() {
    await this.page.goto('/');
  }

  async gotoErrorCodes() {
    await this.page.goto('/mot-history-api/error-codes/');
  }
}