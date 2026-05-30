import { expect } from "@playwright/test";
export class Homepage{
//added new line
    constructor(page){
        this.page=page;
        this.successTitle=page.locator('//h1[text()="Logged In Successfully"]');
    }

    // async navigate(){
    //     await this.page.goto('https://practicetestautomation.com/logged-in-successfully/')
    // }
    async verifyLoggedInSuccessfullyTitle() {
    await expect(this.successTitle).toBeVisible();
    await expect(this.successTitle).toHaveText('Logged     ghf  In Successfully');
 
    }
}
