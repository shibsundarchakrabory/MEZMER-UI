import { ReactNode, HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  theme?: string;
  textType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}
