import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos el hook
import './Login.css';

export default function Login() {
  const navigate = useNavigate(); // 2. Inicializamos el navegador

  const handleSubmit = (e) => {
    e.preventDefault();
    // 3. Al hacer clic, navegamos al dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-screen">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Usuario</label>
          <input type="text" placeholder="Escribe tu usuario" required />
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="********" required />
        </div>
        <button type="submit" className="btn-login">ENTRAR</button>
      </form>
    </div>
  );
}