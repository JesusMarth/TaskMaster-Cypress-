import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [error, setError] = useState('');
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Cargar tareas del localStorage al montar el componente
  useEffect(() => {
    const savedTasks = localStorage.getItem(`tasks_${currentUser.id}`);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [currentUser.id]);

  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(`tasks_${currentUser.id}`, JSON.stringify(tasks));
  }, [tasks, currentUser.id]);

  const addTask = (e) => {
    e.preventDefault();
    
    if (!newTask.trim()) {
      setError('La tarea no puede estar vacía');
      return;
    }
    
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTasks(prev => [...prev, task]);
    setNewTask('');
    setError('');
  };

  const toggleTask = (taskId) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const saveEdit = (taskId) => {
    if (!editText.trim()) {
      setError('La tarea no puede estar vacía');
      return;
    }
    
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, text: editText.trim() }
          : task
      )
    );
    
    setEditingTask(null);
    setEditText('');
    setError('');
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditText('');
    setError('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.filter(task => !task.completed).length;

  const handleLogout = () => {
    logout();
  };

  const handleAboutTests = () => {
    navigate('/about-tests');
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <h2 data-testid="task-title">Mis Tareas</h2>
        <div className="user-info">
          <span data-testid="user-email">{currentUser.email}</span>
          <button 
            onClick={handleAboutTests}
            data-testid="about-tests-button"
            className="about-tests-button"
          >
            🧪 About Tests
          </button>
          <button 
            onClick={handleLogout}
            data-testid="logout-button"
            className="logout-button"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Formulario para agregar tareas */}
      <form onSubmit={addTask} className="add-task-form" data-testid="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Agregar nueva tarea..."
          data-testid="new-task-input"
          className="task-input"
        />
        <button 
          type="submit"
          data-testid="add-task-button"
          className="add-button"
        >
          Agregar
        </button>
      </form>

      {error && (
        <div className="error-message" data-testid="task-error">
          {error}
        </div>
      )}

      {/* Filtros */}
      <div className="task-filters" data-testid="task-filters">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
          data-testid="filter-all"
        >
          Todas ({tasks.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
          data-testid="filter-active"
        >
          Activas ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
          data-testid="filter-completed"
        >
          Completadas ({completedCount})
        </button>
      </div>

      {/* Lista de tareas */}
      <div className="task-list" data-testid="task-list">
        {filteredTasks.length === 0 ? (
          <div className="no-tasks" data-testid="no-tasks">
            {filter === 'all' 
              ? 'No hay tareas. ¡Agrega una nueva tarea!'
              : filter === 'active' 
                ? 'No hay tareas activas'
                : 'No hay tareas completadas'
            }
          </div>
        ) : (
          filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`task-item ${task.completed ? 'completed' : ''}`}
              data-testid={`task-item-${task.id}`}
            >
              {editingTask === task.id ? (
                <div className="edit-task">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    data-testid="edit-task-input"
                    className="edit-input"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(task.id)}
                    data-testid="save-edit-button"
                    className="save-button"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={cancelEdit}
                    data-testid="cancel-edit-button"
                    className="cancel-button"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      data-testid={`task-checkbox-${task.id}`}
                      className="task-checkbox"
                    />
                    <span 
                      className="task-text"
                      data-testid={`task-text-${task.id}`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => startEditing(task)}
                      data-testid={`edit-button-${task.id}`}
                      className="edit-button"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      data-testid={`delete-button-${task.id}`}
                      className="delete-button"
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList; 