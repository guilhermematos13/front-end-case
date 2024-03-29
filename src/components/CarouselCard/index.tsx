import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Container, TextContainer } from './styles';
import { CarouselButton } from '../CarouselButton';
import { useNavigate } from 'react-router-dom';

interface CarouselCardProps {
  title: string;
  subtitle: string;
  image: any;
}

export function CarouselCard({ title, subtitle, image }: CarouselCardProps) {
  const colors = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <img src={image} alt="" />
      <TextContainer>
        <Heading color={colors.white} tag="h1" weight="bold">
          {title}
        </Heading>
        <Text color={colors['grayscale-300']} size="lg" tag="p" weight="normal">
          {subtitle}
        </Text>
        <CarouselButton
          title="Saiba mais"
          onClick={() => navigate('a-companhia')}
        />
      </TextContainer>
    </Container>
  );
}
