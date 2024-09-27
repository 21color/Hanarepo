import { ButtonProps } from "./Button.type";
import { ButtonObject, ButtonBase } from "./Button.css";
import { css } from "@emotion/react";
import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";

type ButtonComponent = <E extends ElementType = "button">(
  props: ButtonProps<E> & {
    ref?: ComponentPropsWithRef<E>["ref"];
  },
) => ReactNode | null;

const Button: ButtonComponent = forwardRef(
  <E extends ElementType>(
    {
      onClick,
      title,
      variant,
      type,
      disabled,
      size = "medium",
      className,
      sx,
      fullWidth,
      as,
      ...props
    }: ButtonProps<E>,
    ref: ComponentPropsWithRef<E>["ref"],
  ) => {
    const buttonStyle = css`
      ${fullWidth ? { width: "100%" } : {}}
      ${ButtonBase}
      ${ButtonObject[variant]}
      ${ButtonObject[size]}

      &:disabled {
        ${ButtonObject.disabled}
      }
    `;

    const Element = as || "button";

    return (
      <Element
        ref={ref}
        className={className}
        css={buttonStyle}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...props}
      >
        <span>{title}</span>
      </Element>
    );
  },
);

const ButtonNameSpace = Object.assign(Button, {
  displayName: "Button",
});

export { ButtonNameSpace as Button };
