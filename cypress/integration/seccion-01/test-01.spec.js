
describe('Testing con cypress', () => {


    it('Probando un hola Mundo', () => {

        cy.log('Hola Mundo')
        cy.visit("https://sleepy-dubinsky-a59d2d.netlify.app/")
        
    });
})