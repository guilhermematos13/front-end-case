import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 16px;
  color: ${(props) => props.theme['grayscale-900']};
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme['grayscale-900']};
  }
`;
