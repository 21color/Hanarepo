import styled from "@emotion/styled";
import { ButtonTypes, ButtonProps, ButtonSizes } from "./Button.type";
import { vars } from "@hanarepo/token/vars";

const Button = ({
  onClick,
  title,
  variant,
  disabled,
  size = "medium",
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      <span>{title}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: ButtonTypes; size: ButtonSizes }>`
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return vars.color.white;
      case "secondary":
        return vars.color.secondary;
      case "critical":
        return vars.color.error;
      default:
        return vars.color.white;
    }
  }};
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
        return vars.color.error;
      default:
        return vars.color.primary;
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return `${vars.spacing.small}px ${vars.spacing.medium}px`;
      case "medium":
        return `${vars.spacing.medium}px ${vars.spacing.large}px`;
      case "large":
        return `${vars.spacing.large}px ${vars.spacing.xlarge}px`;
      default:
        return `${vars.spacing.medium}px ${vars.spacing.large}px`;
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return `${vars.fontSize.small}px`;
      case "medium":
        return `${vars.fontSize.medium}px`;
      case "large":
        return `${vars.fontSize.large}px`;
      default:
        return `${vars.fontSize.medium}px`;
    }
  }};
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
          return vars.color.primaryLight;
        case "secondary":
          return vars.color.secondaryLight;
        case "critical":
          return vars.color.errorLight;
        default:
          return vars.color.primaryLight;
      }
    }};
  }

  &:active {
    color: ${vars.color.white};
    background-color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return vars.color.primaryDark;
        case "secondary":
          return vars.color.secondaryDark;
        case "critical":
          return vars.color.errorDark;
        default:
          return vars.color.primaryDark;
      }
    }};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #666;
    border-color: #ccc;
  }
`;

export default Button;
