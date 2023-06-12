import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../assets/photo2.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heading } from '../Heading';
import { useTheme } from 'styled-components';
import { Text } from '../Text';
import { Container } from './styles';
import { CarouselButton } from '../CarouselButton';
import { CarouselData } from '../../data/CarouselData';
import { CarouselCard } from '../CarouselCard';

export function UncontrolledExample() {
  const colors = useTheme();

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

      {/* <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={photo1} alt="First slide" />
          <Carousel.Caption>
            <Heading color={colors.white} isDisplay tag="h3" weight="bold">
              Divulgação de resultados
            </Heading>
            <Text color={colors.white} size="lg" weight="normal" tag="p">
              Confira os últimos resultados da companhia
            </Text>
            <CarouselButton title="Saiba Mais" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </Container>
  );
}
