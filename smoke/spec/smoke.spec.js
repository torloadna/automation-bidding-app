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
        await homepage.clickOnById("explore-more");
        await homepage.clickOnIcon("//h1[normalize-space()='New Balance Shoe']");
        await item.insertBid("64");
        await item.placeBid();
        await expect(element.all(by.id("regular-span")).isPresent()).toBe(true);
        await homepage.clickOn("SHOP");
        await homepage.clickOnIcon("//h1[normalize-space()='Sculpture']");
        await item.insertBid("123");
        await item.placeBid();
        await browser.sleep(3000);
        await expect(element.all(by.id("bold-span")).getText()).toContain("Invalid!")
    })
})