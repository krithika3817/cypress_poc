describe('Basic Cypress Tests with UI', () => {

  it('Test 1 - simple assertion', () => {
    expect(true).to.equal(true)
  })

  it('Test 2 - open webpage and verify title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

  it('Test 3 - capture screenshot of homepage', () => {
    cy.visit('https://example.cypress.io')
    cy.screenshot('homepage')
  })

  it('Test 4 - interact with page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })

  it('Test 5 - screenshot after action', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.screenshot('after-click')
  })

})