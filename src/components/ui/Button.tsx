import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-[0.9375rem] font-medium leading-none transition duration-300 ease-horizon disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink px-6 py-3.5 text-paper hover:bg-horizon hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border border-rule bg-surface px-6 py-3.5 text-ink hover:border-horizon hover:text-horizon hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'px-2 py-1 text-ink hover:text-horizon',
}

type ButtonProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
  external = false,
}: ButtonProps & { href: string; external?: boolean }) {
  const classes = cn(base, variants[variant], className)

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
