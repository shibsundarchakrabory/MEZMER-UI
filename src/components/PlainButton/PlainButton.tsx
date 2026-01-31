import React from "react";
import styles from "./PlainButton.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import { PlainButtonProps } from "./types";

const PlainButton: React.FC<PlainButtonProps> = ({
  children,
  btntype = "primary",
  btntheme = "default",
  ...props
}) => {
  const themeClass = ThemeFunctionConponent(btntheme);
  const typeClass = styles[btntype] || styles.primary;

  const className = `${styles.plainButton} ${typeClass} ${themeClass}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default PlainButton;


