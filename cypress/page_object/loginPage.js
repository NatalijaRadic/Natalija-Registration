class LoginPage{
    get emailInputField(){
        return cy.get('input[id="email"]');
    }
    get passwordInputField(){
        return cy.get('input[id="password"]');
    }
    get submitBtn(){
        return cy.get('button[type="submit"]');
    }

    loginUser(userEmail, password){
        this.emailInputField.type(userEmail);
        this.passwordInputField.type(password);
        this.submitBtn.click();
    }
    
}

export const loginPage = new LoginPage;