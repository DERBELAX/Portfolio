import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaFilter } from 'react-icons/fa';
import projectsData from '../../data/projects';

const allTags = ['Tous', ...Array.from(new Set(projectsData.flatMap(p => p.tags)))];

export default function Projects() {
  const [active, setActive] = useState('Tous');

  const visible = useMemo(() => {
    if (active === 'Tous') return projectsData;
    return projectsData.filter(p => p.tags.includes(active));
  }, [active]);

  return (
    <section className="container my-5" id="projects" aria-label="Projets">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <h2 className="mb-0">Mes Projets</h2>
        <div className="filters" role="tablist" aria-label="Filtrer par technologie">
          <span className="me-2 text-muted d-none d-md-inline"><FaFilter /> Filtrer :</span>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-pill ${active === tag ? 'active' : ''}`}
              onClick={() => setActive(tag)}
              role="tab"
              aria-selected={active === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="row">
          {visible.map((p, i) => (
            <div className="col-md-6 col-lg-4 mb-4" key={`${p.name}-${i}`}>
              <motion.article
                className="card project-card h-100"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    className="card-img-top project-image"
                    alt={`Aperçu du projet ${p.name}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image placeholder-gradient" aria-hidden="true" />
                )}

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5">{p.name}</h3>
                  <p className="card-text project-description">{p.description}</p>

                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                        Voir le site
                      </a>
                    )}
                    {p.githubLink && (
                      <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                        <FaGithub className="me-1" aria-hidden="true" /> Code
                      </a>
                    )}
                  </div>

                  <div className="tags mt-3">
                    {p.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}
