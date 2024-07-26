export type ButtonTypes = "primary" | "secondary" | "critical";

interface ButtonProps {
  onClick: () => void;
  title: string;
  variant: ButtonTypes;
  disabled?: boolean;
  fontSize?: number;
  fontWeight?: number;
}

export type { ButtonProps };
