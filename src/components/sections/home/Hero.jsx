import profile from "../../../assets/profile.png";
import cv from "../../../assets/Ifeoma_Osegbo_CV.pdf";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* LEFT: HERO TEXT */}
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Ifeoma
            <br />
            Osegbo
          </h1>

          <h2 className="hero-headline">
            Building secure and scalable cloud solutions and modern software
            solutions.
          </h2>

          <p className="hero-description">
            I combine cloud technology, software development, and business
            thinking to help businesses build practical, reliable, and scalable
            digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a
              href={cv}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Ify-O"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ifeoma-osegbo/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:osegboifeoma3@gmail.com" aria-label="Email">
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        {/* RIGHT: PROFILE IMAGE */}
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
