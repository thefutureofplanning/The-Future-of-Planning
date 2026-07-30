import { cn } from '@/lib/utils'

export function Container({
  className,
  children,
  size = 'default',
}: {
  className?: string
  children: React.ReactNode
  size?: 'default' | 'narrow'
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8',
        size === 'narrow' ? 'max-w-3xl' : 'max-w-shell',
        className,
      )}
    >
      {children}
    </div>
  )
}
