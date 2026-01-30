import React from 'react';
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import styles from "./Text.module.css";

function Text({ children, theme = "default", textType = "h1", ...props }) {
    const Tag = textType; 

    let className = `${styles.container} `; 
    className += ThemeFunctionConponent(theme);

    return (
        <Tag className={className} {...props}>
            {children}
        </Tag>
    );
}

export default Text;
