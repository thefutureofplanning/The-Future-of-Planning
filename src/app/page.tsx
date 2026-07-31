import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AboutAuthor } from '@/components/home/AboutAuthor'
import { RecentWriting } from '@/components/home/RecentWriting'
import { Topics } from '@/components/home/Topics'
import { Mission } from '@/components/home/Mission'
import { SpeakingHighlights } from '@/components/home/SpeakingHighlights'
import { NewsletterCta } from '@/components/home/NewsletterCta'
import { getArticleMeta, getFeaturedArticle, toMeta } from '@/lib/articles'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.author.name}`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const featured = getFeaturedArticle()
  const featuredMeta = featured ? toMeta(featured) : undefined
  const recent = getArticleMeta()
    .filter((article) => article.slug !== featuredMeta?.slug)
    .slice(0, 3)

  return (
    <>
      <Hero />
      <AboutAuthor />
      <RecentWriting featured={featuredMeta} recent={recent} />
      <Topics />
      <Mission />
      <SpeakingHighlights />
      <NewsletterCta />
    </>
  )
}
