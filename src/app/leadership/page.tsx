import type { Metadata } from 'next'
import { ButtonLink } from '@/components/ui/Button'
import { PageHeader, Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { leadershipIntro, roles } from '@/lib/content/leadership'

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Student association leadership, research team direction and financial coaching — the organizations behind the writing.',
  alternates: { canonical: '/leadership' },
}

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Rooms where students and firms actually meet."
        lede={leadershipIntro}
      />

      <Section>
        <ol className="space-y-0">
          {roles.map((role, index) => (
            <Reveal as="li" key={`${role.title}-${role.org}`} delay={index * 70}>
              <div className="grid gap-6 border-t border-rule py-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
                <div>
                  <p className="tick text-horizon">{role.period}</p>
                  <h2 className="mt-4 font-display text-2xl leading-snug tracking-tight text-ink">
                    {role.title}
                  </h2>
                  <p className="mt-2 font-sans text-[0.9375rem] text-graphite">{role.org}</p>
                </div>
                <div>
                  <p className="font-display text-lg leading-relaxed text-ink">{role.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {role.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-4 font-sans text-[0.9375rem] leading-relaxed text-graphite"
                      >
                        <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-horizon" />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <SectionHeading label="Working together" />
        <Reveal>
          <p className="max-w-3xl font-display text-display-sm text-ink">
            If you are building a program, a chapter or an associate track, I am always glad to
            compare notes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/schedule">Schedule a conversation</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              See current projects
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
