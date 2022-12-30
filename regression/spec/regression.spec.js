const homepage = require('../pageObjects/homepage');
const productCategories = require('../pageObjects/productCategories');
const createAnAccount = require('../pageObjects/createAnAccount');
const login = require('../pageObjects/login');

describe('regression tests', ()=> {

  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-73-53-128.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
  });

  it('RT001',async function(){
    await homepage.clickOn("Fashion");
  })
  it('RT002',async function(){
    await homepage.clickOn("Accessories");
  })
  it('RT003',async function(){
    await homepage.clickOn("Electronics");
  })
  it('RT004',async function(){
    await homepage.clickOn("Computers");
  })
  it('RT005',async function(){
    await homepage.clickOn("Sportswear");
  })
  it('RT006',async function(){
    await homepage.clickOn("Men");
  })
  it('RT007',async function(){
    await homepage.clickOn("Women");
  })
  it('RT008',async function(){
    await homepage.clickOn("Kids");
  })
  it('RT009',async function(){
    await homepage.clickOn("Home");
  })
  it('RT010',async function(){
    await homepage.clickOn("Art");
  })
  it('RT011',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna123');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.ba');
    await createAnAccount.insertPassword('adnatorlo123!');
  })
  it('RT012',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('_adna_');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.ba');
    await createAnAccount.insertPassword('adnatorlo123!');
  })
  it('RT013',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna123');
    await createAnAccount.insertName('_123_');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.ba');
    await createAnAccount.insertPassword('adnatorlo123!');
  })
  it('RT014',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna123');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('_123_');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.ba');
    await createAnAccount.insertPassword('adnatorlo123!');
  })
  it('RT015',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna123');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna@adna');
    await createAnAccount.insertPassword('adnatorlo123!');
  })
  it('RT016',async function(){
    await homepage.clickOn("Create an account");
    await createAnAccount.insertUsername('adna123');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.ba');
    await createAnAccount.insertPassword('1');
  })
  it('RT017',async function(){
    await homepage.clickOn("HOME");
  })
  it('RT018',async function(){
    await homepage.clickOn("SHOP");
  })
  it('RT019',async function(){
    await homepage.clickOn("MY ACCOUNT");
  })
  it('TR023',async function(){
    homepage.clickOn("Login");
    login.insertEmail("adna.torlo@edu.fit.ba");
    login.insertPassword("adnatorlo123!");
    login.clickLogin();
  })
  it('TR024',async function(){
    homepage.clickOn("Login");
    login.insertEmail("adna.torlo@edu.fit.ba");
    login.insertPassword("adnatorlo123!");
    //login.rememberMe();
    login.clickLogin();
  })
  it('TR025',async function(){
    homepage.clickOn("Login");
    login.insertEmail("adna.torlo@edu.dif.ba");
    login.insertPassword("adnatorlo123!");
    //login.rememberMe();
    login.clickLogin();
  })
  it('TR026',async function(){
    homepage.clickOn("Login");
    login.insertEmail("adna.torlo@edu.fit.ba");
    login.insertPassword("adnatorlo123");
    //login.rememberMe();
    login.clickLogin();
  })
  it('TR027',async function(){
    await homepage.clickOn("SHOP");
    await productCategories.clickFashion();
    await productCategories.clickFashionAccessories();
    await productCategories.clickFashionBelts();
    await productCategories.clickFashionAccessories();
    await productCategories.clickFashionBelts();
  })
  it('TR028',async function(){
    await homepage.clickOn("SHOP");
    await productCategories.clickAccessories();
    await productCategories.clickAccessoriesJewelry();
    await productCategories.clickAccessoriesScarves();
    await productCategories.clickAccessoriesGloves();
    await productCategories.clickAccessoriesJewelry();
  });
  it('TR029',async function(){
    await homepage.clickOn("SHOP");
    await productCategories.clickElectronics();
    await productCategories.clickElectronicsMobile();
    await productCategories.clickElectronicsMicrowaves();
    await productCategories.clickElectronicsTVs();
    await productCategories.clickElectronicsMobile();
    await productCategories.clickElectronicsMicrowaves();
    await productCategories.clickElectronicsTVs();
  });
});
