class myAccount {
    async clickOnXpath(filed_name){
        let el = element.all(by.xpath("//span[normalize-space()='"+filed_name+"']"));
        await browser.actions().sendKeys(protractor.Key.END).perform();
        await browser.sleep(1500);
        await el.click();
        await browser.sleep(1500);
    }
    async clickOnAddressInfo(){
        let el = element.all(by.xpath("(//div[@role='button'])[3]"));
        await browser.actions().sendKeys(protractor.Key.END).perform();
        await browser.sleep(1500);
        await el.click();
        await browser.sleep(1500);
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
    async selectCountry(){
        let country = element.all(by.xpath("//span[@class='ant-select-selection-item']"));
        await country.click();
        await browser.sleep(2000);
        let bosnia = element.all(by.xpath("//div[@title='Bosnia Herzegovina']//div[@class='ant-select-item-option-content']"));
        await bosnia.click();
    }
  }
  module.exports = new myAccount();