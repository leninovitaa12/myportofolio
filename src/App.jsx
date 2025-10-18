"use client"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import "./styles.css"

function App() {
  // All sections now render together in one scrollable page

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
      </main>

      <Footer />
    </div>
  )
}

export default App
