import React from 'react';

import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';

import classes from './App.module.css';

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
