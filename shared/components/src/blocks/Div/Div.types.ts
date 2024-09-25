import { CSSObject } from "@emotion/react";
import {
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from "react";

export type DivProps = {
  _active?: CSSObject;
  _focus?: CSSObject;
  _hover?: CSSObject;
  _before?: CSSObject;
  _after?: CSSObject;
  size?: CSSProperties["width"];
} & PropsWithChildren &
  CSSProperties;

export type DivComponent = <D extends ElementType = "div">(
  props: DivProps & {
    ref?: ComponentPropsWithRef<D>["ref"];
  },
) => ReactElement | null;
