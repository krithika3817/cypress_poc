describe('Flaky Tests', () => {

  it('flaky test example', () => {

    cy.visit('https://example.cypress.io')

    const random = Math.random()

    cy.log('Random value: ' + random)

    expect(random).to.be.greaterThan(0.5)

  })

})