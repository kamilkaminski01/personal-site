export const PATHS = {
  home: '/',
  about: '#about',
  experience: '#experience',
  projects: '#projects'
}

export const EXTERNAL_SITES = {
  netstation: 'https://netstation.pl/',
  leadin: 'https://www.leadin.pl/',
  bluerider: 'https://bluerider.software/',
  murator: 'https://projekty.muratordom.pl/',
  grupazpr: 'https://www.grupazpr.pl/'
}

export const EXPERIENCE = [
  {
    timeFrame: 'Aug 2023 — Present',
    link: EXTERNAL_SITES.netstation,
    workType: 'Full time',
    title: 'Software Developer · Netstation',
    desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Super Express, Eska, Murator and more.',
    techStack: ['Python', 'Django', 'Flask', 'JavaScript', 'Docker', 'K8s']
  },
  {
    timeFrame: 'Sept — Oct 2022',
    link: EXTERNAL_SITES.bluerider,
    title: 'Python Developer · BlueRider.Software',
    workType: 'Intern',
    desc: 'Worked on an MVP of a recommendations platform for a start-up. Additionally, gained hands-on experience with containerization using Docker and deployment on AWS infrastructure.',
    techStack: ['Python', 'Django', 'Django Rest Framework', 'PostgreSQL', 'Docker', 'AWS']
  }
]

export const MAX_WIDTH = {
  desktop: 1024
}
