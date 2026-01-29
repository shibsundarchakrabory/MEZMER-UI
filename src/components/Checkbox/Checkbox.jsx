import React, { useState } from "react";
import styles from "./Checkbox.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";

function Checkbox({
  theme = "default",
  label,
  onChange,
  checked,
  disabled,
  name,
  value,
}) {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = (event) => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(event);
    }
  };

  let className = `${styles.container} `;
  className += ThemeFunctionConponent(theme);

  return (
    <div className={className}>
      <div className={styles.list}>
        <input
          type="checkbox"
          id={`checkbox-${value}`}
          value={value}
          className={styles.checkbox}
          checked={isChecked}
          disabled={disabled}
          name={name}
          onChange={handleChange}
        />
        <label htmlFor={`checkbox-${value}`}>{label}</label>
      </div>
    </div>
  );
}

export default Checkbox;
