class BuscaPage {
    navegarPdpProduto() {
        cy.get('.AddToCard').trigger('mouseover');
        cy.get('.AddToCard').click();
    }
}
const busca = new BuscaPage();
export default busca;