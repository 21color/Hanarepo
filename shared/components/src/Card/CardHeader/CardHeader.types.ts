import type { ElementType } from "react";
import { DivProps } from "../../utils/Div/Div.types";

export type CardHeaderProps<Element extends ElementType> = DivProps<Element> & {
  title: string;
  subtitle?: string;
};
