import React from 'react';

import Link from '../core/Link';

import classes from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={classes.container}>
      <p>
        Feel free to reach out to me at{' '}
        <Link href="mailto:herwig.matt@gmail.com" target="_blank">
          herwig.matt@gmail.com
        </Link>
        . Open to meeting and discussing exciting opportunities!
      </p>
      <p>&copy; Copyright 2023 mattherwig.com</p>
    </footer>
  );
};

export default AppFooter;
