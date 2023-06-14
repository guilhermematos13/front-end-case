import React, { ForwardedRef, InputHTMLAttributes } from 'react';
import { InputStyled } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = React.forwardRef(
  ({ placeholder, ...props }: InputProps, ref: ForwardedRef<never>) => (
    <InputStyled placeholder={placeholder} {...props} {...ref} />
  )
);
