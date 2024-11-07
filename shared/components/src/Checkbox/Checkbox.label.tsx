
import { vars } from '@hanarepo/token/vars';
import { Typography } from '../Typography';
import { Flex } from '../utils';
import { Checkbox } from './Checkbox';
import { checkboxLabelCSS } from './Checkbox.css';
import type { CheckboxLabelProps } from './Checkbox.types';


/**
 * checkbox와 label을 함께 렌더링
 */
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
      css={[checkboxLabelCSS({ iconPosition }), sx]}
      native={{
        "data-checkbox-icon-position": iconPosition,
      }}
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
