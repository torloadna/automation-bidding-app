const homepage = require('../pageObjects/homepage');
const productCategories = require('../pageObjects/productCategories');
const createAnAccount = require('../pageObjects/createAnAccount');

describe('regression tests', ()=> {

  
  beforeEach(async function() {  
    browser.ignoreSynchronization = true;
    await browser.get('http://ec2-3-73-53-128.eu-central-1.compute.amazonaws.com:8090/');
    await browser.manage().window().maximize();
  });


  it('RT001',async function(){
    await homepage.clickFashion();
    await browser.sleep(7000);
  });
  it('RT002',async function(){
    await browser.sleep(2000);
    await homepage.clickAccessories();
  });
  it('RT003',async function(){
    await homepage.clickElectronics();
  })
  it('RT004',async function(){
    await homepage.clickComputers();
  })
  it('RT005',async function(){
    await homepage.clickSportswear();
  })
  it('RT006',async function(){
    await homepage.clickMen();
  })
  it('RT007',async function(){
    await homepage.clickWomen();
  })
  it('RT008',async function(){
    await homepage.clickKids();
  })
  it('RT009',async function(){
    await homepage.clickHome();
  })
  it('RT010',async function(){
    await homepage.clickArt();
  })
  it('RT011',async function(){
    await homepage.clickCreateAnAccount();
    await createAnAccount.insertUsername('adna123');
    await createAnAccount.insertName('Adna');
    await createAnAccount.insertLastName('Torlo');
    await createAnAccount.insertEmail('adna.torlo@edu.fit.ba');
    await createAnAccount.insertPassword('adnatorlo123!');
    await browser.sleep(4000);
  })
});
