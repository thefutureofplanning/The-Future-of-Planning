import type { MetadataRoute } from 'next'
import { getArticleMeta } from '@/lib/articles'
import { siteConfig } from '@/lib/site'

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/articles', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/speaking', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/newsletter', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/schedule', priority: 0.7, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...getArticleMeta().map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: new Date(`${article.date}T12:00:00Z`),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
