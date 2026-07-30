'use client'

import { useEffect, useState } from 'react'
import type { Heading } from '@/lib/articles'
import { cn } from '@/lib/utils'

/** Sticky contents list with scroll spy. Hidden below xl, where space is scarce. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-88px 0px -70% 0px', threshold: [0, 1] },
    )

    for (const heading of headings) {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 2) return null

  return (
    <nav aria-labelledby="toc-heading" className="sticky top-28">
      <p id="toc-heading" className="tick">
        Contents
      </p>
      <div className="horizon-rule mt-4" aria-hidden="true" />
      <ul className="mt-5 space-y-3">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'pl-4' : undefined}>
            <a
              href={`#${heading.id}`}
              aria-current={activeId === heading.id ? 'location' : undefined}
              className={cn(
                'block font-sans text-sm leading-snug transition-colors duration-300',
                activeId === heading.id ? 'text-horizon' : 'text-graphite hover:text-ink',
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
