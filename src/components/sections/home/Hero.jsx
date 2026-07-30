import profile from "../../../assets/profile.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left */}
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Ifeoma
            <br />
            Osegbo
          </h1>

          <h2 className="hero-headline">
            Building secure and scalable cloud solutions and modern software.
          </h2>

          <p className="hero-description">
            I build secure cloud infrastructure and modern web applications,
            combining technology and business strategy to create scalable,
            reliable, and impactful digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">
              View My Projects
            </a>

            <a href="/resume.pdf" className="btn btn-outline">
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Ify-O"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ifeoma-osegbo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:YOUR_EMAIL@gmail.com">
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        {/* Right */}

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <div className="hero-circle"></div>

            <div className="hero-image-card">
              <img src={profile} alt="Ifeoma Osegbo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
