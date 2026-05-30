import {test,expect} from "@playwright/test"
import {LoginPage} from "../tests/Pages/Login.js"
import { Homepage } from "../tests/Pages/Homepage.js"
import logData from "../tests//Testdata/Testdata.json"
import { assert } from "node:console"
import {Practice} from "../tests/Pages/Practice.js"

test('login', async({page})=>{
    let loginObj= new LoginPage(page)
    await loginObj.navigate();
    await loginObj.login(logData.UserName,logData.Password);
    // await loginObj.verifyLoggedInSuccessfullyTitle();
    await page.waitForTimeout(3000)

    let asserObj=new Homepage(page);
    // await asserObj.navigate();
    await asserObj.verifyLoggedInSuccessfullyTitle();

    let javaobj=new Practice(page);
    await javaobj.selectjava()
    await page.waitForTimeout(3000)
})