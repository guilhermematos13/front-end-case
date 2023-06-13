import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 1px solid ${(props) => props.theme['grayscale-300']};
  padding: 0.5rem;
  color: ${(props) => props.theme['grayscale-900']};
  border-radius: 0.5rem;

  :focus {
    border: 1px solid ${(props) => props.theme['primary-500']};
  }
`;
