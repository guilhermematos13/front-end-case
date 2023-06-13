import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 8.75rem;
  background-color: ${(props) => props.theme['primary-500']};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  color: ${(props) => props.color};
  cursor: pointer;
  border: 0;

  :hover {
    background-color: ${(props) => props.theme['primary-600']};
  }
`;
