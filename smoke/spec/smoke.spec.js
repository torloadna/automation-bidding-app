const homepage = require('../../regression/pageObjects/homepage');
const item = require('../../regression/pageObjects/item');
const login = require('../../regression/pageObjects/login');
const productCategories = require('../../regression/pageObjects/productCategories');

describe('smoke test',()=>{
    beforeAll(async function() {  
        browser.ignoreSynchronization = true;
        await browser.get('http://ec2-3-73-53-128.eu-central-1.compute.amazonaws.com:8090/');
        await browser.manage().window().maximize();
    })

    it('smoke',async ()=>{
        await homepage.clickOn("Login");
        await login.insertEmail("adnatorlo@edu.cake");
        await login.insertPassword("adnatorlo123!");
        await login.rememberMe();
        await login.clickLogin();
        await homepage.clickOn("SHOP");
        await productCategories.clickOn("explore-more");
        await browser.sleep(2000);
        await productCategories.clickOnX("//h1[normalize-space()='New Balance Shoe']");
        await browser.sleep(3000);
        await item.insertBid("101");
        await item.placeBid();
        await browser.sleep(2000);
        await expect(element.all(by.id("message-container-invalid")).isPresent()).toBe(true);
        await item.clickOn("SHOP");
        await browser.sleep(2000);
        await productCategories.clickOnX("//h1[normalize-space()='Swimming Shorts']");
        await browser.sleep(2000);
        await item.insertBid("49");
        await item.placeBid();
        await browser.sleep(3000);
        await expect(element.all(by.id("message-container-topbid")).isPresent()).toBe(true);
    })
})