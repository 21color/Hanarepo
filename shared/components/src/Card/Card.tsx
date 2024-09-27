import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { ElementType } from "react";
import { CardProps } from "./Card.type";
import { cardCSS } from "./Card.css";

export const Card = <E extends ElementType>({
  children,
  size = "medium",
  align = "left",
  as,
  className,
  sx,
  ...props
}: CardProps<E>) => {
  const Element = as || "div";

  return (
    <Element
      className={className}
      css={[cardCSS({ size, align }), sx]}
      {...props}
    >
      {children}
    </Element>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
