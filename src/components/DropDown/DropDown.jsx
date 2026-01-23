import React, { useState } from "react";
import styles from "./DropDown.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";

function DropDown({ theme = "default" }) {
    const [open, setopen] = useState(false);

    // 1. Base Styles
    const themeClass = ThemeFunctionConponent(theme);
    const selectStyle = `${styles.DropDownSelect} ${themeClass}`;
    
    // 2. Conditional List Styles (Using Ternary instead of -=)
    const listContainerStyle = open 
        ? `${styles.DropDownList} ${styles.DropDownListAnimateAdd}` 
        : `${styles.DropDownList} ${styles.DropDownListAnimateRemove}`;

    const itemStyle = `${styles.DropDownListItem} ${themeClass} ${
        open ? styles.DropDownListItemAdd : styles.DropDownListItemRemove
    }`;

    return (
        <div className={styles.DropDownDiv}>
            <button
                className={selectStyle}
                onClick={() => setopen(!open)}
            >
                Select
            </button>
            <div className={listContainerStyle}>
                <ul>
                    <li className={itemStyle}>Item 1</li>
                    <li className={itemStyle}>Item 2</li>
                    <li className={itemStyle}>Item 3</li>
                </ul>
            </div>
        </div>
    );
}

export default DropDown;