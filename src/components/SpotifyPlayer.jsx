"use client"

import { useState, useRef } from "react"

export default function SpotifyPlayer({ song }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayPause = () => {
    if (!song.previewUrl) return

    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div
      className={`bg-gradient-to-r ${song.color} rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-300 group`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-12 h-12 bg-black bg-opacity-30 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-50 transition-all">
          <span className="text-xl">🎵</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-white text-sm truncate">{song.title}</p>
          <p className="text-white text-opacity-80 text-xs truncate">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 ml-2">
        <span className="text-white text-opacity-80 text-xs">{song.duration}</span>
        <button
          onClick={handlePlayPause}
          disabled={!song.previewUrl}
          className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            {isPlaying ? <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /> : <path d="M8 5v14l11-7z" />}
          </svg>
        </button>
      </div>
      <audio ref={audioRef} src={song.previewUrl} onEnded={handleAudioEnd} crossOrigin="anonymous" />
    </div>
  )
}
