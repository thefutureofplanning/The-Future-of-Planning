import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h1
              className="animate-rise max-w-[19ch] font-display text-display-lg text-ink"
              style={{ animationDelay: '80ms' }}
            >
              Building the <em className="italic text-horizon">future</em> of financial planning
            </h1>

            <p
              className="animate-rise mt-8 max-w-xl font-sans text-lg leading-relaxed text-graphite sm:text-xl"
              style={{ animationDelay: '260ms' }}
            >
              For advisors, students, and firms investing in what&rsquo;s to come.
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
          </div>

          <div
            className="animate-rise mx-auto w-full max-w-xs lg:max-w-none"
            style={{ animationDelay: '180ms' }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel border border-rule bg-surface">
              <Image
                src="/images/jenna-headshot.jpg"
                alt="Jenna Smith"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 20rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
