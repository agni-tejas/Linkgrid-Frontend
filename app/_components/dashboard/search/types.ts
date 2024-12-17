import { TextareaHTMLAttributes } from 'react';

export interface SearchInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'> {
  'aria-label'?: string;
}