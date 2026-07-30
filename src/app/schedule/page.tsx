import type { Metadata } from 'next'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Schedule a conversation',
  description:
    'Book a thirty-minute conversation about speaking, hiring, student programs or a career in financial planning.',
  alternates: { canonical: '/schedule' },
}

const goodFits = [
  {
    title: 'Firm owners and hiring managers',
    detail: 'What early-career candidates are comparing, and where good firms lose them.',
  },
  {
    title: 'Conference and program organizers',
    detail: 'Session formats, audience fit and what a student track actually needs.',
  },
  {
    title: 'Students and career changers',
    detail: 'The path in: coursework, internships, credentials and first roles.',
  },
  {
    title: 'Researchers and collaborators',
    detail: 'Work on the talent pipeline, advisor development or planning education.',
  },
]

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="Thirty minutes, on the calendar."
        lede="Pick any open time. Come with a question, a problem you are working on, or nothing at all — most of these conversations start unstructured and get useful fast."
      />

      <Container className="pb-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="tick">Usually a good fit</p>
              <ul className="mt-6 space-y-7">
                {goodFits.map((item) => (
                  <li key={item.title} className="border-t border-rule pt-5">
                    <h2 className="font-display text-lg leading-snug tracking-tight text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-10 font-sans text-sm leading-relaxed text-graphite">
                Prefer email? Write to{' '}
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="link-underline text-ink transition-colors hover:text-horizon"
                >
                  {siteConfig.author.email}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <CalendlyEmbed />
          </Reveal>
        </div>
      </Container>
    </>
  )
}
