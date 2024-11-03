import type { ChangeEventHandler } from "react";
import { Flex } from '../utils';
import { checkboxIconCSS } from './Checkbox.css';

import type { CheckboxIconProps, CheckboxProps } from './Checkbox.types';

export const CheckboxIcon = ({ isIndeterminate }: CheckboxIconProps) => {
  const path = isIndeterminate ? "M2.5 6H9.5" : "M9.5 3L4.6875 8.5L2.5 6";

  return (
    <span className="checkbox-icon" css={checkboxIconCSS}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="2"
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
      <input type="checkbox" data-blind onChange={_onChange} {...props} />
      <CheckboxIcon isIndeterminate={isIndeterminate} />
    </Flex>
  );
};
