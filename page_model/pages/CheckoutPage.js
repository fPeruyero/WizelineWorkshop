import {Selector, t} from 'testcafe'

class CheckoutPage {

    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.messageError = Selector('h3[data-test="error"]')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
    }
     
    async continue(){
        await t.click (this.continueButton)
    }

    async fillForm(firstname,lastname,postalcode){
        await t.typeText (this.firstNameField,firstname, {paste:true})
        await t.typeText (this.lastNameField,lastname, {paste:true})
        await t.typeText (this.postalCodeField,postalcode, {paste:true})
    }

}

export default new CheckoutPage()