import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container-custom">
        <div className="cta-content">
          <div className="cta-left">
            <p className="section-label">LET'S CONNECT</p>

            <h2>Let's Build Something Meaningful</h2>

            <p className="cta-description">
              Open to opportunities where business, technology, cloud, and
              AI come together. I bring business insight, technical skills, and
              a practical, solution-focused approach to creating value.
            </p>
          </div>

          <div className="cta-divider"></div>

          <div className="cta-right">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />

              <a href="mailto:osegboifeoma3@gmail.com">
                osegboifeoma3@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />

              <span>Barcelona, Spain</span>
            </div>

            <div className="contact-item">
              <FaLinkedin className="contact-icon" />

              <a
                href="https://www.linkedin.com/in/ifeoma-osegbo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ifeoma-osegbo
              </a>
            </div>

            <div className="contact-item">
              <FaGithub className="contact-icon" />

              <a
                href="https://github.com/Ify-O"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Ify-O
              </a>
            </div>
          </div>

          <div className="cta-dots"></div>

          <div className="cta-circle"></div>
        </div>
      </div>
    </section>
  );
}