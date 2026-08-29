import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaSlack,
  FaTrello,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";

import { SiGithubactions, SiVite, SiNotion, SiCanva } from "react-icons/si";

import { TbTerminal2 } from "react-icons/tb";

const technologies = [
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <TbTerminal2 />, name: "Bash" },
  { icon: <SiGithubactions />, name: "CI/CD" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiNotion />, name: "Notion" },
  { icon: <SiCanva />, name: "Canva" },
  { icon: <FaSlack />, name: "Slack" },
  { icon: <FaTrello />, name: "Trello" },
];

export default function Technologies() {
  return (
    <section className="technologies">
      <div className="container">
        <p className="section-label">TECHNOLOGIES I WORK WITH</p>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-icon">{tech.icon}</div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
