import React from 'react';

import ContentArea from '../core/ContentArea';
import ExternalLinkIcon from '../core/ExternalLinkIcon';
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
      <div>
        <div className={classes.header}>
          <h3>{title}</h3>
          {website && <ExternalLinkIcon href={website} />}
        </div>
        <p>{description}</p>
        <br />
        <p>{`Key Technologies: ${technologies.join(', ')}`}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
