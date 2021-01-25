describe('App', () => {
  it('should access app without error', () => {
    cy.visit('/');

    cy.location('pathname').should('eq', '/');
  });

  it('should type minutes on week days', () => {
    cy.get('td input').each(($el) => {
      cy.wrap($el).type('90');
      cy.wrap($el).blur();
    });
  });

  it('should type search term', () => {
    cy.get('[placeholder="Type your term here"]').type('fox');
  });

  it('should click to search term', () => {
    cy.get('button').click();
  });

  it('should read how much days to watch all videos', () => {
    cy.contains(/You will spend \d days to watch/);
  });

  it('should read the top 5 words of results', () => {
    cy.contains('Top 5 words of results:');

    cy.get('ul').find('li').should('have.length', 5);
  });

  it('should see available video', () => {
    cy.get('[data-test="video-box"]');
  });

  it('should watch the video', () => {
    cy.get('a').invoke('removeAttr', 'target');

    cy.get('[data-test="video-box"]').first().click();

    cy.location('host').should('match', /youtube/);
  });
});
