import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function MenuButton({ title, ...props }: MenuButtonProps) {
  return <ButtonStyled {...props}>{title}</ButtonStyled>;
}
