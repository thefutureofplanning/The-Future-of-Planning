import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import GithubSlugger from 'github-slugger'

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

export type Heading = {
  id: string
  text: string
  level: 2 | 3
}

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  featured: boolean
  draft: boolean
  readingMinutes: number
  readingLabel: string
}

export type Article = ArticleMeta & {
  content: string
  headings: Heading[]
}

type Frontmatter = {
  title?: string
  description?: string
  date?: string
  category?: string
  tags?: string[]
  featured?: boolean
  draft?: boolean
}

function readArticleFile(fileName: string): Article {
  const slug = fileName.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)
  const fm = data as Frontmatter
  const stats = readingTime(content)

  if (!fm.title || !fm.date) {
    throw new Error(`Article "${fileName}" is missing a required "title" or "date" field.`)
  }

  return {
    slug,
    title: fm.title,
    description: fm.description ?? '',
    date: fm.date,
    category: fm.category ?? 'Essays',
    tags: fm.tags ?? [],
    featured: fm.featured ?? false,
    draft: fm.draft ?? false,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    readingLabel: `${Math.max(1, Math.round(stats.minutes))} min read`,
    content,
    headings: extractHeadings(content),
  }
}

/**
 * Pulls h2/h3 headings for the table of contents. Slugs are generated with the
 * same library rehype-slug uses, so anchors always match the rendered markup.
 */
export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger()
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, '')
  const headings: Heading[] = []

  for (const line of withoutCode.split('\n')) {
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line)
    if (!match) continue
    const text = match[2].replace(/[*_`]/g, '').trim()
    headings.push({
      id: slugger.slug(text),
      text,
      level: match[1].length === 2 ? 2 : 3,
    })
  }

  return headings
}

/** Drops body content so an article can cross the server/client boundary. */
export function toMeta(article: Article): ArticleMeta {
  const { content, headings, ...meta } = article
  return meta
}

function loadAll(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => /\.mdx?$/.test(file) && !file.startsWith('_'))
    .map(readArticleFile)
    .filter((article) => process.env.NODE_ENV === 'development' || !article.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllArticles(): Article[] {
  return loadAll()
}

export function getArticleMeta(): ArticleMeta[] {
  return loadAll().map(toMeta)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return loadAll().find((article) => article.slug === slug)
}

export function getFeaturedArticle(): Article | undefined {
  const all = loadAll()
  return all.find((article) => article.featured) ?? all[0]
}

export function getCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const article of loadAll()) {
    counts.set(article.category, (counts.get(article.category) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}

/** Scores by shared category first, then overlapping tags, then recency. */
export function getRelatedArticles(slug: string, limit = 3): ArticleMeta[] {
  const all = loadAll()
  const current = all.find((article) => article.slug === slug)
  if (!current) return []

  return all
    .filter((article) => article.slug !== slug)
    .map((article) => {
      const sharedTags = article.tags.filter((tag) => current.tags.includes(tag)).length
      const score = (article.category === current.category ? 3 : 0) + sharedTags
      return { article, score }
    })
    .sort((a, b) => b.score - a.score || (a.article.date < b.article.date ? 1 : -1))
    .slice(0, limit)
    .map(({ article }) => toMeta(article))
}
