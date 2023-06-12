import { UncontrolledExample } from '../../components/Carousel';
import { CarouselCard } from '../../components/CarouselCard';
import { Footer } from '../../components/Footer';
import { Container } from './styles';

export function Home() {
  return (
    <div>
      <Container>
        <UncontrolledExample />
        <h1>Home</h1>
      </Container>
      <Footer />
    </div>
  );
}
