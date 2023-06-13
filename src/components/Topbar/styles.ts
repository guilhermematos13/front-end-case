import styled from 'styled-components';

export const TopbarContainer = styled.div`
  background: ${(props) => props.theme['grayscale-900']};
  width: 100%;
  padding: 0.75rem 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopbarBase = styled.div`
  display: flex;
  gap: 0.24rem;
  align-items: center;
`;

export const TopbarContent = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const TopbarGraphContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TopbarGraphValue = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const TopbarAccessibilityContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const LanguageContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  gap: 0.375rem;
`;
