import styled from 'styled-components';

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
