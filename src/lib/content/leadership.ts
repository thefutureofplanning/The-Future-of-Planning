export type Role = {
  title: string
  org: string
  period: string
  summary: string
  contributions: string[]
}

export const leadershipIntro =
  'Leadership in this profession is mostly logistics: building rooms where students meet firms, and making sure the people in them leave with something useful. These are the roles where I do that work.'

export const roles: Role[] = [
  {
    title: 'President',
    org: 'Personal Financial Planning Student Association',
    period: 'Current',
    summary:
      'Leading the student association for UVU’s personal financial planning program — programming, firm relationships and member development.',
    contributions: [
      'Built recurring programming that connects members directly to practicing advisors and hiring firms',
      'Created systems for membership, attendance and event follow-up that outlast any one officer term',
      'Coached members through internship applications, conference attendance and the CFP® path',
    ],
  },
  {
    title: 'Chief Marketing Officer',
    org: 'Student-led initiative',
    period: 'Current',
    summary:
      'Owning brand, messaging and recruiting communications for a student organization competing for attention against every other major on campus.',
    contributions: [
      'Developed a consistent visual and verbal identity across events, applications and outreach',
      'Rebuilt recruiting materials around what prospective members ask about, not what we wanted to say',
      'Grew inbound interest from students outside the financial planning program',
    ],
  },
  {
    title: 'Research Team Lead',
    org: 'AdvisorSmart',
    period: 'Current',
    summary:
      'Leading a research team examining how advisory firms attract, hire and develop early-career planners.',
    contributions: [
      'Set research questions and methodology for studies on firm hiring practices',
      'Coordinated a student research team through collection, analysis and write-up',
      'Translated findings into material firms can act on rather than only cite',
    ],
  },
  {
    title: 'Financial Coach',
    org: 'UVU Money Success Center',
    period: 'Current',
    summary:
      'One-on-one coaching for students working through budgeting, debt, credit and early financial decisions.',
    contributions: [
      'Coached students individually on cash flow, debt strategy and financial goal setting',
      'Practiced the discovery and listening skills that planning work actually runs on',
      'Learned where financial education loses people — the source of much of what I write',
    ],
  },
  {
    title: 'FinServ Foundation Fellow',
    org: 'FinServ Foundation',
    period: 'Ongoing',
    summary:
      'A fellowship supporting students entering financial services, alongside multiple academic and industry scholarships.',
    contributions: [
      'Selected for a national fellowship supporting the profession’s incoming talent',
      'Recipient of multiple scholarships across academic and industry programs',
      'Attended national conferences as a student delegate and participant',
    ],
  },
]
