'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-500',
        scrolled
          ? 'border-rule bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70'
          : 'border-transparent bg-paper',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-shell items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-sm"
          aria-label={`${siteConfig.name} — home`}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'link-underline font-sans text-[0.9375rem] transition-colors duration-300',
                isActive(item.href) ? 'text-horizon' : 'text-graphite hover:text-ink',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/schedule"
            className="hidden rounded-full border border-rule bg-surface px-4 py-2 font-sans text-sm text-ink transition duration-300 ease-horizon hover:-translate-y-0.5 hover:border-horizon hover:text-horizon lg:inline-flex"
          >
            Schedule a conversation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-horizon lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <MenuGlyph open={open} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-rule bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto w-full max-w-shell px-5 py-6 sm:px-8">
          <ul className="flex flex-col">
            {[...siteConfig.nav, { label: 'Newsletter', href: '/newsletter' }, { label: 'Contact', href: '/contact' }].map(
              (item) => (
                <li key={item.href} className="border-b border-rule last:border-0">
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between py-4 font-display text-2xl transition-colors',
                      isActive(item.href) ? 'text-horizon' : 'text-ink',
                    )}
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-graphite">
                      →
                    </span>
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            href="/schedule"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 font-sans text-[0.9375rem] text-paper"
          >
            Schedule a conversation
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="26"
        height="14"
        viewBox="0 0 26 14"
        fill="none"
        aria-hidden="true"
        className="overflow-visible"
      >
        <path d="M0 9.5H26" stroke="rgb(var(--rule))" strokeWidth="1" />
        <path
          d="M3 9.5V4"
          stroke="rgb(var(--horizon))"
          strokeWidth="1.5"
          className="origin-bottom transition-transform duration-500 ease-horizon group-hover:scale-y-150"
        />
        <path d="M11 9.5V6.5M19 9.5V7.5" stroke="rgb(var(--graphite))" strokeWidth="1" />
      </svg>
      <span className="font-display text-[1.0625rem] tracking-tight text-ink">
        The Future of Planning
      </span>
    </span>
  )
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path
        d={open ? 'M3 2L17 12' : 'M0 2H20'}
        stroke="currentColor"
        strokeWidth="1.5"
        className="transition-all duration-300 ease-horizon"
      />
      <path
        d={open ? 'M3 12L17 2' : 'M0 11H14'}
        stroke="currentColor"
        strokeWidth="1.5"
        className="transition-all duration-300 ease-horizon"
      />
    </svg>
  )
}
