import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-rule bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl tracking-tight text-ink">{siteConfig.name}</p>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-graphite">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 tick">Written by {siteConfig.author.name}</p>
          </div>

          {siteConfig.footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="tick">{group.heading}</p>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline font-sans text-[0.9375rem] text-graphite transition-colors duration-300 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="horizon-rule mt-16" aria-hidden="true" />
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="font-sans text-sm text-graphite">
            © {year} {siteConfig.author.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.social.linkedin}
              className="font-sans text-sm text-graphite transition-colors hover:text-horizon"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.instagram}
              className="font-sans text-sm text-graphite transition-colors hover:text-horizon"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
