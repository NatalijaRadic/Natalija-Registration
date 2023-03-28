class NavigationBar {
    get logoutBtn(){
        return cy.get("a[role='button ']")
    }
    get registerBtn(){
        return cy.get("a[href='/register']")
    }
    get createGal(){
        return cy.get("a[href='/create']")
    }
}
export const navigationBar= new NavigationBar()