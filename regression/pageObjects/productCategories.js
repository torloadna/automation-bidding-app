class productCategories {
    
    async clickFashionPlus(){
        let fashionMinus = element.all(by.xpath("//button[normalize-space()='-']"));
        await fashionMinus.click();
    }
    async clickFashionMinus(){
        let fashionPlus = element.all(by.xpath("(//button[contains(text(),'+')])[1]"));
        await fashionPlus.click();
    }
    async clickAccessoriesPlus(){
        let accessoriesPlus = element.all(by.xpath("(//button[@id='95071da4-ec66-4ddc-8a8a-3d2cdd36413f'])[1]"));
        await accessoriesPlus.click();
    }
  }

  module.exports = new productCategories();