class homepage {
    
    async clickOn(filed_name){
        let el = element.all(by.linkText(filed_name));
        await el.click();
    }
    async clickOnIcon(xpath){
        let el = element.all(by.xpath(xpath));
        await el.click();
    }
  }
  
  module.exports = new homepage();
  