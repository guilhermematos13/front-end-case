import { ButtonHTMLAttributes } from 'react';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: string;
  isActive?: boolean;
}
