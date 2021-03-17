import {Selector, t} from 'testcafe'
import { SELECTOR_ELEMENTS } from '../data/Constants'

class OverviewPage {

    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('.btn_action.cart_button')
        this.item0 = Selector('#item_4_title_link').withExactText(SELECTOR_ELEMENTS.PRODUCT_NAME.ITEM1)
        this.item1 = Selector('#item_0_title_link').withExactText(SELECTOR_ELEMENTS.PRODUCT_NAME.ITEM2)
        this.item2 = Selector('#item_1_title_link').withExactText(SELECTOR_ELEMENTS.PRODUCT_NAME.ITEM3)
    }
       
    async finish(){
        await t.click (this.finishButton)
    }

}

export default new OverviewPage()