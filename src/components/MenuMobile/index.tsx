import { useState } from 'react';
import {
  ActiveButton,
  Container,
  ContainerIcon,
  FooterMenu,
  HeaderMenu,
  IconContainer,
  MenuContainer,
} from './styles';
import {
  CaretLeft,
  FacebookLogo,
  InstagramLogo,
  List,
  TwitterLogo,
} from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { MenuData } from '../../data/MenuData';
import { MenuButton } from '../MenuButton';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/seloFooter.svg';
import { Text } from '../Text';
import { MenuProps } from '../../interface/menu';

export function MenuMobile({ selectedMenu, setSelectedMenu }: MenuProps) {
  const [isActive, setIsActive] = useState(false);
  const colors = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <ContainerIcon
        onClick={() => {
          setIsActive(true);
        }}
      >
        <List size={32} color={colors['primary-500']} />
      </ContainerIcon>
      <Container isActive={isActive}>
        <HeaderMenu>
          <CaretLeft
            color={colors['grayscale-100']}
            size={32}
            onClick={() => {
              setIsActive(false);
            }}
          />
          <img src={Logo} />
        </HeaderMenu>
        <MenuContainer>
          {MenuData.map((menu) => (
            <ActiveButton
              isSelected={menu.title === selectedMenu}
              key={menu.title}
            >
              <MenuButton
                title={menu.title}
                color={colors['grayscale-900']}
                onClick={() => {
                  setSelectedMenu(menu.title);
                  setIsActive(false);
                  navigate(menu.url);
                }}
              />
            </ActiveButton>
          ))}
        </MenuContainer>
        <FooterMenu>
          <Text
            color={colors['grayscale-400']}
            size="md"
            tag="p"
            weight="normal"
          >
            Siga a Empresa nas redes sociais:
          </Text>
          <IconContainer>
            <InstagramLogo
              size={32}
              color={colors['primary-500']}
              weight="fill"
            />
            <FacebookLogo
              size={32}
              color={colors['primary-500']}
              weight="fill"
            />
            <TwitterLogo
              size={32}
              color={colors['primary-500']}
              weight="fill"
            />
          </IconContainer>
        </FooterMenu>
      </Container>
    </>
  );
}
