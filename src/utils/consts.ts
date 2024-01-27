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

export const SOCIAL_MEDIA = {
  github: 'https://github.com/kamilkaminski01',
  linkedin: 'https://www.linkedin.com/in/kamilkaminski01/',
  email: 'mailto:kamilkaminski39@gmail.com'
}

export const EXPERIENCE = [
  {
    timeFrame: 'Aug 2023 — Present',
    link: EXTERNAL_SITES.netstation,
    workType: 'Full time',
    title: 'Software Developer · Netstation',
    desc: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Super Express, Eska, Murator and more.',
    techStack: ['Python', 'Django', 'Flask', 'JavaScript', 'HTML/SCSS', 'Docker', 'K8s']
  },
  {
    timeFrame: 'Sept — Oct 2022',
    link: EXTERNAL_SITES.bluerider,
    title: 'Python Developer · BlueRider.Software',
    workType: 'Intern',
    desc: 'Worked on an MVP of a recommendations platform for a start-up. Additionally, gained hands-on experience with containerization using Docker and deployment on AWS infrastructure.',
    techStack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    timeFrame: 'July — Aug 2022',
    link: EXTERNAL_SITES.bluerider,
    title: 'Python Developer · BlueRider.Software',
    workType: 'Practices',
    desc: 'Successfully developed and shipped a web scraping project in order to extract relevant data for analysis and decision-making purposes.',
    techStack: ['Python', 'BeautifulSoup4', 'Pandas', 'MySQL']
  }
]

export const MAX_WIDTH = {
  desktop: 1024
}
