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
    get headingBtn(){
        return cy.get('h1[class="title-style"]');
    }
    get alert(){
        return cy.get('p[class="alert alert-danger"]');
    }
    get logoutBtn(){
        return cy.get('')
    }
}
export const registerPage = new RegisterPage;
