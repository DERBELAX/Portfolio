import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    // Utilisation de Router pour gérer la navigation de l'application
    <Router>
      <Routes>
        {/* Route pour la page d'accueil. Le composant Home sera rendu à l'URL '/' */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

