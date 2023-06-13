import { ButtonStyled } from './styles';
import { MenuButtonProps } from './interface';

export function MenuButton({
  title,
  color,
  isActive = 'false',
  ...props
}: MenuButtonProps) {
  return (
    <ButtonStyled {...props} color={color} isActive={isActive}>
      {title}
    </ButtonStyled>
  );
}
