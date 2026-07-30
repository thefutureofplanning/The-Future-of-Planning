'use client'

import { createElement, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealTag = 'div' | 'section' | 'li' | 'article' | 'header'

/**
 * Scroll-triggered reveal. Motion is defined in globals.css (.reveal) so the
 * reduced-motion media query can neutralise every instance in one place.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: RevealTag
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      'data-visible': visible,
      style: { '--reveal-delay': `${delay}ms` } as React.CSSProperties,
      className: cn('reveal', className),
    } as React.HTMLAttributes<HTMLElement>,
    children,
  )
}
