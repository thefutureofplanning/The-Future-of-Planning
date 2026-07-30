import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out about speaking, hiring, research collaboration, or a question about starting a career in financial planning.',
  alternates: { canonical: '/contact' },
}

const routes = [
  {
    label: 'Speaking',
    description: 'Conference sessions, firm workshops and university programs.',
    href: '/speaking',
    action: 'Session details',
  },
  {
    label: 'A conversation',
    description: 'Thirty minutes on a calendar, no agenda required.',
    href: '/schedule',
    action: 'Pick a time',
  },
  {
    label: 'The newsletter',
    description: 'New essays and field notes, sent when there is something worth sending.',
    href: '/newsletter',
    action: 'Subscribe',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say what you are working on."
        lede="Students, advisors, firm owners and conference organizers all end up here. Tell me which one you are and what would be useful."
      />

      <Container className="pb-section">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="tick">Direct</p>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="link-underline mt-4 inline-block font-display text-2xl tracking-tight text-ink transition-colors hover:text-horizon"
              >
                {siteConfig.author.email}
              </a>

              <div className="horizon-rule my-10" aria-hidden="true" />

              <p className="tick">Faster routes</p>
              <ul className="mt-6 space-y-6">
                {routes.map((route) => (
                  <li key={route.href}>
                    <h2 className="font-display text-xl leading-snug tracking-tight text-ink">
                      {route.label}
                    </h2>
                    <p className="mt-1.5 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                      {route.description}
                    </p>
                    <Link
                      href={route.href}
                      className="group mt-2 inline-flex items-center gap-1.5 font-sans text-sm text-ink transition-colors duration-300 hover:text-horizon"
                    >
                      {route.action}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 ease-horizon group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="horizon-rule my-10" aria-hidden="true" />

              <p className="font-sans text-sm leading-relaxed text-graphite">
                Replies usually take a few days. Anything time-sensitive — a program deadline, a
                speaker slot — is worth flagging in the first line.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  )
}
