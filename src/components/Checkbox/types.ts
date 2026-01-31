export interface CheckboxProps {
  theme?: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
}
