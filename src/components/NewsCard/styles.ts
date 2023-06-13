import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;

  img {
    width: 20rem;
    height: 13.5rem;
    margin-bottom: 1rem;
  }

  a {
    margin-top: 1rem;
    color: ${(props) => props.theme['grayscale-900']};
  }
`;
