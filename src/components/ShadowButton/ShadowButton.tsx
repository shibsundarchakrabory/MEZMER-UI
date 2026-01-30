import React from "react";
import PropTypes from "prop-types";
import plainButtonStyles from "../PlainButton/PlainButton.module.css"; // Import styles from PlainButton
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";

export default function ShadowButton({
  children,
  btntype = "primary",
  btntheme = "default",
  shadowColor = "#ffffff",
  spread = "10px",
  inside = false,
  ...props
}) {
  const themeClass = ThemeFunctionConponent(btntheme);
  const typeClass = plainButtonStyles[btntype] || plainButtonStyles.primary;
  
  const className = `${plainButtonStyles.plainButton} ${typeClass} ${themeClass}`;
  
  const shadowInset = inside ? "inset" : "";
  const shadowStyle = {
    boxShadow: `${shadowInset} 0px 0px ${spread} ${shadowColor}`,
  };

  return (
    <button style={shadowStyle} className={className} {...props}>
      {children}
    </button>
  );
}

ShadowButton.propTypes = {
  children: PropTypes.node.isRequired,
  btntype: PropTypes.oneOf(["primary", "secondary"]),
  btntheme: PropTypes.string,
  shadowColor: PropTypes.string,
  spread: PropTypes.string,
  inside: PropTypes.bool,
};

