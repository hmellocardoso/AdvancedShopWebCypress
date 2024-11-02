class CartPage {
    navegarParaPagamento() {
        cy.get('#next_btn').click();
    }
}
const cart = new CartPage();
export default cart;