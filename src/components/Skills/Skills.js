import React, { useState, useMemo } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaJava, FaLinux
} from 'react-icons/fa';
import {
  SiBootstrap, SiMongodb, SiExpress, SiSass, SiMysql, SiVisualstudiocode, SiGithub,
  SiSpring, SiPhp, SiSymfony, SiGitlab, SiPostman, SiSwagger, SiDocker, SiJira
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import './Skills.css';

/* ——— Compétences techniques (langages & frameworks) ———
   Mets en premier celles à afficher par défaut */
const TECH_SKILLS = [
  { label: 'HTML5',       icon: FaHtml5,           url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
  { label: 'CSS3',        icon: FaCss3Alt,         url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
  { label: 'JavaScript',  icon: FaJsSquare,        url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
  { label: 'React.js',    icon: FaReact,           url: 'https://fr.react.dev/' },
  { label: 'Node.js',     icon: FaNodeJs,          url: 'https://nodejs.org/en/docs' },
  { label: 'Express.js',  icon: SiExpress,         url: 'https://expressjs.com/en/guide/routing.html' },
  { label: 'Java',        icon: FaJava,            url: 'https://docs.oracle.com/en/java/javase/' },
  { label: 'Spring Boot', icon: SiSpring,          url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
  { label: 'PHP',         icon: SiPhp,             url: 'https://www.php.net/docs.php' },
  { label: 'Symfony',     icon: SiSymfony,         url: 'https://symfony.com/doc/current/index.html' },
  { label: 'Bootstrap',   icon: SiBootstrap,       url: 'https://getbootstrap.com/docs/' },
  { label: 'Sass',        icon: SiSass,            url: 'https://sass-lang.com/documentation/' },
];

/* ——— Outils & DevOps ——— */
const TOOL_SKILLS = [
  { label: 'GitHub',             icon: SiGithub,           url: 'https://docs.github.com/' },
  { label: 'GitLab',             icon: SiGitlab,           url: 'https://docs.gitlab.com/' },
  { label: 'MongoDB',            icon: SiMongodb,          url: 'https://www.mongodb.com/docs/' },
  { label: 'MySQL',              icon: SiMysql,            url: 'https://dev.mysql.com/doc/' },
  { label: 'Docker',             icon: SiDocker,           url: 'https://docs.docker.com/' },
  { label: 'Linux',              icon: FaLinux,            url: 'https://linuxjourney.com/' },
  { label: 'Postman',            icon: SiPostman,          url: 'https://learning.postman.com/docs/' },
  { label: 'Swagger / OpenAPI',  icon: SiSwagger,          url: 'https://swagger.io/docs/specification/about/' },
  { label: 'Jira',               icon: SiJira,             url: 'https://support.atlassian.com/jira-software-cloud/' },
  { label: 'Visual Studio Code', icon: SiVisualstudiocode, url: 'https://code.visualstudio.com/docs' },
  { label: 'Figma',              icon: FaFigma,            url: 'https://help.figma.com/hc/fr' },
];

/* ——— Méthodologies ——— */
const METHODO_SKILLS = [
  { label: 'Scrum (Guide officiel)', icon: SiJira,         url: 'https://scrumguides.org/scrum-guide.html' },
  { label: 'Agile Manifesto',        icon: FiExternalLink, url: 'https://agilemanifesto.org/iso/fr/manifesto.html' },
  { label: 'Git Flow',               icon: FiExternalLink, url: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow' },
];

function SkillItem({ Icon, label, url }) {
  return (
    <li>
      <a
        className="skill-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Ouvrir la documentation ${label} (nouvel onglet)`}
        aria-label={`Ouvrir la documentation ${label} (nouvel onglet)`}
      >
        <Icon aria-hidden="true" />
        <span className="skill-label">{label}</span>
        <FiExternalLink className="ext" aria-hidden="true" />
      </a>
    </li>
  );
}

function Skills() {
  /* États “Afficher plus / moins” */
  const [showAllTech, setShowAllTech]   = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);
  const [showMethods, setShowMethods]   = useState(false);

  /* Combien visibles par défaut */
  const VISIBLE_TECH  = 8;
  const VISIBLE_TOOLS = 6;

  const techToShow = useMemo(
    () => (showAllTech ? TECH_SKILLS : TECH_SKILLS.slice(0, VISIBLE_TECH)),
    [showAllTech]
  );
  const toolsToShow = useMemo(
    () => (showAllTools ? TOOL_SKILLS : TOOL_SKILLS.slice(0, VISIBLE_TOOLS)),
    [showAllTools]
  );

  return (
    <section className="container-xl my-5" id="skills" aria-label="Compétences">
      <h2 className="text-center mb-4">Mes Compétences</h2>

      {/* ==== GRILLE 2 COLONNES ÉGALES ==== */}
      <div className="skills-grid">
        <section className="card-box" aria-labelledby="techniques-title">
          <h3 id="techniques-title">Compétences techniques</h3>
          <ul id="tech-list">
            {techToShow.map(s => (
              <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
            ))}
          </ul>

          {TECH_SKILLS.length > VISIBLE_TECH && (
            <button
              className="btn-toggle"
              type="button"
              onClick={() => setShowAllTech(v => !v)}
              aria-expanded={showAllTech}
              aria-controls="tech-list"
            >
              {showAllTech ? 'Afficher moins' : 'Afficher plus'}
            </button>
          )}
        </section>

        <section className="card-box" aria-labelledby="tools-title">
          <h3 id="tools-title">Outils & DevOps</h3>
          <ul id="tools-list">
            {toolsToShow.map(s => (
              <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
            ))}
          </ul>

          {TOOL_SKILLS.length > VISIBLE_TOOLS && (
            <button
              className="btn-toggle"
              type="button"
              onClick={() => setShowAllTools(v => !v)}
              aria-expanded={showAllTools}
              aria-controls="tools-list"
            >
              {showAllTools ? 'Afficher moins' : 'Afficher plus'}
            </button>
          )}
        </section>
      </div>

      {/* Méthodologies repliables (full width) */}
      <section className="methodo mt-4" aria-labelledby="methodo-title">
        <div className="methodo-header">
          <h3 id="methodo-title" className="mb-0">Méthodologies</h3>
          <button
            className="btn-toggle"
            type="button"
            onClick={() => setShowMethods(v => !v)}
            aria-expanded={showMethods}
            aria-controls="methodo-list"
          >
            {showMethods ? 'Masquer' : 'Afficher'}
          </button>
        </div>

        {showMethods && (
          <ul id="methodo-list" className="methodo-list">
            {METHODO_SKILLS.map(s => (
              <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}

export default Skills;
