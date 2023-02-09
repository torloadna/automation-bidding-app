const homepage = require('../pageObjects/homepage');
const login = require('../pageObjects/login');
const myAccount = require('../pageObjects/myAccount');
const email = "adna.torlo@edu.fit.ba";
const password = "adnatorlo123!";

describe('regression tests', ()=> {
  
  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-124-113-90.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
    await browser.sleep(2000);
  });
  
  it('RT050',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail(email);
    await login.insertPassword(password);
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await browser.sleep(3000);
    await myAccount.clickOnAddressInfo();
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//span[@class='pattern-mismatch-message']")).isPresent()).toBe(false);
  })
  it('RT051',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail(email);
    await login.insertPassword(password);
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await browser.sleep(3000);
    await myAccount.clickOnAddressInfo();
    await myAccount.insert("address-street","1232#!");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//span[@class='pattern-mismatch-message']")).isPresent()).toBe(true);
  })
  it('RT052',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail(email);
    await login.insertPassword(password);
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await browser.sleep(3000);
    await myAccount.clickOnAddressInfo();
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","1232!#");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
    await browser.sleep(3000);
    await expect(element.all(by.xpath("(//span[@class='pattern-mismatch-message'])")).isPresent()).toBe(true);
  })
  it('RT053',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail(email);
    await login.insertPassword(password);
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await browser.sleep(3000);
    await myAccount.clickOnAddressInfo();
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","1232!#");
    await myAccount.insert("address-state","FBiH");
    await myAccount.selectCountry();
    await browser.sleep(4000);
    await expect(element.all(by.xpath("//span[@class='pattern-mismatch-message']")).isPresent()).toBe(true);
  })
  it('RT054',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail(email);
    await login.insertPassword(password);
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await browser.sleep(3000);
    await myAccount.clickOnAddressInfo();
    await myAccount.insert("address-street","Braće Fejića 5");
    await myAccount.insert("address-city","Mostar");
    await myAccount.insert("address-zipcode","88000");
    await myAccount.insert("address-state","1232!#");
    await myAccount.selectCountry();
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//span[@class='pattern-mismatch-message']")).isPresent()).toBe(true);
  })
})