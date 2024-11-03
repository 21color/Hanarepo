
import { vars } from '@hanarepo/token/vars';
import { Typography } from '../Typography';
import { Flex } from '../utils';
import { Checkbox } from './Checkbox';
import { checkboxLabelCSS } from './Checkbox.css';
import type { CheckboxLabelProps } from './Checkbox.types';

export const CheckboxLabel = ({
  children,
  iconPosition = "left",
  label,
  sx,
  ...props
}: CheckboxLabelProps) => {
  
  return (
    <Flex 
      as="label"
      alignItems='center'
      gap={vars.spacing.small}
      native={{
        "data-checkbox-icon-position": iconPosition,
      }}
      css={[checkboxLabelCSS({ iconPosition }), sx]}

      >
        {children || <Checkbox {...props} />}

        {label && (
          <Typography variant="caption"
            native={{
              "data-checkbox-label": true
            }}
            >
            {label}
            </Typography>
        )}
      </Flex>
  
  );

};
