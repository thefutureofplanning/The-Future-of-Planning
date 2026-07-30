export type ResourceGroup = {
  heading: string
  description: string
  items: { title: string; description: string; href?: string }[]
}

export const resourcesIntro =
  'The list I wish someone had handed me at the start. No affiliate links, no rankings — just the things that were genuinely useful, grouped by what you are trying to do.'

export const resourceGroups: ResourceGroup[] = [
  {
    heading: 'Starting out',
    description: 'For students deciding whether this profession is the one.',
    items: [
      {
        title: 'CFP Board — Career Center',
        description:
          'The clearest explanation of the certification path, coursework requirements and experience hours.',
        href: 'https://www.cfp.net/',
      },
      {
        title: 'Financial Planning Association — Student membership',
        description:
          'Chapter meetings are the fastest way to meet practicing advisors in your own city.',
        href: 'https://www.financialplanningassociation.org/',
      },
      {
        title: 'NAPFA and XY Planning Network job boards',
        description:
          'Where fee-only and next-generation-friendly firms post roles that rarely reach campus.',
      },
    ],
  },
  {
    heading: 'Getting hired',
    description: 'For the stretch between coursework and a first real seat.',
    items: [
      {
        title: 'A one-page planning résumé',
        description:
          'Coursework, tools you have touched, client-adjacent work, and what you want to learn. Firms read for trajectory, not titles.',
      },
      {
        title: 'The informational interview list',
        description:
          'Fifteen advisors, one honest question each. This produces more offers than any application portal.',
      },
      {
        title: 'Conference scholarships and student tracks',
        description:
          'Most national conferences fund student attendance. Ask the program chair directly; the form is often not the fastest path.',
      },
    ],
  },
  {
    heading: 'For firm owners',
    description: 'For teams building an early-career track that holds.',
    items: [
      {
        title: 'The first-year scorecard',
        description:
          'Define what competent looks like at ninety days, six months and one year — before the hire starts, not during their review.',
      },
      {
        title: 'A real internship, not a shadow',
        description:
          'Interns who own a deliverable convert. Interns who observe meetings for ten weeks send a thank-you note and leave.',
      },
      {
        title: 'Ownership conversations, early',
        description:
          'The associates most likely to stay are the ones who can describe a path to equity in one sentence.',
      },
    ],
  },
  {
    heading: 'Reading and listening',
    description: 'What consistently sharpens how I think about the profession.',
    items: [
      {
        title: 'Long-form profession commentary',
        description:
          'Independent newsletters and columns covering practice management, fee models and succession with actual specificity.',
      },
      {
        title: 'Advisor podcasts with real numbers',
        description:
          'Episodes where firm owners describe their economics honestly are worth ten conference panels.',
      },
      {
        title: 'Behavioral finance foundations',
        description:
          'The research base under discovery meetings, goal setting and every conversation about risk.',
      },
    ],
  },
]
