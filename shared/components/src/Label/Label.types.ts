import type { ElementType, PropsWithChildren } from 'react';
import type { BaseProps } from '../types';

export interface LabelProps<Element extends ElementType = 'span'> extends PropsWithChildren<BaseProps<Element>> {
  type?: 'primary' | ' secondary';
  text: string | number;
  bold?: boolean;
}
