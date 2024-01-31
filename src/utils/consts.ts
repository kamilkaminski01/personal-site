import MonitoringSystem from 'assets/images/monitoring-system.png'
import JobBoard from 'assets/images/job-board.png'

export const PATHS = {
  home: '/',
  about: '#about',
  experience: '#experience',
  projects: '#projects',
  archive: '/archive'
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

export const PROJECTS = [
  {
    api: 'https://api.github.com/repos/kamilkaminski01/monitoring-system',
    img: MonitoringSystem,
    link: 'https://monitoring-system.app/',
    repo: 'https://github.com/kamilkaminski01/monitoring-system',
    title: 'Monitoring System',
    desc: 'Web app that allows users to interact within a chosen game. Authenticated users can observe the taken actions of users in a game and communicate with them through a chat in real-time and more.',
    techStack: ['Django Channels', 'Redis', 'React', 'SASS', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    api: 'https://api.github.com/repos/kamilkaminski01/job-board',
    img: JobBoard,
    link: 'https://github.com/kamilkaminski01/job-board',
    repo: 'https://github.com/kamilkaminski01/job-board',
    title: 'Job Board',
    desc: 'A recruitment platform aimed at the IT industry. It allows users to find a job and recruiters to advertise their job positions. Login with social authentication, apply and receive an email about successfully applying.',
    techStack: [
      'Django REST Framework',
      'React',
      'TypeScript',
      'SASS',
      'AWS SES',
      'GitHub OAuth',
      'Google OAuth 2.0'
    ]
  }
]

export const PROJECTS_ARCHIVE = [
  {
    year: 2024,
    project: 'Personal Website',
    madeAt: '',
    builtWith: ['React', 'TypeScript', 'SASS', 'Vercel'],
    link: 'https://kamilkaminski.pl/',
    shorthandLink: 'kamilkaminski.pl'
  },
  {
    year: 2024,
    project: 'Murator Projekty - House Design Agency',
    madeAt: 'Netstation',
    builtWith: ['Python', 'Django', 'JavaScript', 'SASS', 'Docker'],
    link: 'https://projekty.muratordom.pl/',
    shorthandLink: 'projekty.muratordom.pl'
  },
  {
    year: 2023,
    project: 'IT Recruitment Platform',
    madeAt: '',
    builtWith: [
      'Django REST Framework',
      'React',
      'TypeScript',
      'Vite',
      'SASS',
      'AWS SES',
      'Google OAuth 2',
      'GitHub OAuth'
    ],
    link: 'https://github.com/kamilkaminski01/job-board',
    shorthandLink: ''
  },
  {
    year: 2023,
    project: 'Super Express & Eska Automation Tasks',
    madeAt: 'Netstation',
    builtWith: ['Python', 'Flask', 'MySQL', 'Docker', 'K8s'],
    link: 'https://www.grupazpr.pl/nasze-marki',
    shorthandLink: 'grupazpr.pl/nasze-marki'
  },
  {
    year: 2023,
    project: 'Monitoring System',
    madeAt: '',
    builtWith: [
      'Django REST Framework',
      'Django Channels',
      'Redis',
      'React',
      'SASS',
      'PostgreSQL',
      'Docker',
      'AWS'
    ],
    link: 'https://monitoring-system.app/',
    shorthandLink: 'monitoring-system.app'
  },
  {
    year: 2023,
    project: 'Development Forum',
    madeAt: '',
    builtWith: ['Django', 'HTML/CSS', 'Docker'],
    link: 'https://github.com/kamilkaminski01/development-forum',
    shorthandLink: ''
  },
  {
    year: 2022,
    project: 'Recommendations Platform',
    madeAt: '',
    builtWith: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/kamilkaminski01/recommendations-system',
    shorthandLink: ''
  },
  {
    year: 2022,
    project: 'LeadIn',
    madeAt: 'BlueRider.Software',
    builtWith: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'AWS'],
    link: 'https://www.leadin.pl/',
    shorthandLink: 'leadin.pl'
  },
  {
    year: 2022,
    project: 'Web Scraper/Crawler',
    madeAt: 'BlueRider.Software',
    builtWith: ['Python', 'BeatifulSoup4', 'Pandas', 'MySQL'],
    link: 'https://github.com/kamilkaminski01/Crawler',
    shorthandLink: ''
  }
]

export const MAX_WIDTH = {
  desktop: 1024,
  phone: 640
}
