import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import useOnScreen from '../hooks/useOnScreen';

import Heading from './Heading';

import classes from './ContentArea.module.css';

interface Props extends PropsWithChildren {
  title?: string;
  className?: string;
}

const ContentArea: React.FC<Props> = ({ title, className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [viewCount, setViewCount] = useState(0);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    setViewCount((prevState) => prevState + 1);
  }, [setViewCount, isVisible]);

  return (
    <div
      className={classNames(classes.container, {
        [classes.visible]: isVisible || viewCount > 5,
      })}
      ref={ref}
    >
      {title && <Heading level={2} className={classes.title} data-title={title} />}
      <div className={className}>{children}</div>
    </div>
  );
};

export default ContentArea;
