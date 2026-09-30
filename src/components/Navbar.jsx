import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#111827",
        padding: "15px 0",
      }}
    >
      <div className="container">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="navbar-brand fw-bold"
            style={{
              color: "#61dafb",
              fontSize: "1.5rem",
            }}
          >
            Szuu1
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            style={{
              border: "1px solid #61dafb",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto d-flex align-items-lg-center gap-lg-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#61dafb" : "#ffffff",
                  fontWeight: isActive ? "600" : "400",
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
