import { ButtonProps } from "./Button.type";
import { ButtonObject, ButtonBase } from "./Button.css";
import { css } from "@emotion/react";

const Button = ({
  onClick,
  title,
  variant,
  type,
  disabled,
  size = "medium",
}: ButtonProps) => {
  const buttonStyle = css`
    ${ButtonBase}
    ${ButtonObject[variant]}
    ${ButtonObject[size]}

    &:disabled {
      ${ButtonObject.disabled}
    }
  `;

  return (
    <button type={type} css={buttonStyle} disabled={disabled} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default Button;
