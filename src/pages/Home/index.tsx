import { Calendar } from '../../components/Calendar ';
import { UncontrolledExample } from '../../components/Carousel';
import { CenterResults } from '../../components/CenterResults';
import { Footer } from '../../components/Footer';
import { Mailing } from '../../components/Mailing';
import { News } from '../../components/News';
import { TalkWithRI } from '../../components/TalkWithRI';
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
        <News />
        <GridContainer>
          <TalkWithRI />
          <Mailing />
        </GridContainer>
      </Container>
      <Footer />
    </div>
  );
}
