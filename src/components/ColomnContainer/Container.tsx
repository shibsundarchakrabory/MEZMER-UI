import styles from "./Container.module.css";
import { ContainerProps } from "./types";
import React from "react";

const Container: React.FC<ContainerProps> = ({
  children,
  direction = "column",
  ...props
}) => {
  const containerDirection =
    direction === "row" ? styles.Rowcontainer : styles.Columncontainer;

  return (
    <div className={containerDirection} {...props}>
      {children}
    </div>
  );
};

export default Container;
