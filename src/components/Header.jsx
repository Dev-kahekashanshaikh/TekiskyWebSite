import React, { useState } from 'react'
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="../src/assets/logo.png" alt="Logo" className=''></img>
        
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul className="nav-links">
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/" onClick={closeMenu}>Services</a></li>
          <li><a href="/" onClick={closeMenu}>Our Product</a></li>
          <li><a href="/" onClick={closeMenu}>Trainings</a></li>
          <li><a href="/" onClick={closeMenu}>Consultancy</a></li>
          <li><a href="/" onClick={closeMenu}>Contact US</a></li>
          <li><a href="/" onClick={closeMenu}>About US</a></li>
        </ul>
      </nav>

      <button
        className={menuOpen ? "menu-toggle open" : "menu-toggle"}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header
