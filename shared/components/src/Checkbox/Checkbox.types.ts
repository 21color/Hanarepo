import type { ComponentProps, PropsWithChildren } from 'react';
import { BaseProps } from '../types';


export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'value' | 'children' | 'type'> {
  sx?: BaseProps['sx'];
  isIndeterminate?: boolean;
  onChangeChecked?: (checked: boolean) => void;
  value?: string;
}

export interface CheckboxIconProps {
  isIndeterminate?: boolean;
}

export interface CheckboxSetProps extends PropsWithChildren<BaseProps> {
  sx?: BaseProps['sx'];
}

