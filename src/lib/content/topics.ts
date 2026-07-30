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
    label: 'Talent',
    title: 'Helping firms build exceptional advisors',
    description:
      'Insights on recruiting, mentorship, leadership, and creating careers where great advisors want to stay.',
    href: '/articles?category=Talent',
  },
  {
    label: 'NextGen',
    title: 'What the next generation wants',
    description:
      'Exploring the careers, cultures, leadership, and opportunities that attract and retain tomorrow’s financial planners.',
    href: '/articles?category=NextGen',
  },
  {
    label: 'Technology',
    title: 'Better technology, better advice.',
    description:
      'How innovation can improve planning without sacrificing the human side of the profession.',
    href: '/articles?category=Technology',
  },
  {
    label: 'Profession',
    title: 'The next generation of ownership',
    description:
      'How client wealth, advisory firms, and leadership are changing hands.',
    href: '/articles?category=Profession',
  },
]
