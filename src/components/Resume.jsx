export default function Resume() {
  return (
    <>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>Resume</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-desc" style={{ marginBottom: "1rem" }}>
            Download my latest resume or reach out if you’d like a tailored version.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume (PDF)
            </a>
            <a className="button secondary" href="mailto:contact@example.com">
              Contact Me
            </a>
          </div>

          <div style={{ display: "grid", gap: "0.75rem" }}>
            <div>
              <strong>Skills</strong>
              <p className="card-desc">React, JavaScript, Three.js, Python, IoT (ESP32), ML basics</p>
            </div>
            <div>
              <strong>Interests</strong>
              <p className="card-desc">Robotics, Computer Vision, Edge AI, Creative Coding, UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
