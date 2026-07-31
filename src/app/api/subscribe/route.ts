import { NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Newsletter signup, wired to Beehiiv. Swap the fetch below for ConvertKit,
 * Buttondown or Mailchimp without touching the form component.
 */
export async function POST(request: Request) {
  let email = ''

  try {
    const body = (await request.json()) as { email?: string }
    email = (body.email ?? '').trim().toLowerCase()
  } catch {
    return NextResponse.json({ message: 'Send a JSON body with an email address.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: 'That email address does not look right.' }, { status: 400 })
  }

  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    return NextResponse.json(
      {
        message:
          'The newsletter is not connected yet. Add BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID to the environment to start collecting signups.',
      },
      { status: 501 },
    )
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'website',
        }),
      },
    )

    if (!response.ok) {
      return NextResponse.json(
        { message: 'The newsletter provider rejected that. Try again shortly.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ message: 'Subscribed. The next issue will land in your inbox.' })
  } catch {
    return NextResponse.json(
      { message: 'Could not reach the newsletter provider. Try again shortly.' },
      { status: 502 },
    )
  }
}
