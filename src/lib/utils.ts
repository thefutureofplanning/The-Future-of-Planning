import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge conditional class names without Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** "July 14, 2026" — used in visible prose and datetime-adjacent contexts. */
export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

/** "2026.07.14" — the ledger-style stamp used on cards and article meta. */
export function formatStamp(iso: string) {
  return iso.replaceAll('-', '.')
}

export function absoluteUrl(path: string, base: string) {
  return new URL(path, base).toString()
}
