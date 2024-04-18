/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

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
         cy.get('#primary-menu > .menu-item-629 > a').should('be.visible').click()
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').should('be.visible').click().type(cons.produto1)
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').should('be.visible').click()
         cy.get('.button-variable-item-XS').should('be.visible').click()
         cy.get('.button-variable-item-Blue').should('be.visible').click()
         cy.get('.single_add_to_cart_button').should('be.visible').click()
         cy.get('.woocommerce-message').should('contain', cons.produto1).should('contain', 'foi adicionado no seu carrinho')
 
         //produto 2
         cy.get('#primary-menu > .menu-item-629 > a').should('be.visible').click()
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').should('be.visible').click().type(cons.produto2)
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').should('be.visible').click()
         cy.get('.button-variable-item-XS').should('be.visible').click()
         cy.get('.button-variable-item-Black').should('be.visible').click()
         cy.get('.single_add_to_cart_button').should('be.visible').click()
         cy.get('.woocommerce-message').should('contain', cons.produto2).should('contain', 'foi adicionado no seu carrinho')
 
         //produto3
         cy.get('#primary-menu > .menu-item-629 > a').should('be.visible').click()
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').should('be.visible').click().type(cons.produto3)
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').should('be.visible').click()
         cy.get('.button-variable-item-32').should('be.visible').click()
         cy.get('.button-variable-item-Blue').should('be.visible').click()
         cy.get('.single_add_to_cart_button').should('be.visible').click()
         cy.get('.woocommerce-message').should('contain', cons.produto3).should('contain', 'foi adicionado no seu carrinho')
 
         //produto4
         cy.get('#primary-menu > .menu-item-629 > a').should('be.visible').click()
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').should('be.visible').click().type(cons.produto4)
         cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').should('be.visible').click()
         cy.get('.button-variable-item-XS').should('be.visible').click()
         cy.get('.button-variable-item-Gray').should('be.visible').click()
         cy.get('.single_add_to_cart_button').should('be.visible').click()
         cy.get('.woocommerce-message').should('contain', cons.produto4).should('contain', 'foi adicionado no seu carrinho')



        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        //preencher cadastro
        cy.get('#billing_first_name').click().type(faker.person.firstName())
        cy.get('#billing_last_name').click().type(faker.person.lastName())

        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-results__options')
            .contains('Brasil')
            .click();
        cy.get('#select2-billing_country-container').should('have.text', 'Brasil');

        cy.get('#billing_address_1').click().type(faker.location.streetAddress());
        cy.get('#billing_city').click().type(faker.location.city());
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-results__options')
            .contains('São Paulo')
            .click();
        cy.get('#billing_postcode').click().type('11045145')
        cy.get('#billing_phone').click().type('13996557483');
        cy.get('#billing_email').click().type(faker.internet.email());
        cy.get('.wc_payment_method.payment_method_cod').click();
        cy.get('#terms').click();
        cy.get('#place_order').click();

        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.');
    })
})