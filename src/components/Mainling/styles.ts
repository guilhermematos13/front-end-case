import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';

export const Container = styled.div`
  padding-left: 4.5rem;
  padding-right: 2.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    background-color: ${(props) => props.theme['grayscale-200']};
    padding: 0.5rem;
    border: 0;
    border-radius: 4px;
    margin-top: 1rem;

    :hover {
      background-color: ${(props) => props.theme['grayscale-300']};
      transition-duration: 300ms;
    }
  }
`;

export const CheckboxStyled = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme['primary-500']};
`;

export const CheckboxIndicatorStyled = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme['grayscale-900']};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
