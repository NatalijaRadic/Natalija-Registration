/// <reference types="Cypress" />
import { registerPage } from '../page_object/registerPage';
import { loginPage } from '../page_object/loginPage';
import { createGalleryPage } from '../page_object/createGalleryPage';
import { faker } from '@faker-js/faker';
import { navigationBar } from '../page_object/navigationBar';
import { count } from 'rxjs';
var pass  = faker.internet.password();
var userEmail = faker.internet.email();

describe('Create new gallery', () => {
    before(() => {
          cy.clearAllCookies();
          cy.clearAllLocalStorage();
          cy.clearAllSessionStorage();
    });
    beforeEach(() => {
        cy.visit('/login');
        cy.url().should('contains', '/login');
        loginPage.emailInputField.type(userEmail);
        loginPage.passwordInputField.type(pass);
        loginPage.submitBtn.click();

        navigationBar.registerBtn.should('not.exist');
        navigationBar.logoutBtn.should('be.visible')
        navigationBar.createGal.should('be.visible');
   
    });
    it('Successful create gallery', () => {
        cy.visit('/create');
        
        createGalleryPage.titleHeading.should('have.text', 'Create Gallery')
        .and('have.css', 'font-size', '45px')
        .and('have.css', 'color', 'rgb(72, 73, 75)')
        .and('have.css', 'text-transform', 'upper-case');
        
        createGalleryPage.titleInputField.type('Dog')
        createGalleryPage.titleInputField.should('be.visible')
        .and('have.class', 'form-control')
        .and('have.id', 'title')
        .and('be.a', 'string')
        .and('have.css', 'border-radius', '20px')
        .and('have.text', 'required');

        createGalleryPage.descriptionInputField.type('Animal-dog')
        createGalleryPage.descriptionInputField.should('be.visible')
        .and('have.attr', 'type')
        .and('have.css', 'display', 'block');
        
        createGalleryPage.imageInputField.type('https://static.wikia.nocookie.net/acecombat/images/d/df/JPEG_Dog.png');
        createGalleryPage.imageInputField.should('be.visible')
        .and('have.attr', 'required')
        .and('have.attr', 'type', 'url')
        .and('have.attr', 'placeholder')
        .and('have.class','form-control')
        .and('have.css', 'display', 'block');

        createGalleryPage.buttonUp.should('have.attr', 'type')
        .and('have.class', 'input-buttons');

        createGalleryPage.buttonDown.should('have.class', 'input-buttons');

        createGalleryPage.addImageBtn.should('have.attr', 'type')
    
        createGalleryPage.submitBtn.click();
    });

    it('Create gallery without title',() => {
        cy.visit('/create');

        createGalleryPage.titleInputField.clear;
        createGalleryPage.titleInputField.should('have.length', count);
        createGalleryPage.titleHeading.should('be.visible');
        
        createGalleryPage.descriptionInputField.type('White dog');

        createGalleryPage.imageInputField.type('https://static.wikia.nocookie.net/acecombat/images/d/df/JPEG_Dog.png');
        
        createGalleryPage.submitBtn.click();

    });

    it('Create gallery with gif extension ', () => {
        cy.visit('/create');
        
        createGalleryPage.titleHeading.should('be.visible')
        .and('not.have.class', 'input-buttons');

        createGalleryPage.titleInputField.type('Rotating_Earth');
    
        createGalleryPage.descriptionInputField.type('Rotating_Earth');

        createGalleryPage.imageInputField.type('https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif')

    });

    it('Minimum title characters', () => {
        cy.visit('/create');

        createGalleryPage.titleInputField.type('A');
                
        createGalleryPage.descriptionInputField.type('White dog');

        createGalleryPage.imageInputField.type('https://static.wikia.nocookie.net/acecombat/images/d/df/JPEG_Dog.png');
        
        createGalleryPage.submitBtn.click();


    });


   
});