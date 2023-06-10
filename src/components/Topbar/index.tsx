import { Globe, TrendUp } from '@phosphor-icons/react';
import { Text } from '../Text';
import {
  LanguageContainer,
  TopbarAccessibilityContainer,
  TopbarBase,
  TopbarContainer,
  TopbarContent,
  TopbarGraphContent,
  TopbarGraphValue,
} from './styles';
import { useTheme } from 'styled-components';
import AccessibilityIcon from '../../assets/iconAccessibility.svg';

export function Topbar() {
  const colors = useTheme();

  return (
    <TopbarContainer>
      <TopbarBase>
        <Text color={colors.white} size="sm" weight="normal" tag="p">
          Relações com Investidores | Institucional
        </Text>
        <Globe color={colors.white} />
      </TopbarBase>

      <TopbarContent>
        <TrendUp color={colors.white} />
        <TopbarGraphContent>
          <Text color={colors.white} size="sm" weight="bold" tag="p">
            PRISM4:
          </Text>
          <TopbarGraphValue>
            <Text color={colors.white} size="sm" weight="normal" tag="p">
              R$
            </Text>
            <Text color={colors.white} size="sm" weight="normal" tag="p">
              4,55
            </Text>
            <Text color={colors.white} size="sm" weight="normal" tag="p">
              +1.5%
            </Text>
          </TopbarGraphValue>
        </TopbarGraphContent>
      </TopbarContent>

      <TopbarAccessibilityContainer>
        <Text
          color={colors.white}
          size="sm"
          weight="normal"
          tag="p"
          textDecoration="underline"
        >
          Acessibilidade
        </Text>
        <img src={AccessibilityIcon} />
        <Text color={colors.white} size="xs" weight="normal" tag="p">
          A-
        </Text>
        <Text color={colors.white} size="sm" weight="normal" tag="p">
          A+
        </Text>
        <LanguageContainer>
          <Globe color={colors.white} />
          <Text color={colors.white} size="sm" weight="bold" tag="p">
            PT
          </Text>
          <Text color={colors.white} size="sm" weight="normal" tag="p">
            | EN
          </Text>
        </LanguageContainer>
      </TopbarAccessibilityContainer>
    </TopbarContainer>
  );
}
