import React from "react";
import styles from "./Input.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";

function Input({ theme = "default", }) {
    let className = `${styles.inputDiv}  `;
    

    className += ThemeFunctionConponent(theme);




    return (
        <div className={className} >
            <input  className={styles.input} type="text" />
        </div>
    );
}

export default Input;
