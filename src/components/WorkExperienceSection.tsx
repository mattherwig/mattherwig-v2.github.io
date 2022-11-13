import React from "react";

import classes from "./WorkExperienceSection.module.css";

import ContentArea from "../core/ContentArea";
import ExternalLinkIcon from "../core/ExternalLinkIcon";
import Link from "../core/Link";
import { WORK_EXPERIENCES } from "../data";

const WorkExperienceSection = () => {
  return (
    <section>
      <ContentArea title="Work Experience">
        <div className={classes.container}>
          {WORK_EXPERIENCES.slice(0, 3).map(({ company, website, icon, location, positions }) => (
            <div className={classes.timelineEntry} key={company}>
              <div className={classes.timelineLeft}>
                <Link href={website} target="_blank">
                  <img src={icon} alt={`Icon of ${company}`} />
                </Link>
              </div>
              <div className={classes.timelineRight}>
                <div>
                  <div className={classes.company}>
                    <h3>{company}</h3>
                    {website && <ExternalLinkIcon href={website} />}
                  </div>
                  <p>{location}</p>
                </div>
                {positions.map(({ title, date, bullets }) => (
                  <div className={classes.position}>
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
        </div>
      </ContentArea>
    </section>
  );
};

export default WorkExperienceSection;
