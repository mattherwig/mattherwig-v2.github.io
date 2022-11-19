import React from 'react';

import ContentArea from '../core/ContentArea';
import ExternalLinkIcon from '../core/ExternalLinkIcon';
import Link from '../core/Link';
import { WORK_EXPERIENCES } from '../data';

import classes from './WorkExperienceSection.module.css';

const WorkExperienceSection = () => {
  return (
    <section>
      <ContentArea title="Work Experience" className={classes.container}>
        {WORK_EXPERIENCES.slice(0, 3).map(({ company, website, icon, location, positions }) => (
          <div className={classes.timelineEntry} key={company}>
            <Link href={website} target="_blank" className={classes.timelineLeft}>
              <img src={icon} alt={`Icon of ${company}`} />
            </Link>
            <div className={classes.timelineRight}>
              <div>
                <div className={classes.company}>
                  <h3>{company}</h3>
                  {website && <ExternalLinkIcon href={website} />}
                </div>
                <p>{location}</p>
              </div>
              {positions.map(({ title, date, bullets }) => (
                <div className={classes.position} key={title}>
                  <div>
                    <h4>{title}</h4>
                    <p>{date}</p>
                  </div>
                  {bullets && <p>{bullets.join(' ')}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </ContentArea>
    </section>
  );
};

export default WorkExperienceSection;
