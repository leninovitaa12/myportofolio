import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx"
import Resume from "./components/Resume.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="home" className="section">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="resume" className="section">
          <div className="container">
            <Resume />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
