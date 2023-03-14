/// <reference types="Cypress" />

import pokemons from '../fixtures/pokemons.json'

describe('App Init', () => {

  it('Should show Header', () => {
    cy.visit('/');
    cy.get('#poke-image').should('have.length', 1);
    cy.get('#poke-image').should('have.attr', 'alt').and('contain','Generate');
  })

  it('Should show Generate Button', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?limit=1281', pokemons);
    cy.visit('/');
    cy.get('h1').contains('Generate');
    cy.get('#callButton').should('be.enabled');    
  })

  it('Should show Loading while Pokemons data is empty', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?limit=1281', []);
    cy.visit('/');
    cy.get('.loader').should('have.length', 1);
  })
})