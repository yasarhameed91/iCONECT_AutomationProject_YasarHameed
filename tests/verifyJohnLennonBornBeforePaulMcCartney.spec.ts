import {expect, test} from "@playwright/test";
import { chromium} from "@playwright/test";
import { BeatlesPage} from "../pages/BeatlesPage";

test.describe('The Beatles Wikipedia Page Test', () => {
    test('Navigate to Paul McCartney and John Lennon pages from The Beatles Wikipedia Page and Validate John Lennon Born Before Paul McCartney',async()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        let beatlesPage = new BeatlesPage(page);

        await beatlesPage.goto();
        await beatlesPage.takeScreenshot('beatlesPage.png');

        const mccartneyPage = await beatlesPage.clickPaulMcCartneyLink();
        const paulMcCartneyBirthDate = await mccartneyPage.getBirthDate();
        console.log("Paul McCartney's Date Of Birth : "+paulMcCartneyBirthDate);
        await mccartneyPage.takeScreenshot('paulMcCartneyPage.png');

        beatlesPage=await mccartneyPage.goBack();

        const lennonPage = await beatlesPage.clickJohnLennonLink();
        const johnLennonBirthDate = await lennonPage.getBirthDate();
        console.log("John Lennon's Date Of Birth: "+johnLennonBirthDate);
        await lennonPage.takeScreenshot('johnLennonPage.png');

        if (johnLennonBirthDate < paulMcCartneyBirthDate) {
            console.log('John Lennon was born before Paul McCartney.');
        }else{
            console.log('John Lennon was not born before Paul McCartney.');
        }
        await browser.close();
 });
})


