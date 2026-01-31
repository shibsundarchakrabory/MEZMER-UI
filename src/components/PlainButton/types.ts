import { ButtonHTMLAttributes, ReactNode } from "react";

export interface PlainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btntype?: "primary" | "secondary";
  btntheme?: string;
}
