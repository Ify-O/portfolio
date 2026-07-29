import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          IO
        </NavLink>

        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkStyle}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className={navLinkStyle}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/certifications" className={navLinkStyle}>
                Certifications
              </NavLink>
            </li>

            <li>
              <NavLink to="/experience" className={navLinkStyle}>
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="btn btn-primary">Let's Connect</button>
      </div>
    </header>
  );
}
