import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Container } from './styles';

export function Header() {
  const colors = useTheme();

  return (
    <Container>
      <Heading color={colors['primary-600']} tag="h3" weight="bold" isDisplay>
        Oiii
      </Heading>
    </Container>
  );
}
