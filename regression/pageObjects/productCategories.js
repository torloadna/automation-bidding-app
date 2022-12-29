class productCategories {

    // this pageObject is still not working 
    //can't find right locator for "+" and "-" part of the page
    
    async clickFashionPlus(){
        let fashionMinus = element.all(by.xpath("//button[normalize-space()='-']"));
        await fashionMinus.click();
    }
    async clickFashionMinus(){
        let fashionPlus = element.all(by.xpath("//div[@id='category-filter']//div[1]//div[1]"));
        await fashionPlus.click();
    }
    async clickAccessoriesPlus(){
        let accessoriesPlus = element.all(by.xpath("(//button[@id='95071da4-ec66-4ddc-8a8a-3d2cdd36413f'])[1]"));
        await accessoriesPlus.click();
    }
    async clickOn(){
        let LV = element.all(by.xpath("//h1[normalize-space()='White LV Bag']"));
        LV.click();
    }
  }

  module.exports = new productCategories();