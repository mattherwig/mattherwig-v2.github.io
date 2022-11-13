import ContentArea from "../core/ContentArea";
import classes from "./EducationSection.module.css";
import ExternalLinkIcon from "../core/ExternalLinkIcon";
import { faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EducationSection = () => {
    return (
        <section>
            <ContentArea title="Education" className={classes.container}>
                <div className={classes.universityContent}>
                    <div className={classes.universityInnerContent}>
                        <div>
                            <h3>Lehigh University</h3>
                            <p>Bachelor of Science, Computer Science &amp; Business</p>
                            <p>2016 - 2020</p>
                        </div>
                        <p>
                            The <a href="https://csb.lehigh.edu/" target="_blank">Computer Science &amp; Business program</a> is
                            a Lehigh-unique ABET and AACSB accredited major which
                            is a full CS degree and full business degree. In my major, I learn
                            everything a CS student learns, everything a business student
                            learns, and how to apply my CS skills in commercial environments.
                        </p>
                    </div>
                    <div className={classes.universityInnerAdditionalContent}>
                        <div>
                            <h3>Awards</h3>
                            <Award title="Graduated Highest Honors" link="https://www.lehigh.edu/~inis/pdf/commencement/2020_Commencement_Honors_and_Awards.pdf" />
                            <Award title="Dean's List 2016-2019" link="https://meritpages.com/Matthew-Herwig/3531862" />
                        </div>
                        <div>
                            <h3>Advanced Courses</h3>
                            <Course title="Software Engineering"/>
                            <Course title="Web Systems Programming"/>
                            <Course title="Database Systems &amp; Apps"/>
                            <Course title="Discrete Structures &amp; Algorithms"/>
                            <Course title="Programming &amp; Data Structures"/>
                            <Course title="Systems Software"/>
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
          {link && <ExternalLinkIcon href={link} />}
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