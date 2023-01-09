class productCategories {
  
    async clickFashion(){
        let fashion = element(by.id("ca69f0cb-8b11-4b3e-8ad7-18b4277f6101")); 
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(fashion), 5000);
        await fashion.click();
    };
    async clickAccessories(){
        let accessories = element(by.id("95071da4-ec66-4ddc-8a8a-3d2cdd36413f"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(accessories), 5000);
        await accessories.click();
    };
    async clickElectronics(){
        let electronics = element(by.id("224c7a92-8868-4a40-803e-c25465ea5f67"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(electronics), 5000);
        await electronics.click();
    };
    async clickComputers(){
        let computers = element(by.id("d8824d41-b1eb-4ad1-ae41-748f96edcad1"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(computers), 5000);
        await computers.click();
    };
    async clickSportswear(){
        let sportswear = element(by.id("bee0b6b2-d8bd-4268-9965-24e087f3a91e"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(sportswear), 5000);
        await sportswear.click();
    };
    async clickMen(){
        let men = element(by.id("02a9578a-3447-4c92-8e26-a48656e9c667"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(men), 5000);
        await men.click();
    };
    async clickWomen(){
        let women = element(by.id("689acc50-0445-4915-90f1-1861b83b9415"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(women), 5000);
        await women.click();
    };
    async clickKids(){
        let kids = element(by.id("2d919425-b430-4444-9bfe-744d7bf86f41"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(kids), 5000);
        await kids.click();
    };
    async clickHome(){
        let home = element(by.id("d122434b-30ab-40e2-9485-c31c1188b9a4"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(home), 5000);
        await home.click();
    };
    async clickArt(){
        let art = element(by.id("0f97bbcf-bb7d-4f6c-bcab-83ce894e69f3"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(art), 5000);
        await art.click();
    };
    async clickOnId(ids){
        let el = element.all(by.id(ids));
        await el.click();
    }
    async clickOnXpath(xpath){
        let el = element.all(by.xpath(xpath));
        await el.click();
    }
    async clickOnSubcategory(xpath){
        let el = element.all(by.xpath("//input[@value='"+xpath+"']"));
        await el.click();
    }
  }
  module.exports = new productCategories();