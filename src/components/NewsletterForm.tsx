'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterForm({ className, id = 'newsletter' }: { className?: string; id?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await response.json()) as { message?: string }

      if (!response.ok) {
        setStatus('error')
        setMessage(data.message ?? 'That did not go through. Try again in a moment.')
        return
      }

      setStatus('success')
      setMessage(data.message ?? 'You are subscribed. The next issue will land in your inbox.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('The network dropped the request. Try again in a moment.')
    }
  }

  return (
    <div className={cn('w-full', className)}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@firm.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-describedby={`${id}-status`}
            className="w-full rounded-full border border-rule bg-paper px-6 py-3.5 font-sans text-[0.9375rem] text-ink placeholder:text-graphite/70 transition-colors duration-300 focus:border-horizon focus:outline-none focus-visible:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 font-sans text-[0.9375rem] font-medium leading-none text-paper transition duration-300 ease-horizon hover:bg-horizon disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      <p
        id={`${id}-status`}
        aria-live="polite"
        className={cn(
          'mt-3 min-h-[1.25rem] font-sans text-sm',
          status === 'error' ? 'text-ink' : 'text-graphite',
        )}
      >
        {message || 'One issue at a time. Unsubscribe whenever.'}
      </p>
    </div>
  )
}
