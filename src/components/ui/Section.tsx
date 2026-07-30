import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Container } from './Container'
import { Reveal } from './Reveal'

/**
 * Every section opens on the horizon: a hairline axis with a single tick at the
 * label. The device is the site's structural spine — it marks position rather
 * than decorating the page.
 */
export function SectionHeading({
  label,
  title,
  action,
  className,
}: {
  label: string
  title?: string
  action?: { label: string; href: string }
  className?: string
}) {
  return (
    <div className={cn('mb-12 sm:mb-16', className)}>
      <div className="horizon-rule" aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-4">
        <div className="flex items-baseline gap-3">
          <span className="mt-1 h-3 w-px shrink-0 bg-horizon" aria-hidden="true" />
          <span className="tick">{label}</span>
        </div>
        {action ? (
          <Link
            href={action.href}
            className="group inline-flex items-center gap-1.5 font-sans text-sm text-graphite transition-colors duration-300 hover:text-horizon"
          >
            {action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-horizon group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        ) : null}
      </div>
      {title ? (
        <h2 className="mt-6 max-w-3xl font-display text-display-sm text-ink">{title}</h2>
      ) : null}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('py-section', className)}>
      <Container>{children}</Container>
    </section>
  )
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string
  title: string
  lede?: string
  children?: React.ReactNode
}) {
  return (
    <header className="pb-14 pt-16 sm:pb-20 sm:pt-24">
      <Container>
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="mt-1 h-3 w-px shrink-0 bg-horizon" aria-hidden="true" />
            <span className="tick">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl font-display text-display-md text-ink">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-graphite">{lede}</p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={200}>{children}</Reveal> : null}
        <Reveal delay={260}>
          <div className="horizon-rule mt-12" aria-hidden="true" />
        </Reveal>
      </Container>
    </header>
  )
}
