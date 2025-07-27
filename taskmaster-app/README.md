# TaskMaster - Aplicación de Gestión de Tareas

## Descripción

TaskMaster es una aplicación web moderna desarrollada en React para la gestión de tareas personales. Incluye funcionalidades completas de autenticación, gestión de tareas y diseño responsive.

## Características

- **Autenticación completa**: Registro, login y logout de usuarios
- **Gestión de tareas**: Crear, editar, completar y eliminar tareas
- **Filtros avanzados**: Ver todas, activas o completadas
- **Persistencia de datos**: Almacenamiento local con localStorage
- **Diseño responsive**: Optimizado para móvil, tablet y desktop
- **Validación de formularios**: Mensajes de error en tiempo real
- **Interfaz moderna**: Diseño con gradientes y animaciones suaves

## Tecnologías Utilizadas

- **React 18**: Framework principal
- **React Router DOM**: Navegación entre páginas
- **Context API**: Gestión de estado global
- **CSS3**: Estilos modernos con Flexbox y Grid
- **localStorage API**: Persistencia de datos

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# Construir para producción
npm run build
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Login.js          # Componente de inicio de sesión
│   ├── Register.js       # Componente de registro
│   ├── TaskList.js       # Componente principal de tareas
│   ├── Auth.css          # Estilos para autenticación
│   └── TaskList.css      # Estilos para gestión de tareas
├── context/
│   └── AuthContext.js    # Contexto de autenticación
├── App.js                # Componente principal
├── App.css               # Estilos globales
└── index.js              # Punto de entrada
```

## Funcionalidades

### Autenticación
- Registro de usuarios con validación de email y contraseña
- Login con credenciales almacenadas
- Logout con limpieza de sesión
- Redirección automática según estado de autenticación

### Gestión de Tareas
- Crear nuevas tareas con validación
- Editar tareas existentes en tiempo real
- Marcar/desmarcar tareas como completadas
- Eliminar tareas individuales
- Filtros por estado (todas, activas, completadas)

### Características de UX
- Interfaz intuitiva y moderna
- Feedback visual inmediato
- Navegación fluida entre páginas
- Diseño responsive para todos los dispositivos
- Animaciones suaves y transiciones

## Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas unitarias
- `npm run eject`: Expone la configuración de webpack (irreversible)

## Configuración

La aplicación utiliza localStorage para persistencia de datos. No requiere configuración adicional para funcionar localmente.

## Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Móvil, tablet, desktop
- **Sistemas**: Windows, macOS, Linux

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature
3. Implementa tus cambios
4. Ejecuta las pruebas
5. Envía un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
