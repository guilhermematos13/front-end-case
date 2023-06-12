import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

interface ResultsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: any;
}

export function ResultsButton({ title, icon, ...props }: ResultsButtonProps) {
  return (
    <ButtonStyled {...props}>
      <img src={icon} alt="" />
      {title}
    </ButtonStyled>
  );
}
