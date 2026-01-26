// import React from 'react'
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";
import styles from "./Modal.module.css";
function Modal({ children, theme = "default", ...props }) {
    let className = `${styles.madal} `;

    className += ThemeFunctionConponent(theme);

    return (
        <div className={styles.madalbg} {...props}>
            <div className={className}>{children}</div>
        </div>
    );
}

export default Modal;
