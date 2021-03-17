import{Role} from "testcafe"
import { CREDENTIALS } from '../data/Constants'
import loginPage from '../pages/LoginPage'

export const user = Role("https://www.saucedemo.com/", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
},{preserveUrl: true})

