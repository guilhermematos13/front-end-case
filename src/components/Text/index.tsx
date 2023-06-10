import { HeadingProps } from './interface';
import { TextStyled } from './styles';

export function Text({
  tag,
  children,
  color,
  size = 'md',
  weight = 'normal',
  textDecoration = 'none',
}: HeadingProps) {
  return (
    <TextStyled
      tag={tag}
      color={color}
      size={size}
      weight={weight}
      textDecoration={textDecoration}
    >
      {children}
    </TextStyled>
  );
}
