class CheckoutPage {

    validarSafePaySelected() {
        cy.get('input[type="radio"][name=safepay]').should('be.checked');
    }
    adicionarSafePayUsername(usuario) {
        cy.get('[name="safepay_username"]').clear().type(usuario);
    }
    adicionarSafePayPassword(usuario) {
        cy.get('[name="safepay_password"]').clear().type(usuario);
    }

    efetuarPagamento(){
        cy.get('#pay_now_btn_SAFEPAY')
        .should('be.enabled')
        .click();
    }

    validarPedidoComSucesso(){
        cy.get('#orderPaymentSuccess').should('be.visible');
    }
}
const checkout = new CheckoutPage();
export default checkout;