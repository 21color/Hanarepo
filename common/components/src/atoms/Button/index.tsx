import React from "react";
import styled from "@emotion/styled";
import { Button as ButtonType } from "./Button.type";

type ButtonTypes = "primary" | "secondary" | "critical";

const Button = ({ onClick, children, title, buttonType }: ButtonType) => {
  return (
    <StyledButton onClick={onClick} buttonType={buttonType} title={title}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ buttonType: ButtonTypes }>`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export default Button;
