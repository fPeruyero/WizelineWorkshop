import loginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'  
import { CREDENTIALS, SELECTOR_ELEMENTS } from '../data/Constants'
import { user} from '../data/Roles'


fixture('Login').page `https://www.saucedemo.com/`

//1. Login with a valid user 
test('Login with a valid user',async t => {
    await t.useRole(user)
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

//2. Validate error message is displayed
test('Login with an invalid user',async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorButton.exists).ok()
    await t.expect(loginPage.errorMessage.innerText).eql(SELECTOR_ELEMENTS.ERROR_MESSAGES.LOGINPAGE_ERROR)
})

//3. Validate user navigates to the login page 
test('Logout from products page',async t => {
    await t.useRole(user)
    //await t.useRole(Role.anonymous())
    await ProductsPage.Logout()
    await t.expect(loginPage.usernameField.exists).ok()

})

//testcafe chrome '.\page_model\test\Login.test.js'
