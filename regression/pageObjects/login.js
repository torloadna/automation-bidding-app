class login {
    async insertEmail(mail){
        let email = element.all(by.id('input-email-auth'));
        await email.sendKeys(mail);
    };
    async insertPassword(pass){
        let password = element.all(by.id('input-password'));
        await password.sendKeys(pass);
    };
    async rememberMe(){
        let rememberMeCheckbox = element.all(by.id("remember-me-checkbox"));
        await rememberMeCheckbox.click();
    };
    async clickLogin(){
        let loginButton = element.all(by.xpath("//button[normalize-space()='LOGIN']"));
        await loginButton.click();
    };

}
module.exports = new login();