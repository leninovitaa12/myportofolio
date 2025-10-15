import ModelCanvas from "./ModelCanvas.jsx"
import Typewriter from "./Typewriter.jsx"

export default function Hero() {
  const sentences = [
    "An Information Technology student who loves reading novels and adores cats.",
    "I'm learning web development, machine learning, IoT, robotics, and other modern IT technologies.",
  ]

  return (
    <div className="hero section container">
      <div className="hero-card">
        {/* Social icons row */}
        <div className="social-row" aria-label="social links">
          {/* Replace # with your real links */}
          <a href="#" className="icon-link" aria-label="GitHub" title="GitHub">
            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5 0-1.1.38-2 .99-2.71-.1-.26-.43-1.3.09-2.71 0 0 .83-.27 2.73 1.03A9.3 9.3 0 0 1 12 6.84c.84 0 1.69.11 2.48.32 1.9-1.3 2.73-1.03 2.73-1.03.52 1.41.19 2.45.09 2.71.62.71.99 1.61.99 2.71 0 3.88-2.34 4.73-4.57 4.99.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a href="#" className="icon-link" aria-label="LinkedIn" title="LinkedIn">
            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3Zm-9.5 15V10H7v8Zm9 0v-4.5c0-2.42-1.29-3.54-3-3.54a2.64 2.64 0 0 0-2.41 1.32h-.05V10H11v8h2.1v-4.4c0-1.16.22-2.27 1.65-2.27s1.45 1.26 1.45 2.34V18ZM8 8.75A1.25 1.25 0 1 0 8 6.25a1.25 1.25 0 0 0 0 2.5Z" />
            </svg>
          </a>
          <a href="#" className="icon-link" aria-label="Email" title="Email">
            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" />
            </svg>
          </a>
        </div>

        <h1 style={{ fontSize: "3rem", marginTop: "0.25rem" }}>Hi, I'm Leni Novita.</h1>
        <span className="badge">IT Student • Reader • Cat Lover</span>

        <div style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
          {/* Typewriter sentence */}
          <Typewriter sentences={sentences} typeSpeed={26} deleteSpeed={16} pauseBetween={1400} startDelay={350} />
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="button" href="#projects">
            See Projects
          </a>
          <a className="button secondary" href="#about">
            About Me
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="3D animation">
        <ModelCanvas />
      </div>
    </div>
  )
}
