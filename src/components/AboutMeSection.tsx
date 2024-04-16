import React from 'react';

import ContentArea from '../core/ContentArea';

import classes from './AboutMeSection.module.css';

const AboutMeSection = () => {
  return (
    <section className={classes.container}>
      <ContentArea title="About Me" className={classes.innerContainer}>
        <p>
          <b>Hello!</b> Welcome to my personal website. I am
          a software engineer based in NYC. Programming is my
          passion and I try to become better every day.
        </p>
        <img src="/images/profile.jpg" className={classes.picture} alt="Matt Herwig profile" />
      </ContentArea>
    </section>
  );
};

export default AboutMeSection;
