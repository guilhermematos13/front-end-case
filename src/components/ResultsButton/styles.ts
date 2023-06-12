import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 184px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme['grayscale-500']};

  :hover {
  }
`;
