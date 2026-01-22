import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";
import styles from "./Card.module.css";

let h = "Heahing withe the title prop";

let p = "write a para here with the para prop";

export function Card({
    pic = "",
    title = h,
    para = p,
    theme = "default",
    ...props
}) {
    let insertImg = "Add image with pic prop";

    let className = `${styles.card} `;

    className += ThemeFunctionConponent(theme);

    

    return (
        <div className={className} {...props}>
            {insertImg && (
                <div className={styles.imgdiv}>
                    <img src={pic} alt="IMAGE" />
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
