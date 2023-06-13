import { Footer } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import { Container, ContentContainer } from './styles';
import GovernanceImage from '../../assets/governanceImage.jpg';
import { Heading } from '../../components/Heading';
import { useTheme } from 'styled-components';

export function Governance() {
  const colors = useTheme();
  return (
    <div>
      <Container>
        <HeaderPage image={GovernanceImage} title="Governança" />
        <ContentContainer>
          <Heading color={colors['primary-500']} tag="h1" weight="normal">
            Governança
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
