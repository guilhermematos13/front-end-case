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
import storiesIcon from '../../assets/storiesIcon.svg';
import { MenuData } from '../../data/MenuData';
import { useState } from 'react';

export function Header() {
  const [selectedMenu, setSelectedMenu] = useState('');
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
            {MenuData.map((title) => (
              <MenuButton
                title={title}
                key={title}
                color={colors['grayscale-900']}
                onClick={() => {
                  setSelectedMenu(title);
                }}
                isActive={title === selectedMenu ? 'true' : 'false'}
              />
            ))}
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
      </MenuContainer>
    </div>
  );
}
