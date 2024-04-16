import React from 'react';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  after?: React.ReactNode;
}

const Link: React.FC<Props> = ({ after, children, ...props }) => {
  if (!children && after) {
    return <a {...props}>{after}</a>;
  } else if (after) {
    return (
      <a {...props}>
        {children}
        {after}
      </a>
    );
  } else {
    return <a {...props}>{children}</a>;
  }
};


export default Link;
