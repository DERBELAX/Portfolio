import imgPlantelys from "../images/Plantélys.png";
import imgPay from "../images/PayYouPayMe.png";
import imgKasa from "../images/Kasa.png";
import imgGrimoire from "../images/Grimoire.png";
import imgSophie from "../images/Sophie.png";
import imgBooki from "../images/Booki.png";

const projects = [
  {
  slug: "plantelys",
  name: "Plantélys",
  description: "Plateforme e-commerce horticole (communauté + rappels d’entretien).",
  tags: ["Full-Stack", "React", "Spring Boot", "SQL"],
  link: { href: null, label: null }, // pas de démo publique
  githubLink: { 
    href: "https://github.com/DERBELAX/plantalyse_V0", 
    label: "Code Plantélys (GitHub)" 
  },
  image: imgPlantelys,
  facts: [
    "Architecture REST avec Spring Boot",
    "Base relationnelle (SQL) gérée via JPA/Hibernate",
    "Rappels d’entretien automatisés (Spring Scheduler)",
    "Sécurisation avec JWT + Spring Security",
  ],
},
  {
    slug: "payyoupayme",
    name: "Application de paiement",
    description: "Module de paiement sécurisé (transactions, SQL).",
    tags: ["Back-End", "Java", "Spring Boot", "SQL"],
    link: { href: null, label: null },
    githubLink: { href: "https://github.com/DERBELAX/PayYouPayMe", label: "Code PayYouPayMe (GitHub)" },
    image: imgPay,
    facts: [
      "100+ transactions simulées sans échec",
      "Spring Security + JWT",
      "Couverture de tests > 80% (JUnit + Postman)",
    ],
  },
  {
    slug: "kasa",
    name: "Kasa",
    description: "Location immobilière (React Router, composants, animations Sass).",
    tags: ["React", "SPA", "Front-End"],
    link: { href: "https://incredible-lollipop-e43c18.netlify.app/", label: "Démo Kasa" },
    githubLink: { href: "https://github.com/DERBELAX/projet-5-Kasa", label: "Code Kasa (GitHub)" },
    image: imgKasa,
    facts: [
      "100% Lighthouse Accessibilité",
      "LCP < 1,5 s (mobile)",
    ],
  },
  {
    slug: "mon-vieux-grimoire",
    name: "Mon Vieux Grimoire",
    description: "Backend Node : auth, CRUD sécurisé, stockage optimisé.",
    tags: ["Node", "API", "Back-End"],
    link: { href: null, label: null },
    githubLink: { href: "https://github.com/DERBELAX/P6-Dev-Web-livres/tree/Mon-Vieux-Grimoire", label: "Code MVG (GitHub)" },
    image: imgGrimoire,
    facts: [
      "Endpoints REST CRUD + validations",
      "Auth JWT, Multer (images), protections NoSQL",
    ],
  },
  {
    slug: "sophie-bluel",
    name: "Sophie Bluel",
    description: "Site dynamique (JS) : DOM, formulaires, événements.",
    tags: ["JavaScript", "Front-End"],
    link: { href: "https://derbelax.github.io/Portfolio-architecte-sophie-bluel/", label: "Démo Sophie Bluel" },
    githubLink: { href: "https://github.com/DERBELAX/Portfolio-architecte-sophie-bluel/tree/projet-3", label: "Code Sophie Bluel (GitHub)" },
    image: imgSophie,
    facts: [
      "Gestion modale + édition",
      "Filtrage dynamique par catégories",
    ],
  },
  {
    slug: "booki",
    name: "Booki",
    description: "Intégration responsive selon maquette (HTML/CSS).",
    tags: ["HTML/CSS", "Intégration"],
    link: { href: "https://derbelax.github.io/booki-starter-code/", label: "Démo Booki" },
    githubLink: { href: "https://github.com/DERBELAX/booki-starter-code/tree/P2-BOOKI", label: "Code Booki (GitHub)" },
    image: imgBooki,
    facts: [
      "Responsive mobile-first",
      "Conformité à la maquette",
    ],
  },
];

export default projects;
