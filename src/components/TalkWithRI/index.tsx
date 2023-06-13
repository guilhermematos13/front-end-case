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
  } = useForm({
    defaultValues: {
      subject: '',
      email: '',
      name: '',
    },
  });
  const colors = useTheme();

  const onSubmit = () => {
    console.log('aqui');
  };

  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Fale com RI
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectTalkToRI
          {...register('subject', { required: 'Campo Obrigatorio' })}
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
        <Input
          {...register('name', { required: 'Campo Obrigatorio' })}
          placeholder="Ex: Maria Pereira"
        />
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          E-mail
        </Text>
        <Input
          {...register('email', { required: 'Campo Obrigatorio' })}
          placeholder="Ex: maria@gmail.com"
          type="email"
        />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
