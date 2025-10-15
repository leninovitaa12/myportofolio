export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <a href="#home" className="nav-link" aria-label="Go to Home">
          <strong>Leni Novitasari</strong>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links" role="menubar">
            <li role="none">
              <a role="menuitem" className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li role="none">
              <a role="menuitem" className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li role="none">
              <a role="menuitem" className="nav-link" href="#about">
                About
              </a>
            </li>
            <li role="none">
              <a role="menuitem" className="nav-link" href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
