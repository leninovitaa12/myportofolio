const projects = [
  {
    title: "Company Profile Catering DewaDewi Madiun",
    desc: "Website Company Profile using React JS Vite",
    tags: ["React JS"],
    // demo: "https://example.com/cat-feeder",
    repo: "https://github.com/leninovitaa12/Company-Profile-Catering-DewaDewi.git",
    image: "/models/catering.png",
  },
  {
    title: "Drakor Popular Machine Learning",
    desc: "Lorem ipsum",
    tags: ["Python", "Streamlit"],
    demo: "https://drakor-poputer-app-machine-learning-8dwdombv2n7ft8mmwpcno8.streamlit.app/",
    repo: "https://github.com/leninovitaa12/k-drama-populer-machine-learning-web.git",
    image: "/models/drakor.png", 
  },
  {
    title: "Hand Tracking",
    desc: "A simple machine learning model for hand tracking using Python Mediapipe.",
    tags: ["Python", "Mediapipe"],
    // demo: "https://example.com/triptailor",
    repo: "https://github.com/leninovitaa12/handtracking.git",
    image: "https://picsum.photos/seed/travel/800/480",
  },
  {
    title: "SmartPhone Watcher",
    desc: "Python program that alerts you with a voice notification whenever you unlock your phone using YOLOv8.",
    tags: ["OpenCV", "Python", "Computer Vision"],
    // demo: "https://example.com/robot-arm",
    repo: "https://github.com/leninovitaa12/SmartPhone-Watcher.git",
    image: "https://picsum.photos/seed/robot/800/480",
  },
  {
    title: "Encryption and Decryption File for Data Security",
    desc: "ML model to recommend books based on reading patterns and genres.",
    tags: ["Python", ],
    demo: "https://example.com/novel-recommender",
    repo: "https://github.com/yourname/novel-recommender",
    image: "https://picsum.photos/seed/novel/800/480",
  },
  {
    title: "Analysis Healthy Food for Better life",
    desc: "ML .",
    tags: ["Python", ],
    demo: "",
    repo: "https://github.com/rkaaaaaa/Nutrisi-Hidup-Sehat.git",
    image: "https://picsum.photos/seed/novel/800/480",
  },

]

function IconExternal({ className = "icon" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  )
}

function IconGitHub({ className = "icon" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      role="img"
      aria-label="GitHub"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.25-3.19-.13-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.3 1.22.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.3-1.54 3.3-1.22 3.3-1.22.66 1.68.25 2.92.12 3.23.78.83 1.25 1.89 1.25 3.19 0 4.58-2.81 5.6-5.49 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>Projects</h2>
      <p style={{ color: "#cbd5e1", marginBottom: "1.25rem" }}>
        A selection of things I’ve built and experimented with.
      </p>

      <div className="grid cols-3">
        {projects.map((p) => (
          <article className="card project-card" key={p.title}>
            {/* Media header */}
            <div className="card-media">
              {p.image ? (
                <img src={p.image || "/placeholder.svg"} alt={`${p.title} preview`} loading="lazy" />
              ) : (
                <div className="card-media-fallback" aria-hidden="true" />
              )}
            </div>

            {/* Body */}
            <div className="card-body">
              <div className="card-head">
                <h3 className="card-title">{p.title}</h3>
                <div className="card-actions">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      aria-label={`Open live demo of ${p.title}`}
                      title="Open demo"
                    >
                      <IconExternal />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      aria-label={`Open GitHub repository of ${p.title}`}
                      title="GitHub"
                    >
                      <IconGitHub />
                    </a>
                  )}
                </div>
              </div>

              <p className="card-desc">{p.desc}</p>

              <div className="tags">
                {p.tags.map((t) => (
                  <span className="badge" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
