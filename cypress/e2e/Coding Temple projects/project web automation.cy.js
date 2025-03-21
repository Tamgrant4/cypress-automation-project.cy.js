/// <reference types="cypress" />
describe('The Internet Herokuapp Tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
  });

  it('should verify the login functionality', () => {
    cy.contains('Form Authentication').click();
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').should('be.visible');
  });

  it('should handle incorrect login attempts', () => {
    cy.contains('Form Authentication').click();
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpassword');
    cy.get('.radius').click();
    cy.get('.flash.error').should('be.visible');
  });

  it('should test broken images', () => {
    cy.contains('Broken Images').click();
    cy.get('img').each(($img) => {
      cy.wrap($img).should('be.visible');
    });
  });

  it('should test checkboxes', () => {
    cy.contains('Checkboxes').click();
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
  });

  it('should validate API response', () => {
    cy.request('https://the-internet.herokuapp.com/status_codes/200').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should test page performance', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.window().then((win) => {
      const performance = win.performance.timing;
      const loadTime = performance.loadEventEnd - performance.navigationStart;
      expect(loadTime).to.be.lessThan(3000);
    });
  });

  it('should check accessibility', () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});