import type { ElementType, PropsWithChildren } from "react";
import type { BaseProps } from "../types";

export interface CardProps<Element extends ElementType = "div">
  extends PropsWithChildren<BaseProps<Element>> {
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right";
}
