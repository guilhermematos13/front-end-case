import { Footer } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import { Container, ContentContainer } from './styles';
import CompanyImage from '../../assets/companyImage.jpg';
import { Heading } from '../../components/Heading';
import { useTheme } from 'styled-components';

export function Company() {
  const colors = useTheme();
  return (
    <div>
      <Container>
        <HeaderPage
          image={CompanyImage}
          title="A Companhia"
          navigation="A Companhia"
        />
        <ContentContainer>
          <Heading color={colors['primary-500']} tag="h1" weight="normal">
            A Companhia
          </Heading>

          <Heading color={colors['grayscale-500']} tag="h6" weight="normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            laudantium mollitia quas assumenda sunt consectetur ipsam culpa
            quae, distinctio odit doloribus aliquam? Facilis dicta aliquid harum
            quasi, non impedit iusto.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quidem laudantium mollitia quas assumenda sunt
            consectetur ipsam culpa quae, distinctio odit doloribus aliquam?
            Facilis dicta aliquid harum quasi, non impedit iusto.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Quidem laudantium
            mollitia quas assumenda sunt consectetur ipsam culpa quae,
            distinctio odit doloribus aliquam? Facilis dicta aliquid harum
            quasi, non impedit iusto.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quidem laudantium mollitia quas assumenda sunt
            consectetur ipsam culpa quae, distinctio odit doloribus aliquam?
            Facilis dicta aliquid harum quasi, non impedit iusto.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Quidem laudantium
            mollitia quas assumenda sunt consectetur ipsam culpa quae,
            distinctio odit doloribus aliquam? Facilis dicta aliquid harum
            quasi, non impedit iusto.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quidem laudantium mollitia quas assumenda sunt
            consectetur ipsam culpa quae, distinctio odit doloribus aliquam?
            Facilis dicta aliquid harum quasi, non impedit iusto.
          </Heading>
        </ContentContainer>
      </Container>
      <Footer />
    </div>
  );
}
