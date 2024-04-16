import React from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const getHeadingComponent = (level: Props['level']) => {
  switch (level) {
    case 1:
      return 'h1';
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    case 5:
      return 'h5';
    case 6:
      return 'h6';
  }
}

const Heading: React.FC<Props> = ({ level, children, ...props }) => {
  const Component = getHeadingComponent(level);

  return (
    <Component {...props}>
      {children}
    </Component>
  )
};

export default Heading;
