import { ElementType, HTMLAttributes } from "react";
import { BaseProps } from "../types";

/**
 * ButtonTypes
 * 버튼의 타입을 설정합니다.
 */
export type ButtonTypes = "primary" | "secondary" | "critical";
/**
 * ButtonSizes
 * 버튼의 크기를 설정합니다.
 */
export type ButtonSizes = "small" | "medium" | "large";

export type ButtonComponentProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  /**
   * 버튼의 타이틀을 설정합니다.
   */
  title: string;
  /**
   * 버튼의 variant를 설정합니다.
   */
  variant: ButtonTypes;
  /**
   * 버튼의 비활성화 여부를 설정합니다.
   */
  disabled?: boolean;
  /**
   * 버튼의 크기를 설정합니다.
   */
  size?: ButtonSizes;
  /**
   * 버튼의 타입을 설정합니다.
   */
  type?: "button" | "submit" | "reset";
  /**
   * 버튼의 width를 100%로 설정합니다.
   */
  fullWidth?: boolean;
};

export type ButtonProps<Element extends ElementType> = BaseProps<Element> &
  ButtonComponentProps;
