import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import classes from './ClickableIcon.module.css';

interface Props extends PropsWithChildren {
  className?: string;
}

const ClickableIcon: React.FC<Props> = ({ className, children }) => {
  return <div className={classNames(classes.container, className)}>{children}</div>;
};

export default ClickableIcon;
