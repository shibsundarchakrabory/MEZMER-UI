import styles from "./PlainCard.module.css"


export function PlainCard({ children, ...props }) {
  return <div className={styles.body} {...props}>{children}</div>
}
