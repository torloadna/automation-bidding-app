const homepage = require('../../regression/pageObjects/homepage');
const productCategories = require('../../regression/pageObjects/productCategories');
const item = require('../../regression/pageObjects/item')
const login = require('../../regression/pageObjects/login');

describe('smoke test',()=>{
    beforeAll(async function() {  
        browser.ignoreSynchronization = true;
        await browser.get('http://ec2-3-73-53-128.eu-central-1.compute.amazonaws.com:8090/');
        await browser.manage().window().maximize();
    });

    it('smoke',async ()=>{
        await homepage.clickOn("Login");
        await login.insertEmail("adna.torlo@edu.fit.ba");
        await login.insertPassword("adnatorlo123!");
        await login.rememberMe();
        await login.clickLogin();
        await homepage.clickOn("SHOP");
        await productCategories.clickOnLV();
        await item.insertBid("501");
        await item.placeBid();
    })
})