import React from 'react';

function Resume() {
  return (
    <div className="container my-5 text-center">
      <a 
        href="/CV_Marwa-Derbel.pdf" 
        download="CV_Marwa-Derbel.pdf" 
        className="btn btn-outline-dark mt-3"
      >
        Télécharger mon CV
      </a>
    </div>
  );
}

export default Resume;
