import { ReactNode } from 'react';

interface HeadingProps {
  size: 'lg' | 'md' | 'sm' | 'xs';
  tag: 'p' | 'span' | 'label';
  children: ReactNode;
  color: string;
  weight: 'bold' | 'normal';
  textDecoration?: 'none' | 'underline';
}
