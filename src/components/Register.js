import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
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
    
    // Solo limpiar error si el campo ahora es válido
    if (errors[name]) {
      let shouldClear = false;
      
      if (name === 'email' && value && /\S+@\S+\.\S+/.test(value)) {
        shouldClear = true;
      } else if (name === 'password' && value && value.length >= 6) {
        shouldClear = true;
      } else if (name === 'confirmPassword' && value && value === formData.password) {
        shouldClear = true;
      }
      
      if (shouldClear) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isValid = validateForm();
    
    if (!isValid) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = register(formData.email, formData.password);
      
      if (result.success) {
        navigate('/login');
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: 'Error al registrar usuario' });
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
        <h2 data-testid="register-title">Registrarse</h2>
        
        {errors.general && (
          <div className="error-message" data-testid="register-error">
            {errors.general}
          </div>
        )}
        
        <form onSubmit={handleSubmit} data-testid="register-form">
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
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              data-testid="confirm-password-input"
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirma tu contraseña"
            />
            {errors.confirmPassword && (
              <span className="field-error" data-testid="confirm-password-error">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            data-testid="register-button"
            className="auth-button"
          >
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        
        <div className="auth-links">
          <p>
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" data-testid="login-link">
              Inicia sesión aquí
            </Link>
          </p>
          <button 
            onClick={handleAboutTests}
            data-testid="about-tests-button-register"
            className="about-tests-button-auth"
          >
            🧪 About Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register; 