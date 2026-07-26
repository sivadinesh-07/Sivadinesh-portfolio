// Projects.jsx - Beginner-friendly Featured Projects section
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div id="projectsContainer" className="projects-showcase-container">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`project-showcase-card ${project.alternating ? 'alternating' : ''}`}
            data-aos={project.fadeDirection}
            data-aos-delay={project.delay}
          >
            {/* Project Preview Image inside Browser Mockup */}
            <div className="project-showcase-image">
              <div className="browser-mockup">
                <div className="browser-header">
                  <span className="dot-btn red"></span>
                  <span className="dot-btn yellow"></span>
                  <span className="dot-btn green"></span>
                </div>
                <img src={project.image} alt={`${project.title} UI Mockup`} />
              </div>
            </div>

            {/* Project Details */}
            <div className="project-showcase-details">
              <span className="proj-meta">{project.meta}</span>
              <h3>{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>

              {/* Bullet point highlights */}
              <ul className="proj-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>
                    <i className="fas fa-check-circle"></i> {highlight}
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="proj-tech-stack">
                {project.tech.map((techItem, tIndex) => (
                  <span key={tIndex}>{techItem}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="proj-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn primary-btn">
                  <i className="fab fa-github"></i> Source Code
                </a>
                <a href={project.demo} className="proj-btn secondary-btn">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
