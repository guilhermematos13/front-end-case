import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  display: flex;
  gap: 10rem;

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-bottom: 2rem;
  }
`;
