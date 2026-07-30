'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'

const reasons = [
  'Speaking at an event',
  'Hiring or a firm conversation',
  'Student or career question',
  'Research or collaboration',
  'Something else',
]

/**
 * Composes a prefilled message in the visitor's own mail client. No server, no
 * queue, no signup that silently fails — the message goes out from their inbox.
 */
export function ContactForm() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState(reasons[0])
  const [message, setMessage] = useState('')

  const subject = `${reason} — from ${name || 'the website'}`
  const body = `${message}\n\n— ${name}`
  const href = `mailto:${siteConfig.author.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  const fieldClass =
    'w-full rounded-card border border-rule bg-paper px-5 py-3.5 font-sans text-[0.9375rem] text-ink placeholder:text-graphite/70 transition-colors duration-300 focus:border-horizon focus:outline-none'

  return (
    <div className="rounded-panel border border-rule bg-surface p-8 sm:p-10">
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="tick">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jordan Lee"
            className={`${fieldClass} mt-3`}
          />
        </div>

        <div>
          <label htmlFor="contact-reason" className="tick">
            What is this about
          </label>
          <select
            id="contact-reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            className={`${fieldClass} mt-3 appearance-none`}
          >
            {reasons.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="tick">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="A sentence or two about what you have in mind, and any dates that matter."
            className={`${fieldClass} mt-3 resize-y`}
          />
        </div>
      </div>

      <a
        href={href}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 font-sans text-[0.9375rem] font-medium text-paper transition duration-300 ease-horizon hover:bg-horizon sm:w-auto"
      >
        Open in your email app
      </a>
      <p className="mt-3 font-sans text-sm text-graphite">
        This opens your mail client with the message ready — nothing is sent from this page.
      </p>
    </div>
  )
}
