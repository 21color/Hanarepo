import type { ChangeEventHandler } from "react";
import { Flex } from '../utils';
import { checkboxIconCSS } from './Checkbox.css';
import { CheckboxHelperText } from './Checkbox.helperText';
import { CheckboxLabel } from './Checkbox.label';
import { CheckboxSet } from './Checkbox.set';

import type { CheckboxIconProps, CheckboxProps } from './Checkbox.types';

export const CheckboxIcon = ({ isIndeterminate }: CheckboxIconProps) => {

  const path = isIndeterminate ? "M2.5 6H9.5" : "M9.5 3L4.6875 8.5L2.5 6";

  return (
    <span className='checkbox-icon-wrapper' css={checkboxIconCSS}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 12 12"
        className="checkbox-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
};

export const Checkbox = ({
  isIndeterminate,
  onChange,
  onChangeChecked,
  ...props
}: CheckboxProps) => {
  const _onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e);
    onChangeChecked?.(e.target.checked);
  }

  return (
    <Flex display='inline-flex' as="label" native={{ htmlFor: props.id}}>
      <input type="checkbox" data-blind onChange={_onChange} {...props}
      {...props} />
      <CheckboxIcon isIndeterminate={isIndeterminate} />
    </Flex>
  );
};

Checkbox.Label = CheckboxLabel;
Checkbox.HelperText = CheckboxHelperText;
Checkbox.Set = CheckboxSet;
export default Checkbox;


  