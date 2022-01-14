describe("Verify gist search application works correctly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders home page correctly", () => {
    cy.get("[data-testid=app]").should("exist");
    cy.get("[data-testid=header]").should("exist");
    cy.get(".octicon-mark-github").should("exist");
    cy.get("[data-testid=search-input]").should("exist");
    cy.get("[data-testid=home-icon]").should("exist");
    cy.get("[data-testid=app-footer]").should("exist");
  });

  it("renders public gists on home page", () => {
    cy.wait(500);
    cy.get(":nth-child(2) > .sc-iqseJM").should("be.visible");
    cy.findAllByText("Forks").should("be.visible");
    cy.findAllByText("Comments").should("be.visible");
    cy.findAllByText("Stars").should("be.visible");
  });

  it("pagination works correctly", () => {
    cy.get("[data-testid=search-input]").click();
    cy.get("[data-testid=search-input]").type("comus");
    cy.wait(500);
    cy.get(":nth-child(2) > .sc-iqseJM").should("be.visible");
    cy.get(".paginationBttns").should("be.visible");
    cy.get(".nextBttn").click();
    cy.get(".previousBttn").click();
  });

  it("allows to type username to search gists", () => {
    cy.get("[data-testid=search-input]").click();
    cy.get("[data-testid=search-input]").type("comus");
    cy.get(":nth-child(2) > .sc-iqseJM").should("be.visible");
    cy.findAllByText("Forks").should("be.visible");
    cy.findAllByText("Comments").should("be.visible");
    cy.findAllByText("Stars").should("be.visible");
  });

  it("renders no matching gists found page", () => {
    cy.get("[data-testid=search-input]").click();
    cy.wait(500);
    cy.get("[data-testid=search-input]").type("1234567");
    cy.get("[data-testid=no-results]").should("be.visible");
  });

  it("renders gist not found page", () => {
    cy.get("[data-testid=home-icon]").click();
    cy.wait(500);
    cy.get("[data-testid=search-input]").type("kurosrr");
    cy.get(":nth-child(2) > .sc-iqseJM").should("be.visible");
  });

  it("clicking home button renders all gists", () => {
    cy.get("[data-testid=search-input]").click();
    cy.get("[data-testid=app-footer]").should("exist");
    cy.wait(500);
    cy.get(".paginationBttns").should("be.visible");
    cy.get(".nextBttn").click();
    cy.get(".previousBttn").click();
  });
});
