// About.jsx - Simple and beginner-friendly About section
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
                    {`{\n`}
                    {`  "name": "Sivadinesh R",\n`}
                    {`  "role": "Fullstack & UI/UX",\n`}
                    {`  "focus": "MERN Stack Applications",\n`}
                    {`  "skills": [\n`}
                    {`    "MongoDB", "Express",\n`}
                    {`    "React", "Node.js",\n`}
                    {`    "Figma", "WordPress"\n`}
                    {`  ],\n`}
                    {`  "interests": [\n`}
                    {`    "AWS Cloud", "Clean Code"\n`}
                    {`  ]\n`}
                    {`}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Focus Pillars */}
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="about-info">
              <div className="about-text-content">
                <p>
                  Creative and detail-oriented <strong>MERN Full Stack Developer</strong> and <strong>UI/UX Designer</strong> with hands-on experience in building scalable web applications and user-friendly digital experiences.
                </p>
                <p>
                  I focus on crafting clean, semantic code for web architectures, translating user requirements into intuitive prototypes, and establishing solid cloud infrastructures to run secure and high-performance apps.
                </p>
              </div>
              
              {/* Pillars */}
              <div className="about-pillars">
                <div className="pillar">
                  <div className="pillar-icon"><i className="fas fa-cubes"></i></div>
                  <div className="pillar-text">
                    <h5>Scalable Architecture</h5>
                    <p>Developing solid MERN platforms from the ground up.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon"><i className="fas fa-palette"></i></div>
                  <div className="pillar-text">
                    <h5>UI/UX Excellence</h5>
                    <p>Designing custom high-fidelity prototypes in Figma.</p>
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
