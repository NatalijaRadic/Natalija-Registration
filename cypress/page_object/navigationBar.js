class NavigationBar {
    get logoutBtn(){
        return cy.get("a[role='button ']")
    }
}
export const navigationBar= new NavigationBar()