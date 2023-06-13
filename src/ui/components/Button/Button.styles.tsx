import styled from 'styled-components';
import { colors } from '../../../styles/constants';

interface ButtonTypes {
  isVisible?: boolean;
}

export const Button = styled.button<ButtonTypes>`
  border-radius: 11px;
  border: none;
  text-decoration: none;
  color: ${colors.secondaryColor};
  font-size: 18px;
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  margin: 0;
  cursor: pointer;

  ${({ isVisible = false}) => {
    if(isVisible) {
      return `
        background: ${colors.button404};
        padding: 10px 28px 12px;
        box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
        margin: 0 auto;
      `
    }
  }}
`