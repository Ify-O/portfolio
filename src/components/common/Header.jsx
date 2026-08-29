import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToSection = (sectionId) => {
    closeMenu();

    // If already on the homepage, scroll directly
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // If on another page, go home first
    navigate(`/#${sectionId}`);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          IO
        </NavLink>

        {/* Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-text">MENU</span>

          <span className="menu-icon">{isMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <nav className="navigation-menu">
          <ul className="nav-menu">
            {/* HOME */}
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            {/* ABOUT */}
            <li>
              <button type="button" onClick={() => goToSection("about")}>
                About Me
              </button>
            </li>

            {/* PROJECTS */}
            <li>
              <button type="button" onClick={() => goToSection("projects")}>
                Projects
              </button>
            </li>

            {/* CERTIFICATIONS */}
            <li>
              <NavLink to="/certifications" onClick={closeMenu}>
                Certifications
              </NavLink>
            </li>

            {/* EXPERIENCE */}
            <li>
              <NavLink to="/experience" onClick={closeMenu}>
                Experience
              </NavLink>
            </li>

            {/* CONTACT */}
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Let's Connect
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
