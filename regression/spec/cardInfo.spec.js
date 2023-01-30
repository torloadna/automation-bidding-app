const homepage = require('../pageObjects/homepage');
const login = require('../pageObjects/login');
const myAccount = require('../pageObjects/myAccount');

describe('regression tests', ()=> {

  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-124-113-90.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
  });

  it('RT045',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Card Information (Optional)");
    await myAccount.insert("card-full-name","ADNA TORLO");
    await myAccount.insert("card-number","1234-1234-1234-1234");
    await myAccount.insert("card-expiry-date","08/25");
    await myAccount.insert("card-cvc","532");
  })
  it('RT046',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Card Information (Optional)");
    await myAccount.insert("card-full-name","ADNA");
    await myAccount.insert("card-number","1234-1234-1234-1234");
    await myAccount.insert("card-expiry-date","08/25");
    await myAccount.insert("card-cvc","532");
  })
  it('RT047',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Card Information (Optional)");
    await myAccount.insert("card-full-name","ADNA TORLO");
    await myAccount.insert("card-number","adn132!");
    await myAccount.insert("card-expiry-date","08/25");
    await myAccount.insert("card-cvc","532");
  })
  it('RT048',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Card Information (Optional)");
    await myAccount.insert("card-full-name","ADNA TORLO");
    await myAccount.insert("card-number","1234-1234-1234-1234");
    await myAccount.insert("card-expiry-date","06/01");
    await myAccount.insert("card-cvc","532");
  })
  it('RT049',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.clickOnXpath("Card Information (Optional)");
    await myAccount.insert("card-full-name","ADNA TORLO");
    await myAccount.insert("card-number","1234-1234-1234-1234");
    await myAccount.insert("card-expiry-date","08/25");
    await myAccount.insert("card-cvc","4587965");
  })
})