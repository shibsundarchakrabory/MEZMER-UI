import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  direction?: "row" | "column";
}
