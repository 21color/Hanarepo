/** @jsxImportSource @emotion/react */
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

import { DivProps, DivComponent } from "./Div.types";

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
      ...props
    }: DivProps,
    ref: ComponentPropsWithRef<E>["ref"],
  ) => {
    const Element = "div";

    return (
      <Element
        ref={ref}
        css={{
          position: "relative",
          width: size,
          ...props,
          "&:hover": _hover,
          "&:focus": _focus,
          "&:active": _active,
          "&::before": _before,
          "&::after": _after,
        }}
      >
        {children}
      </Element>
    );
  },
);
