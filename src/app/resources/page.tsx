import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A curated list of resources — coming soon.',
  alternates: { canonical: '/resources' },
}

export default function ResourcesPage() {
  return (
    <PageHeader
      eyebrow="Resources"
      title="More to come."
      lede="This page is still being put together — exciting things on the way."
    />
  )
}
