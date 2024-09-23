import { style } from "@vanilla-extract/css";
import { vars } from "@hanarepo/token/vars";

export const homeContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: vars.color.sky[200],
  flexDirection: "column",
  gap: vars.spacing.large,
});
