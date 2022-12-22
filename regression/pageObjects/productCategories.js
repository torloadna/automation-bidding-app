class productCategories {
    
    async clickFashionPlus(){
        let fashionPlus = element.all(by.xpath("//button[@id='ca69f0cb-8b11-4b3e-8ad7-18b4277f6101']"));
        await fashionPlus.click();
    }
    async clickFashionMinus(){
        let fashionMinus = element.all(by.css("#ca69f0cb-8b11-4b3e-8ad7-18b4277f6101"));
        await fashionMinus.click();
    }
    async clickAccessoriesPlus(){
        let accessoriesPlus = element.all(by.xpath("(//button[@id='95071da4-ec66-4ddc-8a8a-3d2cdd36413f'])[1]"));
        await accessoriesPlus.click();
    }
  }

  module.exports = new productCategories();