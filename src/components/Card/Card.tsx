import React from "react";
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent.js";
import styles from "./Card.module.css";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
    pic= "defaulr",
    title,
    para,
    theme = "default",
    ...props
}) => {
    const themeClass = ThemeFunctionConponent(theme);
    const className = `${styles.card} ${themeClass}`;

    return (
        <div className={className} {...props}>
            
            {pic && pic.length > 0 && (
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

export default Card;
