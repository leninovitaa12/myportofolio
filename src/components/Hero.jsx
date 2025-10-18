"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import ModelViewer from "./ModelViewer"
import TypewriterText from "./TypewriterText"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/leninovitaa12/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/leni-novita/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/lenissii?", label: "Instagram" },
    { icon: Mail, href: "mailto:leninovitaa12@gmail.com", label: "Email" },
  ]

  return (
    <section className="hero w-full min-h-screen flex items-center justify-center bg-black" id="home">
      <div className="hero-container flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        
        {/* Left Content */}
        <div className={`hero-content flex-1 flex flex-col items-center sm:items-start text-center sm:text-left ${isLoaded ? "loaded" : ""} w-full`}>
          
          {/* Social Icons */}
          <div className="social-icons flex gap-4 mb-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-white hover:text-blue-400 transition-colors"
                  title={social.label}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>

          {/* Text Section */}
          <div className="hero-text w-full max-w-full overflow-hidden px-2 sm:px-0">
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Hi, I'm Leni Novita.
            </h1>

            <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300 leading-snug break-words whitespace-normal px-2 sm:px-0">
              Information Technology | UI/UX Designer | Software Engineer.
            </p>

            <div className="typewriter-section mt-4">
              <p className="typewriter-label"></p>
              <TypewriterText />
            </div>
          </div>
        </div>

        {/* Right Content - 3D Model */}
        <div className={`hero-model flex-1 flex items-center justify-center mt-8 sm:mt-0 ${isLoaded ? "loaded" : ""} w-full`}>
          <ModelViewer />
        </div>
      </div>
    </section>
  )
}
