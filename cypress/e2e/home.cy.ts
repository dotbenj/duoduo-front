describe('Home', () => {
  it('shows the expected title', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Bienvenu sur DuoDuo');
  });
});

