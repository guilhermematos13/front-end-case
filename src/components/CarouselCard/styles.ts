import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  max-height: 28.5rem;

  img {
    width: 100%;
    height: 28.5rem;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  padding: 0rem 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
