import type { Metadata } from 'next'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHeader, Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { AuthorPortrait } from '@/components/AuthorPortrait'
import { bio, mission, why } from '@/lib/content/profile'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: bio.short,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A next-gen planner, building and documenting as she goes."
        lede={bio.short}
      />

      <Container className="pb-16 sm:pb-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <Reveal>
            <div className="space-y-6 font-display text-lg leading-relaxed text-ink sm:text-xl">
              {bio.long.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <AuthorPortrait />
              <div className="mt-12">
                <p className="tick">Currently writing about</p>
                <ul className="mt-4 space-y-2.5">
                  {bio.focus.map((item) => (
                    <li key={item} className="flex gap-3 font-sans text-[0.9375rem] text-graphite">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-horizon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <Section className="border-t border-rule bg-surface">
        <SectionHeading label="Mission" />
        <Reveal>
          <p className="max-w-4xl font-display text-display-sm text-ink">{mission.statement}</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 grid gap-6 font-sans text-base leading-relaxed text-graphite md:grid-cols-3">
            {mission.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading label="Why" title="Why I write about this." />
        <div className="max-w-3xl space-y-6 font-display text-lg leading-relaxed text-ink sm:text-xl">
          {why.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/schedule">Schedule a conversation</ButtonLink>
            <ButtonLink href="/articles" variant="secondary">
              Read the writing
            </ButtonLink>
          </div>
          <p className="mt-6 font-sans text-sm text-graphite">
            Or reach out directly:{' '}
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="link-underline text-ink transition-colors hover:text-horizon"
            >
              {siteConfig.author.email}
            </a>
          </p>
        </Reveal>
      </Section>
    </>
  )
}
