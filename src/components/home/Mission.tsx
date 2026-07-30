import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { mission } from '@/lib/content/profile'

export function Mission() {
  return (
    <Section>
      <SectionHeading label="Mission" />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="font-display text-display-sm text-ink">{mission.statement}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 font-sans text-base leading-relaxed text-graphite">
            {mission.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            More about this work
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  )
}
