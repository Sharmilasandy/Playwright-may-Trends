export class Practice{

    constructor(page){
        this.page=page;
        this.Practicepg=page.locator('//a[text()="Practice"]');
        this.Testtablepg=page.locator('//a[text()="Test Table"]');
        this.language=page.getByRole('radio', { name: 'Java' });
        this.langjava=page.locator('//table[@id="courses_table"]/tbody/tr[3]/td[5]')
    }

    async selectjava(){
        await this.Practicepg.click()
        await this.Testtablepg.click()
        // await this.page.scrollIntoViewIfNeeded()
        await this.language.check()
        const AllText=await this.langjava.allInnerTexts()
        console.log(AllText)
    }
}