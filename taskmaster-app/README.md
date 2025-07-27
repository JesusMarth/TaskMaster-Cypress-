# TaskMaster React Application

A modern React-based task management application with user authentication, CRUD operations, and responsive design.

## Features

- **User Authentication**: Registration, login, and logout functionality
- **Task Management**: Create, edit, complete, and delete tasks
- **Task Filtering**: View all, active, or completed tasks
- **Data Persistence**: localStorage for data storage
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Form Validation**: Real-time error messages
- **Modern UI**: Clean and professional interface

## Technologies Used

- **React 18**: Modern UI framework
- **React Router DOM**: Client-side routing
- **Context API**: Global state management
- **CSS3**: Modern styling with responsive design
- **localStorage**: Client-side data persistence

## Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Project Structure

```
src/
├── components/          # React components
│   ├── Login.js        # Login form component
│   ├── Register.js     # Registration form component
│   ├── TaskList.js     # Main task management component
│   ├── Auth.css        # Authentication styles
│   └── TaskList.css    # Task list styles
├── context/
│   └── AuthContext.js  # Authentication context
├── App.js              # Main application component
├── App.css             # Global styles
└── index.js            # Application entry point
```

## Features Overview

### Authentication
- User registration with email and password
- User login with validation
- Secure logout functionality
- Session persistence

### Task Management
- Create new tasks with validation
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks with confirmation
- Filter tasks by status

### User Experience
- Responsive design for all devices
- Real-time form validation
- Intuitive navigation
- Clean and modern interface

## Development

### Code Quality
- ESLint configuration for code quality
- Prettier for code formatting
- Consistent coding standards

### State Management
- React Context API for global state
- Local component state for UI interactions
- localStorage for data persistence

## Deployment

The application is ready for production deployment with:
- Optimized build process
- Environment variable support
- Responsive design implementation
- Performance optimizations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
