import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ClickableIcon from './ClickableIcon';
import Link from './Link';

import classes from './ExternalLinkIcon.module.css';

const ExternalLinkIcon: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => {
  return (
    <ClickableIcon className={classes.container}>
      <Link target="_blank" {...props}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Link>
    </ClickableIcon>
  );
};

export default ExternalLinkIcon;
