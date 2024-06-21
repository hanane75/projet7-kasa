
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/acceuil.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="Logo.jpg" alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/accueil" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/propos" className="nav-link">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
