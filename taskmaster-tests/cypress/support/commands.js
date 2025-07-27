// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comando para esperar que un elemento esté completamente cargado
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible')
})

// Comando para verificar que un elemento no existe
Cypress.Commands.add('shouldNotExist', (selector) => {
  cy.get(selector).should('not.exist')
})

// Comando para hacer click en un elemento y esperar que desaparezca
Cypress.Commands.add('clickAndWaitForDisappear', (selector) => {
  cy.get(selector).click()
  cy.get(selector).should('not.exist')
})

// Comando para verificar que un elemento está deshabilitado
Cypress.Commands.add('shouldBeDisabled', (selector) => {
  cy.get(selector).should('be.disabled')
})

// Comando para verificar que un elemento está habilitado
Cypress.Commands.add('shouldBeEnabled', (selector) => {
  cy.get(selector).should('not.be.disabled')
})

// Comando para limpiar un campo de input
Cypress.Commands.add('clearInput', (selector) => {
  cy.get(selector).clear()
})

// Comando para escribir en un campo y presionar Enter
Cypress.Commands.add('typeAndPressEnter', (selector, text) => {
  cy.get(selector).type(text + '{enter}')
})

// Comando para verificar que la URL contiene un path específico
Cypress.Commands.add('shouldBeOnPage', (path) => {
  cy.url().should('include', path)
})

// Comando para verificar que un elemento tiene un texto específico
Cypress.Commands.add('shouldHaveText', (selector, text) => {
  cy.get(selector).should('contain.text', text)
})

// Comando para verificar que un elemento tiene una clase específica
Cypress.Commands.add('shouldHaveClass', (selector, className) => {
  cy.get(selector).should('have.class', className)
})

// Comando para verificar que un elemento no tiene una clase específica
Cypress.Commands.add('shouldNotHaveClass', (selector, className) => {
  cy.get(selector).should('not.have.class', className)
})

// Comando para hacer hover sobre un elemento
Cypress.Commands.add('hover', (selector) => {
  cy.get(selector).trigger('mouseover')
})

// Comando para verificar que un elemento está enfocado
Cypress.Commands.add('shouldBeFocused', (selector) => {
  cy.get(selector).should('be.focused')
})

// Comando para verificar que un elemento está visible pero no enfocado
Cypress.Commands.add('shouldBeVisibleButNotFocused', (selector) => {
  cy.get(selector).should('be.visible').and('not.be.focused')
})

// Comando para esperar que las animaciones CSS terminen
Cypress.Commands.add('waitForCssAnimation', () => {
  cy.wait(1000) // Esperar 1 segundo para que las animaciones CSS terminen
})

// Comando para verificar que un elemento tiene un atributo específico
Cypress.Commands.add('shouldHaveAttribute', (selector, attribute, value) => {
  cy.get(selector).should('have.attr', attribute, value)
})

// Comando para verificar que un elemento no tiene un atributo específico
Cypress.Commands.add('shouldNotHaveAttribute', (selector, attribute) => {
  cy.get(selector).should('not.have.attr', attribute)
})

// Comando para hacer scroll hasta el final de la página
Cypress.Commands.add('scrollToBottom', () => {
  cy.scrollTo('bottom')
})

// Comando para hacer scroll hasta el inicio de la página
Cypress.Commands.add('scrollToTop', () => {
  cy.scrollTo('top')
})

// Comando para verificar que un elemento está dentro del viewport
Cypress.Commands.add('shouldBeInViewport', (selector) => {
  cy.get(selector).should('be.visible')
  cy.get(selector).should('not.be.disabled')
})

// Comando para tomar una captura de pantalla con nombre personalizado
Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name)
})

// Comando para verificar que localStorage tiene un valor específico
Cypress.Commands.add('shouldHaveLocalStorageItem', (key, expectedValue) => {
  cy.window().then((win) => {
    const value = win.localStorage.getItem(key)
    expect(value).to.equal(expectedValue)
  })
})

// Comando para verificar que localStorage no tiene un item específico
Cypress.Commands.add('shouldNotHaveLocalStorageItem', (key) => {
  cy.window().then((win) => {
    const value = win.localStorage.getItem(key)
    expect(value).to.be.null
  })
})

// Comando para establecer un item en localStorage
Cypress.Commands.add('setLocalStorageItem', (key, value) => {
  cy.window().then((win) => {
    win.localStorage.setItem(key, value)
  })
})

// Comando para obtener un item de localStorage
Cypress.Commands.add('getLocalStorageItem', (key) => {
  cy.window().then((win) => {
    return win.localStorage.getItem(key)
  })
})

// Comando para verificar que sessionStorage tiene un valor específico
Cypress.Commands.add('shouldHaveSessionStorageItem', (key, expectedValue) => {
  cy.window().then((win) => {
    const value = win.sessionStorage.getItem(key)
    expect(value).to.equal(expectedValue)
  })
})

// Comando para verificar que sessionStorage no tiene un item específico
Cypress.Commands.add('shouldNotHaveSessionStorageItem', (key) => {
  cy.window().then((win) => {
    const value = win.sessionStorage.getItem(key)
    expect(value).to.be.null
  })
})

// Comando para establecer un item en sessionStorage
Cypress.Commands.add('setSessionStorageItem', (key, value) => {
  cy.window().then((win) => {
    win.sessionStorage.setItem(key, value)
  })
})

// Comando para obtener un item de sessionStorage
Cypress.Commands.add('getSessionStorageItem', (key) => {
  cy.window().then((win) => {
    return win.sessionStorage.getItem(key)
  })
})

// Comando para verificar que un elemento tiene un estilo CSS específico
Cypress.Commands.add('shouldHaveCss', (selector, property, value) => {
  cy.get(selector).should('have.css', property, value)
})

// Comando para verificar que un elemento no tiene un estilo CSS específico
Cypress.Commands.add('shouldNotHaveCss', (selector, property, value) => {
  cy.get(selector).should('not.have.css', property, value)
})

// Comando para esperar que un elemento tenga un texto específico
Cypress.Commands.add('waitForText', (selector, text, timeout = 10000) => {
  cy.get(selector, { timeout }).should('contain.text', text)
})

// Comando para esperar que un elemento no tenga un texto específico
Cypress.Commands.add('waitForTextToDisappear', (selector, text, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.contain.text', text)
})

// Comando para verificar que un elemento está seleccionado (checkbox/radio)
Cypress.Commands.add('shouldBeChecked', (selector) => {
  cy.get(selector).should('be.checked')
})

// Comando para verificar que un elemento no está seleccionado (checkbox/radio)
Cypress.Commands.add('shouldNotBeChecked', (selector) => {
  cy.get(selector).should('not.be.checked')
})

// Comando para verificar que un elemento tiene un valor específico
Cypress.Commands.add('shouldHaveValue', (selector, value) => {
  cy.get(selector).should('have.value', value)
})

// Comando para verificar que un elemento no tiene un valor específico
Cypress.Commands.add('shouldNotHaveValue', (selector, value) => {
  cy.get(selector).should('not.have.value', value)
})

// Comando para verificar que un elemento está vacío
Cypress.Commands.add('shouldBeEmpty', (selector) => {
  cy.get(selector).should('be.empty')
})

// Comando para verificar que un elemento no está vacío
Cypress.Commands.add('shouldNotBeEmpty', (selector) => {
  cy.get(selector).should('not.be.empty')
})

// Comando para esperar que un elemento esté presente en el DOM
Cypress.Commands.add('waitForElementToExist', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('exist')
})

// Comando para esperar que un elemento no esté presente en el DOM
Cypress.Commands.add('waitForElementToNotExist', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.exist')
})

// Comando para verificar que un elemento está oculto
Cypress.Commands.add('shouldBeHidden', (selector) => {
  cy.get(selector).should('not.be.visible')
})

// Comando para verificar que un elemento no está oculto
Cypress.Commands.add('shouldNotBeHidden', (selector) => {
  cy.get(selector).should('be.visible')
})

// Comando para hacer click derecho en un elemento
Cypress.Commands.add('rightClick', (selector) => {
  cy.get(selector).rightclick()
})

// Comando para hacer doble click en un elemento
Cypress.Commands.add('doubleClick', (selector) => {
  cy.get(selector).dblclick()
})

// Comando para presionar una tecla específica
Cypress.Commands.add('pressKey', (selector, key) => {
  cy.get(selector).type(`{${key}}`)
})

// Comando para verificar que un elemento tiene un placeholder específico
Cypress.Commands.add('shouldHavePlaceholder', (selector, placeholder) => {
  cy.get(selector).should('have.attr', 'placeholder', placeholder)
})

// Comando para verificar que un elemento tiene un tipo específico
Cypress.Commands.add('shouldHaveType', (selector, type) => {
  cy.get(selector).should('have.attr', 'type', type)
})

// Comando para verificar que un elemento tiene un name específico
Cypress.Commands.add('shouldHaveName', (selector, name) => {
  cy.get(selector).should('have.attr', 'name', name)
})

// Comando para verificar que un elemento tiene un id específico
Cypress.Commands.add('shouldHaveId', (selector, id) => {
  cy.get(selector).should('have.attr', 'id', id)
})

// Comando para verificar que un elemento tiene un data-testid específico
Cypress.Commands.add('shouldHaveTestId', (selector, testId) => {
  cy.get(selector).should('have.attr', 'data-testid', testId)
}) 