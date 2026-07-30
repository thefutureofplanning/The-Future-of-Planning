'use client'

import { useMemo, useState } from 'react'
import type { ArticleMeta } from '@/lib/articles'
import { ArticleCard } from './ArticleCard'
import { cn } from '@/lib/utils'

const ALL = 'All'

export function ArticleBrowser({
  articles,
  categories,
  initialCategory,
}: {
  articles: ArticleMeta[]
  categories: { name: string; count: number }[]
  initialCategory?: string
}) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(
    initialCategory && categories.some((item) => item.name === initialCategory)
      ? initialCategory
      : ALL,
  )

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return articles.filter((article) => {
      const matchesCategory = category === ALL || article.category === category
      if (!matchesCategory) return false
      if (!needle) return true

      const haystack = [article.title, article.description, article.category, ...article.tags]
        .join(' ')
        .toLowerCase()

      return haystack.includes(needle)
    })
  }, [articles, category, query])

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="article-search" className="sr-only">
            Search articles
          </label>
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search writing"
            className="w-full rounded-full border border-rule bg-surface py-3 pl-11 pr-5 font-sans text-[0.9375rem] text-ink placeholder:text-graphite/70 transition-colors duration-300 focus:border-horizon focus:outline-none"
          />
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-graphite"
          >
            <circle cx="7" cy="7" r="4.75" stroke="currentColor" strokeWidth="1.3" />
            <path d="M10.6 10.6L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="-mx-1 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {[{ name: ALL, count: articles.length }, ...categories].map((item) => {
            const active = category === item.name
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setCategory(item.name)}
                aria-pressed={active}
                className={cn(
                  'rounded-full border px-4 py-2 font-sans text-sm transition duration-300 ease-horizon',
                  active
                    ? 'border-ink bg-ink text-paper'
                    : 'border-rule bg-surface text-graphite hover:border-horizon hover:text-horizon',
                )}
              >
                {item.name}
                <span className={cn('ml-2 font-mono text-xs', active ? 'text-paper/60' : 'text-graphite/60')}>
                  {item.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <p className="mt-8 tick" aria-live="polite">
        {results.length} {results.length === 1 ? 'article' : 'articles'}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-card border border-dashed border-rule bg-surface p-12 text-center">
          <p className="font-display text-xl text-ink">Nothing matches that yet.</p>
          <p className="mt-2 font-sans text-[0.9375rem] text-graphite">
            Try a broader term, or clear the filters to see everything.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setCategory(ALL)
            }}
            className="mt-6 rounded-full border border-rule px-5 py-2.5 font-sans text-sm text-ink transition-colors duration-300 hover:border-horizon hover:text-horizon"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
