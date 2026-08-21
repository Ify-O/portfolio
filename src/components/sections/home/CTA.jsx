import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container-custom">
        <div className="cta-content">
          {/* Left */}

          <div className="cta-left">
            <p className="section-label">LET'S CONNECT</p>

            <h2>Ready for My Next Opportunity</h2>

            <p className="cta-description">
              Open to Cloud Engineering, Software Development, and collaborative
              opportunities where I can contribute, grow, and build impactful
              solutions.
            </p>

            <a href="/contact" className="cta-button">
              Get In Touch →
            </a>
          </div>

          {/* Divider */}

          <div className="cta-divider"></div>

          {/* Right */}

          <div className="cta-right">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>your.email@email.com</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Barcelona, Spain</span>
            </div>

            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <a
                href="https://linkedin.com/in/your-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/your-link
              </a>
            </div>

            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/your-github
              </a>
            </div>
          </div>

          {/* Decorations */}

          <div className="cta-dots"></div>

          <div className="cta-circle"></div>
        </div>
      </div>
    </section>
  );
}
