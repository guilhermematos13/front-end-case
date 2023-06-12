import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
    img {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      background-blend-mode: multiply;
    }
  }
  .carousel .carousel-control-prev {
    display: none;
  }

  .carousel .carousel-control-next {
    display: none;
  }

  .carousel .carousel-caption {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 48px;
    text-align: left;
  }

  .carousel .carousel-indicators {
    height: 100%;
    width: 100%;
    display: flex;
    rotate: 90deg;
    margin-left: 33%;
  }
`;
