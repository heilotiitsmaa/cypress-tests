describe('Postimees.ee Kasutajaliidese Testid', () => {

  // Ignoreerib veebilehe siseseid vigu, et test ei katkeks
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    // Suurendab vaateava, et kõik elemendid mahuksid ära
    cy.viewport(1280, 800);
    cy.visit('https://www.postimees.ee');

    // Klikib küpsiste aknal "Olen nõus"
    // Kasutab 'force: true' ja ootame, et bänner kaoks
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Olen nõus")').length > 0) {
        cy.contains('Olen nõus').click({ force: true });
      }
    });
    
    // Annab lehele aega bänneri eemaldamiseks
    cy.wait(2000);
  });

  // TEST 1: Kontrollib pealkirja
  it('1. Kontrollib avalehe pealkirja', () => {
    cy.title().should('include', 'Postimees');
  });

  // TEST 2: Navigeerimine
  it('2. Navigeerib Maailma sektsiooni', () => {
    cy.contains('Maailm').click({ force: true });
    cy.url().should('include', '/maailm');
    cy.get('h1').should('be.visible');
  });

  // TEST 3: Dünaamiline sisu - Ilm
  it('3. Kontrollib ilmateate vidina olemasolu', () => {
    cy.get('.weather-widget').should('be.visible');
    cy.get('.weather-widget__temp').should('not.be.empty');
  });

  // TEST 4: Artikli avamine
  it('4. Avab esimese uudisartikli ja kontrollib sisu', () => {
    cy.get('.list-article__headline').first().click({ force: true });
    cy.get('article').should('be.visible');
  });

  // TEST 5: Otsingu ikooni olemasolu
  it('5. Kontrollib, et otsinguikoon on nähtav', () => {
    cy.get('.search-icon').should('be.visible');
  });

  // TEST 6: Andmepõhine testimine (Variant 3) - Testib mitut rubriiki
  const rubriigid = ['Sport', 'Arvamus'];
  rubriigid.forEach((nimi) => {
    it(`6. Kontrollib rubriiki: ${nimi}`, () => {
      cy.contains(nimi).click({ force: true });
      cy.url().should('include', nimi.toLowerCase());
    });
  });

  // TEST 7: Ekraanipilt (Variant 4)
  it('7. Teeb avalehest ekraanipildi', () => {
    cy.screenshot('postimees_avaleht');
  });
});