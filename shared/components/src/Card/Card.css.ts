import { css } from "@emotion/react";
import { CardProps } from "./Card.type";
import { vars } from "@hanarepo/token/vars";

export const cardCSS = ({ size, align }: Pick<CardProps, "align" | "size">) =>
  css({
    paddingLeft: vars.spacing.medium,
    paddingRight: vars.spacing.medium,
    borderRadius: vars.rounded.medium + "px",
    boxShadow: vars.shadow.medium,
    backgroundColor: vars.color.semantic.white,
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing.medium,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    transition: "box-shadow 0.2s ease",

    ...(align === "center" && {
      alignItems: "center",
    }),

    ...(align === "right" && {
      alignItems: "flex-end",
    }),

    ...(size === "small" && {
      padding: vars.spacing.small,
      borderRadius: vars.rounded.small + "px",
    }),

    ...(size === "large" && {
      padding: vars.spacing.large,
      borderRadius: vars.rounded.large + "px",
    }),

    "&:hover": {
      boxShadow: vars.shadow.large,
    },
  });
