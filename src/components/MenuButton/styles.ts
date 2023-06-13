import styled from 'styled-components';
import { MenuButtonProps } from './interface';

export const ButtonStyled = styled.button<MenuButtonProps>`
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 1rem;
  color: ${(props) =>
    props.isActive === 'true' ? props.theme['primary-500'] : props.color};
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme['primary-500']};
  }
`;
