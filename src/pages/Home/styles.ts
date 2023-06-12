import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 42px;
  grid-template-columns: auto auto;
  margin-top: 32px;
`;
