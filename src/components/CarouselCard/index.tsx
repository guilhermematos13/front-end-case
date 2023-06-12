import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Container, TextContainer } from './styles';
import Image from '../../assets/photo1.svg';
import { CarouselButton } from '../CarouselButton';

interface CarouselCardProps {
  title: string;
  subtitle: string;
  image: any;
}

export function CarouselCard({ title, subtitle, image }: CarouselCardProps) {
  const colors = useTheme();

  return (
    <Container>
      <img src={image} alt="" />
      <TextContainer>
        <Heading color={colors.white} isDisplay tag="h3" weight="bold">
          {title}
        </Heading>
        <Text color={colors['grayscale-300']} size="lg" tag="p" weight="normal">
          {subtitle}
        </Text>
        <CarouselButton title="Saiba mais" />
      </TextContainer>
    </Container>
  );
}
