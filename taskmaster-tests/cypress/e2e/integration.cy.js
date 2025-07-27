/**
 * @fileoverview Pruebas de integración simplificadas para TaskMaster
 * @description Pruebas E2E que cubren flujos básicos de la aplicación
 */

describe('Flujos de Integración Básicos', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    cy.clearLocalStorage()
  })

  describe('Flujo Básico de Usuario', () => {
    it('debería permitir registro, login y gestión básica de tareas', () => {
      cy.fixture('users').then((users) => {
        const newUser = users.newUser

        // Paso 1: Registro
        cy.visit('/register')
        cy.get('[data-testid="register-title"]').should('be.visible')
        cy.get('[data-testid="email-input"]').type(newUser.email)
        cy.get('[data-testid="password-input"]').type(newUser.password)
        cy.get('[data-testid="confirm-password-input"]').type(newUser.confirmPassword)
        cy.get('[data-testid="register-button"]').click()

        // Verificar redirección al login
        cy.url().should('include', '/login')
        cy.get('[data-testid="login-title"]').should('be.visible')

        // Paso 2: Login
        cy.get('[data-testid="email-input"]').type(newUser.email)
        cy.get('[data-testid="password-input"]').type(newUser.password)
        cy.get('[data-testid="login-button"]').click()

        // Verificar acceso a la aplicación
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.get('[data-testid="task-title"]').should('be.visible')
        cy.get('[data-testid="user-email"]').should('contain.text', newUser.email)

        // Paso 3: Crear tareas básicas
        cy.get('[data-testid="new-task-input"]').type('Primera tarea')
        cy.get('[data-testid="add-task-button"]').click()
        cy.get('[data-testid^="task-item-"]').should('have.length', 1)

        cy.get('[data-testid="new-task-input"]').type('Segunda tarea')
        cy.get('[data-testid="add-task-button"]').click()
        cy.get('[data-testid^="task-item-"]').should('have.length', 2)

        // Paso 4: Completar una tarea
        cy.get('[data-testid^="task-checkbox-"]').first().click()
        cy.get('[data-testid^="task-item-"]').first().should('have.class', 'completed')

        // Paso 5: Logout
        cy.get('[data-testid="logout-button"]').click()
        cy.url().should('include', '/login')
        cy.get('[data-testid="login-title"]').should('be.visible')
      })
    })
  })

  describe('Flujo de Login Directo', () => {
    it('debería permitir login con usuario existente', () => {
      cy.fixture('users').then((users) => {
        const validUser = users.validUser

        // Crear usuario en localStorage
        cy.window().then((win) => {
          const existingUsers = JSON.parse(win.localStorage.getItem('users') || '[]')
          const newUser = {
            id: Date.now(),
            email: validUser.email,
            password: validUser.password
          }
          existingUsers.push(newUser)
          win.localStorage.setItem('users', JSON.stringify(existingUsers))
        })

        // Login
        cy.visit('/login')
        cy.get('[data-testid="email-input"]').type(validUser.email)
        cy.get('[data-testid="password-input"]').type(validUser.password)
        cy.get('[data-testid="login-button"]').click()

        // Verificar acceso
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.get('[data-testid="task-title"]').should('be.visible')
        cy.get('[data-testid="user-email"]').should('contain.text', validUser.email)

        // Crear una tarea
        cy.get('[data-testid="new-task-input"]').type('Tarea de prueba')
        cy.get('[data-testid="add-task-button"]').click()
        cy.get('[data-testid^="task-item-"]').should('have.length', 1)
      })
    })
  })

  describe('Flujo de Responsive Básico', () => {
    it('debería funcionar en móvil', () => {
      // Configurar usuario
      cy.fixture('users').then((users) => {
        const validUser = users.validUser
        cy.window().then((win) => {
          const existingUsers = JSON.parse(win.localStorage.getItem('users') || '[]')
          const newUser = {
            id: Date.now(),
            email: validUser.email,
            password: validUser.password
          }
          existingUsers.push(newUser)
          win.localStorage.setItem('users', JSON.stringify(existingUsers))
        })
      })

      // Probar en móvil
      cy.setViewport('mobile')
      cy.visit('/login')
      cy.get('[data-testid="email-input"]').type('test@taskmaster.com')
      cy.get('[data-testid="password-input"]').type('password123')
      cy.get('[data-testid="login-button"]').click()
      
      cy.get('[data-testid="task-title"]').should('be.visible')
      cy.get('[data-testid="add-task-form"]').should('be.visible')

      // Crear una tarea
      cy.get('[data-testid="new-task-input"]').type('Tarea móvil')
      cy.get('[data-testid="add-task-button"]').click()
      cy.get('[data-testid^="task-item-"]').should('have.length', 1)
    })
  })
}) 