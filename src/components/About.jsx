export default function About() {
  return (
    <>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>About</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-desc" style={{ marginBottom: "0.75rem" }}>
            I’m Leni Novitasari, an Information Technology student who loves reading novel books and spending time with
            cats. I’m actively learning web development, machine learning, IoT, robotics, and other areas of modern
            technology. I enjoy combining creativity with engineering to craft experiences that are useful and
            delightful.
          </p>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "#cbd5e1" }}>
            <li>Hobbies: Reading novels, caring for cats</li>
            <li>Focus: Web Dev, Machine Learning, IoT, Robotics</li>
            <li>Goal: Build reliable, accessible, and elegant solutions</li>
          </ul>
        </div>
      </div>
    </>
  )
}
