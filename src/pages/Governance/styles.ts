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
`;
