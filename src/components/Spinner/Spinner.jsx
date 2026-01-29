import React from "react";
import styles from "./Spinner.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";

function Spinner({ size = "md", theme = "default" }) {
  let spinnerClassName = `${styles.spinner} `;
  spinnerClassName += ThemeFunctionConponent(theme);

  // Apply size-specific styles
  switch (size) {
    case "sm":
      spinnerClassName += ` ${styles.sm}`;
      break;
    case "lg":
      spinnerClassName += ` ${styles.lg}`;
      break;
    case "md":
    default:
      spinnerClassName += ` ${styles.md}`;
      break;
  }

  return (
    <div className={spinnerClassName}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
      <div className={styles.dot3}></div>
    </div>
  );
}

export default Spinner;
