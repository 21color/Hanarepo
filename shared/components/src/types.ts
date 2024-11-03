import { CSSObject } from "@emotion/react";
import { ComponentPropsWithoutRef, ElementType } from "react";

type DataAttributeKey = `data-${string}`;

type DataAttribute = {
  [key in DataAttributeKey]: string | boolean;
};

type As<T extends ElementType = "div"> = {
  as?: T;
  native?: DataAttribute & ComponentPropsWithoutRef<T>;
};

export type BaseProps<Element extends ElementType = "div"> = As<Element> & {
  className?: string;

  sx?: CSSObject;
};
