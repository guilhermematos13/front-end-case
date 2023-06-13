import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 11.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme['grayscale-500']};

  :hover {
  }
`;
