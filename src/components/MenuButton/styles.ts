import styled from 'styled-components';

export const ButtonStyled = styled.button<{ isActive: boolean }>`
  border: 1px solid transparent;
  width: auto;
  background-color: transparent;
  font-size: 1rem;
  color: ${(props) =>
    props.isActive ? props.theme['primary-500'] : props.color};
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme['primary-500']};
  }
`;
