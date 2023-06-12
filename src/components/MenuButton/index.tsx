import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: string;
}

export function MenuButton({ title, color, ...props }: MenuButtonProps) {
  return (
    <ButtonStyled {...props} color={color}>
      {title}
    </ButtonStyled>
  );
}
