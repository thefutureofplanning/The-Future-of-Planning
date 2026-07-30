import { NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Newsletter signup. Buttondown is wired by default; swap the fetch below for
 * ConvertKit, Beehiiv or Mailchimp without touching the form component.
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

  const apiKey = process.env.BUTTONDOWN_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          'The newsletter is not connected yet. Add BUTTONDOWN_API_KEY to the environment to start collecting signups.',
      },
      { status: 501 },
    )
  }

  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email, tags: ['website'] }),
    })

    if (response.status === 409 || response.status === 400) {
      // Buttondown returns 400 for an address that already exists.
      return NextResponse.json({ message: 'You are already on the list. Nothing more to do.' })
    }

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
