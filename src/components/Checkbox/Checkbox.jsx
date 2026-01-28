import React from "react";
import styles from "./Checkbox.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
function Checkbox({ theme = "default", value = "default" }) {
    let className = `${styles.container}`;
    className += ThemeFunctionConponent(theme);

    return (
        <div className={className}>
            <div>
                <input type="checkbox" />
                <label htmlFor="">{value}</label>
            </div>
        </div>
    );
}

export default Checkbox;
