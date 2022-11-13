import React from "react";

import classes from "./App.module.css";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
