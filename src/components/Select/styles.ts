import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  box-sizing: border-box;
`;

export const SelectTitle = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme['grayscale-900']};
`;

export const Select = styled.select`
  border-radius: 4px;
  padding: 0.5rem;
  color: ${(props) => props.theme['grayscale-900']};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme['grayscale-300']};
  box-sizing: border-box;
  display: flex;
  width: 100%;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :focus {
    border: 1px solid ${(props) => props.theme['primary-500']};
  }

  ::placeholder {
    color: ${(props) => props.theme['grayscale-400']};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 42px;
  pointer-events: none;
  color: ${(props) => props.theme['grayscale-400']};
`;
