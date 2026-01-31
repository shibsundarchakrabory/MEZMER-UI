import React from "react";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import styles from "./Modal.module.css";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, theme = "default", ...props }) => {
    let className = `${styles.madal} `;

    className += ThemeFunctionConponent(theme);

    return (
        <div className={styles.madalbg} {...props}>
            <div className={className}>{children}</div>
        </div>
    );
};

export default Modal;
