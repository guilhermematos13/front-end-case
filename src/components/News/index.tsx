import { useTheme } from 'styled-components';
import { NewsData } from '../../data/NewsData';
import { Heading } from '../Heading';
import { NewsCard } from '../NewsCard';
import { Container, ItemsContainer } from './styles';

export function News() {
  const colors = useTheme();
  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Noticias
      </Heading>
      <ItemsContainer>
        {NewsData.map((news) => (
          <NewsCard
            content={news.content}
            date={news.date}
            key={news.id}
            image={news.image}
            title={news.title}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}
