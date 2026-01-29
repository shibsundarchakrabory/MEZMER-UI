import React, { useState } from "react";
import styles from "./Alert.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";

function Alert({ message, type = "info", theme = "default", onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  let alertClassName = `${styles.alert} `;
  alertClassName += ThemeFunctionConponent(theme);

  // Add type-specific styling
  switch (type) {
    case "success":
      alertClassName += ` ${styles.success}`;
      break;
    case "error":
      alertClassName += ` ${styles.error}`;
      break;
    case "warning":
      alertClassName += ` ${styles.warning}`;
      break;
    case "info":
    default:
      alertClassName += ` ${styles.info}`;
      break;
  }

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={alertClassName}>
      <span className={styles.message}>{message}</span>
      {onClose && (
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Alert;
