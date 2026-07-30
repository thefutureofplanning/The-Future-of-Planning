import type { Metadata } from 'next'
import { ButtonLink } from '@/components/ui/Button'
import { PageHeader, Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { projects, projectsIntro } from '@/lib/content/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Research, tools and organizations built around one question: how the financial planning profession brings in and develops its next generation.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="The work behind the writing." lede={projectsIntro} />

      <Section>
        <ul className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.title} delay={index * 80}>
              <article className="flex h-full flex-col rounded-card border border-rule bg-surface p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="tick text-horizon">{project.status}</span>
                  <span className="tick">{project.tags[0]}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl leading-snug tracking-tight text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 font-display text-lg leading-relaxed text-ink">
                  {project.summary}
                </p>
                <p className="mt-4 flex-1 font-sans text-[0.9375rem] leading-relaxed text-graphite">
                  {project.detail}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-rule px-3 py-1 font-sans text-xs text-graphite"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <SectionHeading label="Collaboration" />
        <Reveal>
          <p className="max-w-3xl font-display text-display-sm text-ink">
            Most of this work gets better with a firm, a program or a researcher attached to it.
          </p>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-graphite">
            If a project overlaps with something you are building — a hiring study, a student
            program, an associate track — the fastest path is a short conversation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/schedule">Schedule a conversation</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send a note
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
