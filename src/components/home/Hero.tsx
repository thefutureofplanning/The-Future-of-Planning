import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const ticks = [
  { label: 'Now', span: 'Year one' },
  { label: '+10', span: 'Mid-career' },
  { label: '+20', span: 'Firm building' },
  { label: '+30', span: 'Succession' },
  { label: '+40', span: 'Handoff' },
  { label: '+50', span: 'The horizon' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
      <Container>
        <p
          className="animate-rise tick"
          style={{ animationDelay: '80ms' }}
        >
          Essays on the profession&rsquo;s next fifty years
        </p>

        <h1
          className="animate-rise mt-8 max-w-[19ch] font-display text-display-lg text-ink"
          style={{ animationDelay: '160ms' }}
        >
          Planning for a profession that{' '}
          <em className="not-italic text-horizon">
            <span className="italic">hasn&rsquo;t happened yet.</span>
          </em>
        </h1>

        <p
          className="animate-rise mt-8 max-w-xl font-sans text-lg leading-relaxed text-graphite sm:text-xl"
          style={{ animationDelay: '260ms' }}
        >
          Exploring the future of financial planning through the perspective of the next
          generation.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '340ms' }}
        >
          <ButtonLink href="/articles">Read articles</ButtonLink>
          <ButtonLink href="/schedule" variant="secondary">
            Schedule a conversation
          </ButtonLink>
        </div>

        {/* The horizon: this publication's fixed point of view — a career measured
            in decades rather than quarters. */}
        <div className="mt-20 sm:mt-28">
          <div
            className="horizon-rule animate-draw origin-left"
            style={{ animationDelay: '420ms' }}
            aria-hidden="true"
          />
          <ol className="grid grid-cols-6" aria-label="A fifty-year horizon">
            {ticks.map((tick, index) => (
              <li
                key={tick.label}
                className="animate-rise flex flex-col items-start"
                style={{ animationDelay: `${560 + index * 70}ms` }}
              >
                <span
                  aria-hidden="true"
                  className={cn('w-px', index === 0 ? 'h-4 bg-horizon' : 'h-2.5 bg-rule')}
                />
                <span
                  className={cn(
                    'mt-3 tick',
                    index === 0 ? 'text-horizon' : 'text-graphite',
                  )}
                >
                  {tick.label}
                </span>
                <span className="mt-1.5 hidden font-sans text-xs text-graphite/80 sm:block">
                  {tick.span}
                </span>
              </li>
            ))}
          </ol>
          <p
            className="animate-rise mt-10 max-w-md font-display text-lg italic text-graphite"
            style={{ animationDelay: '980ms' }}
          >
            Written from year one of a fifty-year horizon.
          </p>
        </div>
      </Container>
    </section>
  )
}
