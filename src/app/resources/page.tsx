import type { Metadata } from 'next'
import { NewsletterCta } from '@/components/home/NewsletterCta'
import { PageHeader, Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { resourceGroups, resourcesIntro } from '@/lib/content/resources'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'A curated list for students entering financial planning, early-career advisors, and firm owners building a next-generation track.',
  alternates: { canonical: '/resources' },
}

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="The list I wish someone had handed me."
        lede={resourcesIntro}
      />

      <Section>
        <div className="space-y-20">
          {resourceGroups.map((group, groupIndex) => (
            <Reveal key={group.heading} delay={groupIndex * 60}>
              <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="horizon-rule" aria-hidden="true" />
                  <h2 className="mt-5 font-display text-2xl leading-snug tracking-tight text-ink">
                    {group.heading}
                  </h2>
                  <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                    {group.description}
                  </p>
                </div>

                <ul className="divide-y divide-rule border-y border-rule">
                  {group.items.map((item) => (
                    <li key={item.title} className="py-6">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group inline-flex items-center gap-2 font-display text-xl leading-snug tracking-tight text-ink transition-colors duration-300 hover:text-horizon"
                        >
                          {item.title}
                          <span
                            aria-hidden="true"
                            className="text-sm text-graphite transition-transform duration-300 ease-horizon group-hover:translate-x-0.5"
                          >
                            ↗
                          </span>
                        </a>
                      ) : (
                        <h3 className="font-display text-xl leading-snug tracking-tight text-ink">
                          {item.title}
                        </h3>
                      )}
                      <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <NewsletterCta />
    </>
  )
}
