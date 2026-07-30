import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="tick text-horizon">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-display-md text-ink">
        This page is not on the horizon.
      </h1>
      <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-graphite">
        The link may be out of date, or the piece may have moved. The writing index is the fastest
        way back.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/articles">Browse articles</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Back home
        </ButtonLink>
      </div>
    </Container>
  )
}
