import React from 'react';

import classes from './Button.module.css';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  after?: React.ReactNode;
}

const Button: React.FC<Props> = ({ after, children, ...props }) => {
  return (
    <button {...props} className={classes.container}>
      {children}
      {after}
    </button>
  );
};


export default Button;
