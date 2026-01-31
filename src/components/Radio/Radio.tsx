import React from "react";
import styles from "./Radio.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import { RadioProps } from "./types";

const Radio: React.FC<RadioProps> = ({
  theme = "default",
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
}) => {
  let containerClassName = `${styles.container} `;
  containerClassName += ThemeFunctionConponent(theme);

  return (
    <div className={containerClassName}>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={styles.radioInput}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;
