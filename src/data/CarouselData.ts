import Photo1 from '../assets/photo1.svg';
import Photo2 from '../assets/photo2.svg';

export interface CarouselDataProps {
  title: string;
  subtitle: string;
  image: any;
  id: number;
}

export const CarouselData: CarouselDataProps[] = [
  {
    title: 'Divulgação de resultados',
    subtitle: 'Confira os últimos resultados da companhia',
    image: Photo1,
    id: 1,
  },

  {
    title: 'Calendario',
    subtitle: 'Confira o calendario da companhia',
    image: Photo2,
    id: 2,
  },

  {
    title: 'Notícias',
    subtitle: 'Confira as notícias da companhia',
    image: Photo2,
    id: 3,
  },
];
