import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutPage from '../pages/CheckoutPage'
import ProductsPage from '../pages/ProductsPage'
import { SELECTOR_ELEMENTS } from '../data/Constants'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import { user } from '../data/Roles'

fixture('Checkout and Overview').page `https://www.saucedemo.com/inventory.html`
    .beforeEach(async t => {
        await t.useRole(user)
        for (let item = 0; item < 3; item++) {
            await ProductsPage.selectItem(item)
        }
        await ProductsPage.shoppingCartIcon()
        await ShoppingCartPage.checkout()
    })

//7. Validate error message is displayer in the users information page.
test('Continue with missign information',async t => {
    await t.expect(CheckoutPage.pageTitle.exists).ok()
    await CheckoutPage.continue()
    await t.expect(CheckoutPage.messageError.innerText).eql(SELECTOR_ELEMENTS.ERROR_MESSAGES.CHECKOUTPAGE_ERROR)
})

//8. Validate the user navigates to the overview page once his data has been filled.
test('Fill users information',async t => {
    await CheckoutPage.fillForm(SELECTOR_ELEMENTS.USER_DATA.FIRSTNAME,SELECTOR_ELEMENTS.USER_DATA.LASTNAME,SELECTOR_ELEMENTS.USER_DATA.POSTALCODE)
    await CheckoutPage.continue()
    await t.expect(OverviewPage.pageTitle.exists).ok()
})

//9.Validate items in the overview page match with the added items
test('Final Order Items',async t => {
    await CheckoutPage.fillForm(SELECTOR_ELEMENTS.USER_DATA.FIRSTNAME,SELECTOR_ELEMENTS.USER_DATA.LASTNAME,SELECTOR_ELEMENTS.USER_DATA.POSTALCODE)
    await CheckoutPage.continue()
    await t.expect(ShoppingCartPage.item0.exists).ok()
    await t.expect(ShoppingCartPage.item1.exists).ok()
    await t.expect(ShoppingCartPage.item2.exists).ok()
})

//10. Validate the user navigates to the confirmation page
test('Complete a purchase',async t => {
    await CheckoutPage.fillForm(SELECTOR_ELEMENTS.USER_DATA.FIRSTNAME,SELECTOR_ELEMENTS.USER_DATA.LASTNAME,SELECTOR_ELEMENTS.USER_DATA.POSTALCODE)
    await CheckoutPage.continue()
    await OverviewPage.finish()
    await t.expect(ConfirmationPage.pageTitle.exists).ok()
    await t.expect(ConfirmationPage.img.exists).ok()
})

//testcafe chrome '.\page_model\test\Checkout.test.js'