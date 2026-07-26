// Skills.jsx - Beginner-friendly Skills & Spoken Languages section
import { TECHNICAL_SKILLS, SOFT_SKILLS, LANGUAGES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills & Languages</h2>

      <div className="skills-wrapper">
        {/* Technical Expertise Cards */}
        <div className="skills-section-box">
          <h3 className="skills-sec-title"><i className="fas fa-laptop-code"></i> Technical Expertise</h3>
          <div id="techSkillsContainer" className="row g-4">
            {TECHNICAL_SKILLS.map((categoryItem, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="tech-card h-100" data-aos="zoom-in" data-aos-delay={categoryItem.delay}>
                  <div className="tech-header">
                    <i className={categoryItem.icon}></i>
                    <h4>{categoryItem.category}</h4>
                  </div>
                  <div className="skill-list">
                    {categoryItem.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="skill-item">
                        <div className="skill-info">
                          <span>{skill.name}</span>
                          <span>{skill.level}</span>
                        </div>
                        <div className="progress-line">
                          <span style={{ width: skill.level }}></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Spoken Languages */}
        <div className="row g-4">
          {/* Soft Skills Column */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="extra-section-box h-100">
              <h3 className="skills-sec-title"><i className="fas fa-user-check"></i> Soft Skills</h3>
              <div className="soft-skills-grid">
                {SOFT_SKILLS.map((skill, index) => (
                  <div key={index} className="soft-card">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Spoken Column */}
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="extra-section-box h-100">
              <h3 className="skills-sec-title"><i className="fas fa-language"></i> Spoken Languages</h3>
              <div className="lang-skills-grid">
                {LANGUAGES.map((lang, index) => (
                  <div key={index} className="lang-card">
                    <div className="lang-icon">
                      <i className={`fas ${lang.dots === lang.activeDots ? 'fa-globe-asia' : 'fa-globe-americas'}`}></i>
                    </div>
                    <div className="lang-details">
                      <h4>{lang.name}</h4>
                      <span className="lang-prof">{lang.proficiency}</span>
                      <div className="lang-dots">
                        {Array.from({ length: lang.dots }).map((_, dotIndex) => (
                          <span key={dotIndex} className={`dot ${dotIndex < lang.activeDots ? 'active' : ''}`}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
