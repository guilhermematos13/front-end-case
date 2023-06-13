export interface NewsDataProps {
  title: string;
  content: string;
  image: string;
  date: string;
  id: number;
}

export const NewsData: NewsDataProps[] = [
  {
    title:
      'Instituto Yduqs oferece Programa de Alfabetização e Letramento   de Jovens e Adultos para o segundo semestre de 2023  ',
    content:
      'As turmas serão ofertadas nas Regiões Sudeste (Rio de Janeiro e São Paulo); Nordeste (Natal e Salvador), Norte (Manaus) e Centro-Oeste (Distrito Federal/Brasília)',
    image:
      'https://www.yduqs.com.br/ViewImage.aspx?image=GJxixLUly6Y41RmGLyjsJA==',
    date: '02/06/2023',
    id: 1,
  },

  {
    title:
      'Com bons sinais do lado da demanda, Yduqs cresce 10% em receita e registra EBITDA trimestral recorde`',
    content:
      'Geração de caixa para o acionista e controle da alavancagem, desafios apresentados pelo cenário de juros elevados, são outros destaques positivos na gestão financeira da companhia.',
    image:
      'https://www.yduqs.com.br/ViewImage.aspx?image=QB0+GNGk1frNMg8ca5+cpA==',
    date: '09/05/2023',
    id: 2,
  },

  {
    title:
      'Segundo Fórum ESG Yduqs destaca os compromissos e os resultados da nossa Agenda ESG em 2022',
    content:
      'Evento apresentou diversas contribuições das instituições de ensino superior para o desenvolvimento socioambiental do país. Participação de lideranças e lançamento do Relatório de Sustentabilidade foram destaques.',
    image:
      'https://www.yduqs.com.br/ViewImage.aspx?image=uUxrgyoeL06W8WCbgrwdKA==',
    date: '02/05/2023',
    id: 3,
  },
];
