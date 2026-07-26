// Certificates.jsx - Beginner-friendly Certifications grid section
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">Certifications</h2>
      <div id="certificatesContainer" className="row g-4">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div
              className={`certificate-card ${cert.glowClass} h-100`}
              data-aos="zoom-in"
              data-aos-delay={cert.delay}
            >
              <div className="cert-status"><i className="fas fa-check-circle"></i> Verified</div>
              <div className="cert-icon"><i className={cert.icon}></i></div>
              <span className="cert-tag">{cert.tag}</span>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <a href={cert.link} className="cert-link">
                View Credential <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
