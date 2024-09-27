import { CardHeaderCSS } from "./CardHeader.css";
import { CardHeaderProps } from "./CardHeader.types";
import { Flex } from "../../utils";
import { ElementType } from "react";
import { Typography } from "../../Typography";

export const CardHeader: <Element extends ElementType>({
  sx,
  title,
  subtitle,
  children,
  ...props
}: CardHeaderProps<Element>) => JSX.Element = ({
  sx,
  title,
  subtitle,
  children,
  ...props
}) => {
  return (
    <Flex
      css={{
        CardHeaderCSS,
        ...sx,
      }}
      {...props}
    >
      <Flex.Column>
        <Typography variant="headline3">{title}</Typography>
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      </Flex.Column>
      {children}
    </Flex>
  );
};
