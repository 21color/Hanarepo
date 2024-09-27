import { CSSObject } from "@emotion/react";
import { ElementType } from "react";

type As<T extends ElementType = "div"> = {
  as?: T;
};

export type BaseProps<Element extends ElementType = "div"> = As<Element> & {
  className?: string;

  sx?: CSSObject;
};
