# TaskMaster Cypress Test Suite

This project contains a comprehensive set of E2E (End-to-End) automated tests for the TaskMaster application using Cypress. The tests cover all major application functionalities including authentication, task management, and responsive design.

## Test Coverage

### Authentication Tests
- User registration with validation
- User login with valid/invalid credentials
- Logout functionality
- Form validation and error handling
- Session management

### Task Management Tests
- Create, read, update, delete tasks
- Task completion status
- Task filtering (all, active, completed)
- Data persistence verification
- Edge cases and error scenarios

### Integration Tests
- Complete user workflows
- Cross-feature functionality
- Data consistency verification
- User experience flows

### Responsive Design Tests
- Mobile viewport testing (375x667)
- Tablet viewport testing (768x1024)
- Desktop viewport testing (1280x720)
- Large desktop viewport testing (1920x1080)

## Project Structure

```
cypress/
├── e2e/                    # Test files
│   ├── authentication.cy.js    # Authentication tests
│   ├── task-management.cy.js   # Task management tests
│   └── integration.cy.js       # Integration tests
├── fixtures/              # Test data
│   ├── users.json         # User test data
│   └── tasks.json         # Task test data
├── support/               # Support files
│   ├── e2e.js            # Global configuration
│   └── commands.js       # Custom commands
└── screenshots/          # Test screenshots (generated)
```

## Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- TaskMaster React application running on localhost:3000

### Installation
```bash
# Install dependencies
npm install

# Open Cypress Test Runner
npm run cypress:open

# Run tests in headless mode
npm run cypress:run
```

## Test Configuration

### Cypress Configuration
- **Base URL**: http://localhost:3000
- **Viewport**: 1280x720 (default)
- **Timeouts**: 10 seconds
- **Video Recording**: Enabled
- **Screenshot Capture**: On failure

### Custom Commands
- `cy.login()`: Login with test credentials
- `cy.register()`: Register new user
- `cy.addTask()`: Add new task
- `cy.editTask()`: Edit existing task
- `cy.deleteTask()`: Delete task
- `cy.toggleTask()`: Toggle task completion
- `cy.filterTasks()`: Filter tasks by status

## Test Data Management

### Fixtures
- **users.json**: Test user credentials and data
- **tasks.json**: Sample task data for testing

### Test Users
- Valid user for login tests
- New user for registration tests
- Invalid user for error testing

## Best Practices Implemented

- **Page Object Model**: Organized test structure
- **Custom Commands**: Reusable test actions
- **Data-Driven Testing**: Using fixtures for test data
- **Stable Selectors**: data-testid attributes
- **Error Handling**: Comprehensive validation
- **Responsive Testing**: Multi-viewport verification

## CI/CD Integration

The test suite is integrated with GitHub Actions for:
- Automated testing on every push
- Test result reporting
- Screenshot and video artifacts
- Cross-browser testing

## Running Tests

### Interactive Mode
```bash
npm run cypress:open
```

### Headless Mode
```bash
npm run cypress:run
```

### Specific Test Files
```bash
npx cypress run --spec "cypress/e2e/authentication.cy.js"
```

### Different Browsers
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## Test Reports

- **Screenshots**: Captured on test failures
- **Videos**: Recorded for all test runs
- **Console Logs**: Available for debugging
- **Test Results**: Detailed pass/fail reporting

## Troubleshooting

### Common Issues
1. **Application not running**: Ensure TaskMaster app is running on localhost:3000
2. **Test timeouts**: Check application performance and network connectivity
3. **Element not found**: Verify data-testid attributes are present

### Debug Mode
```bash
# Run with debug logging
DEBUG=cypress:* npm run cypress:run
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add or update tests
4. Ensure all tests pass
5. Submit a pull request

## License

This project is licensed under the MIT License. 