Cypress Automation Project

Overview

This project automates testing for The Internet, a popular test website with various UI components and scenarios. It was selected due to its diverse elements, making it ideal for testing login functionality, broken images, checkboxes, API responses, performance, and accessibility.

Project Scope

This automation suite covers:

Functional Testing: Validates login, checkboxes, and broken images.

API Testing: Ensures correct response status codes.

Performance Testing: Measures page load times.

Accessibility Testing: Identifies accessibility issues using cypress-axe.

Approach

Setup & Configuration: Installed Cypress and necessary plugins.

Test Implementation: Wrote test scripts using Cypress best practices.

Debugging & Refinement: Used Cypress commands and browser dev tools to fix issues.

Documentation: Created a structured README with test execution guidelines.

Challenges & Solutions

Handling Dynamic Elements: Used advanced selectors and cy.wait() where needed.

Performance Measurement: Extracted performance timing via window.performance.

Accessibility Testing: Integrated cypress-axe for comprehensive checks.

Running the Tests

Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Open Cypress Test Runner:

npx cypress open

Select E2E Testing and choose a browser to run tests.

Run tests in headless mode:

npx cypress run

Additional Notes

Ensure cypress-axe is installed for accessibility tests:

npm install --save-dev cypress-axe

Modify cypress.config.js to customize test settings.

This project demonstrates proficiency in Cypress automation, covering UI, API, performance, and accessibility testing.
