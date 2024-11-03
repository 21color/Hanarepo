import { vars } from '@hanarepo/token/vars';
import { forwardRef, type ElementType, type Ref } from 'react';
import { Typography } from '../Typography';
import type { LabelProps } from './Label.types';

const _Label = <Element extends ElementType>(
  { type = "primary", className, text, bold = false, sx, as, children} : LabelProps<Element>,
  ref: Ref<HTMLElement>,
) => {

  const Element = as || "label";

  return (
    <Element 
      ref={ ref as any}
      className={className}
      css={{
        display: "flex",
        gap: vars.spacing.small,
        alignItems: "center",
        sx,
      }}
      >
        <Typography 
          variant={ bold ? "labelBold" : "label" }
          colorToken={type === "primary" ? "text" : "textSub"}
          >
            {text}
          </Typography>
      </Element>
  )
};

export const Label = forwardRef(_Label);

Label.displayName = "Label";
