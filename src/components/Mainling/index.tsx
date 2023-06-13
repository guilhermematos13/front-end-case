import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import {
  CheckboxContainer,
  CheckboxIndicatorStyled,
  CheckboxStyled,
  Container,
} from './styles';
import { Text } from '../Text';
import { Input } from '../Input';
import { Check } from '@phosphor-icons/react';

export function Mailing() {
  const colors = useTheme();
  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Cadastre-se no Mailing
      </Heading>
      <form>
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          Nome:
        </Text>
        <Input placeholder="Ex: Maria Pereira" />
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          E-mail
        </Text>
        <Input placeholder="Ex: maria@gmail.com" type="email" />
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          Empresa
        </Text>
        <Input placeholder="" />
        <CheckboxContainer>
          <CheckboxStyled id="c1">
            <CheckboxIndicatorStyled>
              <Check size={12} />
            </CheckboxIndicatorStyled>
          </CheckboxStyled>
          <label htmlFor="c1">Inglês</label>

          <CheckboxStyled id="c2">
            <CheckboxIndicatorStyled>
              <Check size={12} />
            </CheckboxIndicatorStyled>
          </CheckboxStyled>
          <label htmlFor="c2">Português</label>
        </CheckboxContainer>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
