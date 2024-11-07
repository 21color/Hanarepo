import type { ComponentProps, PropsWithChildren } from 'react';
import { BaseProps } from '../types';

/**
 * CheckboxProps 
 * checkbox 컴포넌트 props 타입 정의
 * @param {boolean} isIndeterminate - 인디케이터 상태인지 여부
 * @sx {BaseProps['sx']} - CSS properties
 * @onChangeChecked {(checked: boolean) => void} - 체크박스 체크 상태 변경 이벤트
 * @param {string} value - 체크박스 값
 */

// input에서 value와 children, type을 제외한 나머지 속성을 가져옴
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

export interface CheckboxLabelProps extends PropsWithChildren<BaseProps> {
  iconPosition?: 'left' | 'right';
  label?: string;
}
