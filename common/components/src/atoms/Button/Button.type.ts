type ButtonTypes = "primary" | "secondary" | "critical";

interface Button {
  onClick: () => void;
  children: React.ReactNode;
  title: string;
  buttonType: ButtonTypes;
}

export type { Button };
