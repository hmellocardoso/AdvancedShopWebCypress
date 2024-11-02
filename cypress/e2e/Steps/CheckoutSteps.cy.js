import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../Pages/LoginPage.cy';
import home from '../Pages/HomePage.cy';
import busca from '../Pages/BuscaPage.cy';
import pdp from '../Pages/PdpPage.cy';
import cart from '../Pages/CartPage.cy';
import checkout from '../Pages/CheckoutPage.cy';

Given("que eu esteja logado", () => {
    home.acessarHome();
    home.acessarAreaLogin();
    cy.fixture("variables").then((variables) => {
        login.digitarUsername(variables.userName);
        login.digitarPassword(variables.password);
    })
    login.clicarLogin();
    cy.fixture("variables").then((variables) => {
        home.validarUsuarioLogado(variables.userName);
    })
  });
  
  When("Adiciono o produto {string} desejado no carrinho", (produto) => {
    home.buscarProduto(produto);
    busca.navegarPdpProduto();
    pdp.adicionarProdutoCarrinho();
    pdp.navegarCart();
  });
  
  And("Navego até a página de pagamento", () => {
    cart.navegarParaPagamento();
  });
  
  And("Adiciono usuario {string} e senha {string} do SafePay", (usuario, senha) => {
    checkout.validarSafePaySelected();
    checkout.adicionarSafePayUsername(usuario);
    checkout.adicionarSafePayPassword(senha);
  });
  
  And("Efetuo pagamento", () => {
    checkout.efetuarPagamento();
  });
  
  Then("Valido se pedido foi feito com sucesso", () => {
    checkout.validarPedidoComSucesso();
  });