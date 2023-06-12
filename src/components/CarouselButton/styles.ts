import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 140px;
  background-color: ${(props) => props.theme['primary-500']};
  color: ${(props) => props.theme.white};
  font-size: 16px;
  padding: 12px 20px;
  border-radius: 4px;
  color: ${(props) => props.color};
  cursor: pointer;
  border: 0;

  :hover {
    background-color: ${(props) => props.theme['primary-600']};
  }
`;
