import {
  ButtonsContainer,
  Container,
  CopyrightContainer,
  FooterContainer,
  FooterContent,
  ImageContainer,
  SocialMediaContainer,
} from './styles';
import LogoFooter from '../../assets/logoFooter.svg';
import { MenuButton } from '../MenuButton';
import { useTheme } from 'styled-components';
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import SeloFooter from '../../assets/seloFooter.svg';
import { Text } from '../Text';

export function Footer() {
  const colors = useTheme();

  return (
    <Container>
      <FooterContainer>
        <FooterContent>
          <ImageContainer>
            <img src={LogoFooter} />
          </ImageContainer>
          <ButtonsContainer>
            <MenuButton title="A Companhia" color={colors.white} />
            <MenuButton title="Governança" color={colors.white} />
            <MenuButton
              title="Informações aos Investidores"
              color={colors.white}
            />
            <MenuButton title="Informações Financeiras " color={colors.white} />
            <MenuButton title="Serviços RI" color={colors.white} />
          </ButtonsContainer>
        </FooterContent>
        <SocialMediaContainer>
          <a href="#">
            <InstagramLogo weight="fill" color={colors.white} size={20} />
          </a>
          <a href="#">
            <FacebookLogo weight="fill" color={colors.white} size={20} />
          </a>
          <a href="#">
            <TwitterLogo weight="fill" color={colors.white} size={20} />
          </a>
        </SocialMediaContainer>
      </FooterContainer>
      <CopyrightContainer>
        <Text size="md" tag="p" weight="normal" color={colors['grayscale-500']}>
          Empresa &copy; Todos os direitos reservados 2023
        </Text>
        <Text size="md" tag="p" weight="normal" color={colors['grayscale-500']}>
          Viverra faucibus amet sollicitudin | Viverra faucibus amet
          sollicitudin
        </Text>
        <img src={SeloFooter} />
      </CopyrightContainer>
    </Container>
  );
}
