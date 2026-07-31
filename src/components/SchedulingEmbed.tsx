'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/site'

/**
 * Loads the booking page in an iframe only once it scrolls into view, so the
 * scheduling page still ships a fast first paint. Works with any scheduler
 * that allows iframing (Cal.com, Calendly, etc.) — no provider-specific script.
 */
export function SchedulingEmbed({ url = siteConfig.schedulingUrl }: { url?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <iframe
          src={url}
          title="Schedule a conversation"
          className="w-full overflow-hidden rounded-panel border border-rule bg-surface"
          style={{ minWidth: '320px', height: '720px' }}
        />
      ) : (
        <div className="flex min-h-[18rem] flex-col items-start justify-center rounded-panel border border-dashed border-rule bg-surface p-10">
          <p className="font-display text-xl text-ink">Loading the calendar…</p>
          <p className="mt-2 max-w-md font-sans text-[0.9375rem] text-graphite">
            Pick any open slot. Thirty minutes, no agenda required.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-sans text-[0.9375rem] text-paper transition-colors duration-300 hover:bg-horizon"
          >
            Open the booking page
          </a>
        </div>
      )}
    </div>
  )
}
