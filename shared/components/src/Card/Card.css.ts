import { css } from "@emotion/react";
import { vars } from "@hanarepo/token/vars";
import { CardProps } from "./Card.type";

const returnCardSize = (size: CardProps["size"]) => {
  if (size === "small") {
    return {
      padding: `${vars.spacing.large} ${vars.spacing.medium}`,
      borderRadius: vars.rounded.medium + "px",
      maxWidth: "600px",
    };
  }

  if (size === "large") {
    return {
      padding: `${vars.spacing.xxlarge} ${vars.spacing.large}`,
      borderRadius: vars.rounded.large + "px",
      maxWidth: "1200px",
    };
  }

  return {
    padding: `${vars.spacing.xlarge} ${vars.spacing.large}`,
    borderRadius: vars.rounded.medium + "px",
    maxWidth: "900px",
  };
}

export const cardCSS = ({ size, align }: Pick<CardProps, "align" | "size">) =>
  css({
    boxShadow: vars.shadow.medium,
    backgroundColor: vars.color.semantic.white,
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing.large,
    width: "100%",
    overflow: "hidden",
    transition: "box-shadow 0.2s ease",

    ...(align === "center" && {
      alignItems: "center",
    }),

    ...(align === "right" && {
      alignItems: "flex-end",
    }),

    ...returnCardSize(size),
    "&:hover": {
      boxShadow: vars.shadow.large,
    },
  });
