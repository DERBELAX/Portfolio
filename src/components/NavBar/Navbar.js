import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg.jpg';
import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" aria-label="Accueil">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* zone droite (burger + toggle) */}
        <div className="nav-right">
          {/* bouton thème visible en mobile */}
          <button
            type="button"
            className="btn-theme-toggle d-inline-flex d-lg-none"
            aria-label="Changer de thème"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          {/* burger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Afficher le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Compétences</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projets</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>

          {/* bouton thème visible en desktop */}
          <button
            type="button"
            className="btn-theme-toggle d-none d-lg-inline-flex"
            aria-label="Changer de thème"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
