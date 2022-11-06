interface WorkExperience {
  title: string;
  date: string;
  location: string;
  company: string;
  bullets: Array<string>;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    title: "Associate Backend Engineer",
    company: "Trifecta, trifecta.com",
    date: "Summer 2020 - Present",
    location: "Remote",
    bullets: [
      "Migrated legacy APIs and UIs into the Lightning platform using native Salesforce languages to create an interconnected service CRM ecosystem.",
      "Constructed frontend permission-based user flows and component-based UI.",
      "Made scalable and configurable Apex code with licensing and governing limits.",
    ],
  },
  {
    title: "Backend Software Engineer",
    company: "Dolomite, dolomite.io",
    date: "Fall 2018 – Summer 2019",
    location: "Bethlehem, PA",
    bullets: [
      "Created tiered account management system with numerous integrations and frameworks allowing for secure and dynamic use of the exchange.",
      "Developed Stripe payment method and subscription system enabling external companies to obtain proprietary blockchain and market data.",
      "Built web socket software to allow for distributed communication and integration with frontend clients and external partners respectively.",
    ],
  },
  {
    title: "Backend Software Intern",
    company: "Dolomite, dolomite.io",
    date: "Summer 2018",
    location: "Bethlehem, PA",
    bullets: [
      "Developed in an agile environment and wrote thoroughly tested code that ensured the current and future reliability of provided features.",
      "Designed the core Scala and Play! Framework backend infrastructure providing easy-to-use abstractions for other developers to use.",
    ],
  },
  {
    title: "Mobile Backend Software Engineer",
    company: "WonPlanet, app",
    date: "Spring 2019, Fall 2019",
    location: "Remote",
    bullets: [
      "Created JSON REST architecture; Focusing on minimizing code duplication, server costs and breaking changes from legacy HTML endpoints.",
      "Developed rate limiting and session-based authentication to protect against costly and sensitive resource use respectively.",
    ],
  },
  {
    title: "Frontend Designer",
    company: "Teradata",
    date: "June 2018",
    location: "Czech Republic, Prague",
    bullets: [
      "Designed the Prague’s division internal web application using SharePoint.",
      "Modelled employees’ home and working locations globally with Power BI.",
    ],
  },
  {
    title: "Busboy",
    company: "Uncle Bill's Pancake House",
    date: "Summer 2016, Summer 2017",
    location: "Ocean City, NJ",
    bullets: [
      "Facilitated busboy arrangement and side work throughout the restaurant.",
      "Assisted customers, employees, and managers in the preparation and cleaning of tables in a fast-paced environment.",
    ],
  },
  {
    title: "Entrepreneurial Owner",
    company: "Minecraft Server's",
    date: "2012 - 2015",
    location: "Remote",
    bullets: [
      "Developed custom Java plugins to create unique user experiences ranging from minigames to in-game reward key system.",
      "Managed two online game servers and online community website receiving over 500 dollars in profit per month.",
      "Delegated responsibilities of advertising, marketing, website development, player management to over 25 staff.",
    ],
  },
];
