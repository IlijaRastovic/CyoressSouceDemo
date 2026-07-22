describe("Sauce Demo", () => {
  it("loads the login page", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#login-button").should("be.visible");
  });
});
