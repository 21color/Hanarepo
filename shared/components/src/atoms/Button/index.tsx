import { ButtonProps } from "./Button.type";
import { StyledButton } from "./Button.css";

const Button = ({
  onClick,
  title,
  variant,
  type,
  disabled,
  size = "medium",
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      size={size}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      <span>{title}</span>
    </StyledButton>
  );
};

export default Button;
