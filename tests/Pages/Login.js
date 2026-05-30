export class LoginPage{
     
     constructor(page){
        this.page=page;
        this.UserName=page.locator('[id="username"]');
        this.password=page.locator('[id="password"]');
        this.loginbutton=page.locator('[id="submit"]');
        this.successTitle=page.locator('//h1[text()="Logged In Successfully"]');
    }

     async navigate(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/')
     }
     
     async login(UserName,Password){
        await this.UserName.fill(UserName);
        await this.password.fill(Password);
        await this.loginbutton.click();
        
       }

       async verifyLoggedInSuccessfullyTitle() {
           await expect(this.successTitle).toBeVisible();
           await expect(this.successTitle).toHaveText('Logged In Successfully');
        
           }
}
