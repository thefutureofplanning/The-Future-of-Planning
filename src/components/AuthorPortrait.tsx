import Image from 'next/image'

export function AuthorPortrait() {
  return (
    <div className="mx-auto w-48 sm:w-56">
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-paper">
        <Image
          src="/images/jenna-headshot.jpg"
          alt="Jenna Smith"
          fill
          sizes="(min-width: 640px) 14rem, 12rem"
          className="object-cover"
          style={{ objectPosition: 'center 15%' }}
        />
      </div>
      <p className="mt-4 text-center font-display text-lg text-ink">Jenna Smith, AFC®</p>
      <p className="mt-1 text-center font-sans text-sm text-graphite">
        Registered Investment Advisor, CFP Candidate
      </p>
    </div>
  )
}
