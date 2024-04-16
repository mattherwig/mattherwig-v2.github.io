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
    location: 'New York & San Francisco',
    icon: '/images/gusto-black.jpeg',
    positions: [
      {
        title: 'Staff Full-Stack Engineer',
        date: 'Jan. 2023 - Present',
        bullets: [
          'Led TurboTax integration generating 200k+ in revenue yearly.',
          'Developed and championed for the suite of growth frameworks (ex; scheduled modals) within the employee and mobile experiences. Supported rapid development for teams building into these shared experiences.'
        ],
      },
      {
        title: 'Senior Full-Stack Engineer',
        date: 'July 2022 - Dec. 2022',
        bullets: [
          'Developed a data driven insights engine, working x-functional and with internal stakeholders, supporting feature adoption (ex; budgeting ~750+% increase).',
          'Regularly incorporated multiple tech initiatives, including modularity and performance, into my projects. Presented in performance and GraphQL guilds. Hosted Mind Meld, an engineering group within our segment.',
          'Revamped and owned the most visited page on web, the employee dashboard.',
        ],
      },
      {
        title: 'Full-Stack Engineer',
        date: 'July 2021 - June 2022',
        bullets: [
          'Applied first-principals to migrate numerous features from web to mobile. Projects required becoming a SME, re-architecting for cross platform consumption, working in ambiguity and unowned parts of the codebase (ex; employee onboarding).',
          'Developed demo-tooling to support employee creation in numerous lifecycle states; used over 2k+ times internally.',
        ],
      },
    ],
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
          'Made scalable and configurable Apex code with licensing and governing limits.',
        ],
      },
    ],
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
          'Built web socket software to allow for distributed communication and integration with frontend clients and external partners respectively.',
        ],
      },
      {
        title: 'Backend Software Intern',
        date: 'Summer 2018',
        bullets: [
          'Developed in an agile environment and wrote thoroughly tested code that ensured the current and future reliability of provided features.',
          'Designed the core Scala and Play! Framework backend infrastructure providing easy-to-use abstractions for other developers to use.',
        ],
      },
    ],
  },
  {
    company: 'WonPlanet',
    location: 'Remote',
    icon: '/images/wonplanet-gray.jpg',
    positions: [
      {
        title: 'Mobile Backend Software Engineer',
        date: 'Spring 2019, Fall 2019',
        bullets: [
          'Created JSON REST architecture; Focusing on minimizing code duplication, server costs and breaking changes from legacy HTML endpoints.',
          'Developed rate limiting and session-based authentication to protect against costly and sensitive resource use respectively.',
        ],
      },
    ],
  },
  {
    company: 'Teradata',
    location: 'Czech Republic, Prague',
    icon: 'images/teradata-logo-gray.png',
    positions: [
      {
        title: 'Frontend Designer',
        date: 'June 2018',
        bullets: [
          'Designed the Prague’s division internal web application using SharePoint.',
          'Modelled employees’ home and working locations globally with Power BI.',
        ],
      },
    ],
  },
  {
    company: "Uncle Bill's Pancake House",
    location: 'Ocean City, NJ',
    icon: '/images/ubph-gray.png',
    positions: [
      {
        title: 'Busboy',
        date: 'Summer 2016, Summer 2017',
        bullets: [
          'Facilitated busboy arrangement and side work throughout the restaurant.',
          'Assisted customers, employees, and managers in the preparation and cleaning of tables in a fast-paced environment.',
        ],
      },
    ],
  },
  {
    company: 'Minecraft Admin',
    location: 'Remote',
    icon: '/images/minecraft-gray.png',
    positions: [
      {
        title: 'Entrepreneurial Owner',
        date: '2012 - 2015',
        bullets: [
          'Developed custom Java plugins to create unique user experiences ranging from mini-games to in-game reward key system.',
          'Managed two online game servers and online community website receiving over 500 dollars in profit per month.',
          'Delegated responsibilities of advertising, marketing, website development, player management to over 25 staff.',
        ],
      },
    ],
  },
];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Juxe - Share Music With Friends!',
    description: 'Cross platform mobile application for sharing and listening to friends music. Built with a Node JS backend and React Native frontend.',
    technologies: ['Typescript', 'Node JS', 'GraphQL', 'React Native', 'Apple API', 'Spotify API', 'Pathos', 'Prisma', 'Expo', 'Firebase', 'GCP'],
    website: 'https://juxefeed.com',
  },
  {
    title: 'Personal Website v1',
    description: 'My first personal website.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    website: 'https://mattherwig.github.io/personal-website-v1/',
  },
  {
    title: 'React Connect Four',
    description: 'Fun little connect four project combined with Github Pages.',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    website: 'https://mattherwig.com/react-connect-four/',
  },
  {
    title: 'Amazon Mturk Bot',
    description:
      'Made a desktop application which would allow someone to create and run automatic and manual tasks on Mturk. Examples; Scraped the mTurk application on a sentace-to-keyword task, hit the TagMe API, and pasted the solution into mTurk for a cent-per-task. Botted a task which required someone to place 50 dots in a perfect circle around an iris.',
    technologies: [
      'JavaFX',
      'Tess4j',
      'Java',
      'Screen Builder',
      'Java Thread Queue System',
      'TagMe API',
    ],
  },
  {
    title: 'Poshmark Bot',
    description:
      'Made a chrome extension and desktop application version -- both of which provided automated re-listing functionality to trick the closet promotion algorithm and share/like-others closest to gain followers.',
    technologies: ['JavaFX', 'Java', 'Scala', 'Selenium', 'Screen Builder'],
  },
  {
    title: 'Hackathon 1st Place - Lehigh Voice Assistant',
    description:
      'Worked with a team of Lehigh Engineers to create a Google voice assistant responding to events happening on campus, cafeteria offerings, news and more through scraped data. Won 1st Place in almost all categories of the LUApps competition.',
    technologies: ['Google Dialogflow', 'Node JS'],
  },
  {
    title: 'Minecraft Server Custom Plugins',
    description:
      'Owned a couple minecraft servers and in some of my latest ones, developed internal plugins for mini-games, crate keys, and more.',
    technologies: ['Java', 'Bukkit API'],
  },
  {
    title: 'FanFeed',
    description:
      'Chrome extension which would allow social features when watching a streaming service.',
    technologies: ['Chrome Extension', 'Javascript', 'Firebase', 'Google Cloud Platform', 'Heroku'],
  },
];
