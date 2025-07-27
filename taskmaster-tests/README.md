# TaskMaster - Pruebas E2E con Cypress

## Descripción

Este proyecto contiene un conjunto completo de pruebas automatizadas E2E (End-to-End) para la aplicación TaskMaster utilizando Cypress. Las pruebas cubren todas las funcionalidades principales de la aplicación, incluyendo autenticación, gestión de tareas y diseño responsive.

## Características de las Pruebas

- **Cobertura completa**: 15+ casos de prueba automatizados
- **Fixtures de datos**: Datos de prueba reutilizables y organizados
- **Comandos personalizados**: Funciones reutilizables para testing
- **Pruebas responsive**: Verificación en múltiples viewports
- **Buenas prácticas**: Selectores estables, código modular
- **Integración continua**: Configuración para GitHub Actions

## Estructura del Proyecto

```
cypress/
├── e2e/
│   ├── authentication.cy.js    # Pruebas de autenticación
│   ├── task-management.cy.js   # Pruebas de gestión de tareas
│   └── integration.cy.js       # Pruebas de integración
├── fixtures/
│   ├── users.json              # Datos de usuarios de prueba
│   └── tasks.json              # Datos de tareas de prueba
└── support/
    ├── e2e.js                  # Configuración y comandos principales
    └── commands.js             # Comandos personalizados adicionales
```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar pruebas en modo interactivo
npx cypress open

# Ejecutar pruebas en modo headless
npx cypress run
```

## Tipos de Pruebas

### Autenticación
- Registro de usuarios nuevos
- Login con credenciales válidas
- Login con credenciales inválidas
- Logout exitoso
- Redirección automática

### Gestión de Tareas
- Crear nuevas tareas
- Editar tareas existentes
- Marcar/desmarcar como completadas
- Eliminar tareas
- Filtros por estado

### Integración
- Flujo completo de usuario nuevo
- Login directo con usuario existente
- Funcionamiento responsive

### Responsive Design
- Verificación en móvil (375x667)
- Verificación en desktop (1280x720)

## Comandos Personalizados

### Autenticación
- `cy.register(email, password, confirmPassword)`: Registrar un nuevo usuario
- `cy.login(email, password)`: Iniciar sesión
- `cy.logout()`: Cerrar sesión

### Gestión de Tareas
- `cy.addTask(text)`: Agregar una nueva tarea
- `cy.editTask(taskId, newText)`: Editar una tarea existente
- `cy.completeTask(taskId)`: Marcar tarea como completada
- `cy.deleteTask(taskId)`: Eliminar una tarea

### Utilidades
- `cy.clearAppStorage()`: Limpiar localStorage
- `cy.setViewport(device)`: Cambiar viewport (mobile, tablet, desktop)

## Configuración

### cypress.config.js
```javascript
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true
  }
}
```

### Fixtures

#### users.json
```json
{
  "validUser": {
    "email": "test@taskmaster.com",
    "password": "password123"
  },
  "newUser": {
    "email": "newuser@taskmaster.com",
    "password": "newpassword123",
    "confirmPassword": "newpassword123"
  }
}
```

#### tasks.json
```json
{
  "taskToAdd": {
    "text": "Nueva tarea de prueba"
  },
  "sampleTasks": [
    {"text": "Completar proyecto de testing"},
    {"text": "Revisar documentación de Cypress"},
    {"text": "Preparar presentación del equipo"}
  ]
}
```

## Ejecución de Pruebas

### Modo Interactivo
```bash
npx cypress open
```

### Modo Headless
```bash
npx cypress run
```

### Pruebas Específicas
```bash
# Ejecutar solo pruebas de autenticación
npx cypress run --spec "cypress/e2e/authentication.cy.js"

# Ejecutar solo pruebas de tareas
npx cypress run --spec "cypress/e2e/task-management.cy.js"
```

### Navegadores Específicos
```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
```

## Buenas Prácticas Implementadas

### Selectores
- Uso de `data-testid` en lugar de clases o texto
- Selectores estables y mantenibles
- Evitar selectores frágiles

### Organización
- Pruebas agrupadas por funcionalidad
- Fixtures para datos de prueba
- Comandos personalizados reutilizables

### Limpieza
- Limpieza de localStorage entre pruebas
- Estado consistente para cada test
- Aislamiento de pruebas

## Integración Continua

El proyecto incluye configuración para GitHub Actions que ejecuta las pruebas automáticamente en cada push y pull request.

### Workflow (.github/workflows/cypress-tests.yml)
- Ejecuta pruebas en modo headless
- Genera reportes de resultados
- Sube screenshots y videos en caso de fallo

## Troubleshooting

### Problemas Comunes

1. **Aplicación no está corriendo**
   - Asegúrate de que la aplicación React esté ejecutándose en `http://localhost:3000`

2. **Pruebas fallan por timing**
   - Aumenta `defaultCommandTimeout` en la configuración

3. **Elementos no encontrados**
   - Verifica que los `data-testid` estén correctos
   - Asegúrate de que la aplicación esté completamente cargada

### Debugging
```bash
# Ejecutar con debug
DEBUG=cypress:* npx cypress run

# Pausar en fallos
npx cypress run --no-exit
```

## Contribución

Para agregar nuevas pruebas:

1. Crea el archivo de prueba en `cypress/e2e/`
2. Agrega datos necesarios en `cypress/fixtures/`
3. Crea comandos personalizados si es necesario
4. Ejecuta las pruebas para verificar que funcionan
5. Documenta las nuevas funcionalidades

## Tecnologías

- **Cypress 13**: Framework de testing E2E
- **JavaScript**: Lenguaje de programación
- **GitHub Actions**: Integración continua
- **Node.js**: Entorno de ejecución

## Licencia

Este proyecto está bajo la Licencia MIT. 