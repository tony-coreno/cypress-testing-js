/// <reference types ="Cypress" />

require('dotenv').config();


describe('', () => {
    it('Registro Mobiliario y Equipo', () => {
        cy.visit(Cypress.env('url'))
        cy.get('#P9999_USERNAME').type(Cypress.env('username'));
        cy.get('#P9999_PASSWORD').type(Cypress.env('password'));
        cy.get('#B5126319173390822194').click()
        cy.wait(2500)
        cy.get('#t_TreeNav_5 > .a-TreeView-toggle').click()
        cy.get('#t_TreeNav_12 > .a-TreeView-toggle').click()
        cy.get('#t_TreeNav_17 > .a-TreeView-content').click()
        cy.get('#B4298334302262101759').should('be.visible').click()
        cy.get('#P117_FK_ID_TIPO_MOB').select("Bancos")
        cy.get('#P117_FK_ID_MARCA_MOB').select("Costco")
        cy.get('#P117_FK_ID_MODELO_MOB').select("Grano")
        cy.get('#P117_FECHA_COMPRA').type("03-May-2022")
        cy.get('#P117_FACTURA').type("Prueba")
        cy.get('#P117_COMENTARIO').type("Desde ITW")
        cy.get('#B5135561158502532810').click()
        cy.get('.t-Alert-title').should('be.visible')
        cy.get('.t-Alert-buttons > .t-Button').click()
        cy.get('#L5126323885093822256').click()
        cy.get('#menu_L5126323885093822256_1 > .a-Menu-inner > .a-Menu-labelContainer').click()
        cy.get('iframe').should('be.visible')
        
    });
})
