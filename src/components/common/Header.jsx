import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToSection = (sectionId) => {
    closeMenu();

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

    window.location.href = `/#${sectionId}`;
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          IO
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-text">MENU</span>

          <span className="menu-icon">
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="navigation-menu">
          <ul className="nav-menu">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("about")}
              >
                About Me
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("projects")}
              >
                Projects
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("certifications")}
              >
                Certifications
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("contact")}
              >
                Let's Connect
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}