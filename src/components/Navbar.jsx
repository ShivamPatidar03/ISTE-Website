import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import isteLogo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu on route change click
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-left">
        {/* LOGO */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <img src={isteLogo} alt="ISTE Logo" />
          <span>ISTE</span>
        </NavLink>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About ISTE</NavLink></li>
        <li><NavLink to="/mentors" onClick={closeMenu}>Mentors</NavLink></li>
        <li><NavLink to="/events" onClick={closeMenu}>Events</NavLink></li>
        <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
        <li><NavLink to="/team" onClick={closeMenu}>Our Team</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>

      {/* CTA */}
      <a
       href="https://linktr.ee/iste_mits_gwl"
       className="join-btn desktop-only"
       target="_blank"
       rel="noopener noreferrer"
      >
      Join ISTE
      </a>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About ISTE</NavLink>
        <NavLink to="/mentors" onClick={closeMenu}>Mentors</NavLink>
        <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/team" onClick={closeMenu}>Our Team</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <a
          href="https://linktr.ee/iste_mits_gwl"
          className="mobile-join"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >Join ISTE</a>

      </div>
    </nav>
  );
};

export default Navbar;
