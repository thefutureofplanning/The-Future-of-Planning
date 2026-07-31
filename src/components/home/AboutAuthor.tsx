import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { AuthorPortrait } from '@/components/AuthorPortrait'
import { bio } from '@/lib/content/profile'

export function AboutAuthor() {
  return (
    <Section className="border-t border-rule bg-surface">
      <SectionHeading label="About the author" />
      <div className="grid items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
        <Reveal>
          <AuthorPortrait />
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
