import React from 'react';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentArea from '../core/ContentArea';
import Heading from '../core/Heading';
import { ExternalLinkIcon } from '../core/Icon';
import Link from '../core/Link';

import classes from './EducationSection.module.css';

const EducationSection = () => {
  return (
    <section>
      <ContentArea title="Education" className={classes.container}>
        <div className={classes.universityContent}>
          <div className={classes.universityInnerContent}>
            <div>
              <Heading level={3}>Lehigh University</Heading>
              <p>Bachelor of Science, Computer Science &amp; Business</p>
              <p>2016 - 2020 &#8226; 3.91 GPA</p>
            </div>
            <p>
              The{' '}
              <Link href="https://csb.lehigh.edu/" target="_blank" rel="noreferrer">
                Computer Science &amp; Business program
              </Link>{' '}
              is a Lehigh-unique ABET and AACSB accredited major which is a full CS degree and full
              business degree. In my major, I learn everything a CS student learns, everything a
              business student learns, and how to apply my CS skills in commercial environments.
            </p>
          </div>
          <div className={classes.universityInnerAdditionalContent}>
            <div>
              <Heading level={3}>Awards</Heading>
              <Award
                title="Graduated Highest Honors"
                link="https://www.lehigh.edu/~inis/pdf/commencement/2020_Commencement_Honors_and_Awards.pdf"
              />
              <Award
                title="Dean's List 2016-2019"
                link="https://meritpages.com/Matthew-Herwig/3531862"
              />
            </div>
            <div>
              <Heading level={3}>Advanced Courses</Heading>
              <Course title="Software Engineering" />
              <Course title="Web Systems Programming" />
              <Course title="Database Systems &amp; Apps" />
              <Course title="Discrete Structures &amp; Algorithms" />
              <Course title="Programming &amp; Data Structures" />
              <Course title="Systems Software" />
            </div>
          </div>
        </div>
      </ContentArea>
    </section>
  );
};

interface AwardProps {
  title: string;
  link?: string;
}

const Award: React.FC<AwardProps> = ({ title, link }) => {
  return (
    <div className={classes.award}>
      <FontAwesomeIcon icon={faAward} />
      <p>{title}</p>
      {link && (
        <Link href={link} target="_blank">
          <ExternalLinkIcon />
        </Link>
      )}
    </div>
  );
};

interface CourseProps {
  title: string;
}

const Course: React.FC<CourseProps> = ({ title }) => {
  return (
    <div className={classes.course}>
      <FontAwesomeIcon icon={faGraduationCap} />
      <p>{title}</p>
    </div>
  );
};

export default EducationSection;
