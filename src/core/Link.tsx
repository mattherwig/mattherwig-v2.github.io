import React from 'react';

const Link: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default Link;
