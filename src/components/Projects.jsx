const projects = [
  {
    title: "Company Profile Website",
    description: "A beautiful web application built with React and modern technologies.",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/leninovitaa12/Company-Profile-Catering-DewaDewi.git",
    website: "https://www.cateringdewadewimadiun.com/", 
    image: "/models/catering.png",
  },
  {
    title: "Smartphone Watcher",
    description: "Python program that alerts you with a voice notification whenever you unlock your phone using YOLOv8.",
    tags: ["OpenCV", "Python", "Computer Vision"],
    link: "https://github.com/leninovitaa12/SmartPhone-Watcher.git",
    website: "", 
    image: "/models/smartphone.png",
  },
  {
    title: "Drakor Popular Machine Learning",
    description: "A machine learning project exploring data patterns and predictions Popular Korean Drama.",
    tags: ["Python", "ML", "Data Science"],
    link: "https://github.com/leninovitaa12/k-drama-populer-machine-learning-web.git",
    website: "https://drakor-poputer-app-machine-learning-8dwdombv2n7ft8mmwpcno8.streamlit.app/", 
    image: "/models/kdrama.png",
  },
  {
    title: "Warehouse Management Apps",
    description: "An Android application for monitoring warehouse data, implementing bindings, fragments, and APIs for efficient and modern data management.",
    tags: ["Kotlin"],
    link: "https://github.com/hamdaniqhmqd/APK-Monitoring-Gudang.git",
    website: "", 
    image: "/models/warehouse.png",
  },
  {
    title: "Geometry Dash Game With Scratch",
    description: "Geometry dash game using block programming with Scratch.",
    tags: ["Game", "Scratch", "Block Programming"],
    // link: "https://github.com",
    website: "https://scratch.mit.edu/projects/1207774327", 
    image: "/models/geometry.png",
  },
  {
    title: "Smart Band for Teens",
    description: "IoT-based wearable device designed to monitor users’ physical activity and heart rate, integrated with an AI algorithm to provide personalized exercise recommendations.",
    tags: ["IoT", "Kotlin", "Firebase", "AI"],
    link: "https://github.com",
    website: "",
    image: "/models/smartband.png",
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link"
                    title="Visit Website"
                  >
                    <svg className="website-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    title="View on GitHub"
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}

                <span className="project-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
