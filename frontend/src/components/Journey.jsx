// Journey.jsx - Beginner-friendly Experience & Education timeline
import { useState } from 'react';
import { JOURNEY_EXPERIENCE, JOURNEY_EDUCATION } from '../data/portfolioData';

export default function Journey() {
  // Simple state to store current tab: 'experience' or 'education'
  const [activeTab, setActiveTab] = useState('experience');

  // Choose items list based on current active tab
  const currentItems = activeTab === 'experience' ? JOURNEY_EXPERIENCE : JOURNEY_EDUCATION;

  return (
    <section id="journey" className="journey-section">
      <h2 className="section-title">Experience & Education</h2>
      <p className="section-subtitle text-center mb-5" style={{ color: 'rgb(17, 192, 208)' }}>
        A timeline of my professional career and academic achievements
      </p>

      <div className="container">
        {/* Tab Switcher */}
        <div className="journey-tabs-container mb-5" data-aos="fade-up">
          <div className={`journey-tabs ${activeTab === 'education' ? 'edu-active' : ''}`}>
            <button
              className={`journey-tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <i className="fas fa-briefcase"></i>
              <span>Experience</span>
            </button>
            <button
              className={`journey-tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="journey-content-wrapper" data-aos="fade-up">
          <div className={`timeline-wrapper unified-timeline ${activeTab === 'experience' ? 'experience-mode' : 'education-mode'}`}>
            <div className="timeline-line"></div>
            {currentItems.map((item, index) => (
              <div key={index} className="journey-card-wrapper">
                <div className="timeline-node">
                  <i className={`fas ${item.isEdu ? (item.logo === 'DV' ? 'fa-school' : 'fa-graduation-cap') : 'fa-briefcase'}`}></i>
                </div>
                <div className="journey-card">
                  <div className="card-header-row">
                    <div className={`org-logo ${item.isEdu ? 'edu-logo' : ''}`}>{item.logo}</div>
                    <div className="org-meta">
                      <span className="journey-date">{item.date}</span>
                      <h4>{item.role}</h4>
                      <span className="journey-org">{item.org}</span>
                    </div>
                  </div>
                  
                  {item.details ? (
                    <ul className="journey-details">
                      {item.details.map((detail, dIndex) => (
                        <li key={dIndex}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="journey-details-text">{item.description}</p>
                  )}

                  <div className="journey-badges">
                    {item.badges.map((badge, bIndex) => (
                      <span key={bIndex} className={`badge ${bIndex === item.isSuccessBadgeIndex ? 'success-badge' : ''}`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
