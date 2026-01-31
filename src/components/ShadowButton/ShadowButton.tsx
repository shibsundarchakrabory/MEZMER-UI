import React from "react";
import styles from "../PlainButton/PlainButton.module.css"; // Import styles from PlainButton
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import { ShadowButtonProps } from "./types";

const ShadowButton: React.FC<ShadowButtonProps> = ({
  children,
  btntype = "primary",
  btntheme = "default",
  shadowColor = "#ffffff",
  spread = "10px",
  inside = false,
  ...props
}) => {
  const themeClass = ThemeFunctionConponent(btntheme);
  const typeClass = styles[btntype] || styles.primary;

  const className = `${styles.plainButton} ${typeClass} ${themeClass}`;

  const shadowInset = inside ? "inset" : "";
  const shadowStyle = {
    boxShadow: `${shadowInset} 0px 0px ${spread} ${shadowColor}`,
  };

  return (
    <button style={shadowStyle} className={className} {...props}>
      {children}
    </button>
  );
};

export default ShadowButton;

