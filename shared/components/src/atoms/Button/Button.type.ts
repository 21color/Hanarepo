export type ButtonTypes = "primary" | "secondary" | "critical";
export type ButtonSizes = "small" | "medium" | "large";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  variant: ButtonTypes;
  disabled?: boolean;
  size?: ButtonSizes;
  type?: "button" | "submit" | "reset";
}

export type { ButtonProps };
