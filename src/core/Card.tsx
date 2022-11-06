import React, { PropsWithChildren } from "react";
import classes from "./Card.module.css";

interface Props extends PropsWithChildren {
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Card;