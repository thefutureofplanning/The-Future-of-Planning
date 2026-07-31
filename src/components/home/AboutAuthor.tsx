import Image from 'next/image'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { bio } from '@/lib/content/profile'

export function AboutAuthor() {
  return (
    <Section className="border-t border-rule bg-surface">
      <SectionHeading label="About the author" />
      <div className="grid items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
        <Reveal>
          <div className="mx-auto w-48 sm:w-56">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-paper">
              <Image
                src="/images/jenna-headshot.jpg"
                alt="Jenna Smith"
                fill
                sizes="(min-width: 640px) 14rem, 12rem"
                className="object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            <p className="mt-4 text-center font-display text-lg text-ink">Jenna Smith, AFC®</p>
            <p className="mt-1 text-center font-sans text-sm text-graphite">
              Registered Investment Advisor, CFP Candidate
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-ink sm:text-xl">
            {bio.short}
          </p>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            Read the full story
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  )
}
