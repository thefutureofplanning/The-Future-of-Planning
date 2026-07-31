import type { Metadata } from 'next'
import { ButtonLink } from '@/components/ui/Button'
import { PageHeader, Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import {
  appearances,
  speakingIntro,
  speakingLogistics,
  speakingTopics,
} from '@/lib/content/speaking'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Talks and sessions on recruiting, developing and keeping the next generation of financial planners — for conferences, firms and university programs.',
  alternates: { canonical: '/speaking' },
}

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="Conversations centered around the next generation of financial planners."
        lede={speakingIntro}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.calendlyUrl} external>
            Schedule a discovery call
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Send session details
          </ButtonLink>
        </div>
      </PageHeader>

      <Section>
        <SectionHeading label="Sessions" title="Three talks, adapted to the audience in the room." />
        <ul className="grid gap-6 lg:grid-cols-2">
          {speakingTopics.slice(0, 3).map((topic, index) => (
            <Reveal as="li" key={topic.title} delay={index * 80}>
              <div className="flex h-full flex-col rounded-card border border-rule bg-surface p-8">
                <p className="tick text-horizon">{topic.audience}</p>
                <h3 className="mt-5 font-display text-2xl leading-snug tracking-tight text-ink">
                  {topic.title}
                </h3>
                <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                  {topic.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <SectionHeading label="Selected appearances" />
        <ul className="border-t border-rule">
          {appearances.map((appearance, index) => (
            <Reveal as="li" key={appearance.event} delay={index * 70}>
              <div className="grid gap-2 border-b border-rule py-7 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl leading-snug tracking-tight text-ink">
                      {appearance.event}
                    </h3>
                    {appearance.upcoming ? (
                      <span className="rounded-full bg-horizon-soft px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-horizon">
                        Upcoming
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 font-sans text-[0.9375rem] text-graphite">{appearance.detail}</p>
                  {appearance.link ? (
                    <a
                      href={appearance.link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline mt-2 inline-block font-sans text-sm text-ink transition-colors hover:text-horizon"
                    >
                      {appearance.link.label} →
                    </a>
                  ) : null}
                </div>
                <p className="tick sm:text-right">{appearance.year}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading label="Logistics" title="What organizers usually ask first." />
        <dl className="grid gap-x-16 gap-y-8 sm:grid-cols-2">
          {speakingLogistics.map((item, index) => (
            <Reveal key={item.label} delay={index * 60}>
              <div className="border-t border-rule pt-5">
                <dt className="tick text-horizon">{item.label}</dt>
                <dd className="mt-3 font-sans text-base leading-relaxed text-ink">{item.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/schedule">Schedule a conversation</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Email the details
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
