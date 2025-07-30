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
      {/* Hero Section */}
      <div className="hero-section">
        <button 
          onClick={handleBackToApp}
          className="back-button"
          data-testid="back-to-app-button"
        >
          ← Volver a TaskMaster
        </button>
        
        <div className="hero-content">
          <div className="hero-badge">🚀 PORTFOLIO QA AUTOMATION</div>
          <h1>TaskMaster E2E Testing</h1>
          <p className="hero-subtitle">
            Demostración profesional de pruebas automatizadas End-to-End con Cypress
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Tests</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Cobertura</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Viewports</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">CI/CD</span>
            </div>
          </div>
        </div>
      </div>

      {/* What We Test Section */}
      <div className="test-overview-section">
        <h2>🧪 ¿Qué Probamos?</h2>
        <div className="test-categories">
          <div className="category-card auth-card">
            <div className="category-icon">🔐</div>
            <h3>Autenticación</h3>
            <p>Registro, login, logout y gestión de sesiones</p>
            <div className="category-features">
              <span>✅ Validación de formularios</span>
              <span>✅ Manejo de errores</span>
              <span>✅ Persistencia de sesión</span>
            </div>
          </div>
          
          <div className="category-card task-card">
            <div className="category-icon">📝</div>
            <h3>Gestión de Tareas</h3>
            <p>Operaciones CRUD completas para tareas</p>
            <div className="category-features">
              <span>✅ Crear, editar, eliminar</span>
              <span>✅ Marcar como completada</span>
              <span>✅ Filtros por estado</span>
            </div>
          </div>
          
          <div className="category-card integration-card">
            <div className="category-icon">🔄</div>
            <h3>Integración</h3>
            <p>Flujos completos de usuario y funcionalidad</p>
            <div className="category-features">
              <span>✅ Viajes de usuario</span>
              <span>✅ Consistencia de datos</span>
              <span>✅ UX completa</span>
            </div>
          </div>
          
          <div className="category-card responsive-card">
            <div className="category-icon">📱</div>
            <h3>Responsive</h3>
            <p>Testing en múltiples dispositivos</p>
            <div className="category-features">
              <span>✅ Móvil (375x667)</span>
              <span>✅ Tablet (768x1024)</span>
              <span>✅ Desktop (1920x1080)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="tech-stack-section">
        <h2>🛠️ Stack Tecnológico</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <div className="tech-icon">⚛️</div>
            <h4>React 18</h4>
            <p>Aplicación frontend moderna</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🧪</div>
            <h4>Cypress 14</h4>
            <p>Testing E2E automatizado</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🚀</div>
            <h4>GitHub Actions</h4>
            <p>CI/CD pipeline</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">📊</div>
            <h4>Test Reports</h4>
            <p>Videos y screenshots</p>
          </div>
        </div>
      </div>

      {/* Demo Videos */}
      <div className="demo-section">
        <h2>🎬 Demostraciones en Video</h2>
        <div className="video-showcase">
          <div className="video-card">
            <div className="video-header">
              <span className="video-badge">AUTH</span>
              <h3>Pruebas de Autenticación</h3>
            </div>
            <video 
              controls 
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23667eea'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='16'%3E🔐 Authentication Tests%3C/text%3E%3C/svg%3E"
            >
              <source src="/cypress-videos/authentication.cy.js.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
            <p>Registro, login y gestión de sesiones de usuario</p>
          </div>

          <div className="video-card">
            <div className="video-header">
              <span className="video-badge">TASKS</span>
              <h3>Gestión de Tareas</h3>
            </div>
            <video 
              controls 
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%2348bb78'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='16'%3E📝 Task Management%3C/text%3E%3C/svg%3E"
            >
              <source src="/cypress-videos/task-management.cy.js.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
            <p>Operaciones CRUD completas para gestión de tareas</p>
          </div>

          <div className="video-card">
            <div className="video-header">
              <span className="video-badge">INTEGRATION</span>
              <h3>Pruebas de Integración</h3>
            </div>
            <video 
              controls 
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f39c12'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='16'%3E🔄 Integration Tests%3C/text%3E%3C/svg%3E"
            >
              <source src="/cypress-videos/integration.cy.js.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
            <p>Flujos completos de trabajo del usuario</p>
          </div>

          <div className="video-card">
            <div className="video-header">
              <span className="video-badge">VALIDATION</span>
              <h3>Pruebas de Validación</h3>
            </div>
            <video 
              controls 
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e74c3c'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='16'%3E✅ Validation Tests%3C/text%3E%3C/svg%3E"
            >
              <source src="/cypress-videos/validation-test.cy.js.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
            <p>Validación de formularios y manejo de errores</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="practices-section">
        <h2>🏆 Mejores Prácticas Implementadas</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <div className="practice-icon">🎯</div>
            <h4>Selectores Estables</h4>
            <p>Uso de data-testid para elementos de prueba</p>
          </div>
          <div className="practice-item">
            <div className="practice-icon">🔄</div>
            <h4>Código Reutilizable</h4>
            <p>Comandos personalizados de Cypress</p>
          </div>
          <div className="practice-item">
            <div className="practice-icon">📊</div>
            <h4>Datos Estructurados</h4>
            <p>Fixtures para datos de prueba consistentes</p>
          </div>
          <div className="practice-item">
            <div className="practice-icon">🚀</div>
            <h4>CI/CD Automatizado</h4>
            <p>Pipeline con GitHub Actions</p>
          </div>
          <div className="practice-item">
            <div className="practice-icon">📱</div>
            <h4>Testing Responsive</h4>
            <p>Pruebas en múltiples viewports</p>
          </div>
          <div className="practice-item">
            <div className="practice-icon">📝</div>
            <h4>Documentación</h4>
            <p>READMEs profesionales y completos</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>💼 Portfolio QA Automation</h2>
        <p>Este proyecto demuestra competencias profesionales en:</p>
        <div className="skills-showcase">
          <span className="skill-tag">E2E Testing</span>
          <span className="skill-tag">Cypress</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">CI/CD</span>
          <span className="skill-tag">GitHub Actions</span>
          <span className="skill-tag">QA Automation</span>
        </div>
        <div className="cta-buttons">
          <button 
            onClick={handleBackToApp}
            className="cta-primary"
          >
            🚀 Probar la Aplicación
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTests; 