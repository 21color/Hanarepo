import { CSSObject } from "@emotion/react";
import {
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  PropsWithChildren,
  ReactNode,
} from "react";
import { BaseProps } from "../../types";

export type DivProps<Element extends ElementType> = BaseProps<Element> & {
  _active?: CSSObject;
  _focus?: CSSObject;
  _hover?: CSSObject;
  _before?: CSSObject;
  _after?: CSSObject;
  size?: CSSProperties["width"];
} & PropsWithChildren &
  CSSProperties;

export type DivComponent = <D extends ElementType = "div">(
  props: DivProps<D> & {
    ref?: ComponentPropsWithRef<D>["ref"];
  },
) => ReactNode | null;
