/**
 * Single source of truth for biographical content. Every page reads from here,
 * so updating a role or adding a credential is a one-line change.
 */

export const mission = {
  statement:
    'Financial planning is in the middle of the largest handoff in its history. I write to make that handoff go well — for the advisors leaving, the ones arriving, and the clients who depend on both.',
  body: [
    'The profession is short on planners and long on demand. Most of what has been written about that gap is written by people looking at it from the far side of a career. I am looking at it from the beginning of one.',
    'The Future of Planning is where I think in public: what draws students in, what pushes them out, what technology changes and what it never will, and how firms build the kind of place a twenty-two-year-old wants to spend a decade.',
    'Nothing here is a pitch. It is a working record of a profession in transition, kept by someone with a very long stake in how it turns out.',
  ],
}

export const bio = {
  short:
    'Jenna Smith is a financial planning student at Utah Valley University and an associate advisor working full time in wealth management. She writes and speaks about how the profession recruits, develops and keeps its next generation.',
  long: [
    'I am nineteen, working full time in wealth management while carrying a full course load in personal financial planning at Utah Valley University. That combination is unusual, and it is the reason this publication exists: I get to watch the profession from the client meeting and the classroom on the same day.',
    'Most mornings look like real planning work — cash flow, tax questions, portfolio reviews, meeting prep. Most afternoons look like coursework, a student association agenda, or a coaching appointment at the Money Success Center, where I sit with students working through their own money decisions.',
    'The gap between those two rooms is what I write about. The profession talks constantly about attracting young talent; the students it wants to attract are rarely the ones describing what would actually work. I am trying to close that distance with clear writing, honest observation and a lot of questions asked of people further along than me.',
  ],
  focus: [
    'The talent pipeline into financial planning',
    'How firms develop advisors in their first five years',
    'Technology, advice delivery and what stays human',
    'The economics and ownership of the next-generation firm',
  ],
}

/**
 * Placeholder — replace with Jenna's own "why" narrative when she sends it.
 * Renders in the About page's "Why" section in place of the old timeline.
 */
export const why = {
  paragraphs: [
    'Add your "why" here — what got you into financial planning, and why you write about it publicly. Send me the text and I\'ll drop it in.',
  ],
}

export const credentials = [
  { label: 'Program', value: 'Personal Financial Planning, Utah Valley University' },
  { label: 'GPA', value: '3.95' },
  { label: 'Track', value: 'CFP® Board registered curriculum' },
  { label: 'Based', value: 'Utah · working nationally' },
]
