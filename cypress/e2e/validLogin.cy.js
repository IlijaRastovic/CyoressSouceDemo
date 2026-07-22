/// <reference types="cypress" />
import { LogInPage } from "../Pages/LogInPage";
import {
  url,
  validUsername,
  validPassword,
} from "../../config";

describe("Login page", () => {
  const loginPage = new LogInPage();

  beforeEach(() => {
    cy.visit(url);
  });

  it(" should log in user with valid credentials", () => {
    loginPage.login(validUsername, validPassword);

     cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
    cy.get('[data-test="inventory-container"]').should("be.visible");
    
  });
});