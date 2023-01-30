class myAccount {
    async clickOnXpath(filed_name){
        let el = element.all(by.xpath("//span[normalize-space()='"+filed_name+"']"));
        await el.click();
    }
    async insertDateOfBirth(date){
        let dateOfBirth = element.all(by.id("account-date-of-birth"));
        let clickDate = element.all(by.xpath("//td[@title='2001-06-04']"));
        await dateOfBirth.sendKeys(date);
        await clickDate.click();
    }
    async clickSaveInfoButton(){
        let button = element.all(by.xpath("//button[normalize-space()='SAVE INFO']"));
        await button.click();
    }
    async insert(id,data){
        let el = element.all(by.id(id));
        await el.sendKeys(data);
    }
  }
  module.exports = new myAccount();