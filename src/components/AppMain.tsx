import React from 'react';

import AboutMeSection from './AboutMeSection';
import EducationSection from './EducationSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import WorkExperienceSection from './WorkExperienceSection';

import classes from './AppMain.module.css';

const AppMain = () => {
  return (
    <main className={classes.container}>
      <AboutMeSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
};

export default AppMain;
