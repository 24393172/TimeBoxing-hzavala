// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-screen">
      <header className="dashboard-header">
        <h1>Mi Panel</h1>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Cerrar Sesión</Link>
      </header>

      <main className="dashboard-content">
        {/* Tarjeta de bienvenida */}
        <div className="stat-card">
          <h3>Estado del Día</h3>
          <p>3 Tareas pendientes</p>
        </div>

        <div className="stat-card">
          <h3>Tiempo Enfocado</h3>
          <p>4.5 Horas</p>
        </div>

        <div className="stat-card">
          <h3>Productividad</h3>
          <p>85%</p>
        </div>

        {/* Botón grande para ir al planificador */}
        <Link to="/planner" className="btn-action">
          IR AL PLANIFICADOR DIARIO →
        </Link>
      </main>
    </div>
  );
}