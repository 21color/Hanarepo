import { css } from "@emotion/react";
import { vars } from "@hanarepo/token/vars";
import type { ElementType, Ref } from "react";
import { forwardRef } from "react";
import type { TypographyProps } from "./Typography.types";

const _Typography = <Element extends ElementType>(
  {
    as,
    children,
    variant = "body1",
    colorToken = "black",
    textAlign,
    whiteSpace,
    className,
    native,
    numberOfLines,
    sx,
    ...props
  }: TypographyProps<Element>,
  ref: Ref<Element>,
) => {
  const Element = as || "p";
  const elementRef = ref as Ref<HTMLParagraphElement>;

  const propsCSS = css({
    fontSize: vars.typography[variant].fontSize,
    fontWeight: vars.typography[variant].fontWeight,
    letterSpacing: vars.typography[variant].letterSpacing,
    color: colorToken && vars.color.semantic[colorToken],
    textAlign: textAlign || "left",
    whiteSpace: whiteSpace || "normal",
    ...(numberOfLines && {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitLineClamp: numberOfLines,
    }),
  });

  return (
    <Element
      className={className}
      ref={elementRef}
      css={{
        ...propsCSS,
        ...sx,
      }}
      {...props}
      {...native}
    >
      {children}
    </Element>
  );
};

export const Typography = forwardRef(_Typography);

Typography.displayName = "Typography";
