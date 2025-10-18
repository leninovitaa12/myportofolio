"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
  ]

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      {/* Desktop Navbar - Centered */}
      <div className="navbar-desktop">
        <div className="navbar-glass">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className="nav-link">
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navbar - Icon */}
      <div className="navbar-mobile">
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className="mobile-nav-link">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
