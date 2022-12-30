class productCategories {
  
    async clickFashion(){
        let fashion = element(by.id("ca69f0cb-8b11-4b3e-8ad7-18b4277f6101"));
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
        await accessories.click();
    };
    async clickElectronics(){
        let electronics = element(by.id("224c7a92-8868-4a40-803e-c25465ea5f67"));
        await electronics.click();
    };
    async clickComputers(){
        let computers = element(by.id("d8824d41-b1eb-4ad1-ae41-748f96edcad1"));
        await computers.click();
    };
    async clickSportswear(){
        let sportswear = element(by.id("bee0b6b2-d8bd-4268-9965-24e087f3a91e"));
        await sportswear.click();
    };
    async clickMen(){
        let men = element(by.id("02a9578a-3447-4c92-8e26-a48656e9c667"));
        await men.click();
    };
    async clickWomen(){
        let women = element(by.id("689acc50-0445-4915-90f1-1861b83b9415"));
        await women.click();
    };
    async clickKids(){
        let kids = element(by.id("2d919425-b430-4444-9bfe-744d7bf86f41"));
        await kids.click();
    };
    async clickHome(){
        let home = element(by.id("d122434b-30ab-40e2-9485-c31c1188b9a4"));
        await home.click();
    };
    async clickArt(){
        let art = element(by.id("0f97bbcf-bb7d-4f6c-bcab-83ce894e69f3"));
        await art.click();
    };
    async clickOnLV(){
        let LV = element.all(by.xpath("//h1[normalize-space()='White LV Bag']"));
        LV.click();
    };
  }

  module.exports = new productCategories();