
export class LogInPage {
    

    get userNameField() {
        return cy.get('#user-name')
    }

    get passwordField() {
        return cy.get('#password')
    }

    get logInButton() {
        return cy.get('#login-button')
    }

    get errorMessage() {
        return cy.get('h3 data-test = "error"')
    }

    login(username, password) {
        cy.get('#user-name').clear()

    }


}