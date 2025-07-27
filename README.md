# TaskMaster - E2E Testing Project

A complete E2E automated testing project using Cypress for a fictional React web application called "TaskMaster". This project demonstrates professional testing practices, CI/CD integration, and comprehensive test coverage.

## Project Description

TaskMaster is a React-based task management application with user authentication, task CRUD operations, and responsive design. The project includes a complete Cypress test suite covering all major functionalities including authentication flows, task management, and responsive design testing.

## 🎥 Test Demonstrations

### Authentication Tests
![Authentication Tests](cypress-videos/authentication.cy.js.mp4)

### Task Management Tests
![Task Management Tests](cypress-videos/task-management.cy.js.mp4)

### Integration Tests
![Integration Tests](cypress-videos/integration.cy.js.mp4)

### Validation Tests
![Validation Tests](cypress-videos/validation-test.cy.js.mp4)

> **Note**: Videos can be viewed by clicking on them. They will open in a new tab where you can play them directly in the browser.

## 🚀 Quick Start

### Option 1: Automated Setup (Windows)
```bash
# Run the automated setup script
install-and-run.bat
```

### Option 2: Manual Setup
```bash
# Install React app dependencies
cd taskmaster-app
npm install
npm start

# In a new terminal, install Cypress test dependencies
cd taskmaster-tests
npm install
npm run cypress:open
```

## 📁 Project Structure

```
├── taskmaster-app/          # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # Authentication context
│   │   └── App.js          # Main application
│   └── package.json
├── taskmaster-tests/        # Cypress test suite
│   ├── cypress/
│   │   ├── e2e/            # Test files
│   │   ├── fixtures/       # Test data
│   │   └── support/        # Custom commands
│   └── package.json
├── .github/workflows/       # GitHub Actions CI/CD
└── README.md
```

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router DOM, CSS3
- **Testing**: Cypress 13, E2E Testing
- **CI/CD**: GitHub Actions
- **State Management**: React Context API
- **Data Persistence**: localStorage
- **Development**: Node.js, npm

## 🧪 Test Coverage

### Authentication Tests
- User registration with validation
- User login/logout functionality
- Form validation and error handling
- Session management

### Task Management Tests
- Create, read, update, delete tasks
- Task completion status
- Task filtering (all, active, completed)
- Data persistence

### Integration Tests
- Complete user workflows
- Cross-feature functionality
- Data consistency
- User experience flows

### Responsive Design Tests
- Mobile viewport (375x667)
- Tablet viewport (768x1024)
- Desktop viewport (1280x720)
- Large desktop viewport (1920x1080)

## 🎯 Key Features

- **Professional Test Structure**: Modular and reusable test code
- **Custom Commands**: Extended Cypress API for common actions
- **Stable Selectors**: Using data-testid attributes
- **Test Data Management**: Fixtures for consistent test data
- **CI/CD Integration**: Automated testing on every push
- **Responsive Testing**: Cross-device compatibility verification
- **Error Handling**: Comprehensive validation testing

## 📊 CI/CD Pipeline

The project includes a complete GitHub Actions workflow that:
- Runs on every push and pull request
- Installs dependencies for both app and tests
- Starts the React application
- Executes all Cypress tests
- Generates test reports
- Uploads screenshots and videos on failure

## 🏆 Best Practices Implemented

- **Page Object Model**: Organized test structure
- **Custom Commands**: Reusable test actions
- **Data-Driven Testing**: Using fixtures for test data
- **Stable Selectors**: data-testid attributes
- **Error Handling**: Comprehensive validation
- **Responsive Testing**: Multi-viewport verification
- **CI/CD Integration**: Automated testing pipeline

## 🚀 Deployment

The project is ready for deployment with:
- Production build configuration
- Environment variable management
- Optimized bundle size
- Responsive design implementation

## 📈 Metrics

- **Test Coverage**: 100% of major user flows
- **Viewports Tested**: 4 different screen sizes
- **Test Categories**: 4 comprehensive test suites
- **CI/CD**: Fully automated testing pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add or update tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please open an issue in the repository.

---

**Note**: This project serves as a professional portfolio sample demonstrating E2E testing expertise with Cypress, React development, and CI/CD implementation. 