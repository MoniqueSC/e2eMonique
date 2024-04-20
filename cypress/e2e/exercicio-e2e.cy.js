/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const elements = require('../support/elements').ELEMENTS

const cons = require('../fixtures/constantes.json')

describe('funcionalidade: Exercicio', () => {

    beforeEach(() => {
        cy.visit(cons.site)
    })
    afterEach(() => {
        cy.end()
    })

    it('E2E', () => {

        //produto 1
        cy.get(elements.sessaoComprar).should('be.visible').click()
        cy.get(elements.barraDeBusca).should('be.visible').click().type(cons.produto1)
        cy.get(elements.botaoProcurar).should('be.visible').click()
        cy.get(elements.selecionarTamanhoXs).should('be.visible').click()
        cy.get(elements.selecionarCorAzul).should('be.visible').click()
        cy.get(elements.adicionarAoCarrinho).should('be.visible').click()
        cy.get(elements.mensagemDeValidacao).should('contain', cons.produto1).should('contain', 'foi adicionado no seu carrinho')

        //produto 2
        cy.get(elements.sessaoComprar).should('be.visible').click()
        cy.get(elements.barraDeBusca).should('be.visible').click().type(cons.produto2)
        cy.get(elements.botaoProcurar).should('be.visible').click()
        cy.get(elements.selecionarTamanhoXs).should('be.visible').click()
        cy.get(elements.selecionarCorPreta).should('be.visible').click()
        cy.get(elements.adicionarAoCarrinho).should('be.visible').click()
        cy.get(elements.mensagemDeValidacao).should('contain', cons.produto2).should('contain', 'foi adicionado no seu carrinho')

        //produto3
        cy.get(elements.sessaoComprar).should('be.visible').click()
        cy.get(elements.barraDeBusca).should('be.visible').click().type(cons.produto3)
        cy.get(elements.botaoProcurar).should('be.visible').click()
        cy.get(elements.selecionarTamanho32).should('be.visible').click()
        cy.get(elements.selecionarCorAzul).should('be.visible').click()
        cy.get(elements.adicionarAoCarrinho).should('be.visible').click()
        cy.get(elements.mensagemDeValidacao).should('contain', cons.produto3).should('contain', 'foi adicionado no seu carrinho')

        //produto4

        cy.get(elements.sessaoComprar).should('be.visible').click()
        cy.get(elements.barraDeBusca).should('be.visible').click().type(cons.produto4)
        cy.get(elements.botaoProcurar).should('be.visible').click()
        cy.get(elements.selecionarTamanhoXs).should('be.visible').click()
        cy.get(elements.selecionarCorCinza).should('be.visible').click()
        cy.get(elements.adicionarAoCarrinho).should('be.visible').click()
        cy.get(elements.mensagemDeValidacao).should('contain', cons.produto4).should('contain', 'foi adicionado no seu carrinho')



        cy.get(elements.verCarrinho).click()
        cy.get(elements.concluirCompra).click()

        //preencher cadastro
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
        cy.get(elements.pagamentoNaEntrega).click();
        cy.get(elements.termos).click();
        cy.get(elements.finalizarCompra).click();

        cy.get(elements.pedidoConcluido).should('contain', cons.msgPedidoConcluido);
    })
})