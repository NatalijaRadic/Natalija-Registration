class LoginPage{
    get emailInputField(){
        return cy.get('#email');
    }
    get passwordInputField(){
        return cy.get('#password');
    }
    get submitBtn(){
        return cy.get('button[type="submit"]')
    }

    loginUser(userEmail, password){
        this.emailInputField.type(userEmail);
        this.passwordInputField.type(password);
        this.submitBtn.click();
    }
    
}

export default loginPage = new LoginPage()