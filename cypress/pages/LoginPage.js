class LoginPage {
    loginToKura(username, password) {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get("#btn-login").click();
    }
    invalidAssertion() {
        cy.get(".lead.text-danger").should("have.text", "Login failed! Please ensure the username and password are valid.");
    }
}

export default LoginPage;