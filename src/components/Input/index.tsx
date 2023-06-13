import { InputHTMLAttributes } from 'react';
import { InputStyled } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input({ placeholder, ...props }: InputProps) {
  return <InputStyled placeholder={placeholder} {...props} />;
}
