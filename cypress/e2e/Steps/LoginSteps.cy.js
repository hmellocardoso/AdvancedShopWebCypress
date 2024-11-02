import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../Pages/LoginPage.cy';
import home from '../Pages/HomePage.cy';

Given("que eu esteja na página de login", () => {
    home.acessarHome();
    home.acessarAreaLogin();
});

When("eu insiro o usuário e senha corretos", () => {
    cy.fixture("variables").then((variables) => {
        login.digitarUsername(variables.userName);
        login.digitarPassword(variables.password);
    })
    login.clicarLogin();
});

Then("eu valido que usuário está logado", () => {
    cy.fixture("variables").then((variables) => {
        home.validarUsuarioLogado(variables.userName);
    })    
});