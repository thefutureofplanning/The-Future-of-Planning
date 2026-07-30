'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

/**
 * Theme is applied before paint by the inline script in app/layout.tsx, so this
 * control only has to keep localStorage and the <html> class in sync.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      window.localStorage.setItem('fop-theme', next)
    } catch {
      /* storage unavailable — the choice simply will not persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-graphite transition-colors duration-300 hover:text-horizon"
    >
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="3.4"
          stroke="currentColor"
          strokeWidth="1.3"
          fill={theme === 'dark' ? 'currentColor' : 'none'}
        />
        <path
          d="M8 0.8V2.4M8 13.6V15.2M0.8 8H2.4M13.6 8H15.2M2.9 2.9L4 4M12 12L13.1 13.1M13.1 2.9L12 4M4 12L2.9 13.1"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          className="transition-opacity duration-500"
          opacity={theme === 'dark' ? 0.35 : 1}
        />
      </svg>
    </button>
  )
}
