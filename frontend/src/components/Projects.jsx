// Projects.jsx - Interactive Page-Swap Featured Projects showcase
import { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [swapDirection, setSwapDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);

  const totalPages = PROJECTS.length;
  const activeProject = PROJECTS[currentPage];

  // Navigate to specific project page
  const goToPage = (index) => {
    if (index === currentPage) return;
    setSwapDirection(index > currentPage ? 'next' : 'prev');
    setCurrentPage(index);
  };

  // Previous page
  const handlePrev = () => {
    setSwapDirection('prev');
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  // Next page
  const handleNext = () => {
    setSwapDirection('next');
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't interfere if user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Threshold of 50px for swipe
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        Explore my latest work — swap pages or use keyboard arrows &lt; &gt;
      </p>

      {/* Project Page Tabs */}
      <div className="project-page-tabs" data-aos="fade-up">
        {PROJECTS.map((proj, idx) => (
          <button
            key={idx}
            className={`project-tab-btn ${idx === currentPage ? 'active' : ''}`}
            onClick={() => goToPage(idx)}
            aria-label={`Switch to ${proj.title}`}
          >
            <span className="tab-num">0{idx + 1}</span>
            <span>{proj.title.split(' (')[0].split(' - ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Page Swap Stage */}
      <div
        className="project-swap-stage"
        data-aos="fade-up"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          key={currentPage}
          className={`project-showcase-card swap-${swapDirection}`}
        >
          {/* Left Column: Browser Mockup */}
          <div className="project-showcase-image">
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot-btn red"></span>
                  <span className="dot-btn yellow"></span>
                  <span className="dot-btn green"></span>
                </div>
                <span className="browser-address">
                  {activeProject.isDesign
                    ? 'figma.com/@sivadinesh/design'
                    : 'https://' + activeProject.title.toLowerCase().replace(/[^a-z0-9]/g, '') + '.app'}
                </span>
              </div>
              <img src={activeProject.image} alt={`${activeProject.title} Preview`} />
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="project-showcase-details">
            <div className="project-page-badge-row">
              <span className="proj-meta">{activeProject.meta}</span>
              <span className="proj-page-counter-badge">
                Project 0{currentPage + 1} of 0{totalPages}
              </span>
            </div>

            <h3>{activeProject.title}</h3>
            <p className="proj-desc">{activeProject.desc}</p>

            {/* Bullet Highlights */}
            <ul className="proj-highlights">
              {activeProject.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>
                  <i className="fas fa-check-circle"></i> {highlight}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="proj-tech-stack">
              {activeProject.tech.map((techItem, tIndex) => (
                <span key={tIndex}>{techItem}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="proj-actions">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn primary-btn"
              >
                <i className={activeProject.isDesign ? 'fab fa-figma' : 'fab fa-github'}></i>{' '}
                {activeProject.isDesign ? 'Design Prototype' : 'Source Code'}
              </a>
              <a
                href={activeProject.demo}
                target={activeProject.demo !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="proj-btn secondary-btn"
              >
                <i className="fas fa-external-link-alt"></i>{' '}
                {activeProject.isDesign ? 'Live Prototype' : 'Live Demo'}
              </a>
            </div>
          </div>
        </div>

        {/* Page Swap Controls (Prev/Next Arrows + Dots) */}
        <div className="project-swap-controls">
          <button
            className="project-nav-arrow-btn"
            onClick={handlePrev}
            aria-label="Previous Project"
          >
            <i className="fas fa-arrow-left"></i> Previous
          </button>

          <div className="project-page-dots-wrap">
            {PROJECTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`project-page-dot ${dotIdx === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            className="project-nav-arrow-btn"
            onClick={handleNext}
            aria-label="Next Project"
          >
            Next <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
