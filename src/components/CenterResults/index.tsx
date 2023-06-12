import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import {
  CarouselContainer,
  Container,
  ItemsContainer,
  TextContainer,
} from './styles';
import { Text } from '../Text';
import ItrIcon from '../../assets/ItrIcon.svg';
import ApresentationIcon from '../../assets/ApresentationIcon.svg';
import IconCall from '../../assets/IconCall.svg';
import ResultsIcon from '../../assets/ResultsIcon.svg';
import XlsIcon from '../../assets/XlsIcon.svg';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { ResultsButton } from '../ResultsButton';

export function CenterResults() {
  const colors = useTheme();
  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Central de Resultados
      </Heading>
      <CarouselContainer>
        <CaretLeft size={24} color={colors['primary-500']} weight="bold" />
        <TextContainer>
          <Text
            color={colors['primary-700']}
            tag="span"
            size="lg"
            weight="bold"
          >
            1T
          </Text>
          <Text
            color={colors['primary-500']}
            tag="span"
            size="lg"
            weight="normal"
          >
            21
          </Text>
        </TextContainer>
        <CaretRight size={24} color={colors['primary-500']} weight="bold" />
      </CarouselContainer>
      <ItemsContainer>
        <ResultsButton icon={ItrIcon} title="ITR" />
        <ResultsButton
          icon={ApresentationIcon}
          title="Apresentação de Resultados"
        />
        <ResultsButton icon={ResultsIcon} title="Release de Resultados" />
        <ResultsButton icon={XlsIcon} title="Planilha de Apoio" />
        <ResultsButton icon={IconCall} title="Call de Resultados" />
      </ItemsContainer>
    </Container>
  );
}
