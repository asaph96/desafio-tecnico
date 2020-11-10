describe('Teste Expansão Quadrado', () => {
    it('Quadrado renderizado', () => {
        cy.visit("/")

        cy.get(".square")
            .invoke('outerWidth')
            .should('be.eq', 90)
    });
});