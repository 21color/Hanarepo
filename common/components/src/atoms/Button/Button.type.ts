type ButtonTypes = "primary" | "secondary" | "critical";

interface Button {
  onClick: () => void;
  title: string;
  buttonType: ButtonTypes;
  disabled?: boolean;
}

export type { Button };
