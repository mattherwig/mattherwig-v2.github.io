import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

const ClickableIcon: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default ClickableIcon;
