class productCategories {
  
    async clickFashion(){
        let fashion = element(by.id("ca69f0cb-8b11-4b3e-8ad7-18b4277f6101"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(fashion), 5000);
        await fashion.click();
    };
    async clickFashionAccessories(){
        let fashionAccessories = element.all(by.id("5237931a-3d92-474a-b98c-96f5d8037b7d"));
        await fashionAccessories.click();
    };
    async clickFashionBelts(){
        let fashionBelts = element.all(by.id("069a6627-61e9-4110-b3fc-d7bee9359675"));
        await fashionBelts.click();
    };
    async clickAccessories(){
        let accessories = element(by.id("95071da4-ec66-4ddc-8a8a-3d2cdd36413f"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(accessories), 5000);
        await accessories.click();
    };
    async clickAccessoriesJewelry(){
        let jewelry = element.all(by.id("19dced5d-98fd-42f7-8355-1387f4df3072"));
        jewelry.click();
    };
    async clickAccessoriesScarves(){
        let scarves = element.all(by.id("4b454007-b411-48b7-82a0-40a087afd1ae"));
        scarves.click();
    };
    async clickAccessoriesGloves(){
        let gloves = element.all(by.id("c47adf4c-8b65-401a-94bd-848a02c38360"));
        gloves.click();
    };
    async clickElectronics(){
        let electronics = element(by.id("224c7a92-8868-4a40-803e-c25465ea5f67"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(electronics), 5000);
        await electronics.click();
    };
    async clickElectronicsMobile(){
        let mobile = element.all(by.id("d930a98a-710c-4c40-b60b-9cc888098444"));
        mobile.click();
    };
    async clickElectronicsMicrowaves(){
        let microwaves = element.all(by.id("fbb08d83-3259-494a-9676-cba908ed766b"));
        microwaves.click();
    };
    async clickElectronicsTVs(){
        let TVs = element.all(by.id("6bb4c1d9-60b4-41a0-911e-04b5d39c1571"));
        TVs.click();
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
    async clickOnLV(){
        let LV = element.all(by.xpath("//h1[normalize-space()='White LV Bag']"));
        LV.click();
    };
  }

  module.exports = new productCategories();