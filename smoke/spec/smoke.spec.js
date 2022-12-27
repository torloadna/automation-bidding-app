const homepage = require ('../../regression/pageObjects/homepage');
const createAnAccount = require ('../../regression/pageObjects/createAnAccount');
const productCategories = require('../../regression/pageObjects/productCategories');
const whiteLVBag = require('../../regression/pageObjects/whiteLVBag')

describe('smoke test',()=>{
    beforeAll(async function() {  
        browser.ignoreSynchronization = true;
        await browser.get('http://ec2-3-73-53-128.eu-central-1.compute.amazonaws.com:8090/');
        await browser.manage().window().maximize();
    });

    it('smoke',async ()=>{
        homepage.clickOn("Create an account");
        createAnAccount.insertUsername("adna123");
        createAnAccount.insertName("Adna");
        createAnAccount.insertLastName("Torlo");
        createAnAccount.insertEmail("adna.torlo@edu.fit.ba");
        createAnAccount.insertPassword("adnatorlo123!");
        createAnAccount.clickRegister();
        homepage.clickOn("SHOP");
        productCategories.clickOn();
        whiteLVBag.insertBid("501");
        whiteLVBag.placeBid();
    })

})