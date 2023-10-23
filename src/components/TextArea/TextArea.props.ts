import { ColorProp, MarginProp, RadiusProp } from '@/utils';
import React from 'react';
import { FormChildProps } from '../Form/Form.props';

export interface TextAreaProps extends FormChildProps, Omit<React.HTMLProps<HTMLTextAreaElement>, 'size' | 'color'>, MarginProp, RadiusProp, ColorProp {
  variant?: 'solid' | 'ghost' | 'outlined';
  size?: 1 | 2 | 3 | 4 | 5; // Number of visible lines

  resizable?: boolean;

  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
}
