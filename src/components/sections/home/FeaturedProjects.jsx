import {
  FaAws,
  FaGithub,
  FaBookOpen,
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaNodeJs,
  FaExternalLinkAlt,
  FaServer,
  FaSyncAlt,
  FaCode,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";

import { SiExpress, SiHtml5, SiGit, SiNetlify, SiRender } from "react-icons/si";

import awsProject from "../../../assets/aws-three-tier.png";

import investIQ from "../../../assets/InvestIQ.png";

import chatApp from "../../../assets/chat-app.png";

const projects = [
  {
    title: "AWS Three-Tier Web Architecture",

    stage: "Presentation Tier — Part 1",

    image: awsProject,

    description:
      "A hands-on AWS project focused on building a secure and scalable three-tier web architecture. The presentation tier is currently complete using Amazon S3 and CloudFront, with the application and data tiers planned as the project progresses.",

    status: "in-progress",

    tags: [
      { icon: <FaAws />, name: "S3" },
      { icon: <FaAws />, name: "CloudFront" },
      { icon: <FaAws />, name: "OAC" },
      { icon: <FaAws />, name: "IAM" },
      { icon: <FaAws />, name: "VPC" },
    ],

    documentation:
      "https://nextwork.ai/amused_purple_shy_whio/docs/aws-networks-cloudfront",

    github: "#",

    live: "#",
  },

  {
    title: "Investment IQ",

    stage: "MVP — Completed",

    image: investIQ,

    description:
      "An ethical investment questionnaire designed to help beginner investors understand their investment preferences and explore values-aligned portfolio options. I contributed to the product design and development of the MVP, applying React, JavaScript, and CSS to create a beginner-friendly experience.",

    status: "completed",

    tags: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <SiGit />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ],

    documentation: "#",

    github: "https://github.com/jannahpitogo/investIQ",

    live: "https://investiq-migracode.netlify.app/",
  },

  {
    title: "Real-Time Chat Application",

    stage: "REST API & HTTP Polling — Completed",

    image: chatApp,

    description:
      "A real-time chat application built to explore client-server communication using HTTP polling and RESTful APIs. The project includes message creation, retrieval, editing, deletion, reactions, request validation, CORS configuration, environment variables, and API error handling.",

    status: "completed",

    tags: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiNetlify />, name: "Netlify" },
      { icon: <SiRender />, name: "Render" },
      { icon: <FaServer />, name: "REST API" },
      { icon: <FaSyncAlt />, name: "HTTP Polling" },
      { icon: <FaCode />, name: "Fetch API" },
      { icon: <FaShieldAlt />, name: "CORS" },
      { icon: <FaCog />, name: "Environment Variables" },
    ],

    documentation: "#",

    github: "https://github.com/Ify-O/Chat-App",

    live: "https://mc-chatapp.netlify.app/",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="featured-projects">
      <div className="container-custom">
        <div className="projects-heading">
          <p className="section-label">FEATURED PROJECTS</p>

          <h2>Some Projects I've Built so Far</h2>

          <p className="section-description">
            A selection of cloud, software, and technology projects that
            demonstrate how I apply technical skills to practical problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.status === "in-progress" ? "project-in-progress" : ""
              }`}
              key={project.title}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />

                {project.status === "in-progress" && (
                  <div className="project-overlay">
                    <span className="status-badge">In Progress</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <span className="project-stage">{project.stage}</span>

                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  {project.status === "in-progress" && (
                    <span
                      className="status-dot"
                      aria-label="Project in progress"
                    ></span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag.name}>
                      <span className="tag-icon">{tag.icon}</span>

                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.documentation !== "#" && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBookOpen />
                      <span>Documentation</span>
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  )}

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
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/Ify-O"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            View More Projects
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
