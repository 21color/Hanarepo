import { ElementType } from "react";
import { cardCSS } from "./Card.css";
import { CardProps } from "./Card.type";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";



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
