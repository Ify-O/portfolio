import { Link } from "react-router-dom";
import { FaCode, FaCloud, FaBrain, FaLightbulb } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <p className="section-label">ABOUT ME</p>

          <h2 className="about-title">
            Curious. Driven.
            <br />
            Always Learning.
          </h2>

          <p className="about-description">
            With a background in business management, software development, and
            AWS cloud computing, I combine business insight with technical
            skills to solve real-world challenges. I'm passionate about building
            practical digital solutions that improve efficiency, support growth,
            and help businesses scale.
          </p>

          <Link to="/about" className="btn btn-primary">
            More About Me
          </Link>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <FaCode />
            </div>

            <h3>Software Development</h3>

            <p>
              Building modern, responsive web applications with clean,
              maintainable code.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaCloud />
            </div>

            <h3>Cloud Computing</h3>

            <p>
              Designing scalable cloud infrastructure using cloud best
              practices.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaBrain />
            </div>

            <h3>AI & Continuous Learning</h3>

            <p>
              Leveraging AI to improve productivity while continuously expanding
              my skills through certifications, hands-on projects, and emerging
              technologies.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaLightbulb />
            </div>

            <h3>Problem Solver</h3>

            <p>
              Turning complex business challenges into practical, scalable
              digital solutions through thoughtful design and modern
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}