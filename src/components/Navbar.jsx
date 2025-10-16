"use client"

import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="mobile-menu-header">
          <span className="logo">Menu</span>
          <button className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-links-glass ${isOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>
            Home
          </a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#resume" className="nav-link" onClick={closeMenu}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
