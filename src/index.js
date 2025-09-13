import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Création de la racine de l'application en sélectionnant l'élément avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
document.documentElement.setAttribute('data-palette', localStorage.getItem('palette') || 'saas');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
