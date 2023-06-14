import styled from 'styled-components';

export const Container = styled.div<{ isActive: boolean }>`
  display: none;

  @media (max-width: 1024px) {
    overflow: hidden;
    height: 100vh;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    width: 100%;
    background-color: ${(props) => props.theme['grayscale-100']};
    top: 0;
    bottom: 0;
    left: 0;
    position: ${(props) => (props.isActive ? 'fixed' : 'relative')};
    right: 0;
    z-index: 10;
  }
`;

export const ContainerIcon = styled.button`
  border: 0;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const HeaderMenu = styled.div`
  padding: 1rem 4.5rem;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme['grayscale-900']};
`;

export const MenuContainer = styled.div`
  padding: 1rem 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  button {
    width: 100%;
    text-align: left;
    font-size: 1.25rem;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

export const IconContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export const ActiveButton = styled.div<{ isSelected: boolean }>`
  button {
    color: ${(props) =>
      props.isSelected
        ? props.theme['primary-500']
        : props.theme['grayscale-900']};
  }
`;
