import styled from "@emotion/styled";
import { ButtonTypes, ButtonProps } from "./Button.type";
import { vars } from "@hanarepo/token/vars";

const Button = ({
  onClick,
  title,
  variant,
  disabled,
  fontSize = vars.fontSize.medium,
  fontWeight = vars.fontWeight.regular,
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} variant={variant}>
      <ButtonText fontSize={fontSize} fontWeight={fontWeight} variant={variant}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

const ButtonText = styled.span<{
  variant: ButtonTypes;
  fontSize: number;
  fontWeight: number;
}>`
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return vars.color.white;
      case "secondary":
        return vars.color.secondary;
      case "critical":
        return vars.color.warning;
      default:
        return vars.color.white;
    }
  }};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.fontWeight};
}`;

const StyledButton = styled.button<{ variant: ButtonTypes }>`
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return vars.color.primary;
      case "secondary":
      case "critical":
        return vars.color.white;
      default:
        return vars.color.primary;
    }
  }};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return vars.color.primary;
      case "secondary":
        return vars.color.secondary;
      case "critical":
        return vars.color.warning;
      default:
        return vars.color.primary;
    }
  }};
  padding: 10px 20px;
  text-align: center;
  border-radius: ${vars.rounded.medium}px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition-duration: 0.25s;
  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return vars.color.primaryDark;
        case "secondary":
          return vars.color.secondaryDark;
        case "critical":
          return vars.color.warningDark;
        default:
          return vars.color.primaryDark;
      }
    }};
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
