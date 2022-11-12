/* eslint no-undef:0 */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be opened', function () {
    cy.contains('venusaur').click()
    cy.contains('venusaur')
    cy.contains('Hidden ability')
    cy.contains('chlorophyll')
  })
})
/* eslint no-undef:1 */