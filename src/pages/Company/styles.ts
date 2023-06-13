import styled from 'styled-components';

export const Container = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;

  img {
    height: 24rem;
    object-fit: cover;
    object-position: 100% 80%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0rem 25rem;
  margin-top: 4rem;

  @media (max-width: 425px) {
    padding: 0rem 2rem;

    h1 {
      font-size: 1.5rem;
    }

    h6 {
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 0rem 5rem;
  }

  @media (min-width: 1025px) {
    padding: 0rem 20rem;
  }
`;
