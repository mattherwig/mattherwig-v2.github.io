import React from 'react';

import { Box } from './Box';

import classes from './Pill.module.css';

interface PillProps {
  text: string;
}

export const Pill: React.FC<PillProps> = ({ text }) => {
  return (
    <span className={classes.pill}>
      {text}
    </span>
  );
};

interface PillGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: string | number;
}

export const PillGroup: React.FC<PillGroupProps> = ({ children, maxWidth }) => {
  return (
    <Box className={classes.group} maxWidth={maxWidth}>
      {children}
    </Box>
  );
}
