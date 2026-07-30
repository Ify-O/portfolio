import { FaCode, FaAws, FaGraduationCap, FaLightbulb } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT */}

        <div className="about-left">
          <p className="section-label">ABOUT ME</p>

          <h2 className="about-title">
            Curious. Driven.
            <br />
            Always Learning.
          </h2>

          <p className="about-description">
            I'm a software developer and cloud engineer passionate about
            building secure, scalable applications on AWS. My background in
            business management allows me to bridge technology and business
            strategy, creating solutions that deliver real impact.
          </p>

          <a href="/about" className="btn btn-primary">
            More About Me
          </a>
        </div>

        {/* RIGHT */}

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <FaCode />
            </div>{" "}
            <h3>Software Development</h3>
            <p>
              Building modern, responsive web applications with clean,
              maintainable code.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaAws />
            </div>

            <h3>Cloud Computing</h3>

            <p>
              Designing scalable cloud infrastructure using AWS best practices.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaGraduationCap />{" "}
            </div>
            <h3>Continuous Learning</h3>

            <p>
              Always expanding my skills through projects, certifications and
              hands-on practice.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaLightbulb />
            </div>
            <h3>Problem Solver</h3>

            <p>
              Turning complex business challenges into practical digital
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
