import { ReactNode } from 'react';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  color: string;
  weight?: 'lighter' | 'normal' | 'bold';
  isDisplay?: boolean;
}
