import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg';
import {
  IconContainer,
  ImageContainer,
  LockButton,
  LoginContainer,
  MenuButtonContainer,
  MenuContainer,
  MenuContent,
  StoriesButton,
  StoriesContent,
} from './styles';

import { Topbar } from '../Topbar';
import { MenuButton } from '../MenuButton';
import { LockKey, MagnifyingGlass } from '@phosphor-icons/react';
import { Text } from '../Text';
import storiesIcon from '../../assets/storieIcon.svg';

export function Header() {
  const colors = useTheme();

  return (
    <div>
      <Topbar />
      <MenuContainer>
        <ImageContainer>
          <img src={Logo} alt="" />
        </ImageContainer>
        <MenuContent>
          <MenuButtonContainer>
            <MenuButton title="A Companhia" />
            <MenuButton title="Governança" />
            <MenuButton title="Informações aos Investidores" />
            <MenuButton title="Informações Financeiras " />
            <MenuButton title="Serviços RI" />
          </MenuButtonContainer>
          <LoginContainer>
            <MagnifyingGlass color={colors['primary-500']} size={18} />
            <Text
              color={colors['grayscale-300']}
              size="lg"
              tag="p"
              weight="normal"
            >
              |
            </Text>
            <LockButton type="button" className="AuthButton">
              <LockKey size={16} weight="light" />
              Área restrita
            </LockButton>
          </LoginContainer>
          <StoriesContent>
            <StoriesButton>
              stories
              <Text
                color={colors['grayscale-900']}
                size="lg"
                tag="p"
                weight="bold"
              >
                RI
              </Text>
              <IconContainer>
                <img src={storiesIcon} />
              </IconContainer>
            </StoriesButton>
          </StoriesContent>
        </MenuContent>
      </MenuContainer>
    </div>
  );
}
