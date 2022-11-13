import classes from "./ClickableIcon.module.css";
import { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends PropsWithChildren {
    className?: string;
}

const ClickableIcon: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={classNames(classes.container, className)}>
            {children}
        </div>
    );
};

export default ClickableIcon;