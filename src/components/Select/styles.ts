import styled from 'styled-components';

export const SelectStyled = styled.select`
  border: 1px solid ${(props) => props.theme['grayscale-300']};
  padding: 0.5rem;
  width: 100%;
  color: ${(props) => props.theme['grayscale-900']};
  border-radius: 0.5rem;
`;
