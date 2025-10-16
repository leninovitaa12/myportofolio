"use client"

import { useEffect, useRef, useState } from "react"

export default function Typewriter({
  sentences = [],
  typeSpeed = 28, // ms per char
  deleteSpeed = 18,
  pauseBetween = 1300,
  startDelay = 300,
}) {
  const [phase, setPhase] = useState("idle") // idle | typing | pausing | deleting
  const [idx, setIdx] = useState(0)
  const [out, setOut] = useState("")
  const timerRef = useRef(null)

  useEffect(() => {
    if (!sentences.length) return
    const start = setTimeout(() => setPhase("typing"), startDelay)
    return () => clearTimeout(start)
  }, [sentences, startDelay])

  useEffect(() => {
    if (!sentences.length) return
    const current = sentences[idx] ?? ""

    if (phase === "typing") {
      if (out.length < current.length) {
        timerRef.current = setTimeout(() => setOut(current.slice(0, out.length + 1)), typeSpeed)
      } else {
        setPhase("pausing")
      }
    } else if (phase === "pausing") {
      timerRef.current = setTimeout(() => setPhase("deleting"), pauseBetween)
    } else if (phase === "deleting") {
      if (out.length > 0) {
        timerRef.current = setTimeout(() => setOut(out.slice(0, -1)), deleteSpeed)
      } else {
        // move to next sentence (loop)
        setIdx((i) => (i + 1) % sentences.length)
        setPhase("typing")
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [phase, out, idx, sentences, typeSpeed, deleteSpeed, pauseBetween])

  return (
    <p className="typewriter-line" aria-live="polite">
      <span>{out}</span>
      <span className="type-caret" aria-hidden="true" />
    </p>
  )
}
