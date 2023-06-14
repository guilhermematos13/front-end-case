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
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from '../ErrorMessage';

export function Mailing() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      language: '',
      company: '',
      email: '',
      name: '',
    },
  });
  const colors = useTheme();

  const onSubmit = () => {
    toast.success('Recebemos o seu cadastro, seja bem vindo!');
  };

  return (
    <Container>
      <Heading color={colors['primary-500']} tag="h1" weight="normal">
        Cadastre-se no Mailing
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          Nome:
        </Text>
        <Input
          placeholder="Ex: Maria Pereira"
          {...register('name', { required: 'Campo obrigatório' })}
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
          placeholder="Ex: maria@gmail.com"
          type="email"
          {...register('email', { required: 'Campo obrigatório' })}
          onChange={(event) => setValue('email', event.target.value)}
        />
        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}

        <Text
          tag="label"
          size="lg"
          color={colors['grayscale-900']}
          weight="bold"
        >
          Empresa
        </Text>
        <Input
          placeholder="Ex: TC Investimentos"
          {...register('company', { required: 'Campo obrigatório' })}
          onChange={(event) => setValue('company', event.target.value)}
        />
        {errors.company && (
          <ErrorMessage>{errors.company?.message}</ErrorMessage>
        )}

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
