export type Project = {
  title: string
  status: 'Active' | 'Ongoing' | 'In progress'
  summary: string
  detail: string
  tags: string[]
  href?: string
}

export const projectsIntro =
  'Writing is one output. These are the others — research, tools and organizations built to move the same question forward.'

export const projects: Project[] = [
  {
    title: 'Next-Generation Hiring Research',
    status: 'Active',
    summary:
      'A research effort studying how advisory firms recruit, hire and develop early-career planners.',
    detail:
      'Leading a student research team examining what firms actually do at each stage of the hiring funnel, and where candidates drop out of it. The goal is material firm owners can act on in a quarter, not a report they cite in a panel.',
    tags: ['Research', 'Talent', 'Firms'],
  },
  {
    title: 'The Student Chapter Playbook',
    status: 'In progress',
    summary:
      'An open guide to building a financial planning student organization firms want to recruit from.',
    detail:
      'Everything we have built at UVU, written down: programming calendars, firm outreach templates, membership systems, conference preparation and the operational pieces that usually disappear when officers graduate.',
    tags: ['Education', 'Operations'],
  },
  {
    title: 'Planning Career Field Notes',
    status: 'Ongoing',
    summary:
      'A running record of conversations with advisors, firm owners and students across the profession.',
    detail:
      'Structured notes from conferences, interviews and coaching sessions. Most articles on this site start here — as a pattern that showed up in three unrelated conversations before it looked like an idea.',
    tags: ['Research', 'Writing'],
  },
  {
    title: 'Money Success Coaching Curriculum',
    status: 'Ongoing',
    summary:
      'Practical coaching material for students making their first significant financial decisions.',
    detail:
      'Developed through one-on-one coaching at the UVU Money Success Center — the frameworks that hold up when someone is sitting across the table with a real problem and twenty minutes.',
    tags: ['Education', 'Coaching'],
  },
]
