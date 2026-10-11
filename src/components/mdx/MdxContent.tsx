import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { ButtonLink } from '@/components/ui/Button'
import { siteConfig } from '@/lib/site'

function Anchor({ href = '', children }: { href?: string; children?: React.ReactNode }) {
  const isInternal = href.startsWith('/') || href.startsWith('#')

  if (isInternal) {
    return <Link href={href}>{children}</Link>
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  )
}

/** A quiet aside for context that would otherwise interrupt the argument. */
function Note({ children, label = 'Note' }: { children?: React.ReactNode; label?: string }) {
  return (
    <aside className="not-prose my-10 rounded-card border border-rule bg-surface p-6">
      <p className="tick text-horizon">{label}</p>
      <div className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-graphite [&>p+p]:mt-3">
        {children}
      </div>
    </aside>
  )
}

/** A single line lifted out of the flow — used sparingly, once per piece at most. */
function PullQuote({ children }: { children?: React.ReactNode }) {
  return (
    <p className="not-prose my-14 border-l-2 border-horizon pl-6 font-display text-2xl italic leading-snug tracking-tight text-ink sm:text-3xl">
      {children}
    </p>
  )
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="not-prose my-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full rounded-card border border-rule" loading="lazy" />
      {caption ? (
        <figcaption className="mt-3 font-sans text-sm text-graphite">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

/** Closing call to action: follow on LinkedIn or join the newsletter. */
function FollowButtons() {
  return (
    <div className="article-cta not-prose my-10 flex flex-col gap-3 sm:flex-row">
      <ButtonLink href={siteConfig.social.linkedin} external>
        Follow on LinkedIn
      </ButtonLink>
      <ButtonLink href="/newsletter" variant="secondary">
        Subscribe to the newsletter
      </ButtonLink>
    </div>
  )
}

const mdxComponents = {
  a: Anchor,
  Note,
  PullQuote,
  Figure,
  FollowButtons,
}

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['no-underline'] } }],
          ],
        },
      }}
    />
  )
}
