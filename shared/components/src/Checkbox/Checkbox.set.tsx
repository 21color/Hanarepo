import { vars } from '@hanarepo/token/vars';
import { Label } from '../Label/Label';
import { Flex } from '../utils';
import { Checkbox } from './Checkbox';
import { CheckboxHelperText } from './Checkbox.helperText';
import { CheckboxLabel } from './Checkbox.label';
import { CheckboxSetProps } from './Checkbox.types';



const CheckboxSet = ({
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

const CheckboxNameSpace = Object.assign(Checkbox, {
  Set: CheckboxSet,
  Label: CheckboxLabel,
  HelperText: CheckboxHelperText,
  Legend: Label,
});

export { CheckboxNameSpace as Checkbox };
  

