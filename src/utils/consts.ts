import MonitoringSystem from 'assets/images/monitoring-system.png'
import JobBoard from 'assets/images/job-board.png'
import School from 'assets/images/school.png'
import EventsManager from 'assets/images/events-manager.png'
import { IProject } from 'models/project'

export const PATHS = {
  home: '/',
  archive: '/archive',
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  education: 'education'
}

export const EXTERNAL_SITES = {
  netstation: 'https://netstation.pl/',
  leadin: 'https://www.leadin.pl/',
  bluerider: 'https://bluerider.software/',
  murator: 'https://projekty.muratordom.pl/',
  grupazpr: 'https://www.grupazpr.pl/',
  inpost: 'https://inpost.pl/'
}

export const SOCIAL_MEDIA = {
  github: 'https://github.com/kamilkaminski01',
  linkedin: 'https://www.linkedin.com/in/kamilkaminski01/',
  email: 'mailto:kamilkaminski39@gmail.com',
  upwork: 'https://www.upwork.com/freelancers/~01a622b7d0a4eb7049',
  useme: 'https://useme.com/en/roles/contractor/kamil,401463/'
}

export const EXPERIENCE = [
  {
    timeFrame: 'Jul 2024 — Present',
    link: EXTERNAL_SITES.inpost,
    workType: 'Full time',
    title: 'Software Engineer · InPost',
    desc: "Building and maintaining tools for InPost employees including ETL's, automating data processing and web applications that enhance operational efficiency.",
    techStack: ['Python', 'Flask', 'FastAPI', 'JavaScript', 'React', 'Celery', 'Apache Airflow']
  },
  {
    timeFrame: 'Aug 2023 — Jun 2024',
    link: EXTERNAL_SITES.netstation,
    workType: 'Full time',
    title: 'Python Developer · Netstation',
    desc: 'Delivered high-quality, robust production code for a diverse array of projects including clients like Super Express, Eska, Murator and more.',
    tags: [
      {
        title: 'Super Express',
        link: 'https://www.se.pl/'
      },
      {
        title: 'Eska',
        link: 'https://www.eska.pl/'
      },
      {
        title: 'Murator',
        link: 'https://projekty.muratordom.pl/'
      }
    ],
    techStack: ['Python', 'Django', 'Flask', 'JavaScript', 'HTML/SCSS', 'Docker', 'K8s']
  },
  {
    timeFrame: 'Sept — Oct 2022',
    link: EXTERNAL_SITES.bluerider,
    title: 'Python Developer · BlueRider.Software',
    workType: 'Internship',
    desc: 'Worked on an MVP of a recommendations platform for a start-up. Additionally, gained hands-on experience with containerization using Docker and deployment on AWS infrastructure.',
    techStack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    timeFrame: 'July — Aug 2022',
    link: EXTERNAL_SITES.bluerider,
    title: 'Python Developer · BlueRider.Software',
    workType: 'Apprenticeship',
    desc: 'Successfully developed and shipped a web scraping project in order to extract relevant data for analysis and decision-making purposes.',
    techStack: ['Python', 'BeautifulSoup4', 'Pandas', 'MySQL']
  }
]

export const PROJECTS: IProject[] = [
  {
    api: 'https://api.github.com/repos/kamilkaminski01/school',
    img: School,
    link: 'https://school.kamilkaminski.pl/',
    repo: 'https://github.com/kamilkaminski01/school',
    title: 'School Kamil Kamiński',
    desc: 'Website with educational resources for software developers/engineers. Blog posts, step-by-step tutorials, code examples, projects and more.',
    techStack: ['Vue', 'TypeScript', 'SCSS', 'Vercel']
  },
  {
    api: 'https://api.github.com/repos/kamilkaminski01/monitoring-system',
    img: MonitoringSystem,
    link: 'https://monitoring-system.kamilkaminski.pl/',
    repo: 'https://github.com/kamilkaminski01/monitoring-system',
    title: 'Monitoring System',
    desc: 'Web app that allows users to interact within a chosen game. Authenticated users can observe the taken actions of users in a game and communicate with them through a chat in real-time.',
    techStack: ['Django Channels', 'Redis', 'React', 'SCSS', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    api: 'https://api.github.com/repos/kamilkaminski01/events-manager',
    img: EventsManager,
    link: 'https://events-manager.kamilkaminski.pl/',
    repo: 'https://github.com/kamilkaminski01/monitoring-system',
    title: 'Events Manager',
    desc: "Participants and events managing project. Authenticated users can create, update and delete participants, events and it's hosts. Without authentication all data is read-only.",
    techStack: ['Flask', 'SQLAlchemy', 'React', 'TypeScript', 'PostgreSQL', 'Docker']
  },
  {
    api: 'https://api.github.com/repos/kamilkaminski01/job-board',
    img: JobBoard,
    link: 'https://github.com/kamilkaminski01/job-board',
    repo: 'https://github.com/kamilkaminski01/job-board',
    title: 'Job Board',
    desc: 'A recruitment platform aimed at the IT industry. It allows users to find a job and recruiters to advertise their job positions. Login with social authentication, apply and receive an email about the successful application.',
    techStack: [
      'Django REST Framework',
      'React',
      'TypeScript',
      'SCSS',
      'AWS SES',
      'GitHub OAuth',
      'Google OAuth 2.0'
    ]
  }
]

export const PROJECTS_ARCHIVE = [
  {
    year: 2025,
    project: 'Linia Produkcyjna Flipów',
    madeAt: 'Freelance',
    builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Vercel'],
    link: 'https://liniaprodukcyjnaflipow.pl',
    shorthandLink: 'liniaprodukcyjnaflipow.pl'
  },
  {
    year: 2024,
    project: 'Estats',
    madeAt: 'Freelance',
    builtWith: [
      'Flask',
      'SQLAlchemy',
      'BeatifulSoup4',
      'Celery',
      'Redis',
      'React',
      'TypeScript',
      'SCSS'
    ],
    link: 'https://estats.kamilkaminski.pl',
    shorthandLink: 'estats.kamilkaminski.pl'
  },
  {
    year: 2024,
    project: 'Django React Chat V2',
    madeAt: '',
    builtWith: ['Django', 'Django Channels', 'Redis', 'React', 'TypeScript', 'SCSS'],
    link: 'https://chat.kamilkaminski.pl',
    shorthandLink: 'chat.kamilkaminski.pl'
  },
  {
    year: 2024,
    project: 'Events Manager',
    madeAt: '',
    builtWith: ['Python', 'Flask', 'SQLAlchemy', 'React', 'TypeScript', 'SCSS'],
    link: 'https://events-manager.kamilkaminski.pl/',
    shorthandLink: 'events-manager.kamilkaminski.pl'
  },
  {
    year: 2024,
    project: 'School Kamil Kamiński',
    madeAt: '',
    builtWith: ['Vue', 'TypeScript', 'SCSS', 'Vercel'],
    link: 'https://school.kamilkaminski.pl/',
    shorthandLink: 'school.kamilkaminski.pl'
  },
  {
    year: 2024,
    project: 'Personal Website',
    madeAt: '',
    builtWith: ['React', 'TypeScript', 'SCSS', 'Vercel'],
    link: 'https://kamilkaminski.pl/',
    shorthandLink: 'kamilkaminski.pl'
  },
  {
    year: 2024,
    project: 'Murator Projekty - House Design Agency',
    madeAt: 'Netstation',
    builtWith: ['Python', 'Django', 'JavaScript', 'SCSS', 'Docker'],
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
      'SCSS',
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
      'SCSS',
      'PostgreSQL',
      'Docker',
      'AWS'
    ],
    link: 'https://monitoring-system.kamilkaminski.pl/',
    shorthandLink: 'monitoring-system.kamilkaminski.pl'
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

export const EDUCATION = [
  {
    timeFrame: '2023 — Present',
    title: 'Computer Science · University of Bialystok',
    link: 'https://informatyka.uwb.edu.pl/',
    degree: "Master's degree"
  },
  {
    timeFrame: '2020 — 2023',
    title: 'Computer Science · University of Bialystok',
    link: 'https://informatyka.uwb.edu.pl/',
    degree: "Bachelor's degree"
  }
]
