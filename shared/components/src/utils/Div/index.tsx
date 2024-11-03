/** @jsxImportSource @emotion/react */
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

import { DivComponent, DivProps } from "./Div.types";

export const Div: DivComponent = forwardRef(
  <E extends ElementType>(
    {
      _active,
      _focus,
      _hover,
      _before,
      _after,
      size,
      children,
      native,
      as,
      sx,
      ...props
    }: DivProps<E>,
    ref: ComponentPropsWithRef<E>["ref"],
  ) => {
    const Element = as || "div";

    return (
      <Element
        ref={ref}
        css={{
          position: "relative",
          width: size,
          "&:hover": _hover,
          "&:focus": _focus,
          "&:active": _active,
          "&::before": _before,
          "&::after": _after,
          ...props,
          ...sx,
        }}
        {...native}
      >
        {children}
      </Element>
    );
  },
);
