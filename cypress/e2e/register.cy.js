/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')
import { registerPage } from '../page_object/registerPage';

describe("Register page", () => {
    it("Visit register page", () => {
        cy.visit('/register')
    });
    it('Successful register', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type('Natalija');
        registerPage.lastNameInputField.type('Radic');
        registerPage.emailInputField.type('natka.radic@gmail.com');
        registerPage.passwordInputField.type('Naftalija1986');
        registerPage.passwordConfirmationInputField.type('Naftalija1986');
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without email', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type('Natalija');
        registerPage.lastNameInputField.type('Radic');
        registerPage.emailInputField.clear;
        registerPage.passwordInputField.type('Naftalija1986');
        registerPage.passwordConfirmationInputField.type('Naftalija1986');
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without password', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type('Natalija');
        registerPage.lastNameInputField.type('Radic');
        registerPage.emailInputField.type('natka.radic@gmail.com');
        registerPage.passwordInputField.clear;
        registerPage.passwordConfirmationInputField.clear;
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without first name', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.clear;
        registerPage.lastNameInputField.type('Radic');
        registerPage.emailInputField.type('natka.radic@gmail.com');
        registerPage.passwordInputField.type('Naftalija1986');
        registerPage.passwordConfirmationInputField.type('Naftalija1986');
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without last name', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type('Natalija');
        registerPage.lastNameInputField.clear;
        registerPage.emailInputField.type('natka.radic@gmail.com');
        registerPage.passwordInputField.type('Naftalija1986');
        registerPage.passwordConfirmationInputField.type('Naftalija1986');
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without clicing on checkbox button', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type('Natalija');
        registerPage.lastNameInputField.type('Radic');
        registerPage.emailInputField.type('natka.radic@gmail.com');
        registerPage.passwordInputField.type('Naftalija1986');
        registerPage.passwordConfirmationInputField.type('Naftalija1986');
        registerPage.checkBoxBtn.clear;
        registerPage.submitBtn.click();
    });
});