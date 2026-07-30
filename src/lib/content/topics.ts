export type Topic = {
  label: string
  title: string
  description: string
  href: string
}

/**
 * The four lines of inquiry the publication returns to. `href` deep-links into
 * the article index with the category pre-selected.
 */
export const topics: Topic[] = [
  {
    label: 'Pipeline',
    title: 'Where the next planners come from',
    description:
      'Why students choose this profession, why they leave it, and what actually moves someone from curious to committed.',
    href: '/articles?category=Pipeline',
  },
  {
    label: 'Practice',
    title: 'How firms build advisors',
    description:
      'Training, mentorship, compensation and the first five years — the part of the career that decides who stays.',
    href: '/articles?category=Practice',
  },
  {
    label: 'Technology',
    title: 'What software changes, and what it never will',
    description:
      'Planning tools, automation and AI, judged by whether they improve the meeting rather than the demo.',
    href: '/articles?category=Technology',
  },
  {
    label: 'Profession',
    title: 'The shape of the next decade',
    description:
      'Succession, ownership, fee models and the slow structural questions the profession keeps postponing.',
    href: '/articles?category=Profession',
  },
]
