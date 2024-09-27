import { vars } from "@hanarepo/token/vars";
import { css } from "@emotion/react";

const PrimaryButton = css`
  border: none;
  color: ${vars.color.white};
  background-color: ${vars.color.primary};
  &:hover {
    background-color: ${vars.color.primaryLight};
  }
  &:active {
    background-color: ${vars.color.primaryDark};
  }
`;

const SecondaryButton = css`
  border: none;
  background-color: ${vars.color.secondary};
  color: ${vars.color.white};

  &:hover {
    background-color: ${vars.color.secondaryLight};
  }
  &:active {
    background-color: ${vars.color.secondaryDark};
  }
`;

const CriticalButton = css`
  border: none;
  color: ${vars.color.white};
  background-color: ${vars.color.error};

  &:hover {
    background-color: ${vars.color.errorLight};
  }
  &:active {
    background-color: ${vars.color.errorDark};
  }
`;

const DisabledButton = css`
  border: none;
  color: ${vars.color.white};
  background-color: ${vars.color.gray[400]};
  cursor: not-allowed;
`;

const SmallButton = css`
  padding: ${vars.spacing.small} ${vars.spacing.medium};
  font-size: ${vars.fontSize.small};
  border-radius: ${vars.rounded.small}px;
`;

const MediumButton = css`
  padding: ${vars.spacing.medium} ${vars.spacing.large};
  font-size: ${vars.fontSize.medium};
  border-radius: ${vars.rounded.medium}px;
`;

const LargeButton = css`
  padding: ${vars.spacing.large} ${vars.spacing.xlarge};
  font-size: ${vars.fontSize.large};
  border-radius: ${vars.rounded.large}px;
`;

const XLargeButton = css`
  padding: ${vars.spacing.xlarge} ${vars.spacing.xlarge};
  font-size: ${vars.fontSize.xlarge};
  border-radius: ${vars.rounded.xlarge}px;
`;

export const ButtonBase = css`
  border-radius: ${vars.rounded.small};
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
`;

export const ButtonObject = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  critical: CriticalButton,
  disabled: DisabledButton,
  small: SmallButton,
  medium: MediumButton,
  large: LargeButton,
  xlarge: XLargeButton,
};
