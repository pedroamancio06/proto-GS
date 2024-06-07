import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <h2 className='logo'>OceanTitan</h2>
        <div className='navbar-links'>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard">Adicionar Coleta</Link>
        </div>

        <div className='navbar-buttons'>
          <button id='btn-login'><Link to="/account">Login</Link></button>
          <button id='btn-create'><Link to="/account">Criar</Link></button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;