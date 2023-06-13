import { SelectStyled } from './styles';

export function SelectTalkToRI() {
  return (
    <SelectStyled name="Assunto">
      <option value="">Escolha o assunto</option>
      <option value="Relações com Investidores">
        Relações com Investidores
      </option>
      <option value="Informe de Rendimentos">Informe de Rendimentos</option>
      <option value="Comunicação/Imprensa">Comunicação/Imprensa</option>
      <option value="Sustentabilidade ESG">Sustentabilidade ESG</option>
      <option value="Outros">Outros</option>
    </SelectStyled>
  );
}
