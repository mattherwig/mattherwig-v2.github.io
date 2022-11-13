interface WorkExperience {
  company: string;
  website?: string;
  location: string;
  icon: string;
  positions: WorkExperiencePosition[];
}

interface WorkExperiencePosition {
  title: string;
  date: string;
  bullets: Array<string>;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: 'Gusto',
    website: 'https://gusto.com',
    location: 'San Francisco',
    icon: '/images/gusto-black.jpeg',
    positions: [
      {
        title: 'Senior Full-Stack Engineer',
        date: 'July 2020 - Present',
        bullets: []
      },
      {
        title: 'Full-Stack Engineer',
        date: 'July 2021 - July 2020',
        bullets: []
      }
    ]
  },
  {
    company: 'Trifecta',
    website: 'https://trifecta.com',
    location: 'Remote',
    icon: '/images/trifecta-black.jpeg',
    positions: [
      {
        title: 'Associate Backend Engineer',
        date: 'June 2020 - June 2021',
        bullets: [
          'Migrated legacy APIs and UIs into the Lightning platform using native Salesforce languages to create an interconnected service CRM ecosystem.',
          'Constructed frontend permission-based user flows and component-based UI.',
          'Made scalable and configurable Apex code with licensing and governing limits.'
        ]
      }
    ]
  },
  {
    company: 'Dolomite',
    website: 'https://dolomite.io',
    location: 'Bethlehem, PA',
    icon: '/images/dolomite-black.jpeg',
    positions: [
      {
        title: 'Backend Software Engineer',
        date: 'Fall 2018 – Summer 2019',
        bullets: [
          'Created tiered account management system with numerous integrations and frameworks allowing for secure and dynamic use of the exchange.',
          'Developed Stripe payment method and subscription system enabling external companies to obtain proprietary blockchain and market data.',
          'Built web socket software to allow for distributed communication and integration with frontend clients and external partners respectively.'
        ]
      },
      {
        title: 'Backend Software Intern',
        date: 'Summer 2018',
        bullets: [
          'Developed in an agile environment and wrote thoroughly tested code that ensured the current and future reliability of provided features.',
          'Designed the core Scala and Play! Framework backend infrastructure providing easy-to-use abstractions for other developers to use.'
        ]
      }
    ]
  },
  {
    company: 'WonPlanet',
    location: 'Remote',
    icon: '/images/trifecta-black.jpeg',
    positions: [
      {
        title: 'Mobile Backend Software Engineer',
        date: 'Spring 2019, Fall 2019',
        bullets: [
          'Created JSON REST architecture; Focusing on minimizing code duplication, server costs and breaking changes from legacy HTML endpoints.',
          'Developed rate limiting and session-based authentication to protect against costly and sensitive resource use respectively.'
        ]
      }
    ]
  },
  {
    company: 'Teradata',
    location: 'Czech Republic, Prague',
    icon: '/images/trifecta-black.jpeg',
    positions: [
      {
        title: 'Frontend Designer',
        date: 'June 2018',
        bullets: [
          'Designed the Prague’s division internal web application using SharePoint.',
          'Modelled employees’ home and working locations globally with Power BI.'
        ]
      }
    ]
  },
  {
    company: "Uncle Bill's Pancake House",
    location: 'Ocean City, NJ',
    icon: '/images/trifecta-black.jpeg',
    positions: [
      {
        title: 'Busboy',
        date: 'Summer 2016, Summer 2017',
        bullets: [
          'Facilitated busboy arrangement and side work throughout the restaurant.',
          'Assisted customers, employees, and managers in the preparation and cleaning of tables in a fast-paced environment.'
        ]
      }
    ]
  },
  {
    company: 'Minecraft Admin',
    location: 'Remote',
    icon: '/images/trifecta-black.jpeg',
    positions: [
      {
        title: 'Entrepreneurial Owner',
        date: '2012 - 2015',
        bullets: [
          'Developed custom Java plugins to create unique user experiences ranging from mini-games to in-game reward key system.',
          'Managed two online game servers and online community website receiving over 500 dollars in profit per month.',
          'Delegated responsibilities of advertising, marketing, website development, player management to over 25 staff.'
        ]
      }
    ]
  }
];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Personal Website v1',
    description: 'My first personal website',
    technologies: ['HTML', 'CSS', 'Javascript'],
    website: 'https://mattherwig.com'
  },
  {
    title: 'Amazon Mturk Bot',
    description: '',
    technologies: [
      'JavaFX',
      'Tess4j',
      'Java',
      'Screen Builder',
      'Java Thread Queue System',
      'TagMe API'
    ]
  },
  {
    title: 'FanFeed',
    description: '',
    technologies: ['Chrome Extension', 'Javascript', 'Firebase', 'Google Cloud Platform', 'Heroku']
  },
  {
    title: 'YouTube Polls',
    description: '',
    technologies: ['Chrome Extension', 'Javascript', 'Youtube API']
  },
  {
    title: 'Game Dev',
    description: '',
    technologies: ['Unity', 'C#', 'Python', 'Pygame', 'Blender']
  },
  {
    title: 'Poshmark Bot',
    description: '',
    technologies: ['JavaFX', 'Java', 'Scala', 'Selenium', 'Screen Builder']
  },
  {
    title: 'Minecraft Server Custom Plugins',
    description: 'Mini-games, Crate Keys',
    technologies: ['Java', 'Bukkit API']
  },
  {
    title: 'Lehigh Voice Assistant',
    description: '1st Place LUApps',
    technologies: ['Google Dialogflow', 'Node JS']
  }
];
