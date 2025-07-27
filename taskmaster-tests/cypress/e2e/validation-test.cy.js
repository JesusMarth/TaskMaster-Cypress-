describe('Validación de Formularios', () => {
  beforeEach(() => {
    cy.visit('/register')
  })

  it('debería mostrar errores de validación al enviar formulario vacío', () => {
    // Enviar formulario sin datos
    cy.get('[data-testid="register-button"]').click()
    
    // Verificar que aparecen los errores
    cy.get('[data-testid="email-error"]').should('be.visible').and('contain.text', 'El email es requerido')
    cy.get('[data-testid="password-error"]').should('be.visible').and('contain.text', 'La contraseña es requerida')
    cy.get('[data-testid="confirm-password-error"]').should('be.visible').and('contain.text', 'Confirma tu contraseña')
  })




}) 