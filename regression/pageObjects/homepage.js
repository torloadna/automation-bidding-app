class homepage {
    
    async clickFashion() {
        let fashion = element.all(by.linkText('Fashion'));
        await fashion.click();
    }
    async clickAccessories(){
        let accessories = element.all(by.xpath('//a[normalize-space()="Accessories"]'));
        await accessories.click();
    }
    async clickElectronics(){
        let electronics = element.all(by.xpath('//a[normalize-space()="Electronics"]'));
        await electronics.click();
    }
    async clickComputers(){
        let computers = element.all(by.xpath('//a[normalize-space()="Computers"]'));
        await computers.click();
    } 
    async clickSportswear(){
        let sportswear = element.all(by.xpath('//a[normalize-space()="Sportswear"]'));
        await sportswear.click();
    }
    async clickMen(){
        let men = element.all(by.xpath('//a[normalize-space()="Men"]'));
        await men.click();
    }
    async clickWomen(){
        let women = element.all(by.xpath('//a[normalize-space()="Women"]'));
        await women.click();
    }
    async clickKids(){
        let kids = element.all(by.xpath('//a[normalize-space()="Kids"]'));
        await kids.click();
    }
    async clickHome(){
        let home = element.all(by.xpath('//a[normalize-space()="Home"]'));
        await home.click();
    }
    async clickArt(){
        let art = element.all(by.xpath('//a[normalize-space()="Art"]'));
        await art.click();
    }
    async clickCreateAnAccount(){
        let createAnAccount = element.all(by.linkText("Create an account"));
        await createAnAccount.click();
    }
  }

  module.exports = new homepage();
  