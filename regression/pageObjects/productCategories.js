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
        await jewelry.click();
    };
    async clickAccessoriesScarves(){
        let scarves = element.all(by.id("4b454007-b411-48b7-82a0-40a087afd1ae"));
        await scarves.click();
    };
    async clickAccessoriesGloves(){
        let gloves = element.all(by.id("c47adf4c-8b65-401a-94bd-848a02c38360"));
        await gloves.click();
    };
    async clickElectronics(){
        let electronics = element(by.id("224c7a92-8868-4a40-803e-c25465ea5f67"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(electronics), 5000);
        await electronics.click();
    };
    async clickElectronicsMobile(){
        let mobile = element.all(by.id("d930a98a-710c-4c40-b60b-9cc888098444"));
        await mobile.click();
    };
    async clickElectronicsMicrowaves(){
        let microwaves = element.all(by.id("fbb08d83-3259-494a-9676-cba908ed766b"));
        await microwaves.click();
    };
    async clickElectronicsTVs(){
        let TVs = element.all(by.id("6bb4c1d9-60b4-41a0-911e-04b5d39c1571"));
        await TVs.click();
    };
    async clickComputers(){
        let computers = element(by.id("d8824d41-b1eb-4ad1-ae41-748f96edcad1"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(computers), 5000);
        await computers.click();
    };
    async clickComputersLaptops(){
        let laptops = element.all(by.id("430fd549-cff8-4701-ae57-6a004f9fa73e"));
        await laptops.click();
    };
    async clickComputersMonitors(){
        let monitors = element.all(by.id("6fd23643-4744-4cca-99e2-1704b3839817"));
        await monitors.click();
    };
    async clickSportswear(){
        let sportswear = element(by.id("bee0b6b2-d8bd-4268-9965-24e087f3a91e"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(sportswear), 5000);
        await sportswear.click();
    };
    async clickSportswearSwimsuits(){
        let swimsuits = element.all(by.id("394ca02d-3040-4c2c-bbee-e57f8edb35f6"));
        await swimsuits.click();
    };
    async clickSportswearShoes(){
        let shoes = element.all(by.id("9ddbe9cd-a46f-46d8-9fba-0e00e9720baa"));
        await shoes.click();
    };
    async clickSportswearTShirts(){
        let TShirts = element.all(by.id("40162501-6cbd-4f0e-bed9-3aecc791a15f"));
        await TShirts.click();
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
    async clickWomenBags(){
        let bags = element.all(by.id("4832a428-ca15-481c-9b0c-b24a915758d7"));
        await bags.click();
    };
    async clickWomenSwimsuits(){
        let swimsuits = element.all(by.id("b72b451c-59a4-42a0-8fee-c53de28aa3c8"));
        await swimsuits.click();
    };
    async clickWomenShoes(){
        let shoes = element.all(by.id("cf4eab2f-c549-4c46-881d-f949b9d1c244"));
        await shoes.click();
    };
    async clickWomenTShirts(){
        let tShirts = element.all(by.id("e9b26ed2-114b-4323-84e7-c0e85d02f85e"));
        await tShirts.click();
    };
    async clickWomenClothes(){
        let clothes = element.all(by.id("f30ac5d0-b3ee-415f-bfb8-78a04a843b6c"));
        await clothes.click();
    };
    async clickWomenAccessories(){
        let accessories = element.all(by.id("92d62c8e-63a5-4fda-aff8-08d2c9e1d74a"));
        await accessories.click();
    };
    async clickKids(){
        let kids = element(by.id("2d919425-b430-4444-9bfe-744d7bf86f41"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(kids), 5000);
        await kids.click();
    };
    async clickKidsBags(){
        let bags = element.all(by.id("1a8a4934-aa2e-4d90-a558-ea80a65945e0"));
        await bags.click();
    };
    async clickKidsTShirts(){
        let bags = element.all(by.id("b4334e67-54a8-4e92-85ed-6251c7ab5156"));
        await bags.click();
    };
    async clickKidsClothes(){
        let bags = element.all(by.id("387d43a7-54f0-403e-bf8c-0a65f77e3088"));
        await bags.click();
    };
    async clickKidsToys(){
        let bags = element.all(by.id("94984e72-985a-4c2d-953a-ecaabc2906ef"));
        await bags.click();
    };
    async clickHome(){
        let home = element(by.id("d122434b-30ab-40e2-9485-c31c1188b9a4"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(home), 5000);
        await home.click();
    };
    async clickHomeBedAndBath(){
        let bedAndBath = element.all(by.id("e4020397-1c18-47b3-9d0b-ac9cc550163e"));
        await bedAndBath.click();
    };
    async clickHomeTiles(){
        let tiles = element.all(by.id("cefe538a-4624-4aa2-b7e2-8613d7c5eb9c"));
        await tiles.click();
    };
    async clickHomeCarpets(){
        let carpets = element.all(by.id("ae407125-291b-41b5-a7f2-c13d83eec2d4"));
        await carpets.click();
    };
    async clickHomeTables(){
        let tables = element.all(by.id("e0cc95bb-6f1a-497e-8f63-8c2ad3ff47ef"));
        await tables.click();
    };
    async clickHomeChandeliers(){
        let chandeliers = element.all(by.id("bfd41d47-d5a4-4a57-96eb-b59f9b4a6f09"));
        await chandeliers.click();
    };
    async clickArt(){
        let art = element(by.id("0f97bbcf-bb7d-4f6c-bcab-83ce894e69f3"));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(art), 5000);
        await art.click();
    };
    async clickArtNFTs(){
        let NFTs = element.all(by.id("a9f7700c-b458-40f6-80ac-ebe28327ccad"));
        await NFTs.click();
    };
    async clickArtDigital(){
        let NFTs = element.all(by.id("81d79ed2-f9be-4819-a3dd-f5f2407abb22"));
        await NFTs.click();
    };
    async clickArtPaintings(){
        let NFTs = element.all(by.id("4e7cb888-d97c-4fa6-a3a2-a6cc6cd6debf"));
        await NFTs.click();
    };
    async clickArtSculptures(){
        let NFTs = element.all(by.id("f52e1fdb-cca2-46db-a19b-8e7a446f64d6"));
        await NFTs.click();
    };
    async clickOnLV(){
        let LV = element.all(by.xpath("//h1[normalize-space()='White LV Bag']"));
        await LV.click();
    };
    async clickOnSculpture(){
        let sculpture = element.all(by.xpath("//h1[normalize-space()='Sculpture']"));
        await sculpture.click();
    }
  }

  module.exports = new productCategories();