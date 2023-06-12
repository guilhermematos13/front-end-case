import { Text } from '../Text';
import {
  Container,
  ContentContainer,
  IconContainer,
  TitleContainer,
} from './styles';
import { useTheme } from 'styled-components';
import GmailLogo from '../../assets/gmail.svg';
import OutlookLogo from '../../assets/outlook.svg';

export function CalendarCard() {
  const colors = useTheme();
  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <Text color={colors['primary-500']} size="lg" tag="p" weight="normal">
            ABR |{' '}
          </Text>
          <Text color={colors['primary-500']} size="lg" tag="p" weight="bold">
            23
          </Text>
        </TitleContainer>
        <Text color={colors['grayscale-900']} size="lg" tag="p" weight="normal">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint
        </Text>
        <Text color={colors['grayscale-500']} size="md" tag="p" weight="normal">
          00:00 - 23:59 (Horário de Brasília)
        </Text>
      </ContentContainer>
      <IconContainer>
        <img src={GmailLogo} alt="" />
        <img src={OutlookLogo} alt="" />
      </IconContainer>
    </Container>
  );
}
