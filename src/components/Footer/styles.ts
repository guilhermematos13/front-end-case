import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 3.125rem;
  padding: 5rem 4.5rem 2.5rem 4.5rem;
  background-color: ${(props) => props.theme['grayscale-900']};
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['grayscale-600']};
  margin-bottom: 3.375rem;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.875rem;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
