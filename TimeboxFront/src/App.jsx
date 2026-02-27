// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Planner from './pages/Planner';

function App() {
  return (
    <Routes>
      {/* 1. Al abrir la app, vemos el Login */}
      <Route path="/" element={<Login />} />
      
      {/* 2. Ruta para el Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* 3. Ruta para el Planificador */}
      <Route path="/planner" element={<Planner />} />

      {/* 4. Si el usuario escribe cualquier cosa mal, lo mandamos al Login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;