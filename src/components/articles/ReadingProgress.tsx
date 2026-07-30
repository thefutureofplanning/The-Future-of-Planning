'use client'

import { useEffect, useState } from 'react'

/** The horizon, filling in as the reader moves through the piece. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent"
      role="presentation"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-horizon transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
