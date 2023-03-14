/// <reference types="Cypress" />
import pokemon from '../fixtures/pokemon.json';

describe('Generate Random Pokemon', () => {
  beforeEach(( ) => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon/**', pokemon);
    cy.visit('/');
    cy.get('#callButton').click();
  })
  it('When button is clicked should show header', () => {
    cy.get('#poke-image').should('have.length', 1);
    cy.get('#poke-image').should('have.attr', 'alt').and('contain','Generate');
  })
  it('When button is clicked should show a Random Pokemon', () => {
    cy.get('#name').should('contain.text', pokemon.name.toUpperCase());
    cy.get('#img-id').should('have.length', 1).and('have.attr', 'alt').and('contain', pokemon.name);
  })
  it('Always shows only one Pokemon', () => {
    cy.get('#callButton').click();
    cy.get('#callButton').click();
    cy.get('.card').should('have.length', 1);
  })
})