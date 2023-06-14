import { ReactNode } from 'react';
import { ErrorMessageText } from './styled';

interface ErrorMessageProps {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <ErrorMessageText>{children}</ErrorMessageText>;
};
