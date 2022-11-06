import React, { useState } from "react";
import logo from "./logo.svg";
import classes from "./App.module.css";
import classnames from "classnames";
import Card from "./core/Card";
import WorkExperiencesSection from "./components/WorkExperiencesSection";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={classnames(classes.container, { [classes.dark]: isDarkTheme })}
    >
      <div className={classes.inner}>
        <header>
          Header
          <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
        <main>
          <WorkExperiencesSection />
          {/* <EducationSection />
        <ProfessionalSkillsSection />
        <PortfolioSection /> */}
        </main>
        <footer>Footer</footer>
      </div>
    </div>
  );
}

export default App;
