import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg';
import {
  IconContainer,
  ImageContainer,
  LockButton,
  LoginContainer,
  MenuContainer,
  MenuContent,
  StoriesButton,
  StoriesContent,
} from './styles';

import { Topbar } from '../Topbar';
import { LockKey, MagnifyingGlass } from '@phosphor-icons/react';
import { Text } from '../Text';
import storiesIcon from '../../assets/storiesIcon.svg';
import { Menu } from '../Menu';
import { MenuMobile } from '../MenuMobile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const colors = useTheme();
  const [selectedMenu, setSelectedMenu] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <Topbar />
      <MenuContainer>
        <ImageContainer onClick={() => navigate('/')}>
          <img src={Logo} alt="" />
        </ImageContainer>
        <MenuContent>
          <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
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
                tag="span"
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
        <MenuMobile
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </MenuContainer>
    </div>
  );
}
