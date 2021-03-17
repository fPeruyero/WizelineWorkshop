import {Selector, t} from 'testcafe'
import { SELECTOR_ELEMENTS } from '../data/Constants'

class ShoppingCartPage {
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.itemName = Selector('.inventory_item_name')
        this.checkoutButton = Selector('.btn_action.checkout_button').withExactText('CHECKOUT')
        

        this.item0 = Selector('#item_4_title_link').withExactText(SELECTOR_ELEMENTS.PRODUCT_NAME.ITEM1)
        this.item1 = Selector('#item_0_title_link').withExactText(SELECTOR_ELEMENTS.PRODUCT_NAME.ITEM2)
        this.item2 = Selector('#item_1_title_link').withExactText(SELECTOR_ELEMENTS.PRODUCT_NAME.ITEM3)
    }

    async checkout(){
        await t.click (this.checkoutButton)
     }

}

export default new ShoppingCartPage()