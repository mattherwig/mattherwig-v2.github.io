import { PropsWithChildren } from "react";
import Card from "../core/Card";
import { Section, SectionHeader } from "../core/Section";
import { WORK_EXPERIENCES } from "../data";
import classes from './WorkExperiencesSection.module.css';


const WorkExperiencesSection = () => {
  let width = window.innerWidth;

  return (
    <Section>
      <SectionHeader>
        <h1>Work Experiences</h1>
      </SectionHeader>
      <Card>
        <div className={classes.container}>
          {WORK_EXPERIENCES.map(({ title, date, location, company, bullets }) => (
            <TimelineEntry key={title}>
              <TimelineLeft
                date={date}
                location={location}
                company={company}
              />
              <TimelineRight
                title={title}
                bullets={bullets}
              />
            </TimelineEntry>
          ))}
        </div>
      </Card>
    </Section>
  );
};

const TimelineEntry: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={classes.timelineEntry}>{children}</div>
);

interface TimelineLeft {
  date: string;
  location: string;
  company: string;
}

const TimelineLeft: React.FC<TimelineLeft> = ({
  date,
  location,
  company,
}) => (
  <div className={classes.timelineLeft}>
    <span>{date}</span>
    <span>{location}</span>
    <span>{company}</span>
  </div>
);

interface TimelineRight {
  title: string;
  bullets: Array<string>;
}

const TimelineRight: React.FC<TimelineRight> = ({
  title,
  bullets,
}) => (
  <div className={classes.timelineRight}>
    <span className={classes.experienceTitle}>{title}</span>
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </div>
);

export default WorkExperiencesSection;