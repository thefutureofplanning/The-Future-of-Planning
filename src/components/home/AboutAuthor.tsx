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
          <div className="relative mx-auto aspect-[3/4] w-48 overflow-hidden rounded-t-full bg-paper sm:w-56">
            <Image
              src="/images/jenna-headshot.jpg"
              alt="Jenna Smith"
              fill
              sizes="(min-width: 640px) 14rem, 12rem"
              className="object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
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
