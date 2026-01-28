import React from "react";
import PropTypes from "prop-types";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import styles from "./Card.module.css";

export default function Card({
    pic,
    title,
    para,
    theme = "default",
    ...props
}) {
    const themeClass = ThemeFunctionConponent(theme);
    const className = `${styles.card} ${themeClass}`;

    return (
        <div className={className} {...props}>
            {pic && (
                <div className={styles.imgdiv}>
                    <img src={pic} alt={title || "Card image"} />
                </div>
            )}
            <div className={styles.heading}>
                <h3>{title}</h3>
            </div>
            <div className={styles.para}>
                <p>{para}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
  pic: PropTypes.string,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  theme: PropTypes.string,
};
