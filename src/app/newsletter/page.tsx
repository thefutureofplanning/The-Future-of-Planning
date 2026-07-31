import type { Metadata } from 'next'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { getArticleMeta } from '@/lib/articles'
import { ArticleCard } from '@/components/articles/ArticleCard'

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'A letter on the future of financial planning — new essays, field notes from conferences and firm visits, and research findings.',
  alternates: { canonical: '/newsletter' },
}

const contents = [
  {
    label: 'Essays',
    detail: 'New long-form pieces, sent the day they publish.',
  },
  {
    label: 'Field notes',
    detail: 'What I heard at a conference, a firm visit or a coaching session that changed my mind.',
  },
  {
    label: 'Research',
    detail: 'Findings from the hiring and development work, before they turn into an article.',
  },
]

export default function NewsletterPage() {
  const recent = getArticleMeta().slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="A letter on where the profession is going, from a fresh perspective."
        lede="One send at a time, written for people who care how this profession hands itself over. No sponsorships, no roundups, no filler."
      />

      <Container className="pb-16 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="rounded-panel border border-rule bg-surface p-8 shadow-lift sm:p-10">
              <p className="tick text-horizon">Subscribe</p>
              <h2 className="mt-5 font-display text-2xl leading-snug tracking-tight text-ink">
                Join advisors, students and firm owners reading along.
              </h2>
              <div className="mt-8">
                <NewsletterForm id="newsletter-page" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="tick">What arrives</p>
            <ul className="mt-6 space-y-7">
              {contents.map((item) => (
                <li key={item.label} className="border-t border-rule pt-5">
                  <h3 className="font-display text-xl leading-snug tracking-tight text-ink">
                    {item.label}
                  </h3>
                  <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>

      {recent.length > 0 ? (
        <Container className="pb-section">
          <div className="horizon-rule" aria-hidden="true" />
          <div className="flex items-baseline gap-3 pt-4">
            <span className="mt-1 h-3 w-px shrink-0 bg-horizon" aria-hidden="true" />
            <h2 className="tick">A sample of past writing</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((article, index) => (
              <Reveal key={article.slug} delay={index * 80} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </Container>
      ) : null}
    </>
  )
}
