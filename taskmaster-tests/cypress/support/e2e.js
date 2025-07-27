// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Configuración global de Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  // Evitar que Cypress falle en errores no manejados de la aplicación
  // durante las pruebas
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false
  }
  
  // Para otros errores, permitir que Cypress los maneje normalmente
  return true
})

// Configuración de viewports para diferentes dispositivos
const viewports = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
  largeDesktop: { width: 1920, height: 1080 }
}

// Función para cambiar viewport
Cypress.Commands.add('setViewport', (device) => {
  const viewport = viewports[device] || viewports.desktop
  cy.viewport(viewport.width, viewport.height)
})

// Función para limpiar localStorage antes de cada test
Cypress.Commands.add('clearAppStorage', () => {
  cy.window().then((win) => {
    win.localStorage.clear()
  })
})

// Función para verificar que la aplicación está cargada
Cypress.Commands.add('waitForAppLoad', () => {
  cy.get('[data-testid="task-title"], [data-testid="login-title"], [data-testid="register-title"]', { timeout: 10000 })
    .should('be.visible')
})

// Función para hacer scroll hasta un elemento
Cypress.Commands.add('scrollToElement', (selector) => {
  cy.get(selector).scrollIntoView()
})

// Función para esperar que las animaciones terminen
Cypress.Commands.add('waitForAnimations', () => {
  cy.wait(500) // Esperar 500ms para que las animaciones terminen
})

// Función para verificar que no hay errores en la consola
Cypress.Commands.add('checkForConsoleErrors', () => {
  cy.window().then((win) => {
    const consoleErrors = win.console.error || []
    expect(consoleErrors).to.have.length(0)
  })
})

// Configuración de hooks globales
beforeEach(() => {
  // Limpiar localStorage antes de cada test
  cy.clearAppStorage()
  
  // Configurar viewport por defecto
  cy.setViewport('desktop')
})

afterEach(() => {
  // Verificar que no hay errores en la consola después de cada test
  cy.checkForConsoleErrors()
})

// Configuración de comandos personalizados para autenticación
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-testid="email-input"]').type(email)
  cy.get('[data-testid="password-input"]').type(password)
  cy.get('[data-testid="login-button"]').click()
  cy.waitForAppLoad()
})

Cypress.Commands.add('register', (email, password, confirmPassword) => {
  cy.visit('/register')
  cy.get('[data-testid="email-input"]').type(email)
  cy.get('[data-testid="password-input"]').type(password)
  cy.get('[data-testid="confirm-password-input"]').type(confirmPassword)
  cy.get('[data-testid="register-button"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="logout-button"]').click()
  cy.url().should('include', '/login')
})

// Comandos personalizados para gestión de tareas
Cypress.Commands.add('addTask', (taskText) => {
  cy.get('[data-testid="new-task-input"]').type(taskText)
  cy.get('[data-testid="add-task-button"]').click()
})

Cypress.Commands.add('editTask', (taskId, newText) => {
  cy.get(`[data-testid="edit-button-${taskId}"]`).click()
  cy.get('[data-testid="edit-task-input"]').clear().type(newText)
  cy.get('[data-testid="save-edit-button"]').click()
})

Cypress.Commands.add('deleteTask', (taskId) => {
  cy.get(`[data-testid="delete-button-${taskId}"]`).click()
})

Cypress.Commands.add('toggleTask', (taskId) => {
  cy.get(`[data-testid="task-checkbox-${taskId}"]`).click()
})

Cypress.Commands.add('filterTasks', (filterType) => {
  cy.get(`[data-testid="filter-${filterType}"]`).click()
})

// Comandos para validación de formularios
Cypress.Commands.add('validateFormErrors', (expectedErrors) => {
  expectedErrors.forEach(error => {
    cy.get(`[data-testid="${error.field}-error"]`)
      .should('be.visible')
      .and('contain.text', error.message)
  })
})

Cypress.Commands.add('clearFormErrors', () => {
  cy.get('.field-error').should('not.exist')
})

// Comandos para navegación
Cypress.Commands.add('navigateToRegister', () => {
  cy.get('[data-testid="register-link"]').click()
  cy.url().should('include', '/register')
})

Cypress.Commands.add('navigateToLogin', () => {
  cy.get('[data-testid="login-link"]').click()
  cy.url().should('include', '/login')
})

// Comandos para verificación de estado
Cypress.Commands.add('verifyTaskCount', (expectedCount) => {
  cy.get('[data-testid^="task-item-"]').should('have.length', expectedCount)
})

Cypress.Commands.add('verifyTaskText', (taskId, expectedText) => {
  cy.get(`[data-testid="task-text-${taskId}"]`).should('contain.text', expectedText)
})

Cypress.Commands.add('verifyTaskCompleted', (taskId, completed = true) => {
  if (completed) {
    cy.get(`[data-testid="task-checkbox-${taskId}"]`).should('be.checked')
    cy.get(`[data-testid="task-item-${taskId}"]`).should('have.class', 'completed')
  } else {
    cy.get(`[data-testid="task-checkbox-${taskId}"]`).should('not.be.checked')
    cy.get(`[data-testid="task-item-${taskId}"]`).should('not.have.class', 'completed')
  }
})

// Comandos para testing responsive
Cypress.Commands.add('testResponsive', (device, callback) => {
  cy.setViewport(device)
  callback()
})

// Comandos para performance testing
Cypress.Commands.add('measurePageLoad', () => {
  cy.window().then((win) => {
    const performance = win.performance
    const navigation = performance.getEntriesByType('navigation')[0]
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart
    cy.log(`Page load time: ${loadTime}ms`)
  })
})

// Comentarios de documentación para los comandos personalizados
/*
 * Comandos personalizados disponibles:
 * - setViewport(device): Cambia el viewport del navegador
 * - clearAppStorage(): Limpia el localStorage de la aplicación
 * - waitForAppLoad(): Espera a que la aplicación cargue
 * - scrollToElement(selector): Hace scroll a un elemento
 * - waitForAnimations(): Espera a que las animaciones terminen
 * - checkForConsoleErrors(): Verifica errores en la consola
 * - login(email, password): Inicia sesión
 * - register(email, password, confirmPassword): Registra un usuario
 * - logout(): Cierra sesión
 * - addTask(taskText): Agrega una tarea
 * - editTask(taskId, newText): Edita una tarea
 * - deleteTask(taskId): Elimina una tarea
 * - toggleTask(taskId): Marca/desmarca una tarea
 * - filterTasks(filterType): Filtra tareas
 * - validateFormErrors(expectedErrors): Valida errores de formulario
 * - clearFormErrors(): Limpia errores de formulario
 * - navigateToRegister(): Navega al registro
 * - navigateToLogin(): Navega al login
 * - verifyTaskCount(expectedCount): Verifica cantidad de tareas
 * - verifyTaskText(taskId, expectedText): Verifica texto de tarea
 * - verifyTaskCompleted(taskId, completed): Verifica estado de tarea
 * - testResponsive(device, callback): Test responsive
 * - measurePageLoad(): Mide tiempo de carga
 */ 