import { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { DivProps, DivComponent } from "../Div/Div.types";
import { Div } from "../Div";

const _Flex: DivComponent = forwardRef(
  <Element extends ElementType>(
    props: DivProps<Element>,
    ref: ComponentPropsWithRef<Element>["ref"],
  ) => <Div {...props} display="flex" ref={ref} />,
);

const Flex = Object.assign(_Flex, { displayName: "Flex" });

const _FlexCenter: DivComponent = forwardRef(
  <Element extends ElementType>(
    props: DivProps<Element>,
    ref: ComponentPropsWithRef<Element>["ref"],
  ) => (
    <Flex {...props} alignItems="center" justifyContent="center" ref={ref} />
  ),
);

const FlexCenter = Object.assign(_FlexCenter, { displayName: "Flex.Center" });

const _FlexColumn: DivComponent = forwardRef(
  <Element extends ElementType>(
    { as = "div" as any, ...props }: DivProps<Element>,
    ref: ComponentPropsWithRef<Element>["ref"],
  ) => <Flex {...props} flexDirection="column" ref={ref} />,
);

const FlexColumn = Object.assign(_FlexColumn, {
  displayName: "Flex.Column",
});

const FlexNameSpace = Object.assign(Flex, {
  Center: FlexCenter,
  Column: FlexColumn,
});

export { FlexNameSpace as Flex };
