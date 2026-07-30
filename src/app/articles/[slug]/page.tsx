import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArticleCard } from '@/components/articles/ArticleCard'
import { ReadingProgress } from '@/components/articles/ReadingProgress'
import { ShareLinks } from '@/components/articles/ShareLinks'
import { TableOfContents } from '@/components/articles/TableOfContents'
import { MdxContent } from '@/components/mdx/MdxContent'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'
import { siteConfig } from '@/lib/site'
import { formatDate, formatStamp } from '@/lib/utils'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Article not found' }

  const url = `${siteConfig.url}/articles/${article.slug}`
  const ogImage = `/og?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category)}`

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [siteConfig.author.name],
      tags: article.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [ogImage],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug)
  const url = `${siteConfig.url}/articles/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    articleSection: article.category,
    keywords: article.tags.join(', '),
    wordCount: article.content.split(/\s+/).length,
    inLanguage: 'en-US',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  }

  return (
    <>
      <ReadingProgress />

      <header className="pb-12 pt-14 sm:pt-20">
        <Container>
          <Link
            href="/articles"
            className="group inline-flex items-center gap-1.5 font-sans text-sm text-graphite transition-colors duration-300 hover:text-horizon"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-horizon group-hover:-translate-x-0.5"
            >
              ←
            </span>
            All articles
          </Link>

          <p className="mt-10 tick text-horizon">{article.category}</p>
          <h1 className="mt-6 max-w-4xl font-display text-display-md text-ink">{article.title}</h1>
          {article.description ? (
            <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-graphite">
              {article.description}
            </p>
          ) : null}

          <div className="horizon-rule mt-12" aria-hidden="true" />
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <p className="flex flex-wrap items-center gap-x-3 tick">
              <span>{siteConfig.author.name}</span>
              <span aria-hidden="true" className="text-rule">
                /
              </span>
              <time dateTime={article.date}>{formatStamp(article.date)}</time>
              <span aria-hidden="true" className="text-rule">
                /
              </span>
              <span>{article.readingLabel}</span>
            </p>
            <ShareLinks title={article.title} slug={article.slug} />
          </div>
        </Container>
      </header>

      <Container>
        <div className="grid gap-14 pb-20 lg:grid-cols-[minmax(0,1fr)_14rem] xl:gap-24">
          <article className="prose max-w-prose text-ink">
            <MdxContent source={article.content} />
          </article>

          <aside className="hidden lg:block">
            <TableOfContents headings={article.headings} />
          </aside>
        </div>

        <div className="horizon-rule" aria-hidden="true" />
        <div className="flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="font-sans text-sm text-graphite">
            Published {formatDate(article.date)} by {siteConfig.author.name}
          </p>
          <ShareLinks title={article.title} slug={article.slug} />
        </div>

        <Reveal>
          <div className="rounded-panel border border-rule bg-surface p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="tick text-horizon">Newsletter</p>
                <h2 className="mt-5 font-display text-2xl leading-snug tracking-tight text-ink">
                  Get the next piece before anyone else.
                </h2>
              </div>
              <div className="flex items-center">
                <NewsletterForm id="article-newsletter" />
              </div>
            </div>
          </div>
        </Reveal>

        {related.length > 0 ? (
          <section aria-labelledby="related-heading" className="py-16 sm:py-24">
            <div className="horizon-rule" aria-hidden="true" />
            <div className="flex items-baseline gap-3 pt-4">
              <span className="mt-1 h-3 w-px shrink-0 bg-horizon" aria-hidden="true" />
              <h2 id="related-heading" className="tick">
                Keep reading
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 80} className="h-full">
                  <ArticleCard article={item} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
