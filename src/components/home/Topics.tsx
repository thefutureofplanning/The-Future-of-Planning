import Link from 'next/link'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { topics } from '@/lib/content/topics'

export function Topics() {
  return (
    <Section className="border-t border-rule bg-surface">
      <SectionHeading
        label="Featured topics"
        title="Four questions on our minds"
      />
      <ul className="grid gap-6 sm:grid-cols-2">
        {topics.map((topic, index) => (
          <Reveal as="li" key={topic.label} delay={index * 80}>
            <Link
              href={topic.href}
              className="group flex h-full flex-col rounded-card border border-rule bg-paper p-7 transition duration-500 ease-horizon hover:-translate-y-1 hover:border-horizon/40 hover:shadow-lift"
            >
              <span className="tick text-horizon">{topic.label}</span>
              <span className="mt-5 font-display text-2xl leading-snug tracking-tight text-ink">
                {topic.title}
              </span>
              <span className="mt-3 flex-1 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                {topic.description}
              </span>
              <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm text-ink transition-colors duration-300 group-hover:text-horizon">
                Browse
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-horizon group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
