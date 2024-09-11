import { vars } from "@hanarepo/token/vars";
import { css } from "@emotion/react";

const PrimaryButton = css`
  color: ${vars.color.white};
  background-color: ${vars.color.primary};
  border-color: ${vars.color.primary};
  &:hover {
    background-color: ${vars.color.primaryLight};
  }
  &:active {
    background-color: ${vars.color.primaryDark};
  }
`;

const SecondaryButton = css`
  color: ${vars.color.secondary};
  background-color: ${vars.color.white};
  border-color: ${vars.color.secondary};
  &:hover {
    background-color: ${vars.color.secondaryLight};
  }
  &:active {
    background-color: ${vars.color.secondaryDark};
  }
`;

const CriticalButton = css`
  color: ${vars.color.error};
  background-color: ${vars.color.white};
  border-color: ${vars.color.error};
  &:hover {
    background-color: ${vars.color.errorLight};
  }
  &:active {
    background-color: ${vars.color.errorDark};
  }
`;

const DisabledButton = css`
  color: ${vars.color.white};
  background-color: ${vars.color.gray};
  border-color: ${vars.color.gray};
`;

const SmallButton = css`
  padding: ${vars.spacing.small} ${vars.spacing.medium};
  font-size: ${vars.fontSize.small};
`;

const MediumButton = css`
  padding: ${vars.spacing.medium} ${vars.spacing.large};
  font-size: ${vars.fontSize.medium};
`;

const LargeButton = css`
  padding: ${vars.spacing.large} ${vars.spacing.xlarge};
  font-size: ${vars.fontSize.large};
`;

const XLargeButton = css`
  padding: ${vars.spacing.xlarge} ${vars.spacing.xlarge};
  font-size: ${vars.fontSize.xlarge};
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
