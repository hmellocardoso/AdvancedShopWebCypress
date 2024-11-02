class HomePage {
    acessarHome() {
      cy.visit('https://advantageonlineshopping.com/#/');
    }
  
    acessarAreaLogin(){
      cy.get('#menuUser').click();
    }
    validarUsuarioLogado(usuario) {
      cy.get('[data-ng-show="userCookie.response"]')
      .should('be.visible')
      .invoke('text')
      .should('contains',usuario);
    }

    buscarProduto(produto){
        cy.get('#menuSearch').click();
        cy.get('#autoComplete').type(produto);
        cy.get('[translate="View_All"]')
        .should('be.visible')
        .click();
    }

  }
  const home = new HomePage();
  export default home;