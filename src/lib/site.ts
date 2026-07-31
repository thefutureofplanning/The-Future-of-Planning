export const siteConfig = {
  name: 'The Future of Planning',
  shortName: 'Future of Planning',
  tagline:
    'Exploring the future of financial planning through the perspective of the next generation.',
  description:
    'Essays, field notes and research on where financial planning is headed — written by Jenna Smith, a next-generation planner building a career at the front edge of the profession.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thefutureofplanning.com').replace(/\/$/, ''),
  locale: 'en-US',
  author: {
    name: 'Jenna Smith',
    role: 'Associate Advisor · Financial planning student, Utah Valley University',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'thefutureofplanning@gmail.com',
  },
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/your-handle/30min',
  social: {
    linkedin: 'https://www.linkedin.com/in/your-handle',
    x: 'https://x.com/your-handle',
  },
  nav: [
    { label: 'Articles', href: '/articles' },
    { label: 'About', href: '/about' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },
  ],
  footerNav: [
    {
      heading: 'Writing',
      links: [
        { label: 'All articles', href: '/articles' },
        { label: 'Newsletter', href: '/newsletter' },
        { label: 'RSS feed', href: '/feed.xml' },
      ],
    },
    {
      heading: 'Work',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
      ],
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
