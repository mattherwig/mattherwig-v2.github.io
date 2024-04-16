import React, { useState } from 'react';

import Button from '../core/Button';
import ContentArea from '../core/ContentArea';
import Heading from '../core/Heading';
import { ExternalLinkIcon } from '../core/Icon';
import Link from '../core/Link';
import { WORK_EXPERIENCES } from '../data';

import classes from './WorkExperienceSection.module.css';

const RELEVANT_EXPERIENCES_COUNT = 3;

const WorkExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const workExperiences = showAll ? WORK_EXPERIENCES : WORK_EXPERIENCES.slice(0, RELEVANT_EXPERIENCES_COUNT);

  return (
    <section>
      <ContentArea title="Work Experience" className={classes.container}>
        {workExperiences.map(({ company, website, icon, location, positions }, index) => (
          <div className={classes.timelineEntry} key={company} data-is-extra={index >= RELEVANT_EXPERIENCES_COUNT}>
            <Link href={website} target="_blank" className={classes.timelineLeft}>
              <img src={icon} alt={`Icon of ${company}`} />
            </Link>
            <div className={classes.timelineRight}>
              <div>
                <div className={classes.company}>
                  <Heading level={3}>{company}</Heading>
                  {website && (
                    <Link href={website} target="_blank">
                      <ExternalLinkIcon />
                    </Link>
                  )}
                </div>
                <p>{location}</p>
              </div>
              {positions.map(({ title, date, bullets }) => (
                <div className={classes.position} key={title}>
                  <div>
                    <Heading level={4}>{title}</Heading>
                    <p>{date}</p>
                  </div>
                  {bullets && <p>{bullets.join(' ')}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center' }}>
          {!showAll && (
            <Button onClick={() => setShowAll((prevState) => !prevState)}>
              {`Show ${WORK_EXPERIENCES.length - RELEVANT_EXPERIENCES_COUNT} more`}
            </Button>
          )}
        </div>
      </ContentArea>
    </section>
  );
};

export default WorkExperienceSection;
