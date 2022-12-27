class homepage {
    
    async clickOn(filed_name){
        let el = element.all(by.linkText(filed_name));
        await el.click();
    }
  }
  
  module.exports = new homepage();
  