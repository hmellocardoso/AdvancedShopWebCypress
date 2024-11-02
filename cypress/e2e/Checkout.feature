Feature: Checkout

    Scenario Outline: Checkout SafePay com sucesso
        Given que eu esteja logado
        When Adiciono o produto "<produto>" desejado no carrinho
        And Navego até a página de pagamento
        And Adiciono usuario "<usuario>" e senha "<senha>" do SafePay
        And Efetuo pagamento
        Then Valido se pedido foi feito com sucesso
        Examples:
        | produto       | usuario     | senha     |
        | hp elitepad   | usuario123  | Senha123* |