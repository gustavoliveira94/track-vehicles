describe('App', () => {
  it('should visit and navigate', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=vehicle]').should('have.length', 1);
    cy.wait(4000);

    //Register Vehicle
    cy.get('[data-testid=add-button]').click();
    cy.wait(4000);

    cy.get('[data-testid=identifier]').type('Veículo');
    cy.get('[data-testid=license_plate]').type('AAA9A98');
    cy.get('[data-testid=tracker_serial_number]').type('C000000');
    cy.get('[data-testid=status]').click();
    cy.get('[data-testid=status-value]').click();
    cy.get('[data-testid="coordinates.latitude"]').type('-22.9310464');
    cy.get('[data-testid="coordinates.longitude"]').type('-43.5388416');
    cy.get('[data-testid=button-register]').click();
    cy.wait(4000);

    cy.get('[data-testid=list-button]').click();
    cy.wait(4000);

    // Search Vehicle
    cy.get('[data-testid=input-search]').type('veículo');
    cy.get('[data-testid=input-search]').type('veículos');
    cy.wait(4000);

    cy.contains('Nenhum veículo encontrado!');
    cy.get('[data-testid=input-search]').clear();
    cy.wait(4000);

    cy.get('[data-testid="vehicle"]').should('have.length', 2);
  });
});
