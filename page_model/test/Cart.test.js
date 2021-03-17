import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { user } from '../data/Roles'
import { SELECTOR_ELEMENTS } from '../data/Constants'

fixture('Shopping Cart ').page `https://www.saucedemo.com/inventory.html`
    .beforeEach(async t => {
        await t.useRole(user)
    })

//4. Validate user navigates to the shopping cart page.
test('Navigate to the shopping cart',async t => {
    await ProductsPage.shoppingCartIcon()
    await t.expect(ShoppingCartPage.pageTitle.exists).ok()
    
})

//5. Validate the item has been added to the shopping cart. 
test('Add a single item to the shopping cart',async t => {
    await ProductsPage.selectItem(0)
  
    await t.expect(ProductsPage.itemCount.innerText).eql(SELECTOR_ELEMENTS.COUNT.SINGLE_ITEM)
    await ProductsPage.shoppingCartIcon()
    
    await t.expect(ShoppingCartPage.item0.exists).ok()
})

//6. Validate all the items have been added to the shopping cart 
test('Add multiple items to the shopping cart',async t => {
    
    for (let item = 0; item < 3; item++) {
        await ProductsPage.selectItem(item)
    }

    await t.expect(ProductsPage.itemCount.innerText).eql(SELECTOR_ELEMENTS.COUNT.MULTI_ITEM)
    await ProductsPage.shoppingCartIcon()

    await t.expect(ShoppingCartPage.item0.exists).ok()
    await t.expect(ShoppingCartPage.item1.exists).ok()
    await t.expect(ShoppingCartPage.item2.exists).ok()
    
})

//testcafe chrome '.\page_model\test\Cart.test.js'