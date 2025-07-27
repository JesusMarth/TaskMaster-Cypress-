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
            ← Volver a TaskMaster
          </button>
        <h1>🧪 Sobre Nuestras Pruebas</h1>
        <p>Demostración completa de pruebas E2E con Cypress</p>
      </div>

      <div className="about-tests-content">
        <section className="test-section">
          <h2>📋 Resumen de Pruebas</h2>
          <p>
            Este proyecto demuestra prácticas profesionales de pruebas E2E usando Cypress. 
            Todas las pruebas están automatizadas y cubren el flujo completo del usuario 
            desde el registro hasta la gestión de tareas.
          </p>
        </section>

        <section className="test-section">
          <h2>🎥 Demostraciones de Pruebas</h2>
          
          <div className="video-grid">
            <div className="video-item">
              <h3>Pruebas de Autenticación</h3>
              <div className="video-preview">
                <video 
                  controls 
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23667eea'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='18'%3E🎬 Pruebas de Autenticación%3C/text%3E%3C/svg%3E"
                >
                  <source src="/cypress-videos/authentication.cy.js.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <p>Flujos de registro, login y logout de usuarios</p>
                <div className="test-details">
                  <span>✅ Validación de registro</span>
                  <span>✅ Login con credenciales válidas/inválidas</span>
                  <span>✅ Gestión de sesiones</span>
                </div>
              </div>
            </div>

            <div className="video-item">
              <h3>Pruebas de Gestión de Tareas</h3>
              <div className="video-preview">
                <video 
                  controls 
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%2348bb78'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='18'%3E🎬 Pruebas de Gestión de Tareas%3C/text%3E%3C/svg%3E"
                >
                  <source src="/cypress-videos/task-management.cy.js.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <p>Operaciones CRUD completas para tareas</p>
                <div className="test-details">
                  <span>✅ Crear nuevas tareas</span>
                  <span>✅ Editar tareas existentes</span>
                  <span>✅ Marcar tareas como completadas</span>
                  <span>✅ Eliminar tareas</span>
                </div>
              </div>
            </div>

            <div className="video-item">
              <h3>Pruebas de Integración</h3>
              <div className="video-preview">
                <video 
                  controls 
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f39c12'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='18'%3E🎬 Pruebas de Integración%3C/text%3E%3C/svg%3E"
                >
                  <source src="/cypress-videos/integration.cy.js.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <p>Flujos de trabajo completos del usuario</p>
                <div className="test-details">
                  <span>✅ Viaje completo del usuario</span>
                  <span>✅ Funcionalidad entre características</span>
                  <span>✅ Consistencia de datos</span>
                </div>
              </div>
            </div>

            <div className="video-item">
              <h3>Pruebas de Validación</h3>
              <div className="video-preview">
                <video 
                  controls 
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e74c3c'/%3E%3Ctext x='200' y='125' text-anchor='middle' fill='white' font-size='18'%3E🎬 Pruebas de Validación%3C/text%3E%3C/svg%3E"
                >
                  <source src="/cypress-videos/validation-test.cy.js.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <p>Validación de formularios y manejo de errores</p>
                <div className="test-details">
                  <span>✅ Validación de entrada</span>
                  <span>✅ Visualización de mensajes de error</span>
                  <span>✅ Manejo de casos extremos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="test-section">
          <h2>🛠️ Tecnologías de Testing</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>Cypress</h4>
              <p>Framework moderno de testing E2E</p>
            </div>
            <div className="tech-item">
              <h4>Comandos Personalizados</h4>
              <p>Funciones de prueba reutilizables</p>
            </div>
            <div className="tech-item">
              <h4>Fixtures</h4>
              <p>Datos de prueba estructurados</p>
            </div>
            <div className="tech-item">
              <h4>GitHub Actions</h4>
              <p>Pipeline automatizado de CI/CD</p>
            </div>
          </div>
        </section>

        <section className="test-section">
          <h2>📊 Cobertura de Pruebas</h2>
          <div className="coverage-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Flujos de Usuario</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Viewports</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Casos de Prueba</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">CI/CD</span>
            </div>
          </div>
        </section>

        <section className="test-section">
          <h2>🎯 Mejores Prácticas</h2>
          <ul className="best-practices">
            <li>✅ Selectores estables usando data-testid</li>
            <li>✅ Código de prueba modular y reutilizable</li>
            <li>✅ Manejo completo de errores</li>
            <li>✅ Testing de diseño responsive</li>
            <li>✅ Integración automatizada de CI/CD</li>
            <li>✅ Documentación profesional de pruebas</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutTests; 