import "@testing-library/cypress/add-commands";
// load type definitions that come with Cypress module
/// <reference types="cypress" />

Cypress.Commands.add("openCortexApp", () => cy.visit("http://localhost:9090"));

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Comando utilizado para abrir a aplicação Cortex
       * @example cy.openCortexApp()
       */
      openCortexApp(): Chainable<Window>;
    }
  }
}
