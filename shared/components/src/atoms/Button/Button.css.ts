import { css } from "@emotion/react";
import { vars } from "@hanarepo/token/vars";
import styled from "@emotion/styled";
import { ButtonSizes, ButtonTypes } from './Button.type';

export const StyledButton = styled.button<{
  variant: ButtonTypes;
  size: ButtonSizes;
}>`
  border-radius: 5px;
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
  border-width: 1;
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
        return `${vars.spacing.small} ${vars.spacing.medium}`;
      case "medium":
        return `${vars.spacing.medium} ${vars.spacing.large}`;
      case "large":
        return `${vars.spacing.large} ${vars.spacing.xlarge}`;
      default:
        return `${vars.spacing.medium} ${vars.spacing.large}`;
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return `${vars.fontSize.small}`;
      case "medium":
        return `${vars.fontSize.medium}`;
      case "large":
        return `${vars.fontSize.large}`;
      default:
        return `${vars.fontSize.medium}`;
    }
  }};
  text-align: center;
  border-radius: ${vars.rounded.medium};
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
