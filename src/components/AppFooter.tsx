import React from 'react';

import ContentArea from '../core/ContentArea';
import Link from '../core/Link';

import classes from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer>
      <ContentArea className={classes.container}>
        <p>
          Feel free to reach out to me at{' '}
          <Link href="mailto:herwig.matt@gmail.com" target="_blank">
            herwig.matt@gmail.com
          </Link>
          . Open to meeting and discussing exciting opportunities!
        </p>
        <p>&copy; Copyright 2023 mattherwig.com</p>
      </ContentArea>
    </footer>
  );
};

export default AppFooter;
