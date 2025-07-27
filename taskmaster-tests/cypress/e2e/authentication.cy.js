/**
 * @fileoverview Pruebas de autenticación para TaskMaster
 * @description Pruebas E2E para registro, login y logout de usuarios
 */

describe('Autenticación de Usuarios', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    cy.clearLocalStorage()
    cy.visit('/')
  })

  describe('Registro de Usuarios', () => {
    it('debería permitir registrar un nuevo usuario exitosamente', () => {
      // Navegar a la página de registro
      cy.visit('/register')
      cy.get('[data-testid="register-title"]').should('be.visible')

      // Obtener datos del fixture
      cy.fixture('users').then((users) => {
        const newUser = users.newUser

        // Llenar el formulario de registro
        cy.get('[data-testid="email-input"]').type(newUser.email)
        cy.get('[data-testid="password-input"]').type(newUser.password)
        cy.get('[data-testid="confirm-password-input"]').type(newUser.confirmPassword)

        // Enviar el formulario
        cy.get('[data-testid="register-button"]').click()

        // Verificar que se redirige al login
        cy.url().should('include', '/login')
        cy.get('[data-testid="login-title"]').should('be.visible')

        // Verificar que el usuario se guardó en localStorage
        cy.window().then((win) => {
          const users = JSON.parse(win.localStorage.getItem('users') || '[]')
          const registeredUser = users.find(user => user.email === newUser.email)
          expect(registeredUser).to.exist
          expect(registeredUser.email).to.equal(newUser.email)
        })
      })
    })





    it('debería mostrar error cuando el usuario ya existe', () => {
      // Primero registrar un usuario
      cy.fixture('users').then((users) => {
        const existingUser = users.existingUser

        // Registrar usuario
        cy.register(existingUser.email, existingUser.password, existingUser.password)

        // Intentar registrar el mismo usuario nuevamente
        cy.visit('/register')
        cy.get('[data-testid="email-input"]').type(existingUser.email)
        cy.get('[data-testid="password-input"]').type(existingUser.password)
        cy.get('[data-testid="confirm-password-input"]').type(existingUser.password)
        cy.get('[data-testid="register-button"]').click()

        // Verificar mensaje de error
        cy.get('[data-testid="register-error"]')
          .should('be.visible')
          .and('contain.text', 'El usuario ya existe')
      })
    })


  })

  describe('Inicio de Sesión', () => {
    beforeEach(() => {
      // Crear un usuario para las pruebas de login
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
    })

    it('debería permitir iniciar sesión exitosamente', () => {
      cy.fixture('users').then((users) => {
        const validUser = users.validUser

        // Navegar a login
        cy.visit('/login')
        cy.get('[data-testid="login-title"]').should('be.visible')

        // Llenar formulario de login
        cy.get('[data-testid="email-input"]').type(validUser.email)
        cy.get('[data-testid="password-input"]').type(validUser.password)

        // Enviar formulario
        cy.get('[data-testid="login-button"]').click()

        // Verificar que se redirige a la página principal
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.get('[data-testid="task-title"]').should('be.visible')
        cy.get('[data-testid="user-email"]').should('contain.text', validUser.email)

        // Verificar que se guardó la sesión en localStorage
        cy.window().then((win) => {
          const currentUser = JSON.parse(win.localStorage.getItem('currentUser'))
          expect(currentUser).to.exist
          expect(currentUser.email).to.equal(validUser.email)
        })
      })
    })

    it('debería mostrar error con credenciales inválidas', () => {
      cy.fixture('users').then((users) => {
        const validUser = users.validUser

        // Navegar a login
        cy.visit('/login')

        // Llenar formulario con contraseña incorrecta
        cy.get('[data-testid="email-input"]').type(validUser.email)
        cy.get('[data-testid="password-input"]').type(validUser.invalidPassword)

        // Enviar formulario
        cy.get('[data-testid="login-button"]').click()

        // Verificar mensaje de error
        cy.get('[data-testid="login-error"]')
          .should('be.visible')
          .and('contain.text', 'Credenciales inválidas')

        // Verificar que permanece en la página de login
        cy.url().should('include', '/login')
      })
    })




  })

  describe('Cerrar Sesión', () => {
    beforeEach(() => {
      // Hacer login antes de cada prueba de logout
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
          win.localStorage.setItem('currentUser', JSON.stringify(newUser))
        })
      })
    })

    it('debería cerrar sesión exitosamente', () => {
      // Primero hacer login para estar autenticado
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
        
        // Hacer login
        cy.visit('/login')
        cy.get('[data-testid="email-input"]').type(validUser.email)
        cy.get('[data-testid="password-input"]').type(validUser.password)
        cy.get('[data-testid="login-button"]').click()
        
        // Verificar que estamos en la página principal
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.get('[data-testid="task-title"]').should('be.visible')

        // Hacer logout
        cy.get('[data-testid="logout-button"]').click()

        // Verificar que se redirige al login
        cy.url().should('include', '/login')
        cy.get('[data-testid="login-title"]').should('be.visible')

        // Verificar que se eliminó la sesión del localStorage
        cy.window().then((win) => {
          const currentUser = win.localStorage.getItem('currentUser')
          expect(currentUser).to.be.null
        })
      })
    })

    it('debería redirigir a login cuando se accede sin autenticación', () => {
      // Limpiar localStorage para simular usuario no autenticado
      cy.clearLocalStorage()

      // Intentar acceder a la página principal
      cy.visit('/')

      // Verificar que se redirige al login
      cy.url().should('include', '/login')
      cy.get('[data-testid="login-title"]').should('be.visible')
    })
  })

  describe('Navegación entre Páginas', () => {
    it('debería navegar de login a registro', () => {
      cy.visit('/login')
      cy.get('[data-testid="register-link"]').click()
      cy.url().should('include', '/register')
      cy.get('[data-testid="register-title"]').should('be.visible')
    })

    it('debería navegar de registro a login', () => {
      cy.visit('/register')
      cy.get('[data-testid="login-link"]').click()
      cy.url().should('include', '/login')
      cy.get('[data-testid="login-title"]').should('be.visible')
    })
  })



  describe('Responsive Design', () => {
    it('debería funcionar correctamente en móvil', () => {
      cy.setViewport('mobile')
      cy.visit('/login')
      
      // Verificar que los elementos son visibles en móvil
      cy.get('[data-testid="login-title"]').should('be.visible')
      cy.get('[data-testid="email-input"]').should('be.visible')
      cy.get('[data-testid="password-input"]').should('be.visible')
      cy.get('[data-testid="login-button"]').should('be.visible')
    })

    it('debería funcionar correctamente en tablet', () => {
      cy.setViewport('tablet')
      cy.visit('/register')
      
      // Verificar que los elementos son visibles en tablet
      cy.get('[data-testid="register-title"]').should('be.visible')
      cy.get('[data-testid="email-input"]').should('be.visible')
      cy.get('[data-testid="password-input"]').should('be.visible')
      cy.get('[data-testid="confirm-password-input"]').should('be.visible')
      cy.get('[data-testid="register-button"]').should('be.visible')
    })
  })
}) 