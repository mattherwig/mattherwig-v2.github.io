import React from 'react';

import ContentArea from '../core/ContentArea';

import classes from './AboutMeSection.module.css';

const AboutMeSection = () => {
  return (
    <section className={classes.container}>
      <ContentArea title="About Me" className={classes.innerContainer}>
        <p>
          Hello! I am Matt Herwig, a developer, engineer and a visionary... well I hope so. I am a
          recent Lehigh University alum, bot enthusiast and need to get outside more. Programming is
          my passion and I try to become better every day.
        </p>
        <img src="/images/profile.jpg" className={classes.picture} alt="Matt Herwig profile" />
      </ContentArea>
    </section>
  );
};

export default AboutMeSection;
