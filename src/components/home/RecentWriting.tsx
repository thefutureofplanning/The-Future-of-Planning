import { ArticleCard, FeaturedArticleCard } from '@/components/articles/ArticleCard'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import type { ArticleMeta } from '@/lib/articles'

export function RecentWriting({
  featured,
  recent,
}: {
  featured?: ArticleMeta
  recent: ArticleMeta[]
}) {
  if (!featured && recent.length === 0) return null

  return (
    <Section>
      <SectionHeading label="Recent writing" action={{ label: 'All articles', href: '/articles' }} />

      {featured ? (
        <Reveal>
          <FeaturedArticleCard article={featured} />
        </Reveal>
      ) : null}

      {recent.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((article, index) => (
            <Reveal key={article.slug} delay={index * 90} as="div" className="h-full">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  )
}
