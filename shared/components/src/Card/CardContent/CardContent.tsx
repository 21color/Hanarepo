import { CardContentProps } from "./CardContent.types";
import type { ElementType } from "react";
import { Div } from "../../utils";
import { CardContentCSS } from "./CardContent.css";

export const CardContent: <Element extends ElementType>({
  sx,
  children,
  ...props
}: CardContentProps<Element>) => JSX.Element = ({ sx, children, ...props }) => {
  return (
    <Div
      css={{
        CardContentCSS,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Div>
  );
};
