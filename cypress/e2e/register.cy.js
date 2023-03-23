/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')
import { registerPage } from '../page_object/registerPage';
import {faker} from '@faker-js/faker'
import { number } from 'assert-plus';
var pass = faker.internet.password();
var userEmail = faker.internet.email();
var userFirstName = faker.name.firstName();

describe("Register page", () => {
    it("Visit register page", () => {
        cy.visit('/register')
    });
    it.only('Successful register', () => {
        cy.visit("/register");
        cy.url().should('contains',  '/register');
        registerPage.headingBtn.should('have.text', 'Register')
        .and('have.css', 'text-transform', 'uppercase')
        .and('have.css', 'color', 'rgb(72, 73, 75)');
        registerPage.firstNameInputField.type(userFirstName);
        registerPage.firstNameInputField.should('be.visible')
        .and('have.value', userFirstName);
        registerPage.lastNameInputField.should('be.visible');
        registerPage.lastNameInputField.type(faker.name.lastName());
        registerPage.emailInputField.type(faker.internet.email());
        registerPage.passwordInputField.type(pass);
        registerPage.passwordConfirmationInputField.type(pass);
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
     
        
    });
    it('Register without email', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type(faker.name.firstName());
        registerPage.lastNameInputField.type(faker.name.lastName());
        registerPage.emailInputField.type(faker.internet.email());
        registerPage.passwordInputField.type(pass);
        registerPage.passwordConfirmationInputField.type(pass);
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
        registerPage.alert.should('be.visible')
        .and('have.text', 'The email has already been taken')
        .and('have.css', 'color', 'rgb(114, 28, 36)');
    });
    it('Register without password', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type(faker.name.firstName());
        registerPage.lastNameInputField.type(faker.name.lastName());
        registerPage.emailInputField.type(faker.internet.email());
        registerPage.passwordInputField.clear;
        registerPage.passwordConfirmationInputField.clear;
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without first name', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.clear;
        registerPage.lastNameInputField.type(faker.name.lastName());
        registerPage.emailInputField.type(faker.internet.email());
        registerPage.passwordInputField.type(pass);
        registerPage.passwordConfirmationInputField.type(pass);
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without last name', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type(faker.name.firstName());
        registerPage.lastNameInputField.clear;
        registerPage.emailInputField.type(faker.internet.email());
        registerPage.passwordInputField.type(pass);
        registerPage.passwordConfirmationInputField.type(pass);
        registerPage.checkBoxBtn.click();
        registerPage.submitBtn.click();
    });
    it('Register without clicing on checkbox button', () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type(faker.name.firstName());
        registerPage.lastNameInputField.type(faker.name.lastName());
        registerPage.emailInputField.type(faker.internet.email);
        registerPage.passwordInputField.type(pass);
        registerPage.passwordConfirmationInputField.type(pass);
        registerPage.checkBoxBtn.clear;
        registerPage.submitBtn.click();
    });
});