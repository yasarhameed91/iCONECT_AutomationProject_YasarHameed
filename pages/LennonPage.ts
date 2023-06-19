import { Page } from "@playwright/test";
import { BeatlesPage } from "./BeatlesPage";

export class LennonPage {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async getPageTitle(){
        const pageTitle=await this.page.title();
        return pageTitle;
    }
    
    async getBirthDate(){
      const birthDate = await this.page.$eval('.bday',(element)=>element.textContent);
      return birthDate!;
    }
  
    async goBack(){
      await this.page.goBack();
      return new BeatlesPage(this.page);
    }
    async takeScreenshot(filename: string) {
        const screenshotPath = `screenshots/${filename}`;
        await this.page.screenshot({ path: screenshotPath });
    }
  }