import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { SiExpress, SiSocketdotio } from "react-icons/si";

import investIQ from "../../../assets/InvestIQ.png";
import chatApp from "../../../assets/chat-app.png";
import awsProject from "../../../assets/aws-three-tier.png";

const projects = [
  {
    title: "AWS Three-Tier Architecture",
    image: awsProject,
    description:
      "Designed and deployed a secure, scalable three-tier web architecture using core AWS networking services.",
    tags: [
      { icon: <FaAws />, name: "EC2" },
      { icon: <FaAws />, name: "ALB" },
      { icon: <FaAws />, name: "RDS" },
      { icon: <FaAws />, name: "VPC" },
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Investment IQ",
    image: investIQ,
    description:
      "A React-based ethical investment questionnaire that helps beginner investors build values-aligned portfolios.",
    tags: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <FaCss3Alt />, name: "CSS" },
    ],
    github: "https://github.com/jannahpitogo/investIQ",
    live: "https://investiq-migracode.netlify.app/",
  },

  {
    title: "Real-Time Chat App",
    image: chatApp,
    description:
      "Built a real-time messaging application with Express, Socket.IO and responsive frontend architecture.",
    tags: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiSocketdotio />, name: "Socket.IO" },
      { icon: <SiExpress />, name: "Express" },
    ],
    github: "#",
    live: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="container-custom">
        <p className="section-label">FEATURED PROJECTS</p>

        <h2>Some Things I've Built</h2>

        <p className="section-description">
          A selection of cloud and software engineering projects that
          demonstrate my practical experience building scalable and modern
          applications.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag.name}>
                      <span className="tag-icon">{tag.icon}</span>
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a href="/projects" className="view-all-btn">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
