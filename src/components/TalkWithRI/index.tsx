import { useTheme } from 'styled-components';
import { Heading } from '../Heading';
import { Container } from './styles';
import { SelectTalkToRI } from '../Select';
import { Text } from '../Text';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { OptionsSelectData } from '../../data/OptionsSelectData';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from '../ErrorMessage';

export function TalkWithRI() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subject: '',
      email: '',
      name: '',
    },
  });
  const colors = useTheme();

  const onSubmit = () => {
    toast.success('Recebemos o seu contato, em breve lhe retornaremos!');
  };

  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Fale com RI
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectTalkToRI
          {...register('subject', { required: 'Campo obrigatório' })}
          options={OptionsSelectData}
          placeholder="Escolha o Assunto"
          title="Assunto"
          onChange={(event) => setValue('subject', event.target.value)}
        />
        {errors.subject && (
          <ErrorMessage>{errors.subject?.message}</ErrorMessage>
        )}
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          Nome:
        </Text>
        <Input
          {...register('name', { required: 'Campo obrigatório' })}
          placeholder="Ex: Maria Pereira"
          onChange={(event) => setValue('name', event.target.value)}
        />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          E-mail
        </Text>
        <Input
          {...register('email', { required: 'Campo obrigatório' })}
          placeholder="Ex: maria@gmail.com"
          type="email"
          onChange={(event) => setValue('email', event.target.value)}
        />
        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
