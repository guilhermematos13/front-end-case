import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 3.125rem;
  padding: 5rem 4.5rem 2.5rem 4.5rem;
  background-color: ${(props) => props.theme['grayscale-900']};

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['grayscale-600']};
  margin-bottom: 3.375rem;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.875rem;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
      width: 12rem;
      height: 1.5rem;
    }

    p {
      font-size: 0.75rem;
      text-align: center;
    }
  }
`;
