import { siteConfig } from '@/lib/site'

export function ShareLinks({ title, slug }: { title: string; slug: string }) {
  const url = `${siteConfig.url}/articles/${slug}`
  const links = [
    {
      label: 'Share on LinkedIn',
      short: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: 'Share on X',
      short: 'X',
      href: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: 'Share by email',
      short: 'Email',
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      <span className="tick">Share</span>
      {links.map((link) => (
        <a
          key={link.short}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline font-sans text-sm text-graphite transition-colors duration-300 hover:text-ink"
        >
          <span className="sr-only">{link.label}</span>
          <span aria-hidden="true">{link.short}</span>
        </a>
      ))}
    </div>
  )
}
