import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Text } from '../Text';
import {
  Container,
  DetailsContainer,
  IconsContainer,
  InfoMenuContainer,
  TextContainer,
} from './styles';
import {
  CaretRight,
  FilePdf,
  House,
  Link,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface HeaderPageProps {
  title: string;
  image: any;
}

export function HeaderPage({ title, image }: HeaderPageProps) {
  const colors = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <img src={image} alt="" />
      <TextContainer>
        <Heading color={colors.white} display="true" tag="h3" weight="bold">
          {title}
        </Heading>

        <DetailsContainer>
          <InfoMenuContainer>
            <House
              className="home"
              size={20}
              color={colors['grayscale-300']}
              onClick={() => {
                navigate('/');
              }}
            />
            <CaretRight size={20} color={colors['grayscale-300']} />
            <Text
              color={colors['grayscale-100']}
              tag="span"
              weight="normal"
              size="lg"
            >
              A Companhia
            </Text>
          </InfoMenuContainer>
          <IconsContainer>
            <Link size={20} color={colors['grayscale-100']} weight="bold" />
            <FilePdf size={20} color={colors['grayscale-100']} weight="bold" />
            <LinkedinLogo
              size={20}
              color={colors['grayscale-100']}
              weight="bold"
            />
            <WhatsappLogo
              size={20}
              color={colors['grayscale-100']}
              weight="bold"
            />
          </IconsContainer>
        </DetailsContainer>
      </TextContainer>
    </Container>
  );
}
