import { Typography } from '../Typography';
import type { TypographyProps } from '../Typography/Typography.types';

export const CheckboxHelperText = ({ children, ...props }: Omit<TypographyProps<"p">, "variant">) => (
  <Typography 
    native={{
      // style 제어
      "data-checkbox-helper-text": true
    }}
   variant="body1"
   {...props}
   >
    {children}
   </Typography>
)
