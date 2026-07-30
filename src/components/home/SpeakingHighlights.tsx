import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { speakingTopics } from '@/lib/content/speaking'

export function SpeakingHighlights() {
  return (
    <Section className="border-t border-rule bg-surface">
      <SectionHeading
        label="Speaking"
        title="Sessions built for the room, not the résumé."
        action={{ label: 'Speaking details', href: '/speaking' }}
      />
      <ul className="divide-y divide-rule border-y border-rule">
        {speakingTopics.slice(0, 3).map((topic, index) => (
          <Reveal as="li" key={topic.title} delay={index * 80}>
            <div className="grid gap-3 py-7 sm:grid-cols-[1.4fr_1fr] sm:gap-10">
              <div>
                <h3 className="font-display text-xl leading-snug tracking-tight text-ink">
                  {topic.title}
                </h3>
                <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                  {topic.description}
                </p>
              </div>
              <p className="tick sm:self-center sm:text-right">{topic.audience}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
