// About.jsx - Highly professional About section
export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Column: Developer JSON Card */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">developer.json</span>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="code-bracket">&#123;</span>{'\n'}
                    {'  '}<span className="code-key">"name"</span>: <span className="code-val">"Sivadinesh R"</span>,{'\n'}
                    {'  '}<span className="code-key">"role"</span>: <span className="code-val">"Fullstack Developer | UI/UX | AWS cloud Enthusiast"</span>,{'\n'}
                    {'  '}<span className="code-key">"education"</span>: <span className="code-val">"B.E. Computer Science (2023–2027)"</span>,{'\n'}
                    {'  '}<span className="code-key">"academics"</span>: <span className="code-val">"CGPA: 8.38/10"</span>,{'\n'}
                    {'  '}<span className="code-key">"stack"</span>: [<span className="code-val">"MongoDB"</span>, <span className="code-val">"Express.js"</span>, <span className="code-val">"React"</span>, <span className="code-val">"Node.js"</span>],{'\n'}
                    {'  '}<span className="code-key">"design"</span>: [<span className="code-val">"Figma"</span>, <span className="code-val">"UI/UX Systems"</span>, <span className="code-val">"Prototyping"</span>],{'\n'}
                    {'  '}<span className="code-key">"status"</span>: <span className="code-bool">"Open to Opportunities"</span>{'\n'}
                    <span className="code-bracket">&#125;</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Quick Metrics Badges under Terminal */}
            <div className="about-quick-badges" data-aos="fade-up" data-aos-delay="150">
              <span className="quick-badge"><i className="fas fa-graduation-cap"></i> S.A. Engineering College</span>
              <span className="quick-badge"><i className="fas fa-award"></i> CGPA 8.38/10</span>
              <span className="quick-badge"><i className="fas fa-code"></i> 500+ Problems Solved</span>
            </div>
          </div>

          {/* Right Column: Bio & Core Focus Pillars */}
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="about-info">
              <div className="about-text-content">
                <p>
                  I am a passionate <strong>Full Stack MERN Developer</strong> and <strong>UI/UX Designer</strong> with practical experience engineering scalable web applications and intuitive digital experiences.
                </p>
                <p>
                  Having served as a <strong>UI/UX Design Lead at WebZenith Solutions</strong> and full-stack developer at <strong>TechnoHacks Solutions</strong>, I bridge the gap between design systems and reliable software engineering—writing clean, maintainable code with high aesthetic standards.
                </p>
              </div>
              
              {/* Core Pillars */}
              <div className="about-pillars">
                <div className="pillar">
                  <div className="pillar-icon"><i className="fas fa-cubes"></i></div>
                  <div className="pillar-text">
                    <h5>Full-Stack Scalability</h5>
                    <p>Building production-grade MERN architectures with RESTful APIs.</p>
                  </div>
                </div>

                <div className="pillar">
                  <div className="pillar-icon"><i className="fas fa-palette"></i></div>
                  <div className="pillar-text">
                    <h5>UI/UX Design Systems</h5>
                    <p>Designing modern, interactive prototypes with pixel-perfect layouts.</p>
                  </div>
                </div>

                <div className="pillar">
                  <div className="pillar-icon"><i className="fas fa-bolt"></i></div>
                  <div className="pillar-text">
                    <h5>Performance & Clean Code</h5>
                    <p>Optimizing web speed, accessibility, and modern responsive ergonomics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
