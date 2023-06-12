import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

interface CarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function CarouselButton({ title, ...props }: CarouselButtonProps) {
  return <ButtonStyled {...props}>{title}</ButtonStyled>;
}
