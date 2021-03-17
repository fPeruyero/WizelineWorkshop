import {Selector, t} from 'testcafe'

class ProductsPage {

    constructor(){
        this.pageTitle = Selector('.product_label').withExactText('Products')
        this.pageMenu = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('.shopping_cart_link.fa-layers')
        this.addtoCart = Selector('.btn_inventory')
        this.itemCount = Selector('.fa-layers-counter')
    }

    async Logout(){
        await t.click (this.pageMenu)
        await t.click (this.logoutButton)
     }

    async shoppingCartIcon(){
        await t.click (this.shoppingCart)
     }
     
    async selectItem(item){
        await t.click (this.addtoCart.nth(item))
     }

}

export default new ProductsPage()