import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 4.5rem;
  padding-right: 2.5rem;
`;

export const CarouselContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 2rem;

  svg {
    cursor: pointer;
  }
`;

export const TextContainer = styled.div``;

export const ItemsContainer = styled.div`
  gap: 1rem;
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: auto auto auto;
`;
