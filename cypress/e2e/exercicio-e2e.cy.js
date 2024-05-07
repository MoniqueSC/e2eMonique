/// <reference types="cypress" />

describe('funcionalidade: Exercicio', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    afterEach(() => {
        cy.end()
    })

    it('E2E', () => {
        cy.adicionarProdutoNoCarrinho('Augusta Pullover Jacket', 'XS', 'Blue');
        cy.adicionarProdutoNoCarrinho('Aero Daily Fitness Tee', 'XS', 'Black');
        cy.adicionarProdutoNoCarrinho('Aether Gym Pant', '32', 'Blue');
        cy.adicionarProdutoNoCarrinho('Argus All-Weather Tank', 'XS', 'Gray');
        cy.verCarrinho();
        cy.concluirCompra();
        cy.preencherCadastro();
        cy.finalizarCompra();
    })
})