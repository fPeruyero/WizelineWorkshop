import dotenv from 'dotenv'
require('dotenv').config()

export const CREDENTIALS = {

    webpage: 'https://www.saucedemo.com/',

    VALID_USER:{
        USERNAME: process.env.USERNAME1,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'wrong_user',
        PASSWORD: 'wrong_password'
    }
}

export const SELECTOR_ELEMENTS= {
    
    USER_DATA:{
        FIRSTNAME: 'Fernanda',
        LASTNAME: 'Peruyero',
        POSTALCODE: '78214'
    },
   
    ERROR_MESSAGES:{
        LOGINPAGE_ERROR: 'Epic sadface: Username and password do not match any user in this service',
        CHECKOUTPAGE_ERROR: 'Error: First Name is required'
    },

    COUNT:{
        SINGLE_ITEM: '1',
        MULTI_ITEM: '3'
    },

    PRODUCT_NAME:{
        ITEM1: 'Sauce Labs Backpack',
        ITEM2: 'Sauce Labs Bike Light',
        ITEM3: 'Sauce Labs Bolt T-Shirt'
    },

}