import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = login(formData.email, formData.password);
      
      if (result.success) {
        navigate('/');
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: 'Error al iniciar sesión' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAboutTests = () => {
    navigate('/about-tests');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 data-testid="login-title">Iniciar Sesión</h2>
        
        {errors.general && (
          <div className="error-message" data-testid="login-error">
            {errors.general}
          </div>
        )}
        
        <form onSubmit={handleSubmit} data-testid="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-testid="email-input"
              className={errors.email ? 'error' : ''}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <span className="field-error" data-testid="email-error">
                {errors.email}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              data-testid="password-input"
              className={errors.password ? 'error' : ''}
              placeholder="Tu contraseña"
            />
            {errors.password && (
              <span className="field-error" data-testid="password-error">
                {errors.password}
              </span>
            )}
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            data-testid="login-button"
            className="auth-button"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        
        <div className="auth-links">
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" data-testid="register-link">
              Regístrate aquí
            </Link>
          </p>
          <button 
            onClick={handleAboutTests}
            data-testid="about-tests-button-login"
            className="about-tests-button-auth"
          >
            🧪 About Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login; 