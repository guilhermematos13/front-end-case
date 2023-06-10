import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 24px 75px;
  background-color: ${(props) => props.theme['grayscale-600']};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ValueTextContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const AccessibilityContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 40px;
`;
