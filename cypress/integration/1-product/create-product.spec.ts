/// <reference types="cypress" />

describe("Products", () => {
  beforeEach(() => {
    cy.openCortexApp();
  });

  it("should create a product", () => {
    cy.findByRole("button", { name: /produtos/i }).click();
    cy.findByRole("link", { name: /meus produtos/i }).click();
    cy.findByRole("button", { name: /criar novo/i }).click();

    cy.findByLabelText(/nome/i).type("Arroz");
    cy.findByLabelText(/código/i).type("123");
    cy.findByLabelText(/local/i).type("balcao 1");
    cy.findByLabelText(/apelido/i).type("Arroz branco sei la");

    cy.findByRole("button", { name: /salvar/i }).click();
  });
});
