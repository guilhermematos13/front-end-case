import { useTheme } from 'styled-components';
import { Text } from '../Text';
import { Container } from './styles';

interface NewsCardProps {
  title: string;
  content: string;
  image: string;
  date: string;
}

export function NewsCard({ title, content, image, date }: NewsCardProps) {
  const colors = useTheme();
  return (
    <Container>
      <img src={image} />
      <Text
        color={colors['grayscale-400']}
        size="md"
        tag="span"
        weight="normal"
      >
        {date}
      </Text>
      <Text color={colors['grayscale-900']} size="lg" tag="p" weight="bold">
        {title}
      </Text>
      <Text color={colors['grayscale-800']} size="lg" tag="p" weight="normal">
        {content}
      </Text>
      <a href="#">saiba mais</a>
    </Container>
  );
}
