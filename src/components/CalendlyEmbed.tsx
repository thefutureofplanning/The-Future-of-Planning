'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/site'

const WIDGET_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

/**
 * Loads Calendly only when the embed scrolls into view, so the scheduling page
 * still ships a fast first paint. If the script is blocked or fails, the direct
 * link below remains usable.
 */
export function CalendlyEmbed({ url = siteConfig.calendlyUrl }: { url?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [failed, setFailed] = useState(false)

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

  useEffect(() => {
    if (!shouldLoad) return

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT}"]`)
    if (existing) return

    const script = document.createElement('script')
    script.src = WIDGET_SCRIPT
    script.async = true
    script.onerror = () => setFailed(true)
    document.body.appendChild(script)
  }, [shouldLoad])

  return (
    <div ref={containerRef}>
      {shouldLoad && !failed ? (
        <div
          className="calendly-inline-widget overflow-hidden rounded-panel border border-rule bg-surface"
          data-url={`${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=0E1A1C&primary_color=0F6E63`}
          style={{ minWidth: '320px', height: '720px' }}
        />
      ) : (
        <div className="flex min-h-[18rem] flex-col items-start justify-center rounded-panel border border-dashed border-rule bg-surface p-10">
          <p className="font-display text-xl text-ink">
            {failed ? 'The scheduler did not load.' : 'Loading the calendar…'}
          </p>
          <p className="mt-2 max-w-md font-sans text-[0.9375rem] text-graphite">
            {failed
              ? 'Open the booking page directly, or send an email and we will find a time.'
              : 'Pick any open slot. Thirty minutes, no agenda required.'}
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
