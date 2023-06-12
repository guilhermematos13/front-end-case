import { Calendar } from '../../components/Calendar ';
import { UncontrolledExample } from '../../components/Carousel';
import { CenterResults } from '../../components/CenterResults';
import { Footer } from '../../components/Footer';
import { Container, GridContainer } from './styles';

export function Home() {
  return (
    <div>
      <Container>
        <UncontrolledExample />
        <GridContainer>
          <CenterResults />
          <Calendar />
        </GridContainer>
      </Container>
      <Footer />
    </div>
  );
}
