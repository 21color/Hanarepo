import { ElementType } from "react";
import { Typography } from "../../Typography";
import { Flex } from "../../utils";
import { CardHeaderCSS } from "./CardHeader.css";
import { CardHeaderProps } from "./CardHeader.types";

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
      <Flex.Column gap={10}>
        <Typography variant="headline4">{title}</Typography>
        {subtitle && <Typography variant="subtitle2">{subtitle}</Typography>}
      </Flex.Column>
      {children}
    </Flex>
  );
};
