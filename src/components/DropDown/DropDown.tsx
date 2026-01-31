import React, { useState } from "react";
import styles from "./DropDown.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import { DropDownProps, DropDownOption } from "./types";

const DropDown: React.FC<DropDownProps> = ({
  theme = "default",
  options = [],
  selected,
  onSelect,
  label = "Select",
}) => {
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
      <button className={selectStyle} onClick={() => setopen(!open)}>
        {selected
          ? options.find((opt) => opt.value === selected)?.label
          : label}
      </button>
      <div className={listContainerStyle}>
        <ul>
          {options.map((option: DropDownOption, index: number) => (
            <li
              key={index}
              className={`${itemStyle} ${
                selected === option.value ? styles.DropDownListItemActive : ""
              }`}
              onClick={() => {
                onSelect(option);
                setopen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
