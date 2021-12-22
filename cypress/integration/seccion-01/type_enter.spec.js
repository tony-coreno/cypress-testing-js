/// <reference types ="Cypress" />

describe('Funciones para types', () => {
    //Suite de pruebas

    it('Type => Enter', () => {
        cy.visit("https://www.google.com")
        cy.title().should('eq',"Google")
        cy.wait(1500)
        cy.get('.gLFyf').type('demo qa {enter}')
        cy.get('.LC20lb').click();    
        
    });


    
})
