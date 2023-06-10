import { useTheme } from 'styled-components';
import {
  AccessibilityContainer,
  Container,
  IconsContainer,
  ValueContainer,
  ValueTextContainer,
} from './styles';
import Logo from '../../assets/logo.svg';
import { Text } from '../Text';
import iconGraph from '../../assets/iconGraph.svg';
import iconAccessibility from '../../assets/iconAccessibility.svg';
import usaFlag from '../../assets/usaFlag.svg';
import { Bell, List, MagnifyingGlass } from '@phosphor-icons/react';

export function Header() {
  const colors = useTheme();

  return (
    <Container>
      <img src={Logo} alt="" />
      <div>
        <ValueContainer>
          <ValueTextContainer>
            <Text color={colors.white} size="lg" tag="p" weight="bold">
              YDUQ3:
            </Text>
            <Text color={colors['primary-500']} size="lg" tag="p" weight="bold">
              R$ 35,13
            </Text>
          </ValueTextContainer>
          <ValueTextContainer>
            <Text color={colors.white} size="lg" tag="p" weight="bold">
              YDUQY:
            </Text>
            <Text color={colors['primary-500']} size="lg" tag="p" weight="bold">
              R$ 35,13
            </Text>
          </ValueTextContainer>
          <img src={iconGraph} alt="" />
        </ValueContainer>
      </div>
      <div>
        <AccessibilityContainer>
          <Text color={colors['white']} size="lg" tag="p" weight="normal">
            Acessibilidade:
          </Text>
          <img src={iconAccessibility} />
          <Text color={colors['white']} size="lg" tag="p" weight="normal">
            A+
          </Text>
          <Text color={colors['white']} size="lg" tag="p" weight="normal">
            A-
          </Text>
        </AccessibilityContainer>
      </div>
      <IconsContainer>
        <img src={usaFlag} />
        <Bell size={24} weight="bold" color={colors.white} />
        <MagnifyingGlass weight="bold" color={colors.white} size={24} />
        <List weight="bold" color={colors['primary-500']} size={24} />
      </IconsContainer>
    </Container>
  );
}
