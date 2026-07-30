import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const runtime = 'edge'
const size = { width: 1200, height: 630 }

const PAPER = '#F2F5F4'
const INK = '#0E1A1C'
const GRAPHITE = '#5A6A6B'
const RULE = '#D9E0DE'
const HORIZON = '#0F6E63'

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? siteConfig.tagline
  const category = searchParams.get('category') ?? 'The Future of Planning'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: PAPER,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', width: 44, height: 2, backgroundColor: INK }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: HORIZON,
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 78 ? 60 : 74,
            lineHeight: 1.1,
            letterSpacing: -2,
            color: INK,
            maxWidth: 940,
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', width: '100%', height: 1, backgroundColor: RULE }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 26, color: INK }}>{siteConfig.name}</div>
            <div style={{ fontSize: 24, color: GRAPHITE }}>{siteConfig.author.name}</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
