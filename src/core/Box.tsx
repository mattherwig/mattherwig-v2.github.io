import React, { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  children: React.ReactNode;
}

export const Box: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} style={{
      ...props.style,
      maxWidth: props.maxWidth,
      maxHeight: props.maxHeight,
      minWidth: props.minWidth,
      minHeight: props.minHeight,
    }}>
      {children}
    </div>
  )
}
