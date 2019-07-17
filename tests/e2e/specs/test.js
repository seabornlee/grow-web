// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('input[type="text"]').type('Welcome!');
    cy.get('#add').click();
    cy.contains('Lets Rock!');
  });
});
