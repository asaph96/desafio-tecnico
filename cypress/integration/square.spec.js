const pointerEvent = {
    force: true,
    pointerType: 'touch'
}

describe('Teste Expansão Quadrado', () => {
    
    it('Quadrado renderizado', () => {
        cy.visit("/")

        cy.get(".square")
            .invoke('outerWidth')
            .should('be.eq', 90)
    });

    it('Quadrado Clicável', () => {
        cy.get(".square")
            .trigger('pointerdown', pointerEvent)

        cy.wait(500)

        cy.get(".square")
            .trigger('pointerup', pointerEvent)

        cy.get(".square")
            .invoke('outerWidth')
            .should('be.eq', 225)
    });
});