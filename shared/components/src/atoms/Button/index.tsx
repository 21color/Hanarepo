import styled from "@emotion/styled";
import { Button as ButtonType } from "./Button.type";

type ButtonTypes = "primary" | "secondary" | "critical";

const Button = ({ onClick, title, buttonType, disabled }: ButtonType) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} buttonType={buttonType}>
      <ButtonText buttonType={buttonType}>{title}</ButtonText>
    </StyledButton>
  );
};

const ButtonText = styled.span<{ buttonType: ButtonTypes }>`
  color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return "white";
      case "secondary":
        return "#007bff";
      case "critical":
        return "white";
      default:
        return "white";
    }
  }};
`;

const StyledButton = styled.button<{ buttonType: ButtonTypes }>`
  background-color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "white";
      case "critical":
        return "#dc3545";
      default:
        return "#007bff";
    }
  }};
  border: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return "1px solid #007bff";
      case "secondary":
        return "1px solid #007bff";
      case "critical":
        return "1px solid #dc3545";
      default:
        return "1px solid #007bff";
    }
  }};
  color: white;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.25s;

  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
