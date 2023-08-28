describe('tests designer insurance flow', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="designer-start"]').click()

    // E-mail success path step
    cy.get('[data-cy="email-input"]').type('william.lagos@icloud.com')
    cy.get('[data-cy="next-step"]').click()

    // Age success path step
    cy.get('[data-cy="age-input"]').type(25)
    cy.get('[data-cy="next-step"]').click()

    // Age success path step
    cy.get('[data-cy="fname-input"]').type('William')
    cy.get('[data-cy="lname-input"]').type('Oliveira de Lagos')
    cy.get('[data-cy="next-step"]').click()

    cy.get('[data-cy="purchase-end"]').click()
  })
})