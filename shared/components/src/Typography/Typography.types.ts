import type { CSSProperties, ElementType, PropsWithChildren } from "react";
import type { BaseProps } from "../types";
import { vars } from "@hanarepo/token/vars";

export type TypographyProps<Element extends ElementType> = PropsWithChildren<
  BaseProps<Element>
> & {
  /**
   * typography variant를 설정합니다.
   */
  variant: keyof typeof vars.typography;
  /**
   * typography color를 설정합니다.
   */
  colorToken?: keyof typeof vars.color.semantic;

  textAlign?: CSSProperties["textAlign"];
  whiteSpace?: CSSProperties["whiteSpace"];

  /**
   * line-clamp를 설정합니다.
   */
  numberOfLines?: number;
};
