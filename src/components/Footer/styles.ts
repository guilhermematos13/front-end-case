import styled from 'styled-components';

export const Container = styled.footer`
  padding: 80px 72px 40px 72px;
  background-color: ${(props) => props.theme['grayscale-900']};
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme['grayscale-600']};
  margin-bottom: 53px;
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
  gap: 13px;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
