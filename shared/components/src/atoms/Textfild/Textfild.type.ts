export interface TextfildProps {
  label: string;
  variant: "outlined" | "filled" | "standard";
  placeholder: string;
  value: string;
  vaildate: boolean;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 
