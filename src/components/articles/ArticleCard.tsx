import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'
import { cn, formatStamp } from '@/lib/utils'

export function ArticleMetaLine({ article, className }: { article: ArticleMeta; className?: string }) {
  return (
    <p className={cn('flex flex-wrap items-center gap-x-3 gap-y-1 tick', className)}>
      <time dateTime={article.date}>{formatStamp(article.date)}</time>
      <span aria-hidden="true" className="text-rule">
        /
      </span>
      <span>{article.readingMinutes} min</span>
      <span aria-hidden="true" className="text-rule">
        /
      </span>
      <span className="text-horizon">{article.category}</span>
    </p>
  )
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-rule bg-surface p-7 transition duration-500 ease-horizon hover:-translate-y-1 hover:border-horizon/40 hover:shadow-lift">
      <ArticleMetaLine article={article} />
      <h3 className="mt-5 font-display text-2xl leading-snug tracking-tight text-ink">
        <Link href={`/articles/${article.slug}`} className="before:absolute before:inset-0">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 font-sans text-[0.9375rem] leading-relaxed text-graphite">
        {article.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm text-ink transition-colors duration-300 group-hover:text-horizon">
        Read
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-horizon group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </article>
  )
}

export function FeaturedArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="group relative grid gap-8 rounded-panel border border-rule bg-surface p-8 transition duration-500 ease-horizon hover:border-horizon/40 hover:shadow-panel sm:p-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <div>
        <p className="tick text-horizon">Featured</p>
        <h3 className="mt-6 font-display text-display-sm text-ink">
          <Link href={`/articles/${article.slug}`} className="before:absolute before:inset-0">
            {article.title}
          </Link>
        </h3>
      </div>
      <div className="flex flex-col justify-end">
        <p className="font-sans text-base leading-relaxed text-graphite">{article.description}</p>
        <div className="horizon-rule my-7" aria-hidden="true" />
        <div className="flex items-center justify-between gap-4">
          <ArticleMetaLine article={article} />
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-sans text-sm text-ink transition-colors duration-300 group-hover:text-horizon">
            Read
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-horizon group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </article>
  )
}
