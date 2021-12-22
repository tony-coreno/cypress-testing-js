/// <reference types ="Cypress" />

describe('PageUp -> PageDown', () => {
    it('Page Up', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('{pageup}')
        cy.get('#userName').type('{pagedown}')
        
    });
})
