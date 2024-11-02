class LoginPage {
    digitarUsername(username) {
      cy.get('[name="username"]').type(username);
    }
  
    digitarPassword(password) {
      cy.get('[name="password"]').type(password);
    }
  
    clicarLogin() {
      cy.get('#sign_in_btn')
      .should('be.enabled')
      .click();
    }
  }
  const login = new LoginPage();
  export default login;