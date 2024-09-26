import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiBootstrap, SiMongodb, SiExpress, SiSass, SiMysql, SiVisualstudiocode, SiGithub } from 'react-icons/si';
import './Skills.css';

function Skills() {
  return (
    <div className="container my-5" id="skills">
      <h2 className="text-center mb-4">Mes Compétences</h2>
      <div className="row">
        <div className="technique col-md-6">
          <h3>Compétences techniques</h3>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><FaReact /> React.js</li>
            <li><SiBootstrap /> Bootstrap</li>
            <li><SiSass/>Sass</li>
            <li><FaNodeJs /> Node.js</li>
            <li><SiExpress /> Express.js</li>
          </ul>
        </div>
        <div className="outils col-md-6">
        <h3>Outils techniques</h3>
          <ul>
            <li><SiVisualstudiocode/> visual studio code</li>
            <li><SiGithub /> GitHub </li>
            <li><SiMongodb /> MongoDB</li>
            <li><SiMysql/>MySQL</li>
            <li><FaFigma/>Figma</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Skills;
