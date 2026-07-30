import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { timeline } from '@/lib/content/profile'

export function LeadershipHighlights() {
  return (
    <Section>
      <SectionHeading
        label="Leadership"
        title="Where the work happens."
        action={{ label: 'Full experience', href: '/leadership' }}
      />
      <ol className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {timeline.map((entry, index) => (
          <Reveal as="li" key={`${entry.title}-${entry.org}`} delay={index * 60}>
            <div className="flex flex-col border-t border-rule pt-5">
              <span className="tick text-horizon">{entry.period}</span>
              <h3 className="mt-4 font-display text-xl leading-snug tracking-tight text-ink">
                {entry.title}
              </h3>
              <p className="mt-1 font-sans text-sm text-graphite">{entry.org}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
