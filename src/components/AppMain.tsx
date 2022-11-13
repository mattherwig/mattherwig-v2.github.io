import React from "react";

import AboutMeSection from "./AboutMeSection";
import classes from "./AppMain.module.css";
import EducationSection from "./EducationSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import WorkExperienceSection from "./WorkExperienceSection";

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
