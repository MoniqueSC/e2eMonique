
const elements = require('../support/elements').ELEMENTS
import { faker } from '@faker-js/faker';
const cons = require('../fixtures/constantes.json')

Cypress.Commands.add('adicionarProdutoNoCarrinho', (produto, tamanho, cor) => {
    cy.get(elements.sessaoComprar).should('be.visible').click();
    cy.get(elements.barraDeBusca).should('be.visible').click().type(produto);
    cy.get(elements.botaoProcurar).should('be.visible').click();
    cy.get(elements.tamanhoDoProduto + tamanho).should('be.visible').click();
    cy.get(elements.corDoProduto + cor).should('be.visible').click();
    cy.get(elements.adicionarAoCarrinho).should('be.visible').click();
    cy.get(elements.mensagemDeValidacao).should('contain', produto).should('contain', 'foi adicionado no seu carrinho');
});

Cypress.Commands.add('preencherCadastro' , () =>{
    cy.get(elements.primeiroNome).click().type(faker.person.firstName())
    cy.get(elements.sobreNome).click().type(faker.person.lastName())

    cy.get(elements.listaDePaises).click();
    cy.get(elements.paises)
        .contains(cons.pais)
        .click();
    cy.get(elements.brasil).should('have.text', cons.pais);

    cy.get(elements.endereco).click().type(faker.location.streetAddress());
    cy.get(elements.cidade).click().type(faker.location.city());
    cy.get(elements.listaDeEstados).click();
    cy.get(elements.estados)
        .contains(cons.estados)
        .click();
    cy.get(elements.cep).click().type(cons.cep)
    cy.get(elements.numeroTelefone).click().type(cons.numeroTelefone);
    cy.get(elements.email).click().type(faker.internet.email());

})

Cypress.Commands.add('finalizarCompra' , () =>{
    cy.get(elements.pagamentoNaEntrega).click();
    cy.get(elements.termos).click();
    cy.get(elements.finalizarCompra).click();
    cy.get(elements.pedidoConcluido).should('contain', cons.msgPedidoConcluido);
})

Cypress.Commands.add('verCarrinho' , () => {
    cy.get(elements.verCarrinho).click()
})

Cypress.Commands.add('concluirCompra' , () =>{
    cy.get(elements.concluirCompra).click()
})

