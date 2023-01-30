const homepage = require('../pageObjects/homepage');
const login = require('../pageObjects/login');
const myAccount = require('../pageObjects/myAccount');

describe('regression tests', ()=> {

  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-124-113-90.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
  });

  it('RT039',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await homepage.clickOn("MY ACCOUNT");
    await browser.sleep(4000);
    await expect(element.all(by.id("breadcrumb-title")).isPresent()).toBe(true);
  })
  fit('RT040',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.insert("account-first-name","Adna");
    await myAccount.insert("account-last-name","Torlo");
    await myAccount.insertDateOfBirth("04/06/2001");
    await myAccount.insert("account-phone","+38762002501");
    await browser.sleep(3000);
  })
  it('RT041',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.insert("account-first-name","123!");
    await myAccount.insert("account-last-name","Torlo");
    await myAccount.insertDateOfBirth("04/06/2001");
    await myAccount.insert("account-phone","+38762002501");
    await browser.sleep(3000);
  })
  it('RT042',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.insert("account-first-name","Adna");
    await myAccount.insert("account-last-name","123!");
    await myAccount.insertDateOfBirth("04/06/2001");
    await myAccount.insert("account-phone","+38762002501");
    await browser.sleep(3000);
  })
  it('RT043',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.insert("account-first-name","Adna");
    await myAccount.insert("account-last-name","Torlo");
    await myAccount.insertDateOfBirth("04/06/2020");
    await myAccount.insert("account-phone","+38762002501");
    await browser.sleep(3000);
  })
  it('RT044',async function(){
    await homepage.clickOn("MY ACCOUNT");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("MY ACCOUNT");
    await myAccount.insert("account-first-name","Adna");
    await myAccount.insert("account-last-name","Torlo");
    await myAccount.insertDateOfBirth("04/06/2001");
    await myAccount.insert("account-phone","+ad012a!");
    await browser.sleep(3000);
  })

})