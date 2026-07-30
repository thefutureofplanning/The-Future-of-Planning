import type { Metadata } from 'next'
import { ArticleBrowser } from '@/components/articles/ArticleBrowser'
import { FeaturedArticleCard } from '@/components/articles/ArticleCard'
import { NewsletterCta } from '@/components/home/NewsletterCta'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { getArticleMeta, getCategories, getFeaturedArticle, toMeta } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Essays and field notes on the future of financial planning — the talent pipeline, advisor development, technology and the shape of the next decade.',
  alternates: { canonical: '/articles' },
}

export default function ArticlesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const articles = getArticleMeta()
  const categories = getCategories()
  const featured = getFeaturedArticle()
  const featuredMeta = featured ? toMeta(featured) : undefined
  const requested = searchParams?.category
  const initialCategory = Array.isArray(requested) ? requested[0] : requested

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Essays and field notes on where planning goes next."
        lede="Long-form thinking about the profession, written from inside it. New pieces land in the newsletter first."
      />

      <Container className="pb-16 sm:pb-20">
        {featuredMeta ? (
          <Reveal>
            <FeaturedArticleCard article={featuredMeta} />
          </Reveal>
        ) : null}

        <div className="mt-16">
          <ArticleBrowser
            articles={articles}
            categories={categories}
            initialCategory={initialCategory}
          />
        </div>
      </Container>

      <NewsletterCta />
    </>
  )
}
