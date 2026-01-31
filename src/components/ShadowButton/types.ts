import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ShadowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btntype?: "primary" | "secondary";
  btntheme?: string;
  shadowColor?: string;
  spread?: string;
  inside?: boolean;
}
