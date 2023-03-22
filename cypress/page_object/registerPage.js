class RegisterPage{
    get firstNameInputField(){
        return cy.get('input[id="first-name"]');
    }
    get lastNameInputField(){
        return cy.get('input[id="last-name"]');
    }
    get emailInputField(){
        return cy.get('input[id="email"]');
    }
    get passwordInputField(){
        return cy.get('input[id="password"]');
    }
    get passwordConfirmationInputField(){
        return cy.get('input[id="password-confirmation"]');
    }
    get checkBoxBtn(){
        return cy.get('input[type="checkbox"]');
    }
    get submitBtn(){
        return cy.get('button[type="submit"]');
    }
}

export const registerPage = new RegisterPage;
