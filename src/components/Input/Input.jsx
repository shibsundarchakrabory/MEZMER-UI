import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";

function Input({
    label,
    value,
    onChange,
    id,
    type = "text",
    theme = "default",
    ...rest
}) {
    const [isFocused, setIsFocused] = useState(false);

    // Theme classes
    const themeContainerClass = ThemeFunctionConponent(theme);
    const themeInputClass = ThemeFunctionConponent(theme); // Assuming the same function works for the input theme

    // Container class
    const containerClassName = `${styles.inputDiv} ${themeContainerClass}`;

    // Input class
    const inputClassName = `${styles.input} ${themeInputClass}`;

    // Legend/Label class
    const legendStyle =
        isFocused || value
            ? `${styles.legandStyle} ${styles.legieng}`
            : styles.legandStyle;

    return (
        <div className={containerClassName}>
            <label htmlFor={id} className={legendStyle}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={inputClassName}
                {...rest}
            />
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    theme: PropTypes.string,
};

export default Input;
