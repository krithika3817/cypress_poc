describe('Screenshot Tests', () => {

  it('capture homepage screenshot', () => {
    cy.visit('https://example.cypress.io')
    cy.screenshot('homepage')
  })

  it('screenshot after click', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.screenshot('after-click')
  })

})