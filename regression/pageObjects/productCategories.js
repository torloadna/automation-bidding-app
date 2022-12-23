class productCategories {
    
    async clickFashionPlus(){
        let fashionPlus = element.all(by.xpath("/html[1]/body[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]"));
        await fashionPlus.click();
    }
    async clickFashionMinus(){
        let fashionMinus = element.all(by.css("/html[1]/body[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]"));
        await fashionMinus.click();
    }
    async clickAccessoriesPlus(){
        let accessoriesPlus = element.all(by.xpath("(//button[@id='95071da4-ec66-4ddc-8a8a-3d2cdd36413f'])[1]"));
        await accessoriesPlus.click();
    }
  }

  module.exports = new productCategories();