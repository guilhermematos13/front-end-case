import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 75px;
  padding-right: 42px;
`;

export const CarouselContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 32px;

  svg {
    cursor: pointer;
  }
`;

export const TextContainer = styled.div``;

export const ItemsContainer = styled.div`
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto auto;
`;
