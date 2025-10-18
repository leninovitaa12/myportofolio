import { Download } from "lucide-react"

export default function Resume() {
  const resumeLink = "https://drive.google.com/file/d/1wJpQUKPy-SzwOwOfh3cOlUZ-x3pz52WU/view?usp=sharing"

  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>

        <div className="resume-content">
          <p className="resume-text">Download my latest resume.</p>

          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="download-btn">
            <Download size={20} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
