export interface DropDownOption {
  value: string;
  label: string;
}

export interface DropDownProps {
  theme?: string;
  options: DropDownOption[];
  selected?: string;
  onSelect: (option: DropDownOption) => void;
  label?: string;
}
