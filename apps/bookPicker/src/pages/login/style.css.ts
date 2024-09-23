import { style } from "@vanilla-extract/css";
import { vars } from "@hanarepo/token/vars";

export const loginContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: vars.color.sky[200],
  flexDirection: "column",
  gap: vars.spacing.large,
});

export const flexColumn = style({
  display: "flex",
  width: "200px",
  flexDirection: "column",
  gap: vars.spacing.medium,
});

export const input = style({
  padding: vars.spacing.medium,
  fontSize: vars.fontSize.medium,
  border: `1px solid ${vars.color.gray[400]}`,
  borderRadius: vars.rounded.medium,
  transition: "border-color 0.2s",

  ":hover": {
    borderColor: vars.color.gray[500],
  },
  ":focus": {
    borderColor: vars.color.primary,
  },
});
