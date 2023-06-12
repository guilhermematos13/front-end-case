import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  padding: 24px 75px;
  background-color: ${(props) => props.theme['white']};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  img {
    height: 1.813rem;
    width: 7rem;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  gap: 32px;
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LockButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme['primary-500']};
  }

  svg {
    color: ${(props) => props.theme['grayscale-500']};
  }
`;

export const StoriesContent = styled.div``;

export const StoriesButton = styled.button`
  padding: 4px 4px 4px 12px;
  border-radius: 24px;
  border: 2px solid ${(props) => props.theme['primary-500']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  gap: 2px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme['primary-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  width: 26px;
  height: 26px;
`;
