import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from './styles';

import { CarouselData } from '../../data/CarouselData';
import { CarouselCard } from '../CarouselCard';

export function UncontrolledExample() {
  return (
    <Container>
      <Carousel>
        {CarouselData.map((carousel) => {
          return (
            <Carousel.Item>
              <CarouselCard
                image={carousel.image}
                title={carousel.title}
                subtitle={carousel.subtitle}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}
