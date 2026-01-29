import React, { useState } from "react";
import styles from "./Tooltip.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";

function Tooltip({ children, content, theme = "default" }) {
  const [isVisible, setIsVisible] = useState(false);

  let tooltipClassName = `${styles.tooltip} `;
  tooltipClassName += ThemeFunctionConponent(theme);

  let contentClassName = `${styles.tooltipContent} `;
  contentClassName += ThemeFunctionConponent(theme);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={contentClassName}>
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
