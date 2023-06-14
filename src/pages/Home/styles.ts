import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  padding: 0rem 4.5rem;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: auto auto;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
