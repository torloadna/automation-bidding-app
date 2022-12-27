class createAnAccount {
    
    async insertUsername(name){
        let username = element.all(by.id('input-username'));
        await username.sendKeys(name);
    }
    async insertName(name){
        let firstName = element.all(by.id('input-name'));
        await firstName.sendKeys(name);
    }
    async insertLastName(name){
        let lastName = element.all(by.id('input-last-name'));
        await lastName.sendKeys(name);
    }
    async insertEmail(mail){
        let email = element.all(by.id('input-email-auth'));
        await email.sendKeys(mail);
    }
    async insertPassword(pass){
        let password = element.all(by.id('input-password'));
        await password.sendKeys(pass);
    }
    async clickRegister(){
        let register = element.all(by.xpath("//button[normalize-space()='REGISTER']"));
        await register.click();
    }
  }

  module.exports = new createAnAccount();