describe('Basic Tests', () => {

  it('simple assertion', () => {
    expect(true).to.equal(true)
  })

  it('verify title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

})