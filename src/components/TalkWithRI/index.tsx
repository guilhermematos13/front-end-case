import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Container } from './styles';
import { SelectTalkToRI } from '../Select';
import { Text } from '../Text';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { OptionsSelectData } from '../../data/OptionsSelectData';

export function TalkWithRI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const colors = useTheme();

  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Fale com RI
      </Heading>
      <form>
        <SelectTalkToRI
          options={OptionsSelectData}
          placeholder="Escolha o Assunto"
          title="Assunto"
        />
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

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
