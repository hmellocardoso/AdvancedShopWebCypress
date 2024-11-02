class PdpPage {
    adicionarProdutoCarrinho() {
        cy.get('[name="save_to_cart"]')
        .should('be.visible')
        .click();
    }

    navegarCart() {
        cy.get('#checkOutPopUp')
        .should('be.visible')
        .should('be.enabled')
        .click();
    }
}
const pdp = new PdpPage();
export default pdp;