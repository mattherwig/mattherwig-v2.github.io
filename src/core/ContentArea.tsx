import classes from "./ContentArea.module.css";
import { PropsWithChildren, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import classNames from "classnames";

interface Props extends PropsWithChildren {
    title: string;
    className?: string;
}


const ContentArea: React.FC<Props> = ({ title, className, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div className={classNames(classes.container, { [classes.visible]: isVisible })} ref={ref}>
            <div className={classes.title} data-title={title} />
            <div className={className}>
                {children}
            </div>
        </div>
    );
};

export default ContentArea;