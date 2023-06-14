import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Container, ContentContainer } from './styles';
import { CalendarCard } from '../CalendarCard';

export function Calendar() {
  const colors = useTheme();
  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Calendário de Eventos
      </Heading>
      <ContentContainer>
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
        <a href="#">Ver todos os eventos</a>
      </ContentContainer>
    </Container>
  );
}
