/**
 * @fileoverview Pruebas de gestión de tareas para TaskMaster
 * @description Pruebas E2E para crear, editar, completar y eliminar tareas
 */

describe('Gestión de Tareas', () => {
  beforeEach(() => {
    // Configurar usuario autenticado y limpiar localStorage
    cy.clearLocalStorage()
    cy.fixture('users').then((users) => {
      const validUser = users.validUser
      cy.window().then((win) => {
        // Crear usuario en localStorage
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
    
    // Hacer login
    cy.visit('/login')
    cy.get('[data-testid="email-input"]').type('test@taskmaster.com')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="login-button"]').click()
    
    // Verificar que estamos en la página principal
    cy.get('[data-testid="task-title"]').should('be.visible')
  })

  describe('Crear Tareas', () => {
    it('debería permitir crear una nueva tarea exitosamente', () => {
      cy.fixture('tasks').then((tasks) => {
        const newTask = tasks.taskToAdd

        // Agregar nueva tarea
        cy.get('[data-testid="new-task-input"]').type(newTask.text)
        cy.get('[data-testid="add-task-button"]').click()

        // Verificar que la tarea se agregó
        cy.get('[data-testid^="task-item-"]').should('have.length', 1)
        cy.get('[data-testid^="task-text-"]').should('contain.text', newTask.text)

        // Verificar que el input se limpió
        cy.get('[data-testid="new-task-input"]').should('have.value', '')
      })
    })

    it('debería permitir crear múltiples tareas', () => {
      cy.fixture('tasks').then((tasks) => {
        const sampleTasks = tasks.sampleTasks.slice(0, 3)

        // Agregar múltiples tareas
        sampleTasks.forEach((task, index) => {
          cy.get('[data-testid="new-task-input"]').type(task.text)
          cy.get('[data-testid="add-task-button"]').click()
          
          // Verificar que se agregó la tarea
          cy.get('[data-testid^="task-item-"]').should('have.length', index + 1)
          cy.get('[data-testid^="task-text-"]').last().should('contain.text', task.text)
        })

        // Verificar el total de tareas
        cy.get('[data-testid^="task-item-"]').should('have.length', 3)
      })
    })

    it('debería permitir crear tarea con Enter', () => {
      cy.fixture('tasks').then((tasks) => {
        const newTask = tasks.taskToAdd

        // Agregar tarea presionando Enter
        cy.get('[data-testid="new-task-input"]').type(newTask.text + '{enter}')

        // Verificar que la tarea se agregó
        cy.get('[data-testid^="task-item-"]').should('have.length', 1)
        cy.get('[data-testid^="task-text-"]').should('contain.text', newTask.text)
      })
    })
  })

  describe('Editar Tareas', () => {
    beforeEach(() => {
      // Crear una tarea para editar
      cy.fixture('tasks').then((tasks) => {
        const newTask = tasks.taskToAdd
        cy.get('[data-testid="new-task-input"]').type(newTask.text)
        cy.get('[data-testid="add-task-button"]').click()
      })
    })

    it('debería permitir editar una tarea exitosamente', () => {
      // Obtener el ID de la primera tarea
      cy.get('[data-testid^="task-item-"]').first().then(($task) => {
        const taskId = $task.attr('data-testid').replace('task-item-', '')

        // Hacer click en editar
        cy.get(`[data-testid="edit-button-${taskId}"]`).click()

        // Verificar que aparece el campo de edición
        cy.get('[data-testid="edit-task-input"]').should('be.visible')
        cy.get('[data-testid="save-edit-button"]').should('be.visible')

        // Editar el texto
        cy.get('[data-testid="edit-task-input"]').clear().type('Tarea editada')
        cy.get('[data-testid="save-edit-button"]').click()

        // Verificar que se guardó el cambio
        cy.get(`[data-testid="task-text-${taskId}"]`).should('contain.text', 'Tarea editada')

        // Verificar que desapareció el modo edición
        cy.get('[data-testid="edit-task-input"]').should('not.exist')
      })
    })
  })

  describe('Completar Tareas', () => {
    beforeEach(() => {
      // Crear una tarea para completar
      cy.fixture('tasks').then((tasks) => {
        const newTask = tasks.taskToAdd
        cy.get('[data-testid="new-task-input"]').type(newTask.text)
        cy.get('[data-testid="add-task-button"]').click()
      })
    })

    it('debería permitir marcar una tarea como completada', () => {
      // Obtener el ID de la primera tarea
      cy.get('[data-testid^="task-item-"]').first().then(($task) => {
        const taskId = $task.attr('data-testid').replace('task-item-', '')

        // Verificar que inicialmente no está completada
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).should('not.be.checked')
        cy.get(`[data-testid="task-item-${taskId}"]`).should('not.have.class', 'completed')

        // Marcar como completada
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).click()

        // Verificar que se marcó como completada
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).should('be.checked')
        cy.get(`[data-testid="task-item-${taskId}"]`).should('have.class', 'completed')
      })
    })

    it('debería permitir desmarcar una tarea completada', () => {
      // Obtener el ID de la primera tarea
      cy.get('[data-testid^="task-item-"]').first().then(($task) => {
        const taskId = $task.attr('data-testid').replace('task-item-', '')

        // Marcar como completada
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).click()

        // Verificar que está completada
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).should('be.checked')

        // Desmarcar
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).click()

        // Verificar que ya no está completada
        cy.get(`[data-testid="task-checkbox-${taskId}"]`).should('not.be.checked')
        cy.get(`[data-testid="task-item-${taskId}"]`).should('not.have.class', 'completed')
      })
    })
  })

  describe('Eliminar Tareas', () => {
    beforeEach(() => {
      // Crear una tarea para eliminar
      cy.fixture('tasks').then((tasks) => {
        const newTask = tasks.taskToAdd
        cy.get('[data-testid="new-task-input"]').type(newTask.text)
        cy.get('[data-testid="add-task-button"]').click()
      })
    })

    it('debería permitir eliminar una tarea exitosamente', () => {
      // Verificar que hay una tarea
      cy.get('[data-testid^="task-item-"]').should('have.length', 1)

      // Obtener el ID de la tarea
      cy.get('[data-testid^="task-item-"]').first().then(($task) => {
        const taskId = $task.attr('data-testid').replace('task-item-', '')

        // Eliminar la tarea
        cy.get(`[data-testid="delete-button-${taskId}"]`).click()

        // Verificar que se eliminó
        cy.get('[data-testid^="task-item-"]').should('have.length', 0)
      })
    })
  })

  describe('Filtrar Tareas', () => {
    beforeEach(() => {
      // Crear tareas con diferentes estados
      cy.fixture('tasks').then((tasks) => {
        const sampleTasks = tasks.sampleTasks.slice(0, 3)

        sampleTasks.forEach((task, index) => {
          cy.get('[data-testid="new-task-input"]').type(task.text)
          cy.get('[data-testid="add-task-button"]').click()
          
          // Marcar la primera tarea como completada
          if (index === 0) {
            cy.get('[data-testid^="task-checkbox-"]').first().click()
          }
        })
      })
    })

    it('debería mostrar todas las tareas por defecto', () => {
      // Verificar que se muestran todas las tareas
      cy.get('[data-testid^="task-item-"]').should('have.length', 3)
    })

    it('debería filtrar solo tareas activas', () => {
      // Hacer click en filtro de tareas activas
      cy.get('[data-testid="filter-active"]').click()

      // Verificar que solo se muestran tareas activas
      cy.get('[data-testid^="task-item-"]').should('have.length', 2)
    })

    it('debería filtrar solo tareas completadas', () => {
      // Hacer click en filtro de tareas completadas
      cy.get('[data-testid="filter-completed"]').click()

      // Verificar que solo se muestran tareas completadas
      cy.get('[data-testid^="task-item-"]').should('have.length', 1)
    })
  })

  describe('Responsive Design', () => {
    beforeEach(() => {
      // Crear algunas tareas para probar
      cy.fixture('tasks').then((tasks) => {
        const sampleTasks = tasks.sampleTasks.slice(0, 2)
        sampleTasks.forEach((task) => {
          cy.get('[data-testid="new-task-input"]').type(task.text)
          cy.get('[data-testid="add-task-button"]').click()
        })
      })
    })

    it('debería funcionar correctamente en móvil', () => {
      cy.setViewport('mobile')

      // Verificar que los elementos son visibles
      cy.get('[data-testid="task-title"]').should('be.visible')
      cy.get('[data-testid="add-task-form"]').should('be.visible')
      cy.get('[data-testid^="task-item-"]').should('have.length', 2)
    })

    it('debería funcionar correctamente en desktop', () => {
      cy.setViewport('desktop')

      // Verificar que los elementos son visibles
      cy.get('[data-testid="task-title"]').should('be.visible')
      cy.get('[data-testid="add-task-form"]').should('be.visible')
      cy.get('[data-testid^="task-item-"]').should('have.length', 2)
    })
  })
}) 