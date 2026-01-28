import React from "react";
import PropTypes from "prop-types";
import styles from "./PlainButton.module.css";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";



export default function PlainButton({
  children,
  btntype = "primary",
  btntheme = "default",
  ...props
}) {
  const themeClass = ThemeFunctionConponent(btntheme);
  const typeClass = styles[btntype] || styles.primary;
  
  const className = `${styles.plainButton} ${typeClass} ${themeClass}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

PlainButton.propTypes = {
  children: PropTypes.node.isRequired,
  btntype: PropTypes.oneOf(["primary", "secondary"]),
  btntheme: PropTypes.string,
};


