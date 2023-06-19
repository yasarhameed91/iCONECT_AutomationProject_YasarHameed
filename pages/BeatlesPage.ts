import {Page } from "@playwright/test";
import { LennonPage } from "./LennonPage";
import { McCartneyPage } from "./McCartneyPage";

export class BeatlesPage{
   
   private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/wiki/The_Beatles');
  }

  async getPageTitle(){
    const pageTitle=await this.page.title();
    return pageTitle;
  }

  async clickPaulMcCartneyLink(){
    await this.page.click('a[href="/wiki/Paul_McCartney"]');
    return new McCartneyPage(this.page);
  }

  async clickJohnLennonLink(){
    await this.page.click('a[href="/wiki/John_Lennon"]');
    return new LennonPage(this.page);
  }

  async takeScreenshot(filename: string) {
    const screenshotPath = `screenshots/${filename}`;
    await this.page.screenshot({ path: screenshotPath });
  }
}


