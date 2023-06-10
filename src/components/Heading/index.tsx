import { HeadingProps } from './interface';
import { HeadingStyled } from './styles';

export function Heading({
  tag,
  children,
  color,
  weight = 'normal',
  isDisplay,
}: HeadingProps) {
  return (
    <HeadingStyled
      tag={tag}
      color={color}
      weight={weight}
      isDisplay={isDisplay}
    >
      {children}
    </HeadingStyled>
  );
}
