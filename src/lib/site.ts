const DEFAULT_SITE_URL = 'https://thefutureofplanning.com'

/** Falls back to the default whenever the env var is missing or not a valid absolute URL. */
function resolveSiteUrl(value: string | undefined): string {
  if (!value) return DEFAULT_SITE_URL
  try {
    return new URL(value).toString().replace(/\/$/, '')
  } catch {
    return DEFAULT_SITE_URL
  }
}

export const siteConfig = {
  name: 'The Future of Planning',
  shortName: 'Future of Planning',
  tagline:
    'Exploring the future of financial planning through the perspective of the next generation.',
  description:
    'Essays, field notes and research on where financial planning is headed — written by Jenna Smith, a next-generation planner building a career at the front edge of the profession.',
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: 'en-US',
  author: {
    name: 'Jenna Smith',
    role: 'Associate Advisor · Financial planning student, Utah Valley University',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'thefutureofplanning@gmail.com',
  },
  schedulingUrl:
    process.env.NEXT_PUBLIC_SCHEDULING_URL ?? 'https://cal.com/jenna-smith/30min',
  social: {
    linkedin: 'https://www.linkedin.com/in/jennasmith3/',
    instagram: 'https://www.instagram.com/jenna.e.smith/',
  },
  nav: [
    { label: 'Articles', href: '/articles' },
    { label: 'About', href: '/about' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Resources', href: '/resources' },
  ],
  footerNav: [
    {
      heading: 'Writing',
      links: [
        { label: 'All articles', href: '/articles' },
        { label: 'Newsletter', href: '/newsletter' },
      ],
    },
    {
      heading: 'Work',
      links: [{ label: 'About', href: '/about' }],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'Speaking', href: '/speaking' },
        { label: 'Schedule a conversation', href: '/schedule' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
