import { CSSObject } from "@emotion/react";
import {
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  PropsWithChildren,
  ReactNode,
} from "react";
import { BaseProps } from "../../types";

export interface DivProps<Element extends ElementType> extends BaseProps<Element>, CSSProperties, PropsWithChildren {
  _active?: CSSObject;
  _focus?: CSSObject;
  _hover?: CSSObject;
  _before?: CSSObject;
  _after?: CSSObject;
  size?: CSSProperties["width"];
}


export interface DivComponent {
  <D extends ElementType = "div">(
    props: DivProps<D> & {
      ref?: ComponentPropsWithRef<D>["ref"];
    },
  ): ReactNode | null;
}
