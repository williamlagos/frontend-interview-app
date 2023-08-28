const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

const identifiers = {
  designerStart: '[data-cy="designer-start"]',
  developerStart: '[data-cy="developer-start"]',
  firstNameInput: '[data-cy="fname-input"]',
  lastNameInput: '[data-cy="lname-input"]',
  emailInput: '[data-cy="email-input"]',
  ageInput: '[data-cy="age-input"]',
  nextStep: '[data-cy="next-step"]',
  purchaseEnd: '[data-cy="purchase-end"]'
}

describe('tests developer insurance flow', () => {
  it('passes', () => {
    cy.visit(FRONTEND_URL)
    cy.get(identifiers.developerStart).click()

    // E-mail success path step
    cy.get(identifiers.emailInput).type('william.lagos@icloud.com')
    cy.get(identifiers.nextStep).click()

    // Age success path step
    cy.get(identifiers.ageInput).type(25)
    cy.get(identifiers.nextStep).click()

    cy.get(identifiers.purchaseEnd).click()
  })
})

describe('tests designer insurance flow', () => {
  it('passes', () => {
    cy.visit(FRONTEND_URL)
    cy.get(identifiers.designerStart).click()

    // E-mail success path step
    cy.get(identifiers.emailInput).type('william.lagos@icloud.com')
    cy.get(identifiers.nextStep).click()

    // Age success path step
    cy.get(identifiers.ageInput).type(25)
    cy.get(identifiers.nextStep).click()

    // Age success path step
    cy.get(identifiers.firstNameInput).type('William')
    cy.get(identifiers.lastNameInput).type('Oliveira de Lagos')
    cy.get(identifiers.nextStep).click()

    cy.get(identifiers.purchaseEnd).click()
  })
})