import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const ContentContainer = styled.div`
  margin-top: 2.5rem;

  a {
    color: ${(props) => props.theme['grayscale-900']};
  }
`;
