import { HeadingProps } from './interface';
import { HeadingStyled } from './styles';

export function Heading({
  tag,
  children,
  color,
  weight = 'normal',
  display = 'false',
}: HeadingProps) {
  return (
    <HeadingStyled tag={tag} color={color} weight={weight} display={display}>
      {children}
    </HeadingStyled>
  );
}
