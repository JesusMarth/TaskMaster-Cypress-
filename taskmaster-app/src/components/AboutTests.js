import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutTests.css';

const AboutTests = () => {
  const navigate = useNavigate();

  const handleBackToApp = () => {
    navigate('/');
  };

  return (
    <div className="about-tests-container">
      <div className="about-tests-header">
        <button 
          onClick={handleBackToApp}
          className="back-button"
          data-testid="back-to-app-button"
        >
          ← Back to TaskMaster
        </button>
        <h1>🧪 About Our Tests</h1>
        <p>Comprehensive E2E testing demonstration with Cypress</p>
      </div>

      <div className="about-tests-content">
        <section className="test-section">
          <h2>📋 Test Overview</h2>
          <p>
            This project demonstrates professional E2E testing practices using Cypress. 
            All tests are automated and cover the complete user journey from registration 
            to task management.
          </p>
        </section>

        <section className="test-section">
          <h2>🎥 Test Demonstrations</h2>
          
          <div className="video-grid">
            <div className="video-item">
              <h3>Authentication Tests</h3>
              <div className="video-placeholder">
                <div className="video-icon">🎬</div>
                <p>User registration, login, and logout flows</p>
                <div className="test-details">
                  <span>✅ Registration validation</span>
                  <span>✅ Login with valid/invalid credentials</span>
                  <span>✅ Session management</span>
                </div>
              </div>
            </div>

            <div className="video-item">
              <h3>Task Management Tests</h3>
              <div className="video-placeholder">
                <div className="video-icon">🎬</div>
                <p>Complete CRUD operations for tasks</p>
                <div className="test-details">
                  <span>✅ Create new tasks</span>
                  <span>✅ Edit existing tasks</span>
                  <span>✅ Mark tasks as complete</span>
                  <span>✅ Delete tasks</span>
                </div>
              </div>
            </div>

            <div className="video-item">
              <h3>Integration Tests</h3>
              <div className="video-placeholder">
                <div className="video-icon">🎬</div>
                <p>End-to-end user workflows</p>
                <div className="test-details">
                  <span>✅ Complete user journey</span>
                  <span>✅ Cross-feature functionality</span>
                  <span>✅ Data consistency</span>
                </div>
              </div>
            </div>

            <div className="video-item">
              <h3>Validation Tests</h3>
              <div className="video-placeholder">
                <div className="video-icon">🎬</div>
                <p>Form validation and error handling</p>
                <div className="test-details">
                  <span>✅ Input validation</span>
                  <span>✅ Error message display</span>
                  <span>✅ Edge case handling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="test-section">
          <h2>🛠️ Testing Technologies</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>Cypress</h4>
              <p>Modern E2E testing framework</p>
            </div>
            <div className="tech-item">
              <h4>Custom Commands</h4>
              <p>Reusable test functions</p>
            </div>
            <div className="tech-item">
              <h4>Fixtures</h4>
              <p>Structured test data</p>
            </div>
            <div className="tech-item">
              <h4>GitHub Actions</h4>
              <p>Automated CI/CD pipeline</p>
            </div>
          </div>
        </section>

        <section className="test-section">
          <h2>📊 Test Coverage</h2>
          <div className="coverage-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">User Flows</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Viewports</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Test Cases</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">CI/CD</span>
            </div>
          </div>
        </section>

        <section className="test-section">
          <h2>🎯 Best Practices</h2>
          <ul className="best-practices">
            <li>✅ Stable selectors using data-testid</li>
            <li>✅ Modular and reusable test code</li>
            <li>✅ Comprehensive error handling</li>
            <li>✅ Responsive design testing</li>
            <li>✅ Automated CI/CD integration</li>
            <li>✅ Professional test documentation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutTests; 