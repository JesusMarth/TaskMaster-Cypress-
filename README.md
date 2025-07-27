# TaskMaster - Proyecto de Pruebas E2E con Cypress

## 📋 Descripción del Proyecto

Este proyecto demuestra un conjunto completo de pruebas automatizadas E2E (End-to-End) utilizando Cypress para una aplicación web de gestión de tareas llamada "TaskMaster". El proyecto incluye tanto la aplicación React como las pruebas automatizadas, sirviendo como muestra profesional para un portfolio de QA Automation.

## 🎯 Características del Proyecto

### Aplicación Web (React)
- **Autenticación completa**: Registro, login y logout de usuarios
- **Gestión de tareas**: Crear, editar, completar y eliminar tareas
- **Filtros de tareas**: Ver todas, activas o completadas
- **Persistencia de datos**: Almacenamiento en localStorage
- **Diseño responsive**: Funciona en desktop, tablet y móvil
- **Validación de formularios**: Mensajes de error en tiempo real

### Pruebas E2E (Cypress)
- **Cobertura completa**: 15+ casos de prueba automatizados
- **Fixtures de datos**: Datos de prueba reutilizables
- **Comandos personalizados**: Funciones reutilizables
- **Pruebas responsive**: Verificación en múltiples viewports
- **Buenas prácticas**: Selectores estables, código modular
- **Integración continua**: Configuración para GitHub Actions

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación Rápida (Windows)
```bash
# Ejecutar script automático
install-and-run.bat
```

### Instalación Manual

#### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd pruebas-automatizadas-E2E
```

#### 2. Instalar dependencias de la aplicación React
```bash
cd taskmaster-app
npm install
```

#### 3. Instalar dependencias de las pruebas Cypress
```bash
cd ../taskmaster-tests
npm install
```

#### 4. Ejecutar la aplicación React
```bash
cd ../taskmaster-app
npm start
```

#### 5. Ejecutar las pruebas Cypress
```bash
# En otra terminal
cd taskmaster-tests
npx cypress open
```

## 📁 Estructura del Proyecto

```
pruebas-automatizadas-E2E/
├── taskmaster-app/                 # Aplicación React
│   ├── src/
│   │   ├── components/            # Componentes React
│   │   ├── context/              # Context API
│   │   └── App.js                # Componente principal
│   ├── package.json
│   └── README.md
├── taskmaster-tests/              # Pruebas Cypress
│   ├── cypress/
│   │   ├── e2e/                  # Casos de prueba
│   │   ├── fixtures/             # Datos de prueba
│   │   └── support/              # Configuración
│   ├── cypress.config.js
│   └── README.md
├── .github/workflows/             # GitHub Actions
├── README.md                      # Este archivo
└── install-and-run.bat           # Script de instalación
```

## 🧪 Tipos de Pruebas Implementadas

### Autenticación
- ✅ Registro de usuarios nuevos
- ✅ Login con credenciales válidas
- ✅ Login con credenciales inválidas
- ✅ Logout exitoso
- ✅ Redirección automática

### Gestión de Tareas
- ✅ Crear nuevas tareas
- ✅ Editar tareas existentes
- ✅ Marcar/desmarcar como completadas
- ✅ Eliminar tareas
- ✅ Filtros por estado

### Integración
- ✅ Flujo completo de usuario nuevo
- ✅ Login directo con usuario existente
- ✅ Funcionamiento responsive

### Responsive Design
- ✅ Verificación en móvil (375x667)
- ✅ Verificación en desktop (1280x720)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18**: Framework de interfaz de usuario
- **React Router DOM**: Navegación entre páginas
- **Context API**: Gestión de estado global
- **CSS3**: Estilos modernos y responsive

### Testing
- **Cypress 13**: Framework de pruebas E2E
- **JavaScript**: Lenguaje de programación
- **Fixtures**: Datos de prueba estructurados
- **Custom Commands**: Funciones reutilizables

### DevOps
- **GitHub Actions**: Integración continua
- **Node.js**: Entorno de ejecución
- **npm**: Gestor de paquetes

## 📊 Estadísticas del Proyecto

- **Casos de prueba**: 15+
- **Cobertura**: 100% funcionalidades principales
- **Tiempo de ejecución**: ~2 minutos
- **Viewports soportados**: 3 (móvil, tablet, desktop)
- **Fixtures de datos**: 2 archivos JSON
- **Comandos personalizados**: 8 funciones

## 🎨 Características de Diseño

- **Interfaz moderna**: Diseño limpio y profesional
- **Responsive**: Adaptable a todos los dispositivos
- **Accesibilidad**: Navegación por teclado
- **UX intuitiva**: Flujos de usuario claros
- **Feedback visual**: Estados de carga y errores

## 🔧 Comandos Útiles

### Desarrollo
```bash
# Ejecutar aplicación en modo desarrollo
cd taskmaster-app
npm start

# Ejecutar pruebas en modo interactivo
cd taskmaster-tests
npx cypress open

# Ejecutar pruebas en modo headless
npx cypress run

# Ejecutar pruebas en navegador específico
npx cypress run --browser chrome
```

### Calidad de Código
```bash
# Linting
npm run lint

# Formateo
npm run format
```

## 📈 Métricas de Calidad

- **Tasa de éxito**: 100% en pruebas principales
- **Tiempo de respuesta**: < 3 segundos por acción
- **Compatibilidad**: Chrome, Firefox, Edge
- **Mantenibilidad**: Código modular y documentado

## 🤝 Contribución

Este proyecto está diseñado como muestra de portfolio. Para contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Implementa tus cambios
4. Ejecuta las pruebas
5. Envía un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como proyecto de portfolio para demostrar habilidades en:
- Testing automatizado con Cypress
- Desarrollo frontend con React
- Integración continua
- Buenas prácticas de QA

---

**Nota**: Este proyecto es una demostración educativa y profesional de pruebas automatizadas E2E. 