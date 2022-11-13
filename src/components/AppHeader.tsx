import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSave, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import classes from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.titleContent}>
        <span className={classes.firstname}>Matt</span>
        <span className={classes.lastname}>Herwig</span>
      </h1>
      <div className={classes.subContent}>
        <div className={classes.subInnerContent}>
          <div className={classes.leftSubContent}>
            <a href="mailto:herwig.matt@gmail.com" target="_blank" title="Email" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mattherwig/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </div>
          <span className={classes.subtitle}>Software Developer</span>
          <div className={classes.rightSubContent}>
            <a href="https://github.com/mattherwig" target="_blank" title="Github" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
            </a>
            <a href="media/resume.pdf" target="_blank" title="Resume">
              <FontAwesomeIcon icon={faSave} size="2xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
