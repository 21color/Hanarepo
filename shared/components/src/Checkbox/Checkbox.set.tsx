import { vars } from '@hanarepo/token/vars';
import { Flex } from '../utils';
import { Label } from '../Label/Label';
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
      }}
  )
}
