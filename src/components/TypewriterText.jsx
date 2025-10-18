"use client"

import { useState, useEffect } from "react"

export default function TypewriterText() {
  const texts = [
  "I love building beautiful and functional web experiences.",
  "I'm passionate about exploring Machine Learning, IoT, and Robotics.",
  "I'm constantly learning and improving my skills in Software Engineering.",
  ];


  const [displayedText, setDisplayedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const typingSpeed = isDeleting ? 50 : 80
    const delay = isDeleting ? 50 : 1500

    const timer = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else if (isDeleting && charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      },
      isDeleting ? typingSpeed : charIndex === currentText.length ? delay : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{displayedText}</span>
      <span className="typewriter-cursor"></span>
    </div>
  )
}
