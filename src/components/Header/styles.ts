import styled from 'styled-components';

export const TopbarContainer = styled.div`
  width: 100%;
  padding: 12px 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopbarBase = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TopbarContent = styled.div`
  display: flex;
  gap: 24px;
`;

export const TopbarGraphContent = styled.div`
  display: flex;
  gap: 8px;
`;

export const TopbarGraphValue = styled.div`
  display: flex;
  gap: 6px;
`;

export const TopbarAccessibilityContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LanguageContainer = styled.div`
  display: flex;
  margin-left: 32px;
  gap: 6px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  padding: 24px 75px;
  background-color: ${(props) => props.theme['white']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 1.813rem;
    width: 7rem;
  }
`;
