import {Selector, t} from 'testcafe'

class ConfirmationPage {

    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Finish')
        this.thankYou = Selector('.complete-header')
        this.img = Selector('img[src="/static/media/pony-express.46394a5d.png"]')
    }
    
}

export default new ConfirmationPage()