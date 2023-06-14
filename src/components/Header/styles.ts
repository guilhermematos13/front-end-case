import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  padding: 1.5rem 4.5rem;
  background-color: ${(props) => props.theme['white']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding: 1rem 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  img {
    height: 1.813rem;
    width: 7rem;
  }

  @media (max-width: 425px) {
    img {
      height: 1rem;
      width: 4rem;
    }
  }
`;

export const MenuContent = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const LockButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 1rem;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme['primary-500']};
  }

  svg {
    color: ${(props) => props.theme['grayscale-500']};
  }
`;

export const StoriesContent = styled.div``;

export const StoriesButton = styled.button`
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  border-radius: 1.5rem;
  border: 2px solid ${(props) => props.theme['primary-500']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  gap: 2px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme['primary-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  width: 1.625rem;
  height: 1.625rem;
`;
