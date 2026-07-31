export type SpeakingTopic = {
  title: string
  audience: string
  description: string
}

export type Appearance = {
  event: string
  detail: string
  year: string
  upcoming?: boolean
}

export const speakingIntro =
  'How firms recruit them, what makes them stay, and what they are looking for when it comes to succession planning. Sessions are built for the room: a student chapter and a room of firm owners need different conversations.'

export const speakingTopics: SpeakingTopic[] = [
  {
    title: 'Helping firms win the talent race',
    audience: 'Firm owners, hiring managers, recruiters',
    description:
      'What today’s emerging advisors are looking for and how firms can recruit, develop, and retain exceptional people.',
  },
  {
    title: 'The first five years set the foundation',
    audience: 'Firm leaders, teams building an associate track',
    description:
      'The mentorship, responsibility, and growth opportunities that turn new hires into future leaders.',
  },
  {
    title: 'From student to advisor',
    audience: 'University programs, student chapters, career centers',
    description:
      'A practical map of the path into the profession: internships, credentials, conferences and the decisions that compound early.',
  },
  {
    title: 'Building a student organization that firms notice',
    audience: 'Student leaders, faculty advisors, program directors',
    description:
      'What we have built at UVU — programming, industry relationships and the recruiting pipeline a chapter can create on a student budget.',
  },
]

/**
 * Update as engagements are confirmed. Set `upcoming: true` to surface an entry
 * at the top of the speaking page with an "upcoming" marker.
 */
export const appearances: Appearance[] = [
  {
    event: "Bob Veres Insider's Forum",
    detail: 'Session on recruiting and developing next-generation planners',
    year: '2026',
    upcoming: true,
  },
  {
    event: 'University and student chapter sessions',
    detail: 'Career paths, credentials and getting hired before graduation',
    year: '2025 — present',
  },
  {
    event: 'National financial planning conferences',
    detail: 'Panels and roundtables on the profession’s talent pipeline',
    year: '2024 — present',
  },
]

export const speakingLogistics = [
  { label: 'Formats', value: 'Keynote, breakout session, panel, workshop, podcast' },
  { label: 'Audiences', value: 'Students, associate advisors, firm owners, conference programs' },
  { label: 'Lead time', value: 'Four weeks preferred; shorter timelines are worth asking about' },
  { label: 'Travel', value: 'Available nationally; remote sessions welcome' },
]
