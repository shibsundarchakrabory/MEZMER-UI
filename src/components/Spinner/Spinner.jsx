import React from "react";
import styles from "./Spinner.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";

function Spinner({ size = "md", theme = "default" }) {
    let spinnerContainerClassName = `${styles.spinner} `;

    switch (size) {
        case "sm":
            spinnerContainerClassName += ` ${styles.sm}`;
            break;
        case "lg":
            spinnerContainerClassName += ` ${styles.lg}`;
            break;
        case "md":
        default:
            spinnerContainerClassName += ` ${styles.md}`;
            break;
    }
    let spinnerbg = ThemeFunctionConponent(theme);
    // let spinnerDivbg = ThemeFunctionConponent()
    // Create dot class based on theme
    const getDotClassName = () => {
        let className = styles.dot;
        if (theme === "light") {
            className += ` ${styles.dotLight}`;
        } else if (theme === "dark") {
            className += ` ${styles.dotDark}`;
        }
        return className;
    };

    const baseDotClass = getDotClassName();

    return (
        <div className={`${spinnerContainerClassName}`}>
            <div
                className={`${baseDotClass} ${styles.dot1} ${spinnerbg}`}
            ></div>
            <div
                className={`${baseDotClass} ${styles.dot2} ${spinnerbg}`}
            ></div>
            <div className={`${baseDotClass} ${spinnerbg}`}></div>
        </div>
    );
}

export default Spinner;
