import styles from "./Container.module.css"

function Container({children,direction="column", ...props}){

  const containerDirection =  direction === "row" ? styles.Rowcontainer : styles.Columncontainer;


  return (
    <div className={containerDirection} {...props}>
        {children}
    </div>
  )
}

export default Container