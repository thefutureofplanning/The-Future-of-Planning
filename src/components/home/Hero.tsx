import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

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
      </Container>
    </section>
  )
}
