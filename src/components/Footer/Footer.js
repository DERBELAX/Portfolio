// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-white py-4" role="contentinfo">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a href="https://github.com/DERBELAX" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/marwa-derbel-144583131/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:marwaderbel21@gmail.com" aria-label="Envoyer un email">
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-0">© {currentYear} Marwa Derbel — Tous droits réservés</p>
      </div>
    </footer>
  );
}
export default Footer;
