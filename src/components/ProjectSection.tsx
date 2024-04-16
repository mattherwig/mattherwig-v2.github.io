import React from 'react';

import ContentArea from '../core/ContentArea';
import Heading from '../core/Heading';
import { ExternalLinkIcon } from '../core/Icon';
import Link from '../core/Link';
import { Pill, PillGroup } from '../core/Pill';
import { PROJECTS } from '../data';

import classes from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={classes.container}>
      <ContentArea title="Projects" className={classes.innerContainer}>
        {PROJECTS.map(({ title, description, technologies, website }) => (
          <Project
            key={title}
            title={title}
            description={description}
            technologies={technologies}
            website={website}
          />
        ))}
      </ContentArea>
    </section>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  website?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, website }) => {
  return (
    <div className={classes.project}>
      <div className={classes.header}>
        <Heading level={3}>{title}</Heading>
        {website && (
          <Link href={website} target="_blank">
            <ExternalLinkIcon />
          </Link>
        )}
      </div>
      <PillGroup maxWidth={400}>
        {technologies.map((technology) => <Pill key={technology} text={technology} />)}
      </PillGroup>
      <p>{description}</p>
    </div>
  );
};

export default ProjectSection;
