describe('Testes de Interface no Example Cypress', () => {
  
  it('Deve carregar a página principal', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Cypress').should('be.visible');
  });

  it('Deve navegar para a página de comandos de query', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Commands').click(); 
    cy.contains('Querying').click(); 
    cy.url().should('include', '/commands/querying');
  });

  it('Deve encontrar um elemento específico na página de comandos de query', () => {
    cy.visit('https://example.cypress.io/commands/querying');
    cy.get('#query-btn').should('contain', 'Button');
  });

  it('Deve falhar ao encontrar um elemento inexistente (teste negativo)', () => {
    cy.visit('https://example.cypress.io');
    cy.get('#elemento-inexistente').should('not.exist');
  });

  it('Deve preencher e validar o campo de email', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('#email1')
      .type('teste@exemplo.com')
      .should('have.value', 'teste@exemplo.com');
  });

  it('Deve validar o envio de formulário com sucesso', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('#email1').type('teste@exemplo.com'); 
    cy.get('.action-form [type="submit"]').click(); 
    cy.get('.action-form').next().should('contain', 'Your form has been submitted!');
  });
  
});
