import React from 'react';
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
              <a href="/" className="nav-link">Accueil</a>
            </li>
            <li className="nav-item">
              <a href="/a-propos" className="nav-link">À propos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;