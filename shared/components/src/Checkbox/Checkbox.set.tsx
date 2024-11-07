import { vars } from '@hanarepo/token/vars';
import { Flex } from '../utils';
import { CheckboxSetProps } from './Checkbox.types';


export const CheckboxSet = ({
  children, sx
}: CheckboxSetProps) => {
  return (
    <Flex.Column
      gap={vars.spacing.small}
      sx={{
        '&:has([data-checkbox-icon-position="left"]) [data-checkbox-helper-text]': {
          paddingInlineStart: vars.spacing.xxxlarge,
        }, 
        "&:has(input:disabled) [data-checkbox-helper-text]": {
          color: vars.color.semantic.textDisabled,
        },
        "& [data-checkbox-helper-text]": {
          color: vars.color.semantic.secondary,
        },
        ...sx
      }}
    >
      {children}
    </Flex.Column>
  )
}


