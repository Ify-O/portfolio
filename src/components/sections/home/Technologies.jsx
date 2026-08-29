import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaMicrosoft,
  FaFileExcel,
  FaGoogle,
} from "react-icons/fa";

import { SiTailwindcss, SiVite, SiNotion } from "react-icons/si";

import { TbTerminal2, TbDatabase, TbBriefcase } from "react-icons/tb";

const technologies = [
  // Cloud & Programming
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaPython />, name: "Python" },
  { icon: <TbDatabase />, name: "SQL" },

  // Web & Development
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <TbTerminal2 />, name: "Bash" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiVite />, name: "Vite" },

  // Business & Productivity
  { icon: <FaMicrosoft />, name: "Microsoft 365" },
  { icon: <FaFileExcel />, name: "Excel" },
  { icon: <FaGoogle />, name: "Google Workspace" },
  { icon: <SiNotion />, name: "Notion" },

  // Additional Exposure
  { icon: <TbBriefcase />, name: "Salesforce" },
];

export default function Technologies() {
  return (
    <section className="technologies">
      <div className="container">
        <p className="section-label">SOME TECHNOLOGIES I'VE WORKED WITH</p>

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
