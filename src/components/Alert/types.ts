export interface AlertProps {
  message: string;
  type?: "info" | "success" | "error" | "warning";
  theme?: string;
  onClose?: () => void;
}
