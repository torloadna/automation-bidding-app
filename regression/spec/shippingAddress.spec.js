const homepage = require('../pageObjects/homepage');
const login = require('../pageObjects/login');
const myAccount = require('../pageObjects/myAccount');

describe('regression tests', ()=> {

  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-124-113-90.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
  });

  it('RT050',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Shipping Address (Optional)");
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
  })
  it('RT051',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Shipping Address (Optional)");
    await myAccount.insert("address-street","1232!#");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
  })
  it('RT052',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Shipping Address (Optional)");
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","1232!#");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
  })
  it('RT053',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Shipping Address (Optional)");
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","1232!#");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
  })
  it('RT054',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Shipping Address (Optional)");
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","1232!#");
    await myAccount.selectCountry();
  })
})