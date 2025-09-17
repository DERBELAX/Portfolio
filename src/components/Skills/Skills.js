import React, { useMemo, useState, useId } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaJava, FaLinux
} from "react-icons/fa";
import {
  SiBootstrap, SiMongodb, SiExpress, SiSass, SiMysql, SiVisualstudiocode, SiGithub,
  SiSpring, SiPhp, SiSymfony, SiGitlab, SiPostman, SiSwagger, SiDocker, SiJira
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import "./Skills.css";

/* ========= Données ========= */
/** Compétences cœur — mets en avant ce que tu veux vendre. */
const MASTER_SKILLS = [
  { label: "JavaScript",  icon: FaJsSquare, url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { label: "TypeScript",  icon: FaJsSquare, url: "https://www.typescriptlang.org/docs/" },
  { label: "React",       icon: FaReact,    url: "https://fr.react.dev/" },
  { label: "Node.js",     icon: FaNodeJs,   url: "https://nodejs.org/en/docs" },
  { label: "Express.js",  icon: SiExpress,  url: "https://expressjs.com/en/guide/routing.html" },
  { label: "Java",        icon: FaJava,     url: "https://docs.oracle.com/en/java/javase/" },
  { label: "Spring Boot", icon: SiSpring,   url: "https://docs.spring.io/spring-boot/docs/current/reference/html/" },
  { label: "PostgreSQL",  icon: SiMysql,    url: "https://www.postgresql.org/docs/" }, // Icône MySQL faute de mieux
];

/** Compétences d’exposition — tu as pratiqué mais ce n’est pas ton focus. */
const EXPOSURE_SKILLS = [
  { label: "HTML5",     icon: FaHtml5,           url: "https://developer.mozilla.org/fr/docs/Web/HTML" },
  { label: "CSS3",      icon: FaCss3Alt,         url: "https://developer.mozilla.org/fr/docs/Web/CSS" },
  { label: "Sass",      icon: SiSass,            url: "https://sass-lang.com/documentation/" },
  { label: "Bootstrap", icon: SiBootstrap,       url: "https://getbootstrap.com/docs/" },
  { label: "MongoDB",   icon: SiMongodb,         url: "https://www.mongodb.com/docs/" },
  { label: "MySQL",     icon: SiMysql,           url: "https://dev.mysql.com/doc/" },
  { label: "PHP",       icon: SiPhp,             url: "https://www.php.net/docs.php" },
  { label: "Symfony",   icon: SiSymfony,         url: "https://symfony.com/doc/current/index.html" },
];

/** Outils & DevOps */
const TOOL_SKILLS = [
  { label: "GitHub",             icon: SiGithub,           url: "https://docs.github.com/" },
  { label: "GitLab CI/CD",       icon: SiGitlab,           url: "https://docs.gitlab.com/ee/ci/" },
  { label: "Docker",             icon: SiDocker,           url: "https://docs.docker.com/" },
  { label: "Linux",              icon: FaLinux,            url: "https://linuxjourney.com/" },
  { label: "Postman",            icon: SiPostman,          url: "https://learning.postman.com/docs/" },
  { label: "Swagger / OpenAPI",  icon: SiSwagger,          url: "https://swagger.io/docs/specification/about/" },
  { label: "Jira (Scrum/Kanban)",icon: SiJira,             url: "https://support.atlassian.com/jira-software-cloud/" },
  { label: "VS Code",            icon: SiVisualstudiocode, url: "https://code.visualstudio.com/docs" },
  { label: "Figma",              icon: FaFigma,            url: "https://help.figma.com/hc/fr" },
];

/** Méthodologies (ressources) */
const METHODO_LINKS = [
  { label: "Scrum (guide officiel)", icon: SiJira,         url: "https://scrumguides.org/scrum-guide.html" },
  { label: "Manifeste Agile",        icon: FiExternalLink, url: "https://agilemanifesto.org/iso/fr/manifesto.html" },
  { label: "Git Flow",               icon: FiExternalLink, url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" },
];

/* ========= Composants ========= */
function SkillItem({ Icon, label, url }) {
  return (
    <li className="skill-item">
      <a
        className="skill-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`${label} — ouvre la documentation dans un nouvel onglet`}
        aria-label={`${label} — ouvre la documentation dans un nouvel onglet`}
      >
        <Icon aria-hidden="true" focusable="false" />
        <span className="skill-label">{label}</span>
        <FiExternalLink className="ext" aria-hidden="true" />
      </a>
    </li>
  );
}

export default function Skills() {
  const [showAllMaster, setShowAllMaster] = useState(false);
  const [showAllExposure, setShowAllExposure] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showMethods, setShowMethods] = useState(false);

  // Combien visibles par défaut (évite les listes infinies sur mobile)
  const VISIBLE_MASTER   = 8;
  const VISIBLE_EXPOSURE = 6;
  const VISIBLE_TOOLS    = 6;

  // IDs stables pour aria-controls
  const masterListId   = useId();
  const exposureListId = useId();
  const toolsListId    = useId();
  const methodsListId  = useId();

  const masterToShow = useMemo(
    () => (showAllMaster ? MASTER_SKILLS : MASTER_SKILLS.slice(0, VISIBLE_MASTER)),
    [showAllMaster]
  );

  const exposureToShow = useMemo(
    () => (showAllExposure ? EXPOSURE_SKILLS : EXPOSURE_SKILLS.slice(0, VISIBLE_EXPOSURE)),
    [showAllExposure]
  );

  const toolsToShow = useMemo(
    () => (showTools ? TOOL_SKILLS : TOOL_SKILLS.slice(0, VISIBLE_TOOLS)),
    [showTools]
  );

  return (
    <section className="container-xl my-5" id="skills" aria-label="Compétences">
      <h2 className="text-center mb-4">Mes Compétences</h2>

      {/* ==== Grille 2 colonnes : Maîtrise / Exposition ==== */}
      <div className="skills-grid">
        <section className="card-box" aria-labelledby="master-title">
          <h3 id="master-title">Maîtrise (stack cœur)</h3>
          <p className="muted">
            Ce que j’utilise pour livrer des SPA performantes et des APIs sécurisées.
          </p>

          <ul id={masterListId}>
            {masterToShow.map((s) => (
              <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
            ))}
          </ul>

          {MASTER_SKILLS.length > VISIBLE_MASTER && (
            <button
              className="btn-toggle"
              type="button"
              onClick={() => setShowAllMaster((v) => !v)}
              aria-expanded={showAllMaster}
              aria-controls={masterListId}
            >
              {showAllMaster ? "Afficher moins" : "Afficher plus"}
            </button>
          )}
        </section>

        <section className="card-box" aria-labelledby="exposure-title">
          <h3 id="exposure-title">Exposition</h3>
          <p className="muted">Technos déjà pratiquées, non prioritaires.</p>

          <ul id={exposureListId}>
            {exposureToShow.map((s) => (
              <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
            ))}
          </ul>

          {EXPOSURE_SKILLS.length > VISIBLE_EXPOSURE && (
            <button
              className="btn-toggle"
              type="button"
              onClick={() => setShowAllExposure((v) => !v)}
              aria-expanded={showAllExposure}
              aria-controls={exposureListId}
            >
              {showAllExposure ? "Afficher moins" : "Afficher plus"}
            </button>
          )}
        </section>
      </div>

      {/* ==== Outils & DevOps ==== */}
      <section className="card-box mt-4" aria-labelledby="tools-title">
        <div className="methodo-header">
          <h3 id="tools-title" className="mb-0">Outils & DevOps</h3>
          <button
            className="btn-toggle"
            type="button"
            onClick={() => setShowTools((v) => !v)}
            aria-expanded={showTools}
            aria-controls={toolsListId}
          >
            {showTools ? "Masquer" : "Afficher"}
          </button>
        </div>

        <ul id={toolsListId} className={`tools-list ${showTools ? "open" : "collapsed"}`}>
          {(showTools ? TOOL_SKILLS : toolsToShow).map((s) => (
            <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
          ))}
        </ul>
      </section>

      {/* ==== Méthodos (repliables) ==== */}
      <section className="card-box mt-3" aria-labelledby="methodo-title">
        <div className="methodo-header">
          <h3 id="methodo-title" className="mb-0">Méthodologies</h3>
          <button
            className="btn-toggle"
            type="button"
            onClick={() => setShowMethods((v) => !v)}
            aria-expanded={showMethods}
            aria-controls={methodsListId}
          >
            {showMethods ? "Masquer" : "Afficher"}
          </button>
        </div>

        {showMethods && (
          <ul id={methodsListId} className="methodo-list">
            {METHODO_LINKS.map((s) => (
              <SkillItem key={s.label} Icon={s.icon} label={s.label} url={s.url} />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}
