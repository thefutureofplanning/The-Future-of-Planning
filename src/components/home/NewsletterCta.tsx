import { NewsletterForm } from '@/components/NewsletterForm'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function NewsletterCta() {
  return (
    <section className="pb-section">
      <Container>
        <Reveal>
          <div className="rounded-panel border border-rule bg-surface p-8 shadow-lift sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <p className="tick text-horizon">Newsletter</p>
                <h2 className="mt-6 font-display text-display-sm text-ink">
                  A letter on where the profession is going.
                </h2>
                <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-graphite">
                  New essays, field notes from conferences and firm visits, and the occasional
                  research finding — sent when there is something worth sending.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <NewsletterForm id="home-newsletter" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
