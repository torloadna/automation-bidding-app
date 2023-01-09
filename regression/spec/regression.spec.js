const homepage = require('../pageObjects/homepage');
const productCategories = require('../pageObjects/productCategories');
const createAnAccount = require('../pageObjects/createAnAccount');
const login = require('../pageObjects/login');
const item = require('../pageObjects/item');

describe('regression tests', ()=> {

  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-73-53-128.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
  });

  getRandomString = function(length) {
    var string = '';
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
    for (i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
      }
    return string;
  }

  it('RT001',async function(){
    await homepage.clickOn("Fashion");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT002',async function(){
    await homepage.clickOn("Accessories");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT003',async function(){
    await homepage.clickOn("Electronics");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT004',async function(){
    await homepage.clickOn("Computers");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT005',async function(){
    await homepage.clickOn("Sportswear");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT006',async function(){
    await homepage.clickOn("Men");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT007',async function(){
    await homepage.clickOn("Women");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Wilson Tennis Racket']")).isPresent()).toBe(false);
  })
  it('RT008',async function(){
    await homepage.clickOn("Kids");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT009',async function(){
    await homepage.clickOn("Home");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT010',async function(){
    await homepage.clickOn("Art");
    await browser.sleep(2000);
    expect(element(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT011',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna'+getRandomString(3));
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.'+getRandomString(3));
    await createAnAccount.insertPassword('adnatorlo123!');
    await createAnAccount.clickRegister();
    await browser.sleep(2000);
    await expect(element.all(by.id("username")).isPresent()).toBe(true);
  })
  it('RT012',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('_'+getRandomString(5)+'_');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.'+getRandomString(3));
    await createAnAccount.insertPassword('adnatorlo123!');
    await createAnAccount.clickRegister();
    await browser.sleep(2000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
  })
  it('RT013',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna'+getRandomString(5));
    await createAnAccount.insertName('_123_');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.'+getRandomString(3));
    await createAnAccount.insertPassword('adnatorlo123!');
    await createAnAccount.clickRegister();
    await browser.sleep(2000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
  })
  it('RT014',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna'+getRandomString(4));
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('_123_');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.b'+getRandomString(3));
    await createAnAccount.insertPassword('adnatorlo123!');
    await createAnAccount.clickRegister();
    await browser.sleep(2000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
  })
  it('RT015',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna'+getRandomString(4));
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna@adna');
    await createAnAccount.insertPassword('adnatorlo123!');
    await createAnAccount.clickRegister();
    await browser.sleep(2000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
  })
  it('RT016',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna'+getRandomString(4));
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.'+getRandomString(4));
    await createAnAccount.insertPassword('1');
    await createAnAccount.clickRegister();
    await browser.sleep(3000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
  })
  it('RT017',async function(){
    await homepage.clickOn("HOME");
    await browser.sleep(3000);
    await expect(element.all(by.id("name")).isPresent()).toBe(true);
  })
  it('RT018',async function(){
    await homepage.clickOn("SHOP");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(true);
  })
  it('RT019',async function(){
    await homepage.clickOn("MY ACCOUNT");
  })
  it('RT020',async function(){
    await homepage.clickOnIcon("(//a[@aria-label='facebook'])[1]");
    await browser.sleep(2000);
    await expect(browser.getTitle()).not.toBe("Auction App");
  })
  it('RT021',async function(){
    await homepage.clickOnIcon("(//a[@aria-label='instagram'])[1]");
    await browser.sleep(2000);
    await expect(browser.getTitle()).not.toBe("Auction App");
  })
  it('RT022',async function(){
    await homepage.clickOnIcon("(//a[@aria-label='twitter'])[1]");
    await browser.sleep(2000);
    await expect(browser.getTitle()).not.toBe("Auction App");
  })
  it('RT023',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.clickLogin();
    await browser.sleep(3000);
    await expect(element.all(by.id("username")).getText()).toContain("Hi, adna123");
  })
  it('RT025',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.dif.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
    await browser.sleep(3000);
    await expect(element.all(by.id("input-email-auth")).isPresent()).toBe(true);
  })
  it('RT026',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adn");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await expect(element.all(by.id("username")).isPresent()).toBe(false);
    await browser.sleep(3000);
    await expect(element.all(by.id("input-password")).isPresent()).toBe(true);
  })
  it('RT024',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    //await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await expect(element.all(by.id("username")).getText()).toContain("Hi, adna123");
  })
  it('RT027',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickFashion();
    await productCategories.clickOnSubcategory("Accessories");
    await productCategories.clickOnSubcategory("Belts");
    await productCategories.clickOnSubcategory("Accessories");
    await productCategories.clickOnSubcategory("Belts");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  })
  it('RT028',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickAccessories();
    await productCategories.clickOnSubcategory("Jewelry");
    await productCategories.clickOnSubcategory("Scarves");
    await productCategories.clickOnSubcategory("Gloves");
    await productCategories.clickOnSubcategory("Jewelry");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Paper Bag']")).isPresent()).toBe(false);
  });
  it('RT029',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickElectronics();
    await productCategories.clickOnSubcategory("Mobile");
    await productCategories.clickOnSubcategory("Microwaves");
    await productCategories.clickOnSubcategory("TVs");
    await productCategories.clickOnSubcategory("Mobile");
    await productCategories.clickOnSubcategory("Microwaves");
    await productCategories.clickOnSubcategory("TVs");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Womens T-Shirt']")).isPresent()).toBe(false);
  });
  it('RT030',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickComputers();
    await productCategories.clickOnSubcategory("Laptops");
    await productCategories.clickOnSubcategory("Monitors");
    await productCategories.clickOnSubcategory("Laptops");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Touch Navigation']")).isPresent()).toBe(false);
  })
  it('RT031',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickSportswear();
    await productCategories.clickOnSubcategory("Swimsuits");
    await productCategories.clickOnSubcategory("Shoes");
    await productCategories.clickOnSubcategory("T-Shirts");
    await productCategories.clickOnSubcategory("Swimsuits");
    await productCategories.clickOnSubcategory("Shoes");
    await productCategories.clickOnSubcategory("T-Shirts");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Touch Navigation']")).isPresent()).toBe(false);
  })
  it('RT032',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickWomen();
    await productCategories.clickOnSubcategory("Bags");
    await productCategories.clickOnSubcategory("Swimsuits");
    await productCategories.clickOnSubcategory("Shoes");
    await productCategories.clickOnSubcategory("T-Shirts");
    await productCategories.clickOnSubcategory("Clothes");
    await productCategories.clickOnSubcategory("Accessories");
    await productCategories.clickOnSubcategory("Bags");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='White LV Bag']")).isPresent()).toBe(false);
  })
  it('RT033',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickKids();
    await productCategories.clickOnSubcategory("Bags");
    await productCategories.clickOnSubcategory("T-Shirts");
    await productCategories.clickOnSubcategory("Clothes");
    await productCategories.clickOnSubcategory("Toys");
    await productCategories.clickOnSubcategory("Toys");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Wilson Tennis Racket']")).isPresent()).toBe(false);
  })
  it('RT034',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickHome();
    await productCategories.clickOnSubcategory("Bed & Bath");
    await productCategories.clickOnSubcategory("Tiles");
    await productCategories.clickOnSubcategory("Carpets");
    await productCategories.clickOnSubcategory("Tables");
    await productCategories.clickOnSubcategory("Chandeliers");
    await productCategories.clickOnSubcategory("Bed & Bath");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Stone Tile Cutter']")).isPresent()).toBe(false);
   })
  it('RT035',async function(){
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await productCategories.clickArt();
    await productCategories.clickOnSubcategory("NFTs");
    await productCategories.clickOnSubcategory("Digital");
    await productCategories.clickOnSubcategory("Paintings");
    await productCategories.clickOnSubcategory("Sculptures");
    await productCategories.clickOnSubcategory("NFTs");
    await productCategories.clickOnSubcategory("Digital");
    await productCategories.clickOnSubcategory("Paintings");
    await productCategories.clickOnSubcategory("Sculptures");
    await browser.sleep(3000);
    await expect(element.all(by.xpath("//h1[normalize-space()='Sculpture']")).isPresent()).toBe(false);
  })
  it('RT036',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await browser.sleep(2000);
    await productCategories.clickOnXpath("//h1[normalize-space()='Various T-Shirts']");
    await browser.sleep(2000);
    await item.insertBid("39");
    await item.placeBid();
    await browser.sleep(2000);
    await expect(element.all(by.id("message-container-topbid")).isPresent()).toBe(true);
  })
  it('RT037',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await browser.sleep(2000);
    await productCategories.clickOnXpath("//h1[normalize-space()='Various T-Shirts']");
    await browser.sleep(2000);
    await item.insertBid("31");
    await item.placeBid();
    await browser.sleep(2000);
    await expect(element.all(by.id("message-container-invalid")).isPresent()).toBe(true);
  })
  it('RT038',async function(){
    await homepage.clickOn("Login");
    await login.insertEmail("adna.torlo@edu.fit.ba");
    await login.insertPassword("adnatorlo123!");
    await login.rememberMe();
    await login.clickLogin();
    await browser.sleep(3000);
    await homepage.clickOn("SHOP");
    await browser.sleep(2000);
    await productCategories.clickOnXpath("//h1[normalize-space()='Sculpture']");
    await browser.sleep(2000);
    await item.insertBid("100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
    await item.placeBid();
    await browser.sleep(2000);
    await expect(element.all(by.id("message-container-invalid")).isPresent()).toBe(true);
  })
});
